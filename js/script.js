const menuToggle = document.querySelector(".menu-toggle");
const navBar = document.querySelector(".nav-bar");
const language = document.documentElement.lang;

menuToggle.addEventListener("click", () => {
   const isOpen = navBar.classList.toggle("is-open");
   menuToggle.classList.toggle("is-open", isOpen);
   menuToggle.setAttribute("aria-expanded", isOpen);
   menuToggle.setAttribute(
        "aria-label",
        language === "es"
            ? (isOpen ? "Cerrar menú" : "Abrir menú")
            : (isOpen ? "メニューを閉じる" : "メニューを開く")
    );
});

navBar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navBar.classList.remove("is-open");
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            language === "es" ? "Abrir menú" : "メニューを開く"
        );
    });
});