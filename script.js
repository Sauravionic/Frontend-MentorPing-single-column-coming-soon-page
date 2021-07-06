var formContent = document.getElementById("form-content");
var email = document.getElementById("email");
var form = document.getElementById("forms");

function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

form.addEventListener('submit',e => {

    if(!validateEmail(email.value) || email.value == '') {
        formContent.classList.remove("success");
        formContent.classList.add("error");
        email.style.borderColor = "red";
        e.preventDefault();
    }
    else {
        email.value = "";
        formContent.classList.add("success");
        formContent.classList.remove("error");
        email.style.borderColor = "green";
        alert("Request Submitted");
    }
});
