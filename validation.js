// Get the registration form
var form = document.getElementById("registrationForm");

// Get the form fields
var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var github = document.getElementById("github");
var avatar = document.getElementById("avatar");

// Form validation
form.addEventListener("submit", function(event) {

    event.preventDefault();

    var valid = true;

    // Clear previous error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("githubError").innerHTML = "";
    document.getElementById("avatarError").innerHTML = "";

    // Validate full name
    if (fullName.value.trim() === "") {

        document.getElementById("nameError").innerHTML =
            "Please enter your full name.";

        valid = false;
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        document.getElementById("emailError").innerHTML =
            "Please enter your email address.";

        valid = false;

    } else if (!emailPattern.test(email.value.trim())) {

        document.getElementById("emailError").innerHTML =
            "Please enter a valid email address.";

        valid = false;
    }

    // Validate GitHub username
    if (github.value.trim() === "") {

        document.getElementById("githubError").innerHTML =
            "Please enter your GitHub username.";

        valid = false;

    } else if (!github.value.trim().startsWith("@") ||
               github.value.trim().length < 2) {

        document.getElementById("githubError").innerHTML =
            "Enter a valid GitHub username starting with @.";

        valid = false;
    }

    // Validate avatar
    if (avatar.files.length === 0) {

        document.getElementById("avatarError").innerHTML =
            "Please upload an avatar.";

        valid = false;

    } else {

        var file = avatar.files[0];

        if (file.type !== "image/jpeg" &&
            file.type !== "image/png") {

            document.getElementById("avatarError").innerHTML =
                "Only JPG and PNG images are allowed.";

            valid = false;

        } else if (file.size > 500 * 1024) {

            document.getElementById("avatarError").innerHTML =
                "Image must be smaller than 500KB.";

            valid = false;
        }
    }

    // Save information if all fields are valid
    if (valid === true) {

        var file = avatar.files[0];

        var reader = new FileReader();

        reader.onload = function() {

            // Store registration details
            localStorage.setItem("fullName", fullName.value.trim());

            localStorage.setItem("email", email.value.trim());

            localStorage.setItem("github", github.value.trim());

            localStorage.setItem("avatar", reader.result);

            // Open the ticket page
            window.location.href = "ticket.html";

        };

        // Read the uploaded image
        reader.readAsDataURL(file);

        reader.onerror = function() {
            document.getElementById("avatarError").innerHTML =
                "Unable to read the uploaded image. Please try again.";
        };

    }

});