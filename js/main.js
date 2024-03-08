const navTriggerBtn = document.querySelector("#nav-tigger-btn")
const navMenu = document.querySelector("#nav-menu")

navTriggerBtn.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-open")
})
