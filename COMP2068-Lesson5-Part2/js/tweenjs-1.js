var stage;
var count = 0;
function init() {
    stage = new createjs.Stage(document.getElementById('myCanvas'));
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    start();
}
function handleTick(e) {
    stage.update();
}
function start() {
    drawButterflies();
}
function drawButterflies() {
    var imgPath = 'images/butterfly.png';
    butterfly = new createjs.Bitmap(imgPath);
    stage.addChild(butterfly);
    stage.update();
    setTimeout(tweenButterfly, 100);
}
function tweenButterfly() {
    createjs.Tween.get(butterfly).to({ y: 100 }, 1000).call(butterflyGone, [butterfly], this);
}
function butterflyGone(butterfly) {
    stage.removeChild(butterfly);
}