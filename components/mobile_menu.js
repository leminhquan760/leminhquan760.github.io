document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("hamburger");
    const menu = document.getElementById("mobile-menu");

    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");

        btn.setAttribute("aria-expanded", isOpen);
        menu.setAttribute("aria-hidden", !isOpen);
    });
});