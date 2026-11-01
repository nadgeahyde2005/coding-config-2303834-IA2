// Get registration details from localStorage
var name = localStorage.getItem("fullName");
var github = localStorage.getItem("github");
var avatar = localStorage.getItem("avatar");

// Display attendee information
if (name && github && avatar) {

    document.getElementById("ticketName").innerHTML = name;
    document.getElementById("attendeeName").innerHTML = name;

    // Display GitHub profile
    var githubName = github.replace("@", "");
    var githubLink = document.getElementById("attendeeGithub");

    githubLink.innerHTML = "@" + githubName;
    githubLink.href = "https://github.com/" + githubName;

    // Display avatar
    document.getElementById("ticketAvatar").src = avatar;

    // Generate ticket number
    var ticketNumber = Math.floor(10000 + Math.random() * 90000);

    document.getElementById("ticketNumber").innerHTML =
        "#" + ticketNumber;

} else {
    window.location.href = "index.html";
}

// Generate and save ticket number
var ticketNumber = localStorage.getItem("ticketNumber");

if (ticketNumber === null) {
    ticketNumber = Math.floor(10000 + Math.random() * 90000);
    localStorage.setItem("ticketNumber", ticketNumber);
}

document.getElementById("ticketNumber").innerHTML =
    "#" + ticketNumber;