let boxes = document.querySelector('.boxes')
function disco() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';

    return bgColor
}

for(let i = 0; i<500; i++){
    let div = document.createElement('div')
    div.classList.add('box')
    let h2 = document.createElement('h2')
     h2.innerText = randomnumber(500);
     div.append(h2)
     boxes.append(div)
}

function randomnumber(num) {
    let random = Math.floor(Math.random() * num)
    return random
}
 let allboxes = document.querySelectorAll('.box')

function handler(){
    allboxes.forEach(box =>{
        box.style.backgroundColor = disco();
        box.children[0].innerText = randomnumber(500)
    })
}

boxes.addEventListener("mousemove",handler)