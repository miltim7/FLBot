document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.animate[data-animate]');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                obs.unobserve(entry.target); // если нужно один раз
            }
        });
    }, { threshold: 0.15 });

    elems.forEach(el => observer.observe(el));
});


document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = 200; // отступ сверху (например, высота хедера)
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", () => {
        header.classList.toggle("open");
    });
});
