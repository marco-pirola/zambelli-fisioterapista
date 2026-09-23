// =========================================================
// MENU MOBILE
// =========================================================

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

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      chiudiMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 780) {
      chiudiMenu();
    }
  });
}


// =========================================================
// ANNO FOOTER
// =========================================================

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// =========================================================
// REVEAL ON SCROLL
// =========================================================

const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observerInstance.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}