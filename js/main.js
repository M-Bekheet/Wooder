const toggleNav = document.querySelector('.toggle-nav');
const nav = document.querySelector('.nav');

toggleNav.addEventListener('click', () => {
  nav.classList.toggle('open');
})