
var d = document.getElementById("dibujo");
var txt_lineas= document.getElementById("texto_lineas");
var boton= document.getElementById("boton_aceptar");
var ancho= d.width;
var lienzo = d.getContext("2d");



boton.addEventListener("click", dibujoPorClick)



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick(){
	var lineas = parseInt(txt_lineas.value);
	var espacio= ancho/lineas;
	var l = 0;
	var yi, xf;
	var colorcito = "#FAA";
	for(l = 0; l < lineas; l++){
		yi = espacio * l;
		xf = espacio * (l + 1);
		dibujarLinea(colorcito, 0, yi, xf, 300);
		//console.log("Linea " + l);
	}
	dibujarLinea(colorcito, 1,1,1,299);
	dibujarLinea(colorcito, 1,299,299,299);
}
