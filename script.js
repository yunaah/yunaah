document.addEventListener("DOMContentLoaded", function () {
    const chatBubbles = document.querySelectorAll(".chat-bubble");

    chatBubbles.forEach((bubble, index) => {
        setTimeout(() => {
            bubble.classList.remove("hidden");
            bubble.style.opacity = "1";
            bubble.style.transform = "translateY(0)";
        }, index * 1500); // Delay 1.5 detik untuk setiap bubble
    });
});
