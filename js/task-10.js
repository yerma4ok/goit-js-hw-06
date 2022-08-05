function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputControl = document.querySelector('#controls>input')
const buttonCreate = document.querySelector('button[data-create]')
const buttonDestroy = document.querySelector('button[data-destroy]')
const boxesElem = document.querySelector('#boxes')

const createBoxes = amount => {
	const elementsToAdd = []
	for (let i = 0; i < amount; i++) {
		const div = document.createElement('div')
		div.style.height = `${30 + 10 * i}px`
		div.style.width = `${30 + 10 * i}px`
		div.style.background = getRandomHexColor()
		elementsToAdd.push(div)
	}
	return elementsToAdd
}

const destroyBoxes = () => {
  boxesElem.innerHTML = ''
}

buttonCreate.addEventListener('click', () => {
	let boxesToAdd = createBoxes(inputControl.value)
  boxesElem.append(...boxesToAdd)
})

console.log(inputControl.value)

buttonDestroy.addEventListener('click', () => {
	destroyBoxes.call()
})