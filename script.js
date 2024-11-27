
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