(() => {
  const t = document.querySelector('.app');
  t.appendChild(templateEngine(templateStartPage));
  const e = document.querySelectorAll('.difficulty-button'),
    n = document.querySelector('.start-button');
  let a = '';
  e.forEach((t) => {
    t.addEventListener('click', (n) => {
      (a = t.textContent),
        n.preventDefault(),
        t.classList.contains('diff-button-active') ||
          (e.forEach((t) => {
            t.classList.remove('diff-button-active');
          }),
          t.classList.add('diff-button-active'));
    });
  }),
    n.addEventListener('click', (e) => {
      e.preventDefault(),
        (t.textContent = ''),
        t.appendChild(templateEngine(templateCardPage)),
        t.classList.remove('center');
    });
})();
