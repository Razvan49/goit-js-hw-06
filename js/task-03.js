/*
Exercițiul 3
Scrieți un script care creează o galerie de imagini pe baza unei matrice cu date. HTML-ul are o listă ul.gallery.

<ul class="gallery"></ul>

Folosiți matricea de obiecte images, pentru a crea elementele <img> imbricate în <li>. Pentru a crea marcajul, vor fi de mare ajutor template strings și metoda insertAdjacentHTML().

Toate elementele galeriei trebuie adăugate la DOM dintr-o singură operație.
Adăugați un stil minim de poziționare a galeriei (flexbox sau grid) prin intermediul claselor CSS.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
*/
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// VARIANTA 1

const imageList = document.querySelector(".gallery"); // am declarat o variabila imageList
console.log(imageList); // m-am asigurat ca am selectat lista neordonata cu clasa gallery
imageList.style.display = "flex";
imageList.style.justifyContent = "space-evenly";

/* aici o sa folosim foreach pentru a intera prin obiectul images */

images.forEach((image) => {
  const li = document.createElement("li"); // am creat li
  console.log(li); // afisam li in consola
  li.classList.add("item"); // aplicam clasa item la fiecare tag li introdus in caz ca avem nevoie pentru aplicare stiluri

  const img = document.createElement("img"); // am creat li
  img.setAttribute("src", `${image.url}`); // am adaugat atributul alt la fiecare img
  img.setAttribute("alt", `${image.alt}`); // am adaugat atributul alt la fiecare img
  console.log(img); //ma asigur ca acest img este creat in interiorul li-urilor
  img.classList.add("image"); // aplicam clasa item la fiecare tag li introdus in caz ca avem nevoie pentru aplicare stiluri
  img.style.width = "350px";

  li.appendChild(img);
  imageList.appendChild(li);
});

////VARIANTA 2

const fotosList = document.querySelector(".gallery");

// Aplică stilurile flexbox
fotosList.style.display = "flex";
fotosList.style.justifyContent = "space-evenly";

images.forEach((image) => {
  const imageHTML = `
    <li class="item">
      <img src="${image.url}" alt="${image.alt}" class="image" style="max-width: 350px;">
    </li>
  `;

  fotosList.insertAdjacentHTML("beforeend", imageHTML);
});
