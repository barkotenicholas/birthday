const date = document.getElementById('birthday');
const male = document.getElementById('male');
const female = document.getElementById('female');
const form = document.getElementById('forms');

import {
    femaleNames,
    maleNames
} from './const.js'

var defaultdate;
var currentdate;
var gender;
// validate function
form.addEventListener('submit', (e) => {

    e.preventDefault();

    if (validate()) {

        var dateObject = new Date(currentdate);
        var day = dateObject.getDay();
        console.log(day);

        if (male.checked) {
            gender = "male";
            console.log(gender)
        } else if (female.checked) {
            gender = "female";
            console.log(gender)

        }
        if (gender == "male") {

            var nameObj = maleNames[day];
            var name = nameObj.name;
            var para = document.getElementById('ans');

            para.innerHTML = "Your Male Akan name is " + name;
        } else if (gender == "female") {

            var nameObj = femaleNames[day];
            var name = nameObj.name;
            var para = document.getElementById('ans');
            para.innerHTML = "Your Female Akan name is " + name;

        }

    }
})

// validate function 
function validate() {

    defaultdate = date.defaultValue;
    currentdate = date.value;


    if ((defaultdate === currentdate) && (!male.checked && !female.checked)) {

        setError("Input valid email.", date);
        setGenderError("Please check one gender", male);
        return false;

    } else if (defaultdate === currentdate) {

        setError("Input valid email.", date);
        return false;

    } else if (!male.checked && !female.checked) {

        setGenderError("Please check one gender", male);
        return false;

    } else {

        success("Valid email.", date);
        setGenderSuccess("Success ", male);
        return true;

    }





}

// birthday error
function setError(message, input) {

    const formControl = input.parentElement;
    const small = formControl.querySelector('small.birthdaymsg');
    const ierror = formControl.querySelector('i.failureemail');
    small.innerHTML = message
    ierror.classList.remove("invisible")
}
// email success
function success(message, input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small.errormsg');
    const ierror = formControl.querySelector('i.successemail');
    small.innerHTML = message
    ierror.classList.remove("invisible")
}

// gender error
function setGenderError(message, input) {

    const formControl = input.parentElement;
    const small = formControl.querySelector('small.errormsg');
    const ierror = formControl.querySelector('i.failuregender');
    small.innerHTML = message
    ierror.classList.remove("invisible")

}

//gender success
function setGenderSuccess(message, input) {

    const formControl = input.parentElement;
    const small = formControl.querySelector('small.errormsg');
    const ierror = formControl.querySelector('i.successgender');
    small.innerHTML = message
    ierror.classList.remove("invisible")

}