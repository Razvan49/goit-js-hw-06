/* 
Exercițiul 4
Contorul este format dintr-un tag span și două butoane care, atunci când sunt apăsate, ar trebui să-și mărească sau scadă valoarea cu unu.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului și asignați-i valoarea 0 pentru început.
Adăugați click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
Actualizați interfața cu noua valoare a variabilei counterValue.
*/

let counterValue = 0; // Inițializăm valoarea contorului cu 0

const valueElement = document.querySelector("#value");
console.log(valueElement);
const decrementButton = document.querySelector('[data-action="decrement"]');
console.log(decrementButton);
const incrementButton = document.querySelector('[data-action="increment"]');
console.log(incrementButton);

// Funcție pentru actualizarea valorii contorului și a interfeței
function updateCounter(newValue) {
  valueElement.textContent = newValue;
  console.log(newValue);
}

// Adăugăm event listener pentru butonul de decrementare
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter(counterValue);
});

// Adăugăm event listener pentru butonul de incrementare
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounter(counterValue);
});

// Inițializăm interfața cu valoarea contorului curent
updateCounter(counterValue);
