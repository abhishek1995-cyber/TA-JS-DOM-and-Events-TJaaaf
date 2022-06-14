let box1 = document.querySelector('.first')
let box2 = document.querySelector('.second')

box1.addEventListener('click',function(){
    var x = Math.floor(Math.random() * 956);
    var y = Math.floor(Math.random() * 956);
    var z = Math.floor(Math.random() * 956);
    var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';

    box1.style.backgroundColor = bgColor;
})

box2.addEventListener('mousemove',function(){
    var x = Math.floor(Math.random() * 956);
    var y = Math.floor(Math.random() * 956);
    var z = Math.floor(Math.random() * 956);
    var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';

    box2.style.backgroundColor = bgColor;
})

