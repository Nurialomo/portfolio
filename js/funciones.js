const header=document.querySelector(".header");
const primaryNav=document.querySelector(".primary-nav");
const navToggle=document.querySelector(".mobile-nav-toggle");
const navElem=document.querySelectorAll(".nav__elem");

////////////////////////////////////////////////////////////
//NAV MOVIL

//abre y cierra la navegacion movil
navToggle.addEventListener("click",()=>{
  const visibility=primaryNav.getAttribute("data-visible");

  if(visibility==="false" || visibility===""){
    primaryNav.setAttribute("data-visible","true");
    navToggle.setAttribute("aria-expanded","true");
  }else{
    primaryNav.setAttribute("data-visible","false");
    navToggle.setAttribute("aria-expanded","false");
  }
});

//cierra la navegación cuando se clica un enlace
navElem.forEach(elem=>{
  elem.addEventListener("click",()=>{
   primaryNav.setAttribute("data-visible","false");
   navToggle.setAttribute("aria-expanded","false");
  });
})

////////////////////////////////////////////////////////////
//NAV BG
let temporizador;
window.addEventListener("scroll",()=>{
  if (temporizador!=undefined){clearTimeout(temporizador);}//cancelo ocultar nav si nos hemos movido
  if((window.innerWidth>500) && (window.scrollY>100)){ //si no es version mobil y no estamos al principio de la pagina
    header.classList.remove("header--none");
    header.classList.add("header--bg");
    return;
  }
  header.classList.remove("header--bg");
});


window.addEventListener("scrollend",()=>{ 
  if((window.innerWidth>500) && (window.scrollY>100)){ 
    temporizador = setTimeout(()=>{
        header.classList.add("header--none");
    }, 3000);    
  }
});