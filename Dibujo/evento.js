var flechas= {
	LEFT:37,
	UP:38,
	RIGHT:39,
	DOWN:40
}
var c= document.getElementById("dibujo");
document.addEventListener("mousedown", dibujarFlecha);
var papel= c.getContext("2d");
var x= 150;
var y= 150;

function dibujarFlecha(evento){
	console.log(evento);
	var color="blue";
	var movimiento=10;
	switch(evento.keyCode){
		case flechas.LEFT:
			console.log("Pa' la izquierda");
			dibujarLinea(color,x,y, x-movimiento,y,papel);
			x=x-movimiento;
		break;
		case flechas.UP:
		dibujarLinea(color,x,y, x,y-movimiento,papel);
		y=y-movimiento;
			console.log("Pa' arriba");
		break;
		case flechas.RIGHT:
			dibujarLinea(color,x,y, x+movimiento,y,papel);
			x=x+movimiento;
			console.log("Pa' la derecha");
		break;
		case flechas.DOWN:
		dibujarLinea(color,x,y, x,y+movimiento,papel);
		y=y+movimiento;
			console.log("Pa' bajo");
		break;
	}
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}