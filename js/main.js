const date = document.getElementById('birthday')
const male = document.getElementById('male')
const female = document.getElementById('female')
const form = document.getElementById('forms')


// validate function
form.addEventListener('submit',(e)=>{

    e.preventDefault()
    if(validate()){
        
    }
})
function validate(){

    let defaultdate = date.defaultValue;
    let currentdate = date.value;




    if((defaultdate === currentdate) && (!male.checked && !female.checked)){
        setError("Input valid email." ,date)
        setGenderError("Please check one gender",male)

    }
    else if(defaultdate === currentdate){
        setError("Input valid email." ,date)

    }else if(!male.checked && !female.checked){
        setGenderError("Please check one gender",male)
    }
    else{
        success("Valid email.",date)
        setGenderSuccess("Success ", male)

        return true;
    }



  
    
}

function setError(message,input){

    const formControl =input.parentElement;
    const small = formControl.querySelector('small.birthdaymsg');
    const ierror = formControl.querySelector('i.failureemail');
    small.innerHTML = message
    ierror.classList.remove("invisible")
}

function success(message,input){
    const formControl =input.parentElement;
    const small = formControl.querySelector('small.errormsg');
    const ierror = formControl.querySelector('i.successemail');
    small.innerHTML = message
    ierror.classList.remove("invisible")
}

function setGenderError(message,input){

    const formControl =input.parentElement;
    const small = formControl.querySelector('small.errormsg');
    const ierror = formControl.querySelector('i.failuregender');
    small.innerHTML = message
    ierror.classList.remove("invisible")

}
function setGenderSuccess(message,input){

    const formControl =input.parentElement;
    const small = formControl.querySelector('small.errormsg');
    const ierror = formControl.querySelector('i.successgender');
    small.innerHTML = message
    ierror.classList.remove("invisible")

}