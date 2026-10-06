(function () {
  if (window.__algoMenu) return;
  window.__algoMenu = true;
  function set(menu, on) {
    var p = menu.querySelector('[data-menu-panel]');
    if (!p) return;
    p.style.opacity = on ? '1' : '0';
    p.style.visibility = on ? 'visible' : 'hidden';
    p.style.transform = on ? 'translateY(0)' : 'translateY(6px)';
    menu.setAttribute('data-open', on ? '1' : '');
  }
  function all(except) {
    document.querySelectorAll('[data-menu]').forEach(function (m) { if (m !== except) set(m, false); });
  }
  document.addEventListener('mouseover', function (e) {
    var m = e.target.closest && e.target.closest('[data-menu]');
    all(m);
    if (m) set(m, true);
  });
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-menu-toggle]');
    if (t) { var m = t.closest('[data-menu]'); var on = m.getAttribute('data-open') !== '1'; all(m); set(m, on); return; }
    if (!(e.target.closest && e.target.closest('[data-menu]'))) all(null);
  });
})();
