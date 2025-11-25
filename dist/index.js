"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");
    const postsContainer = document.getElementById("postsContainer");
    // Відкрити модалку та завантажити пости
    openBtn.addEventListener("click", () => {
        modal.classList.add("active");
        loadPosts();
    });
    // Закрити модалку
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    // Клік поза модалкою закриває її
    window.addEventListener("click", (e) => {
        if (e.target === modal)
            modal.classList.remove("active");
    });
    // Завантаження постів
    function loadPosts() {
        postsContainer.innerHTML = "Завантаження постів...";
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then(res => res.json())
            .then(data => {
            postsContainer.innerHTML = "";
            data.forEach((post) => {
                const div = document.createElement("div");
                div.className = "post";
                div.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
                postsContainer.appendChild(div);
            });
        })
            .catch(err => {
            postsContainer.innerHTML = "Помилка завантаження постів";
            console.error(err);
        });
    }
});
