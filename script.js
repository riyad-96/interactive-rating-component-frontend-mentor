const ratingContainer = document.querySelector('.rating-container')
const thanksContainer = document.querySelector('.thanks-container')
const submitBtn = document.querySelector('.submit-btn')

const ratingBtns = document.querySelectorAll('.btn');
const ratingNumber = document.getElementById('ratingNumber')

submitBtn.addEventListener('click', () => {
  ratingContainer.style.display = 'none'
  thanksContainer.style.display = 'block'
})

ratingBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    ratingNumber.innerHTML = btn.innerHTML
  })
})

