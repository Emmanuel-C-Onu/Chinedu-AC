const mnb = document.querySelector(".nav-menu-btn");
const mnl = document.querySelector(".mobile-nav-links");
const heda = document.querySelector("header");
const form = document.querySelector("form");
let back2Top = document.querySelector(".back-to-top");
let back2TopContainer = document.querySelector(".back-to-top-container");
let navContainer = document.querySelector(".nav-container");
let li = document.querySelectorAll(".li-nav-link");

for (let each of li) {
  each.addEventListener("click", () => {
    mnl.classList.remove("h-[350px]");
  });
}

window.addEventListener("scroll", () => {
  scrollY > 145
    ? navContainer.classList.add("fixed")
    : navContainer.classList.remove("fixed");
});

window.addEventListener("scroll", () => {
  scrollY > 1000
    ? back2TopContainer.classList.remove("hidden")
    : back2TopContainer.classList.add("hidden");
});

function closeMobileNav() {
  setTimeout(() => {
    mnl.classList.remove("h-[350px]");
  }, 1500);
}
mnb.addEventListener("click", () => {
  mnl.classList.toggle("h-[350px]");
});
heda.addEventListener("mouseleave", closeMobileNav);

form.addEventListener("submit", (r) => {
  r.preventDefault();
  alert("Kindly Call us with 0706 365 5056");
});

function b2t() {
  scrollTo({ top: 0, behavior: "smooth" });
}
back2Top.addEventListener("click", b2t);

ourWork.forEach((data) => {
  let eachProduct = document.querySelector(".what-we-do");

  eachProduct.innerHTML += `
          <div class="w-[17rem] grid place-items-center">
            <img class="w-[10rem] lg:w-[17rem] h-[8rem] lg:h-[10rem]" src="${data.image}" alt="">
            <h2 class="py-2 font-black text-center">${data.title}</h2>
          </div>
  
  `;
});
sevices.forEach((data) => {
  let eachProduct = document.querySelector(".Other-services");

  eachProduct.innerHTML += `
          <div class="w-[17rem] grid place-items-center">
            <img class="w-[10rem] lg:w-[17rem] h-[8rem] lg:h-[10rem]" src="${data.image}" alt="">
            <h2 class="py-2 font-black text-center">${data.title}</h2>
          </div>
  
  `;
});

for (const e of datas) {
  let eachProduct = document.querySelector(".projects");
  eachProduct.innerHTML += `
          <div class="w-[17rem] grid place-items-center">
            <img class="w-[10rem] lg:w-[17rem] h-[8rem] lg:h-[10rem]" src="${e.image}" alt="">
            <h2 class="py-2 font-black text-center">${e.title}</h2>
          </div> 
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    perPage: 2, // Number of items per row
    perMove: 1, // Moves in sets of 3
    gap: "10px",
    autoplay: true,
    breakpoints: {
      992: { perPage: 1 },
    },
  }).mount();
});

function scrollIntoView() {
  const yearsOfExperience = document.querySelector(".yearsOfExperience");
  const projectCompleted = document.querySelector(".projectCompleted");
  const happyCustomers = document.querySelector(".happyCustomers");
  const awardWinning = document.querySelector(".awardWinning");

  let count = 0;
  let intervalID = setInterval(clearIntervalFunction, 75);

  function clearIntervalFunction() {
    count++;
    if (count > 99) {
      clearInterval(intervalID);
    }

    yearsOfExperience.innerText = scale(count, 0, 100, 0, 25).toFixed(0);
    projectCompleted.innerText = scale(count, 0, 100, 0, 4000).toFixed(0);
    happyCustomers.innerText = scale(count, 0, 100, 0, 2325).toFixed(0);
    awardWinning.innerText = scale(count, 0, 100, 0, 30).toFixed(0);

    function scale(value, inMin, inMax, outMin, outMax) {
      return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
    }
  }
}

const inView = document.querySelector(".in-view");

function observerFunc(entries) {
  for (const entry of entries) {
    entry.isIntersecting && scrollIntoView();
  }
}

const observer = new IntersectionObserver(observerFunc, {threshold: 0.75 });
observer.observe(inView);