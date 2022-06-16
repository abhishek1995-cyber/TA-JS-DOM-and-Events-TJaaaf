let input = document.querySelector("#text");
let root = document.querySelector("ul");
let all = document.querySelector('.all');
let active = document.querySelector('.active');
let completed = document.querySelector('.completed');
let clear = document.querySelector('.clear');

let alltodos = JSON.parse(localStorage.getItem("todos")) ||[];

function handleInput(event){
    let value = event.target.value;
 
    if(event.keyCode === 13 && value !== ""){
    let todo = {
        name: value,
        isdone : false,
    };
    alltodos.push(todo);
    event.target.value = "";
    localStorage.setItem ("todos", JSON.stringify(alltodos));
    createui();
    }
};

function handleToggle(event){
    let id = event.target.dataset.id;
    alltodos[id].isdone = !alltodos[id].isdone;
    localStorage.setItem ("todos", JSON.stringify(alltodos));
    createui();
}

function handleRemove(event){
    let id = event.target.dataset.id
    alltodos.splice(id,1);
    localStorage.setItem ("todos", JSON.stringify(alltodos));
    createui();
}

function createui(data = alltodos){
    root.innerHTML = "";
    data.forEach((todo, index) =>{
    let li = document.createElement('li');
    li.classList.add("flex")
    let input1 = document.createElement('input');
    input1.type = "checkbox";
    

    input1.setAttribute("data-id", index);
    input1.addEventListener("change",handleToggle);
    input1.checked = todo.isdone;


    let p = document.createElement('p');
    p.innerText = todo.name;
    let span = document.createElement('span');
    span.innerText = "❌"
    span.setAttribute("data-id", index);

    span.addEventListener("click", handleRemove);

    li.append(input1,p,span);
    root.append(li);
});
};


all.addEventListener("click", () =>{ 
    let fullDetail = alltodos.map((todo) => todo )
    createui(fullDetail);
});

active.addEventListener("click", () =>{ console.log("done");
    let remaining = alltodos.filter((todo) => !todo.isdone);
    createui(remaining);
});

completed.addEventListener("click", () =>{ console.log("done");
    let com = alltodos.filter((todo )=> todo.isdone);
    createui(com)
});

clear.addEventListener("click", () =>{ 
    alltodos = alltodos.filter((todo) => !todo.isdone)
    createui();
})


input.addEventListener('keyup', handleInput);