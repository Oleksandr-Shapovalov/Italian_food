const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const body = document.body;

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("active");
});
