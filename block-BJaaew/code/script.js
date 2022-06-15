let cont = document.querySelector('.container');
let inputText = document.querySelector('input');
let btn = document.querySelector('.btn')

let allPeoples = got.houses.reduce((acc, cv)=>{
    cv.people.forEach(each =>{
        acc.push(each);
    })
    return acc;
},[])


function createUi(data ){
    cont.innerHTML = "";
    data.forEach(n => {
        let div = document.createElement('div')
        div.style.padding = "1.5rem"
        div.classList.add("box")
        div.classList.add("flex30")

        let div1 = document.createElement('div')
       div1.classList.add("box1")


        let img = document.createElement('img')
        img.classList.add('img')
        img.src = n.image
        img.style.borderRadius = "50%"
        img.style.marginRight = "1rem"
        img.style.objectFit = "cover"
        img.style.border = "2px solid green"
        img.style.width = "20%"
        img.style.height = "20%"

        let name = document.createElement('h2')
        name.innerText = n.name
        name.classList.add('name')
        name.style.fontWeight = "400"
        div1.append(img,name)

        let p = document.createElement('p')
        p.innerText = n.description
        p.style.fontSize = "0.9rem"
        p.style.fontWeight = "500"
        p.style.textAlign = "center"

        let nav = document.createElement('nav')
        nav.classList.add('nav')
        nav.style.textAlign = "center"
        nav.style.backgroundColor = "rgb(231,238,254)"
        nav.style.padding = "10px 0"
        nav.style.borderRadius = "7px"

        let a = document.createElement('a')
        nav.append(a)
        a.href = n.wikiLink
        a.style.textDecoration = "none"
        a.innerText = "Learn More!"
        a.style.color = "rgb(65,118,213)"
      


    div.append(div1,p,nav)
    cont.append(div);
    })
}


let tags = got.houses.map(house => house.name)

function handleTag(event){
   got.houses.filter(house => { 
       if(house.name == event.target.innerText){
           let gotPeople = house.people.map(elm => elm)
           console.log(gotPeople)
           createUi(gotPeople)
       }
   })
}

function createTags(tag){
    tag.forEach(elm => {
        let btn1 = document.createElement("button")
        btn1.innerText = elm;
        btn.append(btn1)

        btn1.addEventListener('click',handleTag);
    })
}
createUi(allPeoples);
createTags(tags)

function handleInput(event){
    let value = event.target.value
   let searchedPeople =   allPeoples.filter(people => people.name.includes(value))
     createUi(searchedPeople)
}

inputText.addEventListener("input",handleInput)

