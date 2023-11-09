const header=document.querySelector(".header");
const primaryNav=document.querySelector(".primary-nav");
const navToggle=document.querySelector(".mobile-nav-toggle");
const navElem=document.querySelectorAll(".nav__elem");

////////////////////////////////////////////////////////////
//NAV MOVIL

//abre y cierra la navegacion movil
navToggle.addEventListener("click",()=>{//si hacemos click en el boton burguer
  const visibility=primaryNav.getAttribute("data-visible");//obtenemos el estado del menu

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

//Cuando paro el scroll oculto el nav a los 3s
window.addEventListener("scrollend",()=>{ 
  if((window.innerWidth>500) && (window.scrollY>100)){ 
    temporizador = setTimeout(()=>{
        header.classList.add("header--none");
    }, 3000);    
  }
});

////////////////////////////////////////////////////////////
//ANIMACIÓN ENTRADA DE BOXES
const boxes=document.querySelectorAll(".box");

//funcion callback para cuando el box entre en el viewport
let cargaBox =(entradas,observador)=>{
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      entrada.target.classList.add("box--visible");
    }
  });
}
let observador= new IntersectionObserver(cargaBox,{
  root:null,
  rootMargin:"0px",
  threshold:.2
})

boxes.forEach(box=>{
  observador.observe(box);
});

////////////////////////////////////////////////////////////
//FORMULARIO
const formulario=document.querySelector("#contact__form");
const loader=document.querySelector(".form__feedback--loader");
const divFeedback=document.querySelector(".form__feedback--message");
const pFeedback=document.querySelector(".form__messsage");

formulario.addEventListener("submit",evento=>{
  evento.preventDefault();
  
  loader.classList.add("form--visible");

  const data = new FormData(formulario);

  fetch('php/send.php', {
     method: 'POST',
     body: data
  })
  .then(function(response) {
     if(response.ok) {
         return response.text()
     } else {
         throw "Error en la llamada Ajax";
     }

  })
  .then(function(texto) {
    loader.classList.remove("form--visible");
    pFeedback.innerHTML="Gracias por contactar conmigo";
    divFeedback.classList.add("form--visible");
    temporizador = setTimeout(()=>{
        divFeedback.classList.remove("form--visible");
    }, 4000); 
     console.log(texto);
  })
  .catch(function(err) {
    loader.classList.remove("form--visible");
    pFeedback.innerHTML="Ha habido algún problema al enviar el formulario. Por favor, contacta conmigo por otro canal.";
    divFeedback.classList.add("form--visible");
    temporizador = setTimeout(()=>{
        divFeedback.classList.remove("form--visible");
    }, 4000); 
     console.log(err);
  });
  
});


