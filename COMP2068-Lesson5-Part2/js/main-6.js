window.onload = function () {
    var theCanvas = document.getElementById('myCanvas');
    var ctx = theCanvas.getContext("2d");
    // draw lines of varying widths
    for (var i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.lineWidth = i + 1;
        ctx.moveTo(25, 25 + i * 15);
        ctx.lineTo(475, 25 + i * 15);
        ctx.stroke();
    }

}