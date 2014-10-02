window.onload = function () {
    var theCanvas = document.getElementById('myCanvas');
    var ctx = theCanvas.getContext("2d");

    ctx.strokeStyle = "blue";
    ctx.fillStyle = "red";
    ctx.lineWidth = 5;

    // draw an open path (not closed)
    ctx.beginPath();
    ctx.moveTo(25, 175);
    ctx.lineTo(50, 25);
    ctx.lineTo(125, 50);
    ctx.lineTo(175, 175);
    ctx.stroke();


}