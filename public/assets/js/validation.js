//input fields

const name = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const modal = document.getElementById('myModal');

//form

const form = document.getElementById('testForm');

//handle form

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (
        validateFirstName() &&
        validateLastName() &&
        validateEmail()
    ) {
        modal.style.display = "none";
        alert('Welcome!');
    }
})

//validators

function validateFirstName() {
    if (checkIfEmpty(name)) return;
    if (!checkIfOnlyLetters(name)) return;
    return true;
}

function validateLastName() {
    if (checkIfEmpty(lastName)) return;
    if (!checkIfOnlyLetters(lastName)) return;
    return true;
}

function validateEmail() {
    if (checkIfEmpty(email)) return;
    if (!containsCharacters(email, 1)) return;
    return true;
}


function setInvalid(field, message) {
    field.class = 'invalid';
    field.nextElementSibling.nextElementSibling.innerHTML = message;
}

function setValid(field) {
    field.class = 'valid';
    field.nextElementSibling.nextElementSibling.innerHTML = '';
}

function checkIfEmpty(field) {
    if (isEmpty(field.value.trim())) {
        setInvalid(field, `<span class="star" >*</span>This field is required`);
        return true;
    } else {
        setValid(field);
        return false;
    }
}

function isEmpty(value) {
    if (value === '') return true;
    return false;
}

function checkIfOnlyLetters(field) {
    if (/^[a-zA-Z ]+$/.test(field.value)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `<span class="star" >*</span> ${field.name} must contain only letters`);
        return false;
    }
}

function containsCharacters(field, code) {
    let regEx;
    switch (code) {
        case 1:
            // email pattern
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return matchWithRegEx(regEx, field, `<span class="star" >*</span>Enter a valid email address`);
        default:
            return false;
    }
}

function matchWithRegEx(regEx, field, message) {
    if (field.value.match(regEx)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, message);
        return false;
    }
}