const burger = document.querySelector('.burger');
const navLink = document.querySelector('.nav-link');


burger.addEventListener('click', () => {
    navLink.classList.toggle('active')
});






/*Partie Contact*/
const Inputname = document.getElementById('name');
const Inputemail = document.getElementById('email');
const BtnSend = document.getElementById('SendBtn');
const Msg = document.getElementById('textarea');
const Validename = document.getElementById('ValideName');
const Valideemail = document.getElementById('ValideEmail');
const ValideMsg = document.getElementById('ValideMsg');
const form = document.getElementById('formMessage');




BtnSend.addEventListener('click', function (e) {
    e.preventDefault();

    let allValid = true;

    if (!Inputname.value.trim()) {
        Validename.textContent = "This field is required"
        Validename.style.display = "block"
        Validename.style.color = "red"
        allValid = false
    } else {
        Validename.style.display = "none"
    }


    if (!Inputemail.checkValidity()) {
        Valideemail.textContent = "Please enter a valid email"
        Valideemail.style.display = "block"
        Valideemail.style.color = "red"
        allValid = false
    } else {
        Valideemail.style.display = "none"
    }


    if (!Msg.value.trim()) {
        ValideMsg.textContent = "Message should be not empty !"
        ValideMsg.style.display = "block"
        ValideMsg.style.color = "red"
        allValid = false
    } else {
        ValideMsg.style.display = "none"
    }


    if (allValid) {
        form.textContent = "Message sent successfully!"
        form.style.display = "block";
        Inputname.value = ""
        Inputemail.value = ""
        Msg.value = ""

    } else {
        form.style.display = "none"
    }


});
