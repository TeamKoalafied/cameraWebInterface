$(document).ready(function(){

    var imageDpi = 300;

    var can = document.getElementById('rotatedCanvas');
    var ctx = can.getContext('2d');
    var startX, startY;

    function drawLine(x, y, stopX, stopY){
        ctx.clearRect (0, 0, can.width, can.height);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(stopX, stopY);
        ctx.closePath();
        ctx.stroke();
    }
	
	drawline(120,20,200,80)
});