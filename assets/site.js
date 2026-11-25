(() => {
  const button = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  if (!button || !navigation) return;
  document.documentElement.classList.add('js');
  const close = () => {
    button.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('open', open);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      close();
      button.focus();
    }
  });
  matchMedia('(min-width: 681px)').addEventListener('change', close);
})();
