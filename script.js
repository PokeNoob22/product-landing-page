document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".blue-button");

    buttons.forEach((button) => {
        button.value = "Add to Cart";
        button.disabled = false; // Enable the button on reload

        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form submission
            this.value = "Out of Stock";
            this.disabled = true; // Disable the button
        });
    });
});