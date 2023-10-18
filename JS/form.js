  //--------------------- DOM ELEMENTS ----------------------//

  const form = document.querySelector("form");

  const firstNameInput = document.getElementById("first");
  const firstNameError = firstNameInput.parentElement;

  const lastNameInput = document.getElementById("last");
  const lastNameError = lastNameInput.parentElement;
  
  const emailInput = document.getElementById("email");
  const emailError = emailInput.parentElement;
  
  const birthdateInput = document.getElementById("birthdate");
  const birthdateError = birthdateInput.parentElement;
  
  const quantityInput = document.getElementById("quantity");
  const quantityError = quantityInput.parentElement;
 
  const location1 = document.getElementById("location1");
  // const location1Error = location1.parentElement;
  const location2 =  document.getElementById("location2");
  // const location2Error = location2.parentElement;
  const location3 =  document.getElementById("location3");
  // const location3Error = location3.parentElement;
  const location4 =  document.getElementById("location4");
  // const location4Error = location4.parentElement;
  const location5 =  document.getElementById("location5");
  // const location5Error = location5.parentElement;
  const location6 =  document.getElementById("location6");
  // const location6Error = location6.parentElement;
  const locationError = document.getElementById("location-error")
  const locationsError = locationError.parentElement;
  // const locations = document.querySelectorAll(type[radio])
  // const locationsError=locations.parentElement;

  const checkbox1 = document.getElementById("checkbox1");
  const checkbox1Error = checkbox1.parentElement;


  // ------------- STOP DEFAULT BROWSER ACTIONS -------------//
  form.addEventListener("submit", (event) => {
    event.preventDefault()

    //--récupération de la valeur de l’input "first" et "last"
  const regexFirstLast = /^([A-Za-z]{2,20})?([-]{0,1})?([.]{0,1})?([A-Za-z]{2,20})$/
  console.log(firstNameInput.value)
    //--vérification  des requis de validation
    if (firstNameInput.value == "") {
        console.log("Le Prénom est requis.");
        firstNameError.lastElementChild.textContent = "Le Prénom est requis.";// récuperation du dernier element de la div et modification du texte
        firstNameError.lastElementChild.style.display = "block";// affichage du message d'erreur
        firstNameInput.style.borderColor = "red";// affichage de la bordure en rouge
        firstNameInput.style.borderWidth = "2px";
      } else if (!regexFirstLast.test(firstNameInput.value)) {
        console.log("Le Prénom doit faire plus de 2 caractères.");
        firstNameError.lastElementChild.textContent="Le Prénom doit faire plus de 2 caractères.";// récuperation du dernier element de la div et modification du texte
        firstNameError.lastElementChild.style.display="block";// affichage du message d'erreur
        firstNameInput.style.borderColor = "red";// affichage de la bordure en rouge
        firstNameInput.style.borderWidth = "2px";
      } else {
        firstNameError.lastElementChild.style.display="none";// cacher le message d'erreur
        // firstNameInput.style = "default";
        firstNameInput.style.borderColor = "green";// affichage de la bordure en vert
        firstNameInput.style.borderWidth = "3px";
      }
      

    //--récupération de la valeur de l’input
    console.log(lastNameInput.value)
    //--vérification  des requis de validation
    if (lastNameInput.value == "") {
        console.log("Le Nom est requis.");
        lastNameError.lastElementChild.textContent = "Le Nom est requis.";// récuperation du dernier element de la div et modification du texte
        lastNameError.lastElementChild.style.display = "block";// affichage du message d'erreur
        lastNameInput.style.borderColor = "red";
        lastNameInput.style.borderWidth = "2px";
      } else if (!regexFirstLast.test(lastNameInput.value)) {
        console.log("Le Nom doit faire plus de 2 caractères.");
        lastNameError.lastElementChild.textContent="Le Nom doit faire plus de 2 caractères.";// récuperation du dernier element de la div et modification du texte
        lastNameError.lastElementChild.style.display="block";// affichage du message d'erreur
        lastNameInput.style.borderColor = "red";
        lastNameInput.style.borderWidth = "2px";
      } else {
        lastNameError.lastElementChild.style.display="none";// cacher le message d'erreur
        // lastNameInput.style = "default"
        lastNameInput.style.borderColor = "green";// affichage de la bordure en vert
        lastNameInput.style.borderWidth = "3px";
      }

    //--récupération de la valeur l'email
    const regexEmail = /^[A-Za-z0-9\.\-]+@([A-Za-z0-9\.\-]+\.[A-Za-z]{2,4})$/;
      console.log(emailInput.value)
    //--vérification  des requis de validation  
    if (emailInput.value == "") {
      console.log("L'Email est requis.");
      emailError.lastElementChild.textContent = "L'Email est requis.";// récuperation du dernier element de la div et modification du texte
      emailError.lastElementChild.style.display = "block";// affichage du message d'erreur
      emailInput.style.borderColor = "red"
      emailInput.style.borderWidth = "2px"
    } else if (!regexEmail.test(emailInput.value)){
      console.log("L'Email n'est pas au bon format.");
      emailError.lastElementChild.textContent = "L'Email n'est pas au bon format ( exemple@email.fr ).";// récuperation du dernier element de la div et modification du texte
      emailError.lastElementChild.style.display = "block";// affichage du message d'erreur
      emailInput.style.borderColor = "red"
      emailInput.style.borderWidth = "2px"
    } else {     
      emailError.lastElementChild.style.display="none";// cacher le message d'erreur
      emailInput.style = "default"
    }


    //--validation de la date de naissance
    const regexBirthdate = /^([0-9]{2})|([0-9]{2})|([0-9]{4})$/;
     console.log(birthdateInput.value)
    //--vérification  des requis de validation
     if (birthdateInput.value == "") {
      console.log("Veuillez indiquer une date de naissance.");
      birthdateError.lastElementChild.textContent = "Veuillez indiquer une date de naissance.";// récuperation du dernier element de la div et modification du texte
      birthdateError.lastElementChild.style.display = "block";// affichage du message d'erreur
      birthdateInput.style.borderColor = "red";
      birthdateInput.style.borderWidth = "2px";
    } else {
      birthdateError.lastElementChild.style.display="none";// cacher le message d'erreur
      birthdateInput.style ="default"
    }
    

    //--validation nombre de participation
    const regexQuantity = /^[0-9]$/;
      console.log(quantityInput.value);
    //--vérification  des requis de validation  
      if (quantityInput.value == "") {
        console.log("Veuillez indiquer le nombre de participation entre 0-99.");
      
      quantityError.lastElementChild.textContent = "Veuillez indiquer le nombre de participation entre 0-99.";// récuperation du dernier element de la div et modification du texte
      quantityError.lastElementChild.style.display = "block";// affichage du message d'erreur
      quantityInput.style.borderColor = "red";
      quantityInput.style.borderWidth = "2px";
    } else {
      quantityError.lastElementChild.style.display="none";// cacher le message d'erreur
      quantityInput.style ="default"
    }
    
    //--validation selection de la ville
      if (!location1.checked && !location2.checked && !location3.checked
    && !location4.checked && !location5.checked && !location6.checked) { 
      console.log("Selectionner une ville.");
      
      locationsError.lastElementChild.textContent = "Selectionner une ville.";
      locationsError.lastElementChild.style.display = "block";
    }  else {
      locationsError.lastElementChild.style.display = "none";
     }
  //   if (!locations.checked){
  //       // récuperation du dernier element de la div et modification du texte
  //    locationsError.lastElementChild.textContent = "Veuillez selectionner une ville.";
  //    // affichage du message d'erreur
  //    locationsError.lastElementChild.style.display = "block";
  //  } else {
  //    // cacher le message d'erreur
  //    locationsError.lastElementChild.style.display="none";
  //  }

  //--validation condition d'utilisation
  if (!checkbox1.checked){
    console.log("Veuillez lire et accepter les condtions d'utilisation.");
     // récuperation du dernier element de la div et modification du texte
     checkbox1Error.lastElementChild.textContent = "Veuillez lire et accepter les condtions d'utilisation.";
     // affichage du message d'erreur
     checkbox1Error.lastElementChild.style.display = "block";
   } else {
     // cacher le message d'erreur
     checkbox1Error.lastElementChild.style.display="none";
   }
  } 
  )

          
