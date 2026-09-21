function toggleMenu(){
  document.getElementById("mobileNav").classList.toggle("open");
}
function closeMenu(){
  document.getElementById("mobileNav").classList.remove("open");
}
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",function(){
    const target=document.querySelector(this.getAttribute("href"));
    if(target){
      setTimeout(()=>target.scrollIntoView({behavior:"smooth",block:"start"}),10);
    }
  });
});
window.addEventListener("scroll",()=>{
  const nav=document.querySelector(".mobile-nav");
  if(window.scrollY>120) nav.style.boxShadow="0 4px 18px rgba(0,0,0,.12)";
  else nav.style.boxShadow="none";
});
