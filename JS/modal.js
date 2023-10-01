
// ----------------- DOM ELEMENTS MODAL ---------------- //
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// ------------------- FORM ELEMENTS ------------------ //
let first = document.getElementById("first"); 
let last = document.getElementById("last");
let email = document.getElementById("email");
let birthDate = document.getElementById("birthdate");
let quantity =document.getElementById("quantity");
let listBtnRadio = document.querySelectorAll("input[type=radio]");

// ---------------------- DISPLAY MODAL ------------------- //
// LAUNCH MODAL EVENTS
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = "block";
}
// CLOSE MODAL EVENTS
closeBtn.addEventListener("click", closeModal);
// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = "none";
}

// ----------------- DISPLAY NAV RESPONSIVE --------------- //
// EDIT NAV
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
