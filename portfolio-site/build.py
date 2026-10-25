#!/usr/bin/env python3
"""Builds the portfolio site.

Reads everything in content/ and writes the finished site to site/.

    python build.py            build, print warnings
    python build.py --strict   build, exit with an error if there are warnings
"""
import datetime
import re
import shutil
import sys
from pathlib import Path

import markdown
import yaml
from jinja2 import Environment, FileSystemLoader, select_autoescape

ROOT = Path(__file__).resolve().parent
CONTENT = ROOT / "content"
TEMPLATES = ROOT / "templates"
STATIC = ROOT / "static"
OUT = ROOT / "site"

LONG_DASHES = ("\u2014", "\u2013")
warnings = []


def warn(message):
    warnings.append(message)


def load_yaml(path, default=None):
    if not path.exists():
        return default
    return yaml.safe_load(path.read_text(encoding="utf-8")) or default


def lint(path, text, banned):
    """Flags long dashes and words you decided to avoid."""
    name = path.relative_to(ROOT)
    if any(ch in text for ch in LONG_DASHES):
        warn(f"{name}: contains a long dash character")
    for word in banned:
        if re.search(r"\b" + re.escape(word) + r"\b", text, re.I):
            warn(f"{name}: contains the word '{word}'")


def media_ok(rel, where):
    """True if content/media/<rel> exists. Warns once if it does not."""
    if not rel:
        return False
    if (CONTENT / "media" / rel).exists():
        return True
    warn(f"{where}: missing file content/media/{rel}")
    return False


IMG_RE = re.compile(
    r'<p><img alt="(?P<alt>[^"]*)" src="(?P<src>[^"]+)"(?: title="[^"]*")? ?/></p>'
)


def fix_images(html, root, where):
    """Turns lone markdown images into figures and drops ones with no file."""

    def repl(m):
        src, alt = m.group("src"), m.group("alt")
        if src.startswith("media/"):
            if not media_ok(src[len("media/"):], where):
                return ""
            src = root + src
        caption = f"<figcaption>{alt}</figcaption>" if alt else ""
        return f'<figure><img src="{src}" alt="{alt}" loading="lazy">{caption}</figure>'

    return IMG_RE.sub(repl, html)


def split_frontmatter(text, name):
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", text, re.S)
    if not m:
        raise SystemExit(f"{name}: missing frontmatter block between --- lines")
    return yaml.safe_load(m.group(1)) or {}, m.group(2)


def load_projects(cfg):
    md = markdown.Markdown(extensions=["extra", "sane_lists"])
    projects = []
    for path in sorted((CONTENT / "projects").glob("*.md")):
        text = path.read_text(encoding="utf-8")
        lint(path, text, cfg.get("avoid_words", []))
        meta, body = split_frontmatter(text, path.name)
        if meta.get("draft"):
            continue
        p = dict(meta)
        p["slug"] = path.stem
        for key in ("title", "one_liner", "status"):
            if not p.get(key):
                warn(f"{path.name}: '{key}' is empty")
        if p.get("status") not in cfg["statuses"]:
            warn(f"{path.name}: unknown status '{p.get('status')}'")
        for key in ("areas", "contexts"):
            p[key] = p.get(key) or []
            for value in p[key]:
                if value not in cfg[key]:
                    warn(f"{path.name}: unknown {key[:-1]} '{value}' (add it to site.yml)")
        p["tools"] = p.get("tools") or []
        p["pipeline"] = p.get("pipeline") or []
        p["hero"] = p.get("hero") if media_ok(p.get("hero"), path.name) else None
        p["video"] = p.get("video") if media_ok(p.get("video"), path.name) else None
        md.reset()
        p["body_html"] = fix_images(md.convert(body), "../", path.name)
        projects.append(p)
    projects.sort(key=lambda p: (not p.get("featured", False), p.get("order", 100), p["title"]))
    return projects


def load_experience(by_slug):
    path = CONTENT / "experience.yml"
    items = load_yaml(path, [])
    for item in items:
        resolved = []
        for slug in item.get("projects", []):
            if slug in by_slug:
                resolved.append(by_slug[slug])
            else:
                warn(f"experience.yml: unknown project '{slug}'")
        item["project_objs"] = resolved
    return items


def main():
    cfg = load_yaml(CONTENT / "site.yml", {})
    banned = cfg.get("avoid_words", [])
    for path in CONTENT.glob("*.yml"):
        text = path.read_text(encoding="utf-8")
        if path.name == "site.yml":
            # do not lint the avoid_words list against itself
            data = {k: v for k, v in yaml.safe_load(text).items() if k != "avoid_words"}
            text = yaml.safe_dump(data, allow_unicode=True)
        lint(path, text, banned)

    projects = load_projects(cfg)
    by_slug = {p["slug"]: p for p in projects}
    experience = load_experience(by_slug)
    about = load_yaml(CONTENT / "about.yml", {})

    used_areas = [k for k in cfg["areas"] if any(k in p["areas"] for p in projects)]
    used_contexts = [k for k in cfg["contexts"] if any(k in p["contexts"] for p in projects)]

    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir()
    (OUT / ".nojekyll").write_text("")
    shutil.copytree(STATIC, OUT / "assets")
    if (CONTENT / "media").exists():
        shutil.copytree(CONTENT / "media", OUT / "media")
    has_cv = (CONTENT / "cv.pdf").exists()
    if has_cv:
        shutil.copy(CONTENT / "cv.pdf", OUT / "cv.pdf")
    photo = cfg.get("photo")
    photo = photo if photo and media_ok(photo, "site.yml") else None

    env = Environment(
        loader=FileSystemLoader(TEMPLATES),
        autoescape=select_autoescape(["html"]),
        trim_blocks=True,
        lstrip_blocks=True,
    )
    env.globals.update(
        site=cfg,
        has_cv=has_cv,
        photo=photo,
        updated=datetime.date.today().strftime("%B %Y"),
    )

    def render(template, out_rel, **ctx):
        root = "../" * out_rel.count("/")
        html = env.get_template(template).render(root=root, **ctx)
        target = OUT / out_rel
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(html, encoding="utf-8")

    featured = [p for p in projects if p.get("featured")][:4]
    render("index.html", "index.html", active="home", featured=featured)
    render("projects.html", "projects.html", active="projects", projects=projects,
           used_areas=used_areas, used_contexts=used_contexts)
    render("experience.html", "experience.html", active="experience", experience=experience)
    render("about.html", "about.html", active="about", about=about)
    for p in projects:
        render("project.html", f"projects/{p['slug']}.html", active="projects", p=p)

    print(f"Built {len(projects)} projects into {OUT.relative_to(ROOT)}/")
    if warnings:
        print(f"\n{len(warnings)} warning(s):")
        for w in warnings:
            print("  " + w)
        if "--strict" in sys.argv:
            sys.exit(1)


if __name__ == "__main__":
    main()
