$(function () {
  function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    context = canvas.getContext("2d");
    context.translate(400, 400);

    var maxCircle = 55;
    var radius = 300;
    var size = 10;

    for (var i = 1; i <= maxCircle; i++) {
      context.fillStyle = 'hsl(' + 360 * Math.random() + ',100%,50%)';
      context.beginPath();
      context.arc(0, radius, size, 0, 2 * Math.PI, false);
      context.rotate((2 * Math.PI) / maxCircle);
      context.fill();
    }
  }
  init();
});
