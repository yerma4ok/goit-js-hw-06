let counterValue = 0

const display = document.querySelector('#value')
const clickMinus = document.querySelector('button[data-action="decrement"]')
const clickPlus = document.querySelector('button[data-action="increment"]')

clickMinus.addEventListener('click', () => {
	counterValue--
	display.textContent = counterValue
})

clickPlus.addEventListener('click', () => {
	counterValue++
	display.textContent = counterValue
})

