const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);

const categoryEl = document.querySelectorAll("li.item");
console.log(categoryEl.length); //можна ще так )

categoryEl.forEach((category) => {
  console.log(`Category:  ${category.firstElementChild.textContent}   
Elements:  ${category.lastElementChild.children.length}`);
});
