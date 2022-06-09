let input = document.querySelector("h2");
let buttons = document.querySelectorAll('button');
let intialvalue = 0
buttons.forEach(elm =>{
    elm.addEventListener('click', (e) =>{
        if(e.target.innerText == "="){
            input.innerText = eval(input.innerText)
            return input.innerText
        }else if(e.target.innerText == "C"){
             input.innerText = intialvalue;
             return input.innerText
        }
        else {
            input.innerText += e.target.innerText
        }
    })
})
