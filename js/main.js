let gravityOf = {
    earth: 9.807,
    moon: 1.62,
    mars: 3.711,
    jupiter: 24.79,
    sun: 274
};
var inputWeight = document.getElementById("inputWeight");
var moon = document.getElementById("moon");
var jupiter = document.getElementById("jupiter");
var mars = document.getElementById("mars");
var sun = document.getElementById("sun");
inputWeight.addEventListener("change", function(ev){
    let input = inputWeight.value;
    moon.innerHTML = gravityOf.moon/gravityOf.earth*input;
    mars.innerHTML = gravityOf.mars/gravityOf.earth*input;
    jupiter.innerHTML = gravityOf.jupiter/gravityOf.earth*input;
    sun.innerHTML = gravityOf.sun/gravityOf.earth*input;
});

