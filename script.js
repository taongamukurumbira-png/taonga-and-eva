// Get the music element
const music = document.getElementById("music");

// YES button function
function sayYes() {

    // Hide the question
    document.querySelector("h2").style.display = "none";

    // Hide the YES button
    document.getElementById("yesButton").style.display = "none";

    // Hide the NO button
    document.getElementById("noButton").style.display = "none";

    // Show the love message
    document.getElementById("message").style.display = "block";

    // Show the photos
    document.getElementById("gallery").style.display = "block";

    // Start the music
    music.play();

    // Create floating hearts
    createHearts();

    // Change music button
    document.getElementById("musicButton").innerHTML =
        "⏸️ Pause Music";
}


// Music function
function toggleMusic() {

    // Check if music is stopped
    if (music.paused) {

        // Play music
        music.play();

        // Change button text
        document.getElementById("musicButton").innerHTML =
            "⏸️ Pause Music";

    } else {

        // Pause music
        music.pause();

        // Change button text
        document.getElementById("musicButton").innerHTML =
            "🎵 Play Music";
    }
}


// Move the NO button
function moveNo() {

    // Get NO button
    const button = document.getElementById("noButton");

    // Generate random horizontal position
    const x = Math.random() *
        (window.innerWidth - 150);

    // Generate random vertical position
    const y = Math.random() *
        (window.innerHeight - 100);

    // Make button fixed
    button.style.position = "fixed";

    // Move horizontally
    button.style.left = x + "px";

    // Move vertically
    button.style.top = y + "px";
}


// Create floating hearts
function createHearts() {

    // Create 50 hearts
    for (let i = 0; i < 50; i++) {

        // Create a new HTML element
        const heart = document.createElement("div");

        // Put heart inside it
        heart.innerHTML = "❤️";

        // Give it the floating-heart class
        heart.className = "floating-heart";

        // Random horizontal position
        heart.style.left =
            Math.random() * 100 + "vw";

        // Random animation speed
        heart.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        // Random heart size
        heart.style.fontSize =
            (Math.random() * 25 + 15) + "px";

        // Add heart to the page
        document.body.appendChild(heart);
    }
}
