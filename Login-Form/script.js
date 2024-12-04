document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error messages
    errorMessage.textContent = '';

    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return;
    }

    // Here, you would typically check the credentials against stored data (e.g., from a server).
    // For demonstration, let's assume the correct email is "user@example.com" and the correct password is "password123".
    if (email === "rohit@gmail.com" && password === "Rohit@123") {
        // Redirect to the "Hello World" page if login is successful
        window.location.href = "hello.html";
    } else {
        errorMessage.textContent = "Invalid email or password.";
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
