const switchPT = document.querySelector('.header .portuguese')
const switchEN = document.querySelector('.header .english')

switchPT.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

switchEN.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})
