let user_choice = document.getElementById('user-choice');
let computer_choice = document.getElementById('computer-choice');
let result_choice = document.getElementById('result');
let button = document.querySelectorAll('button');

let computer;
let user;
let result;


button.forEach(elm =>{
    elm.addEventListener("click", (event)=>{
        user = event.target.id;
        user_choice.innerHTML = user

     computerGenerated()   
     resultGenearted()
    })
})

function computerGenerated(){
    let randomNumber = Math.floor(Math.random()* 3 + 1)

    if(randomNumber === 1){
     computer = 'rock'
    }
    if(randomNumber === 2) {
        computer = 'scissors'
    }
    if(randomNumber === 3) {
        computer = 'paper'
    }
    computer_choice.innerHTML = computer
}

function resultGenearted(){
    if(computer === user){
        result = "it's a draw"
    }
    if(computer === 'rock' && user === "scissors"){
        result = "you lost"
    }
    if(computer === 'rock' && user === "paper"){
        result = "you win"
    }
    if(computer === 'paper' && user === "rock"){
        result = "you lost"
    }
    if(computer === 'paper' && user === "scissors"){
        result = "you win"
    }
    if(computer === 'scissors' && user === "rock"){
        result = "you win"
    }
    if(computer === 'scissors' && user === "paper"){
        result = "you lost"
    }
    result_choice.innerHTML = result
    
}

