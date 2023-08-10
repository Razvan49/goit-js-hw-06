/*Exercițiul 1
Scrieți un script care:

Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului 
(tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).
Ca rezultat, în consolă vor fi afișate astfel de mesaje:

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

const categoryNumber = document.querySelector("#categories");
console.log(`Number of categories: ${categoryNumber.children.length}`);

// Obține lista de categorii
const categoriesList = document.querySelector("#categories").querySelectorAll(".item");

// Parcurge fiecare element li.item
categoriesList.forEach(function (category) {
  // Găsește titlul categoriei (tag-ul <h2>)
  const categoryName = category.querySelector("h2").textContent;

  // Găsește numărul de elemente din categoria curentă
  const categoryElements = category.querySelectorAll("ul li").length;

  // Afișează în consolă titlul și numărul de elemente din categorie
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});

/* 


    Asa pot returna si animalele
    const animalList = Array.from(category.querySelectorAll('ul li')).map(li => li.textContent);

    // Afișează în consolă titlul categoriei și lista de animale
    console.log('Category: ' + categoryName);
    console.log('Animals: ' + animalList.join(', '));

*/
