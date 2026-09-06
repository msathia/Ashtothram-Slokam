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


// Language links still reach both full texts when JavaScript is unavailable.
const languageSwitch = document.querySelector('.language-switch');
if (languageSwitch) {
  const tamil = document.querySelector('#tamil');
  const english = document.querySelector('#english');
  let showEnglish = false;
  function showLanguage() {
    if (location.hash === '#english' || location.hash.startsWith('#english-name-')) showEnglish = true;
    else if (!location.hash || location.hash === '#tamil' || location.hash.startsWith('#name-')) showEnglish = false;
    tamil.hidden = showEnglish;
    english.hidden = !showEnglish;
    for (const link of languageSwitch.querySelectorAll('a')) {
      const active = link.hash === (showEnglish ? '#english' : '#tamil');
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
  }
  languageSwitch.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    history.pushState(null, '', link.hash);
    showLanguage();
  });
  window.addEventListener('hashchange', showLanguage);
  window.addEventListener('popstate', showLanguage);
  showLanguage();
}
