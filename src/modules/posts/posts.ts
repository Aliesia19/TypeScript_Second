import { Post } from "../../types/type.js";

export function loadPosts(postsContainer: HTMLDivElement): void {

    postsContainer.innerHTML = "Завантаження постів...";

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(response => response.json())
        .then((data: Post[]) => {
            postsContainer.innerHTML = "";

            data.forEach((post: Post) => {
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