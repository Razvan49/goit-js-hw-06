/* 
Exercițiul 2
Codul HTML conține o listă goală ul#ingredients.

<ul id="ingredients"></ul>

În fișierul JavaScript se află o matrice cu următoarele șiruri.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Scrieți un script care pentru fiecare element al matricei ingredients:

Va crea un element <li> separat. Asigurați-vă că folosiți metoda document.createElement().
Adăugați numele ingredientului ca conținut text.
Adăugați clasa item la element.
Apoi va insera toate elementele <li> dintr-o singură operație în lista ul#ingredients.
*/

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients"); // variabila list in interiorul ul-ul cu ingredients

/* folosim for each pentru a itera array-ul ingredients si
 a introduce ca innertext fiecare ingredient gasit */

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.innerText = ingredient;
  console.log(li); // afisam li in consola sa vedem daca preia ingredientele din for each
  li.classList.add("item"); // aplicam clasa item la fiecare tag li introdus
  list.append(li); // introducem fiecare li in interiorul html
});
