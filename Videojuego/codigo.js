var flechas= {
	LEFT:37,
	UP:38,
	RIGHT:39,
	DOWN:40
};

var meta={
	cooX:10,
	cooY:10,
};

var vp= document.getElementById("villa");
var lienzo= vp.getContext("2d");


var fondo={
	url:"Imagenes/tile.png",
	cargaOK:false
};

var vaca={
	url:"Imagenes/vaca.png",
	cargaOK:false
};

var pollo={
	url:"Imagenes/pollo.png",
	cargaOK:false
};

var xI= 210;
var yI= 210;

fondo.imagen = new Image();
fondo.imagen.src	=	fondo.url;
fondo.imagen.addEventListener("load", cargar);

vaca.imagen = new Image();
vaca.x = new Array();
vaca.y = new Array();
vaca.imagen.src	=	vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src	=	pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
document.addEventListener("keydown", moverPollo);


function cargar(){
	fondo.cargaOk= true;
	dibujar();
}	

function cargarVaca(){
	vaca.cargaOk= true;
	for (var i = 0; i < 5; i++) {
			var x=aleatorio(0,5);
			var y=aleatorio(0,5);
			vaca.x[i]=x*80;
			vaca.y[i]=y*80;
		}
	dibujar();
}

function cargarPollo(){
	pollo.cargaOk= true;
	dibujar();
}

function dibujar(){
	if(fondo.cargaOk){
		lienzo.drawImage(fondo.imagen,0,0);
	}
	if(vaca.cargaOk){
		for (var i = 0; i < 5; i++) {
			lienzo.drawImage(vaca.imagen,vaca.x[i],vaca.y[i]);	
		}
	}
	if(pollo.cargaOk){
		lienzo.drawImage(pollo.imagen,210,210);
	}
}

function moverPollo(evento){
	var movimiento=5;
	switch(evento.keyCode){
		case flechas.LEFT:
			cargar();
			lienzo.drawImage(pollo.imagen,xI-movimiento,yI);
			xI=xI-movimiento;
		break;
		case flechas.UP:
			cargar();
			lienzo.drawImage(pollo.imagen,xI,yI-movimiento);
			yI=yI-movimiento;
		break;
		case flechas.RIGHT:
			cargar();
			lienzo.drawImage(pollo.imagen,xI+movimiento,yI);
			xI=xI+movimiento;
		break;
		case flechas.DOWN:
			cargar();
			lienzo.drawImage(pollo.imagen,xI,yI+movimiento);
			yI=yI+movimiento;
		break;
	}
}

function aleatorio(min, max) {
	var resultado;
	resultado=Math.floor(Math.random()*(max-min+1))+min;
	return resultado;
}