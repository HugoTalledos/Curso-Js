var entregado=[];
var caja=[];

caja.push(new Billete(100,5));
caja.push(new Billete(50,10));
caja.push(new Billete(20,30));
caja.push(new Billete(10,10));
caja.push(new Billete(5,5));


var dinero;
var papeles=0;
var div=0;
var b= document.getElementById("extraer");
var resultado= document.getElementById("resultado");
b.addEventListener("click", entregarDinero);


function entregarDinero(evento){
	var t= document.getElementById("dinero");
	dinero=parseInt(t.value);
	for(var b of caja){
		if(dinero>0){
			div=Math.floor(dinero/b.valor);
			papeles=div>b.cantidad?b.cantidad:div;
			entregado.push(new Billete(b.valor, papeles));
			dinero= dinero-(b.valor*papeles);
		}
	}
	if(dinero>0){

		resultado.innerHTML="No tengo dinero";
	}else{
		for(var e of entregado){
			if(e.cantidad>0){
				resultado.innerHTML+= +e.cantidad + " billetes de $"+ e.valor + "<br/>";
			}
		}
	}
}