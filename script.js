'use strict';
const smaller = document.querySelector('#smaller');
const larger = document.querySelector('#larger');
let size = 23;
try {
  const saved = Number(localStorage.getItem('slokam-text-size'));
  if (Number.isFinite(saved) && saved >= 19 && saved <= 35) size = saved;
} catch { /* Reading remains available when storage is disabled. */ }
function updateSize() {
  document.documentElement.style.setProperty('--verse-size', `${size}px`);
  smaller.disabled = size <= 19;
  larger.disabled = size >= 35;
  try { localStorage.setItem('slokam-text-size', String(size)); } catch {}
}
smaller.addEventListener('click', () => { size = Math.max(19, size - 2); updateSize(); });
larger.addEventListener('click', () => { size = Math.min(35, size + 2); updateSize(); });
document.querySelector('#print').addEventListener('click', () => window.print());
document.querySelector('.controls').hidden = false;
updateSize();
