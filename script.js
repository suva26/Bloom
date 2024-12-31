// Toggle Navigation Bar
function toggleNav() {
    document.getElementById("side-nav").classList.toggle("open");
}

// Enhance Animation on Load
window.addEventListener("load", () => {
    const containers = document.querySelectorAll(".painting-container");
    containers.forEach((container, index) => {
        setTimeout(() => {
            container.style.opacity = "1";
        }, index * 500);
    });
});

// Sparkle Effect on Mouse Move
document.body.addEventListener("mousemove", function(event) {
    let sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.height = `${Math.random() * 8 + 8}px`;
    sparkle.style.width = sparkle.style.height;
    sparkle.style.left = `${event.pageX - sparkle.offsetWidth / 2}px`;
    sparkle.style.top = `${event.pageY - sparkle.offsetHeight / 2}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
});

// Function to handle the form submission and redirect to the thank-you page
function showThankYouPage(event) {
    event.preventDefault();
    setTimeout(function() {
        window.location.href = "thankyou.html";
    }, 1000);
}
