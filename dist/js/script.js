// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#toTop');

  if(window.pageYOffset > fixedNav){
    header.classList.remove('absolute')
    header.classList.remove('dark:bg-dark')
    header.classList.add('navbar-fixed')
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('absolute')
    header.classList.add('dark:bg-dark')
    header.classList.remove('navbar-fixed')
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
})

// Current Year
const year = document.querySelector('#year');
const date = new Date()
year.innerHTML = date.getFullYear();

// Hidden Hamburger in click window
window.addEventListener('click', (e) => {
  if(e.target != hamburger && e.target!= navMenu){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
  }
})

// DarkMode Toggle
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', () => {
  darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark');
  darkToggle.checked ? localStorage.theme = 'dark' : localStorage.theme = 'light';
})

// Move position dark mod by theme
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}