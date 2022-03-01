// menu target
// menu header
let home = document.getElementById('home'),
    about = document.getElementById('about'),
    resume = document.getElementById('resume'),
    blog = document.getElementById('blog'),
    contact = document.getElementById('contact');

// main div
let mainDdev = document.querySelector('.mould');

home.addEventListener('click',()=>{
    mainDdev.style.top = "0"; 
})
about.addEventListener('click',()=>{
    mainDdev.style.top = "-100vh"; 
})
// resume.addEventListener('click',()=>{
//     mainDdev.style.top = "-200vh"; 
// })
// contact.addEventListener('click',()=>{
//     mainDdev.style.top = "-300vh"; 
// })