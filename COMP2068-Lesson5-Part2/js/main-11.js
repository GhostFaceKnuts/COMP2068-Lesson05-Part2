window.onload = function () {
    var theCanvas = document.getElementById('myCanvas');
    var ctx = theCanvas.getContext("2d");

    ctx.strokeStyle = "blue";
    ctx.fillStyle = "red";
    ctx.lineWidth = 5;

    // stroke and fill a circle
    ctx.beginPath();
    ctx.arc(100, 100, 75, 0, 1.5 * Math.PI, false);
    ctx.stroke();
}