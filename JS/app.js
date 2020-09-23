const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')
// for lines of hamburger
const lines = document.querySelectorAll('.line')

let shouldoverflow=true;

hamburger.addEventListener("click",() => {
    shouldoverflow=(shouldoverflow)?false:true;
    document.documentElement.style.overflow = (shouldoverflow)?'auto':'hidden';    
    navLinks.classList.toggle("open")
    links.forEach(link => {
        link.classList.toggle("fade")    
    })
    lines.forEach(line => {
        line.classList.toggle("changecolour")
    })
})





