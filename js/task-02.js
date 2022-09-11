// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список .
'use strict';
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ingredients.forEach(item => {
//   console.log(item)
//   // const itemRef = ingredient.querySelector('li')
// //   const itemEl = document.createElement('li');
// //  itemEl.classList.add('item');
// // itemEl.textContent = ingredient;
 
  
// //   let ingredientsEl = document.querySelector('ul#ingredients')
 
// //   ingredientsEl.appendChild(itemEl)
//   //  console.log(ingredientsEl.children)
//   // console.log(itemRef)
// });

const ingredientsEl = document.querySelector("#ingredients");

console.log(ingredientsEl);
console.log(ingredients);

const listRefs = ingredients.map((ingredient) => {
  const listRef = document.createElement("li");
  listRef.textContent = ingredient;
  listRef.classList.add("item");
  return listRef;
});

ingredientsEl.append(...listRefs);
 
 
  



