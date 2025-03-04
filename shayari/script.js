document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const copyButton = document.querySelector(".copy-btn");
    const sayariForm = document.getElementById("sayari-form");

    /* Theme toggle functionality
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    }); /*/

    // Load saved theme preference
    /*if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    } */

    // Copy sayari text to clipboard
    copyButton.addEventListener("click", () => {
        const text = document.querySelector(".quote-text").innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert("Sayari copied to clipboard!");
        });
    });

    // Sayari submission via email
    sayariForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const sayari = sayariForm.querySelector("textarea").value.trim();
        const email = sayariForm.querySelector("input[type='email']").value.trim();
        
        if (sayari && email) {
            window.location.href = `mailto:impostt9@gmail.com?subject=New Sayari Submission&body=${encodeURIComponent(sayari)}%0D%0AFrom: ${email}`;
            sayariForm.reset();
            alert("Sayari sent successfully!");
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});
