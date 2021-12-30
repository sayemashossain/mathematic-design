var i;
var lineInterval = 30;
var randomColor = Math.floor(Math.random()*16777215).toString(16);

var bgColour = randomColor.substr(-2, 2) + randomColor.substring(0,4);
console.log(randomColor);
console.log(bgColour);




var canvasWidth = document.querySelector("#canvasDiv").offsetWidth;//(document.querySelector("#canvasDiv").offsetWidth) - ((document.querySelector("#canvasDiv").offsetWidth) % lineInterval);
var canvasHeight = document.querySelector("#canvasDiv").offsetHeight; //(document.querySelector("#canvasDiv").offsetHeight) - ((document.querySelector("#canvasDiv").offsetHeight) % lineInterval);

var canvasDiv = window.document.getElementById("canvasDiv");
canvasDiv.innerHTML = "<canvas id='myCanvas' width='" + canvasWidth + "' height='" + canvasHeight + "'></canvas>";
// console.log(canvasWidth + " " + canvasHeight);

document.querySelector("#canvasDiv").style.backgroundColor = bgColour;


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");




ctx.strokeStyle = "#" + randomColor; //"green";
ctx.lineWidth = 10;
ctx.lineCap = "round";

for (i = 0; i < canvasWidth; i += lineInterval) {
    var rand = getRndInteger(0, 1);
    var j;
    if (rand == 0) { j = 0; }
    else { j = lineInterval; }

    for (; j < canvasHeight; j += lineInterval * 2) {
        ctx.beginPath();
        ctx.moveTo(i, j);
        ctx.lineTo(i, (j + lineInterval));
        ctx.stroke();
    }
}


for (j = 0; j < canvasHeight; j += lineInterval) {
    var rand = getRndInteger(0, 1);
    var i;
    if (rand == 0) { i = 0; }
    else { i = lineInterval; }

    for (; i < canvasWidth; i += lineInterval * 2) {
        ctx.beginPath();
        ctx.moveTo(i, j);
        ctx.lineTo((i + lineInterval), j);
        ctx.stroke();
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



