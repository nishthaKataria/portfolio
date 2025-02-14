document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "#333";
            nav.style.color = "#fff";
        } else {
            nav.style.backgroundColor = "#fff";
            nav.style.color = "#333";
        }
    });
});
