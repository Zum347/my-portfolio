// eslint-disable-next-line no-unused-vars
const hamburger = document.querySelector("#hamburger");
// eslint-disable-next-line no-unused-vars
const menu = document.querySelector("#menu");
// eslint-disable-next-line no-unused-vars
const moon = document.querySelector("#moon");
// eslint-disable-next-line no-unused-vars
const hLinks = document.querySelectorAll("#hLinks");
// eslint-disable-next-line no-unused-vars
const body = document.querySelector("body");

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  });

  hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
      menu.classList.toggle("hidden")
      hamburger.classList.toggle("bg-white")
    })
  })
  
  moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
  })

