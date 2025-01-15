const mnb = document.querySelector(".nav-menu-btn");
const mnl = document.querySelector(".mobile-nav-links");
const heda = document.querySelector("header");
const form = document.querySelector("form");

function closeMobileNav() {
 setTimeout(() => {
   mnl.classList.remove('h-[350px]')
 }, 1500);
}
mnb.addEventListener('click', () =>{
  mnl.classList.toggle('h-[350px]')
})
heda.addEventListener("mouseleave", closeMobileNav);

form.addEventListener('submit', (r)=>{
  r.preventDefault()
  alert("Kindly Call us with 0706 365 5056");
})
