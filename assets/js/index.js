const menu = document.getElementById("check_menu");
const nav = document.querySelector("nav");
menu.addEventListener("click", menuChange);

function menuChange(e) {
  const check = e.currentTarget.checked;
  if (check) {
    nav.classList.remove("hidden");
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
    nav.classList.add("hidden");
  }
}
