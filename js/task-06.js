/*
Exercițiul 6
Scrieți un script care, atunci când focalizarea este pierdută de pe un input (evenimentul blur), 
verifică dacă numărul de caractere introduse este corect.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Numărul de caractere admis trebuie specificat în atributul data-length.
Dacă este introdus numărul corect de caractere, atunci border-ul devine verde, în caz contrar - roșu.
Pentru a adăuga stilurile necesare, utilizați clasele CSS valid și invalid pe care le-am adăugat deja la 
fișierele sursă ale acestui exercițiu.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

const validationInput = document.getElementById("validation-input");
console.log(validationInput); // verificam selectarea

// Adaugă un eveniment de ascultare pentru evenimentul "input" pe inputValue#validation-input
validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value;
  const requiredLength = parseInt(validationInput.getAttribute("data-length"));

  // Aplicam stilurile

  if (inputValue.length === requiredLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
