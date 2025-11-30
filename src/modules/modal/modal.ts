export function initModal(
    modal: HTMLDivElement,
    openBtn: HTMLButtonElement,
    closeBtn: HTMLButtonElement
): void {

    // Відкрити модалку
    openBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });

    // Закрити модалку
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Закрити при кліку поза областю
    window.addEventListener("click", (e: MouseEvent) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
}