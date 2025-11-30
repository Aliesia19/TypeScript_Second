export function initModal(modal, openBtn, closeBtn) {
    // Відкрити модалку
    openBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });
    // Закрити модалку
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });
    // Закрити при кліку поза областю
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
}
