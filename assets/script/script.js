
const loader= document.querySelector(".loding");


window.addEventListener("DOMContentLoaded",()=>{
    loader.classList.add('disable');
    setTimeout(() => {
        loader.style.display="none"
    }, 1000);
})