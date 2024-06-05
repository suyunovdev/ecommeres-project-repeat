const menu = document.querySelector('.humburger') 
const  navLink = document.querySelector('.navlink')
menu.addEventListener('click',() =>{
    navLink.classList.toggle('show')
})

////////////////////
const btnOpen = document.querySelector('.people-str');
const btn = document.querySelector('.navbar')
btnOpen.addEventListener('click', () =>{
    btn.classList.add('open')
})
const btnClose = document.querySelector('.btn-open')

btnClose.addEventListener('click', () =>{
    btn.classList.remove('open')
})


