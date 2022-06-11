let form = document.querySelector('form')
let modal = document.querySelector('.modal_overlay')
let modalInfo = document.querySelector('.modal_info')
let close = document.querySelector('.modal_close');
let userInfo = {}


form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let elements = event.target.elements;
    
  userInfo.name = elements.text.value
  userInfo.Email = elements.email.value
  userInfo.movie = elements.gender.value
  userInfo.color = elements.color.value
  userInfo.rating = elements.rating.value
  userInfo.bookGenre = elements.drone.value
   userInfo.terms = elements.terms.checked

   
   close.addEventListener('click', () => {
       modal.innerHTML = ""
   })
   createUl(userInfo)
})




function createUl(data = {}){
 document.querySelector("body").innerHTML = "";
 close.style.display = "block";
 close.style.position = "absolute"
 close.style.top = "1rem"
close.style.right = "0rem"

let name =  document.createElement('h2')
name.innerText = `Hello ${data.name}`;

let email = document.createElement('address');
email.innerText = `Email: ${data.Email}`

let movie = document.createElement('p');
movie.innerText = `You Love: ${data.movie}`

let color = document.createElement('p');
color.innerText = `Color: ${data.color}`

let rating = document.createElement('p');
rating.innerText = `Rating: ${data.rating}`

let bookGenre = document.createElement('p');
bookGenre.innerText = `Book Genre: ${data.bookGenre}`

let terms = document.createElement('a')
terms.innerText = "you agree to terms and condition"

modalInfo.append( name,email,movie,color,rating,bookGenre,terms)
modal.append(modalInfo)
document.querySelector("body").append(modal);

}

