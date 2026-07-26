const reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


reveals.forEach((element)=>{


let windowHeight = window.innerHeight;

let top = element.getBoundingClientRect().top;


if(top < windowHeight - 100){

element.classList.add("active");

}


});


});
