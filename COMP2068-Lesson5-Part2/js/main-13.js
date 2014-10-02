window.onload = function () {
    var theCanvas = document.getElementById('myCanvas');
    var ctx = theCanvas.getContext("2d");

    var theString = "Hello World!";

    // draw the string
    ctx.font = "40pt Georgia";
    ctx.fillStyle = "blue";
    ctx.fillText(theString, 20, 50);
}