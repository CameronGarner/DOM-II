// Your code goes here
let logoheading = document.querySelector(".logo-heading")

function anon(){
logoheading.style.color = "red"
}
//first event
document.addEventListener("keydown",anon)

function anon2(){
    logoheading.style.color = "purple"
}
//second event
document.addEventListener("keyup",anon2)



let links = document.querySelectorAll("a")

function link2color(){
links[2].style.color = "green"
}
//third event
document.addEventListener("click",link2color)


function link1color(){
    links[1].style.color = "magenta"
}
//fourth event
document.addEventListener("contextmenu",link1color)

function link0size(){
    links[0].style.fontSize = "200px"
}



//fifth event
links[0].addEventListener("dblclick",link0size)


//sixth event
links[0].addEventListener("mouseleave",function(){links[0].style.fontSize = "16px"})

let firstimg = document.querySelector("img")
//seventh event
firstimg.addEventListener("mousedown",function(){firstimg.style.border = "20px orange dotted"})
//eigth event
firstimg.addEventListener("mouseup",function(){firstimg.style.border = "10px black dotted"})

let firsth2 = document.querySelector("h2")
//ninth event
firsth2.addEventListener("mouseover",function(){firsth2.style.color = "pink"})

//tenthevent
firsth2.addEventListener("mousemove",function(){firsth2.style.fontSize = "10px"})

//preventing first links default
links[0].addEventListener("click",function(event){event.preventDefault()})


let firstdiv = document.querySelector("div")

function border(event){
 firstdiv.style.border = "10px solid pink"
}

firstdiv.addEventListener("dblclick",border)

//stopping propagation.commenting out reults in firstdiv event listener propagating
links[0].addEventListener("dblclick",function(event){event.stopPropagation()})