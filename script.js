
let valueDisplays = document.querySelectorAll("#num");
let interval = 1000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue+"+";
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


var menuShutter = document.getElementById('menu_shutter');
var menuBtn = document.getElementById('menu_btn');
var open = 1;

menuBtn.addEventListener("click", myFunction);

function myFunction() {
    if(open==1){
      menuShutter.style.top=35+"px";
      menuBtn.innerHTML="❌";
        open=0;
    }else{
      menuShutter.style.top=-450+"px";
        menuBtn.innerHTML="☰";
        open=1;
    }
}

var button = document.getElementById('top');
window.addEventListener('scroll',show);
 function show(){
    if(window.pageYOffset>1200){
      button.style.display="block";
    }
    else{
      button.style.display="none";
    }
   
}

let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}