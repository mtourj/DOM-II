// Your code goes here

// State variables
let nightMode = false;

// Pointers
const page = document.querySelectorAll('*');
const mainNav = document.querySelector(".main-navigation")
const containerHome = document.querySelector(".container.home")
const funBusBanner = document.getElementById("banner")

mainNav.addEventListener("mouseover", () =>{
  mainNav.classList.add("shadowed")
})

mainNav.addEventListener("mouseout", ()=>{
  mainNav.classList.remove("shadowed")
})

window.addEventListener("load", ()=>{
  mainNav.classList.add("fadeIn")
  mainNav.classList.add("moveUp")
})

window.addEventListener("transitionend", ()=> {
  containerHome.classList.add("fadeIn")
})

document.addEventListener("dblclick", () => {
  window.getSelection().removeAllRanges()
  document.getSelection().empty()
})

funBusBanner.addEventListener('dragover', () =>{
  event.stopPropagation()
  event.preventDefault()

  event.dataTransfer.dropEffect = 'copy';
})

funBusBanner.addEventListener("drop", () =>{
  event.preventDefault()
  event.stopPropagation()

  file = event.dataTransfer.files[0]

  const reader = new FileReader()

  reader.onload = e => {
    funBusBanner.setAttribute("src", e.target.result)
  }
}, false)

window.addEventListener("keydown", () => {
  nightMode = !nightMode;

  page.forEach (el => {
    if(nightMode){
      el.classList.add("nightMode");
    } else {
      el.classList.remove("nightMode");
    }
  })
})