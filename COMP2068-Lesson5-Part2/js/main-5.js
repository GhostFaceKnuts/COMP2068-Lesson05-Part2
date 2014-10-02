window.onload = function () {
    var theCanvas = document.getElementById('myCanvas');
    var ctx = theCanvas.getContext("2d");
    // draw just a stroked rectangle
    ctx.lineWidth = 5;
    ctx.strokeStyle = "blue";
    ctx.strokeRect(25, 25, 100, 125);

    // draw just a filled rectangle
    ctx.fillStyle = "green";
    ctx.fillRect(175, 25, 100, 125);

    // draw a stroked and filled rectangle
    ctx.strokeStyle = "red";
    ctx.fillStyle = "yellow";
    ctx.lineWidth = 10;
    ctx.fillRect(325, 25, 100, 125);
    ctx.strokeRect(325, 25, 100, 125);

    //clear a rectangle
    ctx.clearRect(15, 75, 450, 50);
}