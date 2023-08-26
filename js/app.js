// ********** set date ************
// select span
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const cl1 = document.getElementById("home");
cl1.addEventListener("click", () => {
  links.classList.remove("show-links");
});

const cl2 = document.getElementById("about");
cl2.addEventListener("click", () => {
  links.classList.remove("show-links");
});

const cl3 = document.getElementById("services");
cl3.addEventListener("click", () => {
  links.classList.remove("show-links");
});

const cl4 = document.getElementById("tours");
cl4.addEventListener("click", () => {
  links.classList.remove("show-links");
});

// ********** smooth scroll ************
// select links
