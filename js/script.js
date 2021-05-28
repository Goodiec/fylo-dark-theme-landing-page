let errorMsg = document.getElementById("errormsg");
let emailInput = document.getElementById("email");
let submitBtn = document.getElementById("sub-btn");

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

button.addEventListener('click', function() {
    let email = emailInput.value;
    if (validateEmail(email)) {
        errorMsg.innerHTML = 'Email is valid';
    } else {
        errorMsg.innerHTML = 'Please enter a valid email address';
    }
});