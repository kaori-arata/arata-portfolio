const menuToggle = document.querySelector(".menu-toggle");
const navBar = document.querySelector(".nav-bar");
const language = document.documentElement.lang;

menuToggle.addEventListener("click", () => {
   const isOpen = navBar.classList.toggle("is-open");
   menuToggle.setAttribute("aria-expanded", isOpen);
   menuToggle.setAttribute(
        "aria-label",
        language === "es"
            ? (isOpen ? "Cerrar menú" : "Abrir menú")
            : (isOpen ? "メニューを閉じる" : "メニューを開く")
    );
});