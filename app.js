const elements = document.getElementById('elements-to-display');
const toggleButton = document.getElementById('toggle');

function toggle(){
    elements.style.display = "block";
    toggleButton.style.transform = "rotate(45deg)";
}


//cursor by DevEd
let mouseCursor = document.querySelector(".cursor");
let a = document.querySelectorAll("a, img");

window.addEventListener("mousemove", cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY +"px";
    mouseCursor.style.left = e.pageX +"px";
}

a.forEach(a => {
    a.addEventListener("mouseover", () =>{
        mouseCursor.classList.add("link-grow");
        a.classList.add('hovered-link');
    });
    a.addEventListener("mouseleave", () =>{
        mouseCursor.classList.remove("link-grow");
        a.classList.remove('hovered-link');
    });
});

//Skills slider  by w3schools
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}