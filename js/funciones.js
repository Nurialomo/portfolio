const primaryNav=document.querySelector(".primary-nav");
const navToggle=document.querySelector(".mobile-nav-toggle");
console.log(navToggle);

navToggle.addEventListener("click",()=>{
  const visibility=primaryNav.getAttribute("data-visible");

  if(visibility==="false" || visibility===""){
    primaryNav.setAttribute("data-visible","true");
    navToggle.setAttribute("aria-expanded","true");
  }else{
    primaryNav.setAttribute("data-visible","false");
    navToggle.setAttribute("aria-expanded","false");
  }
})