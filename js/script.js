const menuToggle = document.querySelector(".menu-toggle");
const navBar = document.querySelector(".nav-bar");

menuToggle.addEventListener("click", () => {
   const isOpen = navBar.classList.toggle("is-open");
   menuToggle.setAttribute("aria-expanded", isOpen);
   menuToggle.setAttribute(
        "aria-label",
        isOpen ? "メニューを閉じる" : "メニューを開く"
    );
});