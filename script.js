document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Navbar scroll effect
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
