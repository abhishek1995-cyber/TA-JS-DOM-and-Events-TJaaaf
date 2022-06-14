let boxes = document.querySelector('.second')

boxes.addEventListener("click", (event) =>{
    let text = event.target.dataset.text;
    console.log(text)
    event.target.innerText = text

    setTimeout(() =>{
        event.target.innerText = ""
    },5000)
})




let box1 = document.querySelectorAll('.first li')


box1.forEach((elm , index) => {
    elm.addEventListener("click", (event) => {
        console.log(event.target)
     event.target.innerText = index + 1;

        setTimeout(()=>{
       event.target.innerText = ""
        },5000)
    })
})
