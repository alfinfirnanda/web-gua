const buttons = document.querySelectorAll(".option-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Kamu memilih " + button.textContent);
    });
});