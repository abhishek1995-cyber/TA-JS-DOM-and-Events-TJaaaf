let form = document.querySelector('form');
let display = document.querySelector(".display")
let userInfo = "";
let inputmain = document.querySelector("#movieList");


function createui(data){
    inputmain.value= "";
    
    let ul = document.createElement('ul');
    ul.classList.add("flex");

    let input = document.createElement('input')
    input.type = "checkbox"

    let h2 = document.createElement('h2')
    h2.innerText = userInfo;

    let button = document.createElement('button')
    button.innerText = "X"

    button.addEventListener("click",() => {
        ul.style.display = "none"
    })

    ul.append(input,h2,button);
    display.append(ul)
}

function handleSubmit(event){
    event.preventDefault();

    let movie = event.target.elements.movie.value
    userInfo = movie;

      
    createui(userInfo)
    

}
form.addEventListener("submit",handleSubmit);

