function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChange = document.querySelector('button.change-color')
const bodyDoc = document.querySelector('body')
const colorBody = document.querySelector('span.color')


buttonChange.addEventListener('click', e => {
  let color = getRandomHexColor();
  bodyDoc.style.backgroundColor = color;
  colorBody.textContent = color;
})