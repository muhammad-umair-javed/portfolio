(function () {
  var buttons = document.querySelectorAll('[data-filter]');
  if (!buttons.length) return;
  var rows = document.querySelectorAll('.row[data-areas]');
  var active = { area: new Set(), context: new Set() };
  var keyFor = { area: 'areas', context: 'contexts' };

  function apply() {
    var shown = 0;
    rows.forEach(function (row) {
      var ok = ['area', 'context'].every(function (group) {
        var selected = active[group];
        if (!selected.size) return true;
        var values = (row.dataset[keyFor[group]] || '').split(' ');
        return values.some(function (v) { return selected.has(v); });
      });
      row.hidden = !ok;
      if (ok) shown++;
    });
    var count = document.getElementById('count');
    if (count) count.textContent = shown + (shown === 1 ? ' project' : ' projects');
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var group = button.dataset.group;
      var value = button.dataset.filter;
      if (active[group].has(value)) {
        active[group].delete(value);
        button.setAttribute('aria-pressed', 'false');
      } else {
        active[group].add(value);
        button.setAttribute('aria-pressed', 'true');
      }
      apply();
    });
  });
})();
