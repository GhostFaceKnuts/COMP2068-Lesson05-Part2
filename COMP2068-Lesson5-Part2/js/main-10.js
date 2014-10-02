window.onload = function () {
    var theCanvas = document.getElementById('myCanvas');
    var ctx = theCanvas.getContext("2d");

    ctx.strokeStyle = "blue";
    ctx.fillStyle = "red";
    ctx.lineWidth = 5;

    // stroke a quarter arc
    ctx.beginPath();
    ctx.arc(50, 150, 100, 1.5 * Math.PI, 2 * Math.PI);
    ctx.stroke();


}