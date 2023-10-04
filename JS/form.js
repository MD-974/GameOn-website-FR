const form = document.querySelector("form");
// console.log(form);
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox1");



// ------------- STOP DEFAULT BROWSER ACTIONS ------------- //
form.addEventListener("submit", (event) => {
  event.preventDefault()

  //--récupération de la valeur de l’input
  console.log(firstNameInput.value)
  //--vérification  des requis de validation
  if (firstNameInput.value == "") {
      console.log("Le Prénom est requis");
    } else if 
      (firstNameInput.value.length < 2) {
        console.log("Le Prénom doit faire plus de 2 caractères");
      }

  //--récupération de la valeur de l’input
  console.log(lastNameInput.value)
  //--vérification  des requis de validation
  if (lastNameInput.value == "") {
      console.log("Le Nom est requis");
    } else if 
      (lastNameInput.value.length < 2) {
        console.log("Le Nom doit faire plus de 2 caractères");
      }
}
)

          
