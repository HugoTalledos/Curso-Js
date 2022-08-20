var jf = require("johnny-five");	//Guarda en la variable jf libreria 
var circuito =jf.Board();		
var time=6000;
circuito.on("ready",prender);		//Cuando el circuito este listo ejecuta la funcion prender
var verde, amarillo, rojo, servo;

function prender(){
	verde = new jf.Leds([13,10]);	//array de Leds([pin,pin])
	amarillo = new jf.Leds([12,9]);
	rojo = new jf.Leds([11,8]);
	servo= new jf.Servos([7,6]);	//array de servos
	semaforo();
}

function semaforo(){
	servo.to(35,0,5); 				//lleva el servo a 35° en 0 seg y en 5 pasos
	console.log("verde: "+ verde[0].value+" Rojo: "+ rojo[0].value);
	verde.off();					//apaga leds verde
	if(verde[0].value==0){			//verifica si los leds verdes estan apagados 
		amarillo.blink(time/2);		//Inician a parpadear leds amarillos (su primer estado es apagado espera 3s y enciende)
	}
	rojo.toggle();					//Invierte estado de leds rojos
	if(rojo[0].value==0){			//verifica si los leds rojos estan apagados
		verde.toggle();				//Invierte estado de leds verdes
		servo.to(0,0,5);			//lleva el servo a 0° en 0 seg y en 5 pasos
	}
	amarillo.off();					//Forza los leds amarillos a ser apagados
	setTimeout(semaforo,time);		//setTimeout(funcion a ejecutar, intervalo de tiempo)
}