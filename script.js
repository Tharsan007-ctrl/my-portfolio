document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent Page Refresh

    // Get Form Values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple Validation
    if (name === "" || email === "" || message === "") {
        alert("எல்லா Box-ஐயும் நிரப்பவும்!");
        return;
    }

    // Show Success Message
    document.getElementById("responseMessage").style.display = "block";

    // Clear Form Fields
    document.getElementById("contactForm").reset();
});
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
