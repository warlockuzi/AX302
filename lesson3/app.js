console.log("test...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var ctx2 = c.getContext("2d");
ctx.moveTo(0,0);


/*ctx.beginPath();
ctx.arc(150,150,120,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle= "cyan";
ctx.fill();
*/
/*ctx.beginPath();
ctx.strokeStyle="lime";
ctx.moveTo(150,25);
ctx.lineTo(225,150);
ctx.lineTo(75,150);
ctx.closePath();
ctx.fillStyle="green";
*/
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(150,25);
ctx.lineTo(225,150);
ctx.lineTo(150,275);
ctx.lineTo(75,150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle="red";
ctx.fill();