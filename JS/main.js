console.log("Hello World");

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;
//c.lineWidth= 5;
//c.globalAlpha = 0.5;

var mousex = 0;
var mousey = 0;

addEventListener("mousemove", function () {
    mousex = event.clientX;
    mousey = event.clientY;
});



var grav = 0.99;
c.strokeWidth = 5;
function randomColor() {
    return (
        "rgba(" +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.ceil(Math.random() * 10) / 10 +
        ")"
    );
}