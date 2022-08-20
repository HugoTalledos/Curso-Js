var estado = 0;          // estado del click      
var colorLinea = "blue";    // color a la linea

var area = document.getElementById('dibujo');
var papel = area.getContext("2d");
var x;                      // guardar coordenada en X
var y;                      // guardar coordenada en Y
document.addEventListener("mousedown", presionarMouse);  
document.addEventListener("mousemove", moverMouse);  
document.addEventListener("mouseup", soltarMouse);  
// dibujo del borde
dibujarLinea("red", 0, 0, 300, 0, papel)
dibujarLinea("red", 300, 0, 300, 300, papel)
dibujarLinea("red", 300, 300, 0, 300, papel)
dibujarLinea("red", 0, 300, 0, 0, papel)

// Funcion para mousedown
function presionarMouse(evento){
  estado=1;
  x= evento.layerX;
  y= evento.layerY;
}

function moverMouse(evento){
  if(estado==1){
    var xFin = evento.layerX;
    var yFin = evento.layerY;
    dibujarLinea(colorLinea, x,y,xFin,yFin,papel);
  }
  x= evento.layerX;
  y= evento.layerY;
}

function soltarMouse(evento){
  estado=0;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = 2;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}