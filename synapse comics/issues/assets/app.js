(() => {
  const pages = [...document.querySelectorAll('.page')];
  let i = pages.findIndex(p => p.classList.contains('active'));
  if (i < 0) i = 0;
  const g = document.getElementById('glitch');

  const clamp = (n, min, max) => Math.max(min, Math.min(n, max));
  const show = (idx) => {
    pages.forEach(p => p.classList.remove('active'));
    i = clamp(idx, 0, pages.length - 1);
    pages[i].classList.add('active');
    if (g) { g.classList.add('show'); setTimeout(() => g.classList.remove('show'), 240); }
  };

  document.getElementById('next')?.addEventListener('click', () => show(i + 1));
  document.getElementById('prev')?.addEventListener('click', () => show(i - 1));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') show(i + 1);
    if (e.key === 'ArrowLeft') show(i - 1);
  });
  document.querySelectorAll('a[href^="#p"]').forEach(a =>
    a.addEventListener('click', (e) => { e.preventDefault(); show(1); })
  );
})();