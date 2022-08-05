const inputControl = document.querySelector('input#font-size-control');

const text = document.querySelector('span#text');

inputControl.oninput = function() {
  text.style.fontSize = inputControl.value + "px";
};