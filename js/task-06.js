
const validationInput = document.querySelector('#validation-input')
console.log(validationInput.getAttribute('data-length'))
validationInput.addEventListener('blur', event => {
	if (event.target.value.length == validationInput.getAttribute('data-length')) {
		validationInput.classList.add('valid')
		if (validationInput.classList.contains('invalid')) {
			validationInput.classList.remove('invalid')
		}
	} else {
		if (validationInput.classList.contains('valid')) {
			validationInput.classList.remove('valid')
		}
		validationInput.classList.add('invalid')
	}
})

// console.log(validationInput)