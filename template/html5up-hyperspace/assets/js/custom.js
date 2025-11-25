console.log("custom.js підключено");

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const openBtn = document.querySelector(".open-modal");
    const closeBtn = modal.querySelector(".close");
    const fetchBtn = document.getElementById("fetchDataBtn");
    const apiData = document.getElementById("apiData");

    // Відкрити модалку
    openBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });

    // Закрити модалку
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Клік поза модалкою
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("show");
    });

    // Fetch приклад
    fetchBtn.addEventListener("click", () => {
        apiData.innerHTML = "Завантаження...";
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then(res => res.json())
            .then(data => {
                apiData.innerHTML = "";
                data.forEach(post => {
                    const div = document.createElement("div");
                    div.style.opacity = 0;
                    div.style.transition = "opacity 0.5s ease-in";
                    div.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p><hr>`;
                    apiData.appendChild(div);
                    setTimeout(() => div.style.opacity = 1, 50);
                });
            })
            .catch(err => {
                apiData.innerHTML = "Помилка завантаження даних";
                console.error(err);
            });
    });

    // Анімація при скролі
    const fadeElements = document.querySelectorAll(".fade-up");
    const fadeInOnScroll = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight - 50){
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    };
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // для тих елементів, що вже в полі зору
});
