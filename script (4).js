// ==================================================
// NAVBAR MOBILE
// ==================================================

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("show");

    if (navbar.classList.contains("show")) {
        menuIcon.textContent = "✕";
    } else {
        menuIcon.textContent = "☰";
    }

});


// ==================================================
// TUTUP NAVBAR SAAT LINK DIKLIK
// ==================================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        menuIcon.textContent = "☰";

    });

});


// ==================================================
// NAVBAR ACTIVE SAAT SCROLL
// ==================================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ==================================================
// TYPING EFFECT
// ==================================================

const typingText = document.getElementById("typing-text");

const textList = [
    "Pelajar",
    "Web Developer Pemula",
    "Programmer Pemula",
    "Pembelajar"
];

let textIndex = 0;
let characterIndex = 0;
let deleting = false;


function typingEffect() {

    const currentText = textList[textIndex];

    if (!deleting) {

        typingText.textContent =
            currentText.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentText.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentText.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= textList.length) {
                textIndex = 0;
            }

        }

    }

    const speed = deleting ? 60 : 100;

    setTimeout(typingEffect, speed);
}

typingEffect();


// ==================================================
// PROJECT MODAL
// ==================================================

const projectButtons =
    document.querySelectorAll(".project-btn");

const modal =
    document.getElementById("project-modal");

const modalTitle =
    document.getElementById("modal-title");

const modalDescription =
    document.getElementById("modal-description");

const modalIcon =
    document.getElementById("modal-icon");

const closeModal =
    document.getElementById("close-modal");

const modalCloseButton =
    document.getElementById("modal-close-btn");


// DATA PROJECT

const projectData = {

    "Python": {
        icon: "🐍",

        title: "Python",

        description:
            "Project pembelajaran dasar Python. " +
            "Materi yang dipelajari meliputi variabel, " +
            "tipe data, input, output, percabangan, " +
            "dan perulangan."
    },


    "Pembelajaran PBI Dasar": {
        icon: "📚",

        title: "Pembelajaran PBI Dasar",

        description:
            "Project pembelajaran PBI dasar yang berisi " +
            "materi dan latihan untuk memahami konsep " +
            "dasar pembelajaran Bahasa Indonesia."
    },


    "Menanam Kangkung": {
        icon: "🌱",

        title: "Menanam Kangkung",

        description:
            "Project kegiatan pembelajaran menanam kangkung. " +
            "Kegiatan dilakukan mulai dari persiapan media, " +
            "penanaman, penyiraman, perawatan, hingga " +
            "mengamati pertumbuhan tanaman."
    }

};


// BUKA MODAL

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const projectName =
            button.getAttribute("data-project");

        const project =
            projectData[projectName];

        if (project) {

            modalIcon.textContent = project.icon;

            modalTitle.textContent = project.title;

            modalDescription.textContent =
                project.description;

            modal.classList.add("show");

            document.body.style.overflow = "hidden";
        }

    });

});


// TUTUP MODAL

function closeProjectModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


closeModal.addEventListener(
    "click",
    closeProjectModal
);


modalCloseButton.addEventListener(
    "click",
    closeProjectModal
);


// KLIK AREA LUAR MODAL

modal.addEventListener("click", event => {

    if (event.target === modal) {

        closeProjectModal();

    }

});


// TOMBOL ESC

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeProjectModal();

    }

});


// ==================================================
// BACK TO TOP
// ==================================================

const backToTop =
    document.getElementById("back-to-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==================================================
// TAHUN FOOTER OTOMATIS
// ==================================================

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();


// ==================================================
// ANIMASI CARD SAAT MUNCUL
// ==================================================

const animatedElements =
    document.querySelectorAll(
        ".about-box, .data-box, .skill, .project-card, .contact-box"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(element => {

    observer.observe(element);

});