document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const mainNav = document.getElementById("mainNav");

    navToggle.addEventListener("click", function () {
        const isOpen = mainNav.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", isOpen);
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });

    const ratingInput = document.getElementById("rating");
    const ratingOutput = document.getElementById("ratingValue");

    ratingInput.addEventListener("input", function () {
        ratingOutput.textContent = ratingInput.value;
    });

    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (contactForm.checkValidity()) {
            formFeedback.textContent = "Terima kasih! Pesan Anda berhasil dikirim (simulasi).";
            contactForm.reset();
            ratingOutput.textContent = "8";
        } else {
            formFeedback.textContent = "Mohon lengkapi Nama, Email, dan Pesan dengan benar.";
        }
    });
});