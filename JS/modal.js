function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const closeBtn = document.querySelector(".close");

// FORM Elements
let first = document.getElementById("first"); 
let last = document.getElementById("last");
let email = document.getElementById("email");
let birthDate = document.getElementById("birthdate");
let quantity =document.getElementById("quantity");
let listBtnRadio = document.querySelectorAll("input[type=radio]");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// 1 issue(fermeture de la modal)
// close modal event
closeBtn.addEventListener("click", closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
