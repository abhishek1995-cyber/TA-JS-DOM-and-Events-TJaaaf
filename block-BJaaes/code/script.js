let form = document.querySelector('form')

let usernameError = ""

function success(user){
    let elm = form.elements[user];
    elm.nextElementSibling.innerText = "";
    usernameError = "";
    elm.parentElement.classList.remove("error");
    elm.parentElement.classList.add("success")
    
}

function error(user){
    let elm = form.elements[user]
    elm.nextElementSibling.innerText = usernameError[user]
    elm.parentElement.classList.add("error");
}

function handleSubmit(event){
    event.preventDefault();

    let username = event.target.elements.username;
    let name = event.target.elements.name
    let email = event.target.elements.email;
    let phone = event.target.elements.phone;
    let password = event.target.elements.password;
    let passwordCheck = event.target.elements.passwordCheck;

    

    if(username.value.length < 4){
      usernameError = `username can't be less than 4 characters`
      username.nextElementSibling.innerText = usernameError
    }else{
       success('username')
    }
    //Name can't be numbers
    if(name.value.split('').some(e => Number(e))){
       usernameError = "You can't use number in the name field"
       name.nextElementSibling.innerText = usernameError
    } else{
        success("name")
    }
    //Email must contain the symbol `@`
     if(!email.value.includes('@')){
        usernameError = "Not a valid email"
        email.nextElementSibling.innerText = usernameError
    }else if(email.value.length <= 6){
        usernameError = "Not a valid email"
        email.nextElementSibling.innerText = usernameError
    } else{
        success("email")
    }
//Phone numbers can only be a number

     if(!typeof phone.value == "number" ){
        usernameError = "Phone number can only contain numbers not less than 7 "
        phone.nextElementSibling.innerText = usernameError
    } else if(phone.value.length < 7){
        usernameError = "Phone number can only contain numbers not less than 7 "
        phone.nextElementSibling.innerText = usernameError
    }else{
        success("phone")
    }

    // Password and confirm password must be same.

    if(password.value !== passwordCheck.value){
        usernameError = " Password and confirm password must be same"
        password.nextElementSibling.innerText = usernameError;
    }  else{
        success("password")
        success("passwordCheck")
    }
    
}

form.addEventListener("submit", handleSubmit);


