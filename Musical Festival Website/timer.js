// Set the date and time when tickets will be available (e.g., January 1, 2025 at 12:00 PM)
const ticketReleaseDate = new Date("January 1, 2025 12:00:00").getTime();

// Update the countdown every second
const countdownFunction = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the ticket release date
    const distance = ticketReleaseDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Tickets are now available!";
    }
}, 1000);
