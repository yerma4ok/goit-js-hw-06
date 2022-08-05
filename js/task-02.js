const ingredients = [
'Potatoes', 
'Mushrooms', 
'Garlic', 
'Tomatos', 
'Herbs', 
'Condiments'
]


const ollList = document.querySelector('ul')
console.log(ollList);

const ollIngred = ingredient => {
  const ingredLi = document.createElement('li');
  ingredLi.classList.add('item');
  ingredLi.textContent += ingredient

return ingredLi
}
const elem = ingredients.map(ollIngred);
console.log(elem)

ollList.append(...elem)