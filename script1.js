const ham=document.querySelector('.btn');
const links=document.querySelector('.nav-links');
ham.addEventListener('click',()=>{
    links.classList.toggle('mobile')
})