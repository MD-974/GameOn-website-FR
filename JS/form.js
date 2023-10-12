  //--------------------- DOM ELEMENTS ----------------------//

  const form = document.querySelector("form");

  const firstNameInput = document.getElementById("first");
  const firstNameError = firstNameInput.parentElement;

  
  const lastNameInput = document.getElementById("last");
  const lastNameError = lastNameInput.parentElement;

  const emailInput = document.getElementById("email");
  const emailError = emailInput.parentElement;
  
  const birthdateInput = document.getElementById("birthdate");
  const quantityInput = document.getElementById("quantity");
  const location1 = document.getElementById("location1");
  const location2 =  document.getElementById("location2");
  const location3 =  document.getElementById("location3");
  const location4 =  document.getElementById("location4");
  const location5 =  document.getElementById("location5");
  const location6 =  document.getElementById("location6");
  const checkbox1 = document.getElementById("checkbox1");

  // ------------- STOP DEFAULT BROWSER ACTIONS -------------//
  form.addEventListener("submit", (event) => {
    event.preventDefault()

    //--récupération de la valeur de l’input
    console.log(firstNameInput.value)
    //--vérification  des requis de validation
    if (firstNameInput.value == "") {
        console.log("Le Prénom est requis.");
        // récuperation du dernier element de la div et modification du texte
        firstNameError.lastElementChild.textContent = "Le Prénom est requis.";
        // affichage du message d'erreur
        firstNameError.lastElementChild.style.display = "block";
      } else if (firstNameInput.value.length < 2) {
        console.log("Le Prénom doit faire plus de 2 caractères.");
        // récuperation du dernier element de la div et modification du texte
        firstNameError.lastElementChild.textContent="Le Prénom doit faire plus de 2 caractères.";
        // affichage du message d'erreur
        firstNameError.lastElementChild.style.display="block";
      } else {
        // cacher le message d'erreur
        firstNameError.lastElementChild.style.display="none";
      }
      

    //--récupération de la valeur de l’input
    console.log(lastNameInput.value)
    //--vérification  des requis de validation
    if (lastNameInput.value == "") {
        console.log("Le Nom est requis.");
       // récuperation du dernier element de la div et modification du texte
        lastNameError.lastElementChild.textContent = "Le Nom est requis.";
        // affichage du message d'erreur
        lastNameError.lastElementChild.style.display = "block";
      } else if (lastNameInput.value.length < 2) {
        console.log("Le Nom doit faire plus de 2 caractères.");
        // récuperation du dernier element de la div et modification du texte
        lastNameError.lastElementChild.textContent="Le Nom doit faire plus de 2 caractères.";
        // affichage du message d'erreur
        lastNameError.lastElementChild.style.display="block";
      } else {
        // cacher le message d'erreur
        lastNameError.lastElementChild.style.display="none";
      }

    //--récupération de l'email
    const regexEmail = /^[A-Za-z0-9\.\-]+@([A-Za-z0-9\.\-]+\.[A-Za-z]{2,4})$/;
      console.log(emailInput.value)

    if (emailInput.value == "") {
      console.log("L'Email est requis.");
      // récuperation du dernier element de la div et modification du texte
      emailError.lastElementChild.textContent = "L'Email est requis.";
      // affichage du message d'erreur
      emailError.lastElementChild.style.display = "block";
    } else if (!regexEmail.test(emailInput.value)){
      console.log("L'Email n'est pas au bon format.");
      // récuperation du dernier element de la div et modification du texte
      emailError.lastElementChild.textContent = "L'Email n'est pas au bon format ( exemple@email.fr ).";
      // affichage du message d'erreur
      emailError.lastElementChild.style.display = "block";
    } else {
      // cacher le message d'erreur
      emailError.lastElementChild.style.display="none";
    }

    //--validation nombre de participation
    const regexQuantity = /^[0-9]$/;
      console.log(quantityInput.value);
      if (quantityInput.value == "") {
        console.log("Veuillez indiquer le nombre de participation.");
      }
    
    //--validation selection de la ville
      if (!location1.checked && !location2.checked && !location3.checked
    && !location4.checked && !location5.checked && !location6.checked) { 
      console.log("Selectionner une ville."); 
  }

  //--validation condition d'utilisation
  if (!checkbox1.checked){
    console.log("Veuillez lire et accepter les condtions d'utilisation.");
  }
  }
  )



            
