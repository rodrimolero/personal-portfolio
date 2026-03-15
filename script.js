document.addEventListener("DOMContentLoaded", function () {

    const darkModeButton = document.getElementById("darkModeToggle");

    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

});