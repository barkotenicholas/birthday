const date = document.getElementById('birthday')
const male = document.getElementById('male')
const female = document.getElementById('female')

// validate function

function validate(){
    let defaultdate = date.defaultdate;
    let currentdate = date.value;

    if(defaultdate == currentdate){
        setError("Please input date " ,date)
    }
    
}

function setError(message,input){
    
}   