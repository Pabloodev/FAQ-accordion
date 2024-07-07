document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".toggle-button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const answer = this.parentElement.nextElementSibling;
            answer.classList.toggle("show");
            
            if (answer.classList.contains("show")) {
                this.src = "assets/images/icon-minus.svg";
            } else {
                this.src = "assets/images/icon-plus.svg";
            }
        });
    });
});