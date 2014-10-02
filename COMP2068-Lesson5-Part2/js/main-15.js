window.onload = function () {
    var theCanvas = document.getElementById('myCanvas');
    var ctx = theCanvas.getContext("2d");

    var butterfly = new Image();
    butterfly.src = "images/butterfly.png";
    butterfly.onload = drawButterflies;

    function drawButterflies() {
        ctx.drawImage(butterfly, 0, 0, 200, 138, 0, 0, 200, 138);
        ctx.drawImage(butterfly, 0, 0, 200, 138, 200, 0, 200, 138);
        ctx.drawImage(butterfly, 0, 0, 200, 138, 400, 0, 200, 138);
    }
}