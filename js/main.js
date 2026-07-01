const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("is-scrolled");

    }else{

        header.classList.remove("is-scrolled");

    }

});

const diagrams = document.querySelectorAll(".diagram");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

        }

    });

},{

    threshold:.35

});

diagrams.forEach(diagram => observer.observe(diagram));


