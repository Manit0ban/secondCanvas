// CANVAS

var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 500;

// BACKGROUND

ctx.fillStyle = 'navy';
ctx.fillRect(0, 0, 500, 500);