(function () {
  var h = document.getElementById('hd'), b = document.getElementById('menu');
  if (b) b.addEventListener('click', function () { var o = h.classList.toggle('open'); b.setAttribute('aria-expanded', o ? 'true' : 'false'); });
  if (h && h.classList.contains('over')) {
    var f = function () { h.classList.toggle('solid', window.scrollY > 40); };
    f(); window.addEventListener('scroll', f, { passive: true });
  }
  var v = document.getElementById('hv'), t = document.getElementById('vt');
  if (!v) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      save = navigator.connection && navigator.connection.saveData;
  if (reduce || save) return;  // the poster photo stays
  v.src = window.matchMedia('(max-aspect-ratio: 4/5)').matches ? v.dataset.m : v.dataset.d;
  v.addEventListener('playing', function () { v.classList.add('on'); if (t) t.hidden = false; });
  var p = v.play(); if (p && p.catch) p.catch(function () {});
  if (t) t.addEventListener('click', function () {
    var paused = v.paused;
    if (paused) v.play(); else v.pause();
    t.setAttribute('aria-label', paused ? t.dataset.pause : t.dataset.play);
    t.querySelector('path').setAttribute('d', paused ? 'M3 1h3v12H3zM8 1h3v12H8z' : 'M3 1l10 6-10 6z');
  });
})();
