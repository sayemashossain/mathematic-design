var canvasWidth = document.querySelector("#canvasDiv").offsetWidth;
var canvasHeight = document.querySelector("#canvasDiv").offsetHeight;

var o = window.document.getElementById("canvasDiv");
o.innerHTML="<canvas id='myCanvas' width='"+canvasWidth+"' height='"+canvasHeight+"'></canvas>";
console.log(canvasWidth + " " + canvasHeight);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var i;
for (i = 0; i < canvasWidth; i += 30) {
    for (j = 0; j < canvasHeight; j += 30) {

        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;

        if (i % 60 == 0) {
            ctx.beginPath();
            ctx.moveTo(i, j);
            ctx.lineTo((i + 30), j);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(i, j);
            ctx.lineTo(i, (j + 30));
            ctx.stroke();

        }
        else {
            ctx.beginPath();
            ctx.moveTo(i, j);
            ctx.lineTo((i + 30), j);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(i, j);
            ctx.lineTo(i, (j + 30));
            ctx.stroke();

        }
    }
}
