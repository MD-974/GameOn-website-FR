//-----------//
// Variables //
//-----------//

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".form-close");

//  pour la confirm message----------------------------------------
// const confirmBtn = document.querySelector(".confirm-modal-btn")
// const confirmClose = document.querySelector(".confirm-close")
// -----------------------------------------------------------------

// const formData = document.querySelectorAll(".formData");


//-------------------------------------------------------------------//

//--------//
// Events //
//--------//

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalClose.addEventListener("click", closeModal);

// confirmClose.addEventListener("click", closeConfirm);

//-------------------------------------------------------------------//

//-----------//
// Functions //
//-----------//

// responsive nav
function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close confirm message-----------
// function confirmClose() {
//   modalbg.style.display = "none";
// }-------------------------------



