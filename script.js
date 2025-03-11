function generateCaptcha() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha-box").innerText = captcha;
}

function validateCaptcha() {
    let enteredCaptcha = document.getElementById("captcha-input").value;
    let actualCaptcha = document.getElementById("captcha-box").innerText;

    if (enteredCaptcha === actualCaptcha) {
        document.getElementById("message").innerHTML = "<span style='color: green;'>Captcha Matched!</span>";
    } else {
        document.getElementById("message").innerHTML = "<span style='color: red;'>Incorrect! Try again.</span>";
        generateCaptcha(); // Refresh Captcha
    }
}

// Load captcha on page load
generateCaptcha();
