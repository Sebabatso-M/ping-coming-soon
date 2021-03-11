const form = document.querySelector(".subscription__form");
const email_input = document.querySelector(".subscription__email");

form.addEventListener("submit", (e) => {
    if (!validate()) {
        e.preventDefault();
    } else {
        form.submit();
    }

}, false);

email_input.addEventListener("input", (e) => {
    e.preventDefault();
    removeErrors();
})

function validate() {
    const email = email_input.value.trim();

    removeErrors();

    if (email == "") {
        alertError();
        form.classList.add("--empty");
        return false;
    } else if (!isEmail(email)) {
        alertError();
        alert('yeeps')
        return false;
    }
    return true;

}

function alertError() {
    form.classList.add("subscription__form--err");
    email_input.setAttribute("placeholder", "example@email/com");
}

function isEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return regex.test(email);
}

function removeErrors() {
    form.classList.remove("--empty")
    form.classList.remove("subscription__form--err")
}