interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/**
 * Standard section header: a mono "frame" eyebrow label (echoing ROS tf
 * frame naming) above a display headline. Used at the top of every major
 * section for visual consistency.
 */
export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow mb-3">// {eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
      {description && <p className="mt-4 text-ink-secondary leading-relaxed">{description}</p>}
    </div>
  );
}
