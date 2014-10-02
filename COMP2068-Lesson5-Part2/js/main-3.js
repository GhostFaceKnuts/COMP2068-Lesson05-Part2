window.onload = function () {
    var theCanvas = document.getElementById('myCanvas');
    var ctx = theCanvas.getContext("2d");
    ctx.fillStyle = "lightGray";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}