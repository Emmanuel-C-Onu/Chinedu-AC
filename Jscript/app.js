const mnb = document.querySelector(".nav-menu-btn");
const mnl = document.querySelector(".mobile-nav-links");
const heda = document.querySelector("header");
const form = document.querySelector("form");
let back2Top = document.querySelector(".back-to-top");
let back2TopContainer = document.querySelector(".back-to-top-container");
let navContainer = document.querySelector(".nav-container");
let li = document.querySelectorAll(".li-nav-link");


 for (let i = 0; i < li.length; i++) {
   li[i].addEventListener("click", function () {
     mnl.classList.remove("h-[350px]");
   });
 }
    


window.addEventListener("scroll", () => {
  scrollY > 145
    ? navContainer.classList.add("fixed")
    : navContainer.classList.remove("fixed");
});




window.addEventListener('scroll', () => {
  scrollY > 1000 
  ? back2TopContainer.classList.remove('hidden')  
  : back2TopContainer.classList.add("hidden");
  
})

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


function b2t() {
  scrollTo({ top: 0, behavior: "smooth" });

}
back2Top.addEventListener("click", b2t);



ourWork.forEach((data) =>{
  let eachProduct = document.querySelector(".what-we-do");



  eachProduct.innerHTML += `
          <div class="w-[17rem] grid place-items-center">
            <img class="w-[10rem] lg:w-[17rem] h-[8] lg:h-[10rem]" src="${data.image}" alt="">
            <h2 class="py-2 font-black text-center">${data.title}</h2>
          </div>
  
  `;
})
sevices.forEach((data) => {
  let eachProduct = document.querySelector(".Other-services");

  eachProduct.innerHTML += `
          <div class="w-[17rem] grid place-items-center">
            <img class="w-[10rem] lg:w-[17rem] h-[8] lg:h-[10rem]" src="${data.image}" alt="">
            <h2 class="py-2 font-black text-center">${data.title}</h2>
          </div>
  
  `;
});

for( const data of datas) {
  let eachProduct = document.querySelector(".projects");
  eachProduct.innerHTML += `
          <div class="w-[17rem] grid place-items-center">
            <img class="w-[10rem] lg:w-[17rem] h-[8] lg:h-[10rem]" src="${data.image}" alt="">
            <h2 class="py-2 font-black text-center">${data.title}</h2>
          </div> 
  `;
};

/*
projects.forEach((data) => {
  let eachProduct = document.querySelector(".projects");

  eachProduct.innerHTML += `
          <div class="w-[17rem] grid place-items-center">
            <img class="w-[10rem] lg:w-[17rem] h-[8] lg:h-[10rem]" src="${data.image}" alt="">
            <h2 class="py-2 font-black text-center">${data.title}</h2>
          </div>
  
  `;
});
*/