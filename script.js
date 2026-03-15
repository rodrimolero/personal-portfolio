document.addEventListener("DOMContentLoaded", function () {

    const darkModeButton = document.getElementById("darkModeToggle");

    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const text = document.getElementById("message").value;

    if(name === "" || email === "" || text === "") {

        message.innerText = "Please fill out all fields.";
        message.style.color = "red";

    } else {

        message.innerText = "Message sent successfully!";
        message.style.color = "green";

        form.reset();
    }

});

const topBtn = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});