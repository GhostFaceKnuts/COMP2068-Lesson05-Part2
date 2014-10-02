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
        /* call moveButterfly function after a delay of 1 second */
        setTimeout(moveButterfly, 1000);
    }

    function moveButterfly() {
        /* Clear the Canvas */
        ctx.clearRect(0, 0, theCanvas.width, theCanvas.height);
        ctx.drawImage(butterfly, 0, 0, 200, 138, 0, 0, 200, 138);
        /* Redraw middle butterfly in a new position */
        ctx.drawImage(butterfly, 0, 0, 200, 138, 200, 200, 200, 138);
        ctx.drawImage(butterfly, 0, 0, 200, 138, 400, 0, 200, 138);
    }
}