export function loadPosts(postsContainer) {
    postsContainer.innerHTML = "Завантаження постів...";
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(response => response.json())
        .then((data) => {
        postsContainer.innerHTML = "";
        data.forEach((post) => {
            const div = document.createElement("div");
            div.className = "post";
            div.innerHTML = `
                    <strong>${post.title}</strong>
                    <p>${post.body}</p>
                `;
            postsContainer.appendChild(div);
        });
    })
        .catch(() => {
        postsContainer.innerHTML = "Помилка завантаження постів.";
    });
}
