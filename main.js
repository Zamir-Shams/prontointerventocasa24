'use strict';




//  EVENT HANDLING: add event on element
 

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



// NAVBAR: when navbar toggle clicked

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);




// HEADER: header active when window scroll down to 100px
 

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);





// GO TO TOP
const gotoTop = document.querySelector(".gototop");


// hiding arrow button when page is loaded using an arrow function
window.onload = ()=> {
   gotoTop.style.visibility = "hidden";
}

/*
showing arrow button when page is scrolled more than 600px using an arrow function
with the help of if-statements
*/

window.onscroll = ()=> {
   if(window.scrollY > 550){
      gotoTop.style.visibility = "visible";
   }
   
   else{
      gotoTop.style.visibility = "hidden"
   } 
};



// FAQ 
const faqBody = document.querySelectorAll(".faq-body");

 faqBody.forEach( function(evt) {
  evt.addEventListener("click", () => {
    evt.classList.toggle("active");
  })
 })





//  COOKIES
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
const rejectButton = document.getElementById("reject-cookie");

cookieButton.addEventListener("click", () =>{
   cookieContainer.classList.remove("active");
   localStorage.setItem("cookieBannerDisplayed", "true");
})

setTimeout( () =>{
   if(!localStorage.getItem("cookieBannerDisplayed"))
   cookieContainer.classList.add("active");
}, 2000);


rejectButton.addEventListener("click", () => {
   cookieContainer.classList.remove("active");
})








// TESTIMONIALS
// Makeshift carousel function that gets invoked with the Index to start it off, then the callback increments the index to recursively invoke the same function. Works even in IE11!
var testimonialItems = document.querySelectorAll(".item label");
var timer;
function cycleTestimonials(index) {
   timer = setTimeout(function() {
    var evt;
    if (document.createEvent){
      //If browser = IE, then polyfill
      evt = document.createEvent('MouseEvent');
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    } else {
      //If Browser = modern, then create new MouseEvent
      evt = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 20
          });
    }
    var ele = "." + testimonialItems[index].className;
    var ele2 = document.querySelector(ele)
    ele2.dispatchEvent(evt);
    index++; // Increment the index
    if (index >= testimonialItems.length) {
      index = 0; // Set it back to `0` when it reaches `3`
    }
    cycleTestimonials(index); // recursively call `cycleTestimonials()`
    document.querySelector(".testimonials").addEventListener("click", function() {
      clearTimeout(timer); //stop the carousel when someone clicks on the div
    });
  }, 2000); //adjust scroll speed in miliseconds
}
//run the function
cycleTestimonials(0);



// SENDING EMAIL
function sendMail(){
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  }

  emailjs.send("service_1i7uu6s","template_euzwcja",parms).then(alert("La tua email è stata inviata!"))
}

