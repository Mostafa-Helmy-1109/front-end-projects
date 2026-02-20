let container = document.getElementsByClassName("container")[0];

const interval = setInterval(() => {
    Array.from(container.children).forEach((e) => {
        e.classList.remove("active");
    });

    let randomIndex = Math.trunc(Math.random() * container.children.length);
    container.children[randomIndex].classList.add("active");
}, 1500);
