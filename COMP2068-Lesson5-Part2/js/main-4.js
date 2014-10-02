window.onload = function () {
    var theCanvas = document.getElementById('myCanvas');
    var ctx = theCanvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(20, 20, 100, 100);

    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgba(0,0,255,1)";
    ctx.strokeRect(20, 20, 100, 100);
}