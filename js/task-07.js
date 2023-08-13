/* 
Exercițiul 7
Scrieți un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) 
și modifică stilurile inline al span#text prin actualizarea proprietății font-size. Ca rezultat, 
atunci când glisați scrollbar-ul, dimensiunea textului se va schimba.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
*/

const fontSize = document.querySelector("#font-size-control"); // Selectam inputul
console.log(fontSize); // verificam daca am selectat cum trebuie
const textElement = document.querySelector("#text"); // selectam spanul cu text

// Adaugă un eveniment de ascultare pentru evenimentul "input" pe fontSize#font-size-control
fontSize.addEventListener("input", () => {
  const range = fontSize.value; // facem o variabila noua care sa pastreze valuarea returnata de input
  console.log(range); // verificam care este valuarea noii variabile range
  textElement.style.fontSize = range + "px"; // modificam stilul in functie de valoarea primita de la input si stocata in range
});
