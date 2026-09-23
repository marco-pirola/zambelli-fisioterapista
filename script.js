// Menu mobile
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

function chiudiMenu() {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Apri menu");
}

toggle.addEventListener("click", () => {
  const aperto = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(aperto));
  toggle.setAttribute("aria-label", aperto ? "Chiudi menu" : "Apri menu");
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", chiudiMenu));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") chiudiMenu();
});

// Anno nel footer
document.querySelector("#year").textContent = new Date().getFullYear();
