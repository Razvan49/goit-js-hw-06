/* 
Exercițiul 9
Scrieți un script care schimbă culorile de fundal al elementului <body>, prin stiluri inline, 
atunci când se face click pe button.change-color și afișați valoarea culorii în span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Pentru a genera o culoare aleatorie, folosiți getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
*/

// Functia de generare culoare random
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color"); // accesam butonul
const colorSpan = document.querySelector(".color"); //accesam cspanul care o sa afiseze culoarea ca text
const body = document.body; // accesam body

// Adaugă un eveniment de ascultare pentru evenimentul "click" pe changeColorButton.change-color]
changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor(); // trimitem valorea culorii din functia getRamdomHexColor la randomColor

  body.style.backgroundColor = randomColor; // actualizam culoarea body cu culoarea randomColor
  colorSpan.textContent = randomColor; // actualizam spanul cu randomColor
});
