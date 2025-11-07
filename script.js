const burger = document.querySelector('.burger');
const navLink = document.querySelector('.nav-link');


burger.addEventListener('click', () => {
    navLink.classList.toggle('active')
});



const form = document.querySelector('#contact');
const inputs = document.querySelectorAll('.right input, .right textarea');
const errors = document.querySelectorAll('.error');

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let allValid = true;

    inputs.forEach((input, index) => {
        if (input.value.trim() === "") {
            errors[index].textContent = 'This field is required';
            errors[index].style.color = 'red';
            allValid = false;
        } else if (input.type === "email" && !isValidEmail(input.value)) {
            errors[index].textContent = 'Please enter a valid email';
            errors[index].style.color = 'red';
            allValid = false;
        } else {
            errors[index].textContent = '';
        }

        input.value = "";
    });

    if (allValid) {
        const successMsg = document.createElement('p');
        successMsg.textContent = 'Message sent successfully!';
        successMsg.style.color = 'green';
        form.appendChild(successMsg);
    }
});
