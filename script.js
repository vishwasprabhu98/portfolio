// Constant keys
const DARKMODE_STORAGE_KEY = 'vishwasPfDarkmodeSelected'

// To show and hide the navigation links for the mobile screens
const navbarButton = document.querySelector('.navbar-toggleButton')

if (navbarButton) {
  navbarButton.addEventListener('click', (e) => {
    navbarButton.previousElementSibling?.classList.toggle('show-navLinks')
  })
}

// Check if darkmode is selected
const darkmodeInput = document.getElementById('darkmodeInput')
const logoImage = document.getElementById('logo-svg')

if (darkmodeInput) {
  const isDarkModeSelected = localStorage.getItem(DARKMODE_STORAGE_KEY)
  if (isDarkModeSelected === 'true') {
    darkmodeInput.checked = true
    setThemeAttributes(true)
  }
}

darkmodeInput?.addEventListener('change', (e) => {
  if (e.target.checked) {
    localStorage.setItem(DARKMODE_STORAGE_KEY, 'true')
    setThemeAttributes(true)
  } else {
    localStorage.setItem(DARKMODE_STORAGE_KEY, 'false')
    setThemeAttributes(false)
  }
})

function setThemeAttributes(isDarkMode) {
  const bodyElement = document.body
  if (isDarkMode) {
    bodyElement.setAttribute('data-theme', 'dark')
    logoImage?.setAttribute('src', './assets/logoDark.svg')
  } else {
    bodyElement.removeAttribute('data-theme')
    logoImage?.setAttribute('src', './assets/logoLight.svg')
  }
}

// Intersection observer for navbar
const navbar = document.querySelector('.navbar')
const homeSection = document.getElementById('home')

const observer = new IntersectionObserver(
  (entries) => {
    const homeEntry = entries[0]
    navbar?.classList.toggle('change', !homeEntry.isIntersecting)
  },
  {
    rootMargin: '-96px',
  }
)
observer.observe(homeSection)

// Intersection observer for adding or removing active link in navbar
const activeObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      document.getElementById(`${entries[0].target.id}-link`)?.classList.add('active')
    } else {
      document.getElementById(`${entries[0].target.id}-link`)?.classList.remove('active')
    }
  },
  {
    rootMargin: '-400px'
  }
)
document.querySelectorAll('.content-section').forEach((section) => {
  activeObserver.observe(section)
})

// listen to scroll event and remove the mouse icon from home page
const containerSection = document.querySelector('.container')
containerSection?.addEventListener('scroll', function(e) {
  if ((e.target?.clientHeight / 6) < (e.target?.scrollTop - 100)) {
    document.querySelector('.mouse-scroll')?.classList.add('hide-scroll')
  }
})
