document.querySelector('#confirmPassword').addEventListener('focusout', checkPasswordMatch)


function checkPasswordMatch() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match. Please try again.");
        password.value = "";
        confirmPassword.value = "";
        password.focus();
    }
}

function updateRatingValue() {
    var ratingValue = document.getElementById("ratingValue");
    var pageRating = document.getElementById("pageRating");
    ratingValue.innerHTML = pageRating.value;
}