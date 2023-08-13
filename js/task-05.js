/*
Exercițiul 5
Scrieți un script care, atunci când se introduce un text în input#name-input 
(evenimentul input), înlocuiește valoarea lui span#name-output cu valoarea curentă din input#name-input. 
Dacă input-ul este gol, în acel span se va afișa "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

const nameInput = document.getElementById("name-input");
console.log(nameInput); // verificare
const nameOutput = document.getElementById("name-output");
console.log(nameOutput); //verificare

// Adaugă un eveniment de ascultare pentru evenimentul "input" pe input#name-input
nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value;

  // Actualizează textul din span#name-output în funcție de valoarea introdusă
  if (inputValue.trim() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});
