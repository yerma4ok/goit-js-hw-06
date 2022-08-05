const ollCategories = document.querySelectorAll(".item")
console.log(`Number of categories: ${ollCategories.length}`);

const categoriesArray = [...ollCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);


