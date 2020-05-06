// Your code goes here
//general get function
function get(selector){
  return document.querySelector(selector)  
}


//MouseOver
let home = get('nav a')

home.addEventListener('mouseover', function(event){
    event.target.style.color = 'purple'
    setTimeout(function(){
        event.target.style.color = ''
    }, 500)
}, false)


//Keydown
let nav = get('.main-navigation')

function onEscape(event){
    if(event.key === 'Escape'){
       nav.style.backgroundColor = 'red'
    }
}
document.addEventListener('keydown', onEscape)

//wheel
const growButton = get('.btn')
//let growButton = getAll('.btn')
//const buttonArr = Array.from(growButton)
function grow(event){
    growButton.style.fontSize = '3rem'
}
document.addEventListener('wheel', grow)

//drag/drop

const dragged = get('.content-section .img-content')

dragged.addEventListener('drag', function(event){

}, false)

// DROP DOESN'T WORK
// dragged.addEventListener('drop', function(event){
//     event.preventDefault()
//     if (event.target.className == 'img-content'){
//         event.target.style.background = ''
//         dragged.parentNode.removeChild(drags)
//         event.target.appendChild(drags);
//     }
// })
//focus
const topic = get('nav a')

topic.addEventListener('focus', (event) => {
    event.target.style.background = 'green'
})

topic.addEventListener('blur', (event) =>{
    event.target.style.background = ''
})
