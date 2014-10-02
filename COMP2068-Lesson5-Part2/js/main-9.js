window.onload = function () {
    var theCanvas = document.getElementById('myCanvas');
    var ctx = theCanvas.getContext("2d");

    ctx.strokeStyle = "blue";
    ctx.fillStyle = "red";
    ctx.lineWidth = 5;

    // draw a closed path
    ctx.beginPath();
    ctx.moveTo(225, 175);
    ctx.lineTo(250, 25);
    ctx.lineTo(325, 50);
    ctx.lineTo(375, 175);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
}