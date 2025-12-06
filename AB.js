
document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});



const sections = document.querySelectorAll("div[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }
    });
});

const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-skill");
        }
    });
}, { threshold: 0.2 });

skillCards.forEach(card => {
    observer.observe(card);
});



const homeText = document.querySelector(".display-4");
if (homeText) {
    homeText.style.opacity = "0";
    homeText.style.transition = "opacity 2s ease";
    setTimeout(() => {
        homeText.style.opacity = "1";
    }, 300);
}
