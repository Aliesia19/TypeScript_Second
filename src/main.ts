import { initModal } from "./modules/modal/modal.js";
import { loadPosts } from "./modules/posts/posts.js";

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");
    const postsContainer = document.getElementById("postsContainer");

    if (!modal || !openBtn || !closeBtn || !postsContainer) {
        console.error("Не знайдені елементи на сторінці");
        return;
    }

    initModal(
        modal as HTMLDivElement,
        openBtn as HTMLButtonElement,
        closeBtn as HTMLButtonElement
    );

    openBtn.addEventListener("click", () => {
        loadPosts(postsContainer as HTMLDivElement);
    });
});