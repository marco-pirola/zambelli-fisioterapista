// Menu mobile

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

function chiudiMenu() {
  if (!toggle || !nav) return;

  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Apri menu");
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const aperto = nav.classList.toggle("is-open");

    toggle.setAttribute("aria-expanded", String(aperto));
    toggle.setAttribute(
      "aria-label",
      aperto ? "Chiudi menu" : "Apri menu"
    );
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", chiudiMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      chiudiMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 780) {
      chiudiMenu();
    }
  });
}


// Anno nel footer

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}