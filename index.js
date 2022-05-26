/*



//Ejemplo



var aleatorio = Math.floor(Math.random() * 10) + 1;

var intentos = 0;

var acierto = false;

var dificultad = 0;

var select_dificultad = prompt("Selecciona la dificultad: Fácil = 1 - Intermedio = 2 - Difícil = 3");

if (select_dificultad == 1){
	dificultad = 1;
}

if (select_dificultad == 2){
	dificultad = 2;
}

if (select_dificultad == 3){
	dificultad = 3;
}

if(dificultad == 1){
	alert("Has seleccionado el modo fácil, no tienes límite de intentos.");
	
	while(acierto == false){
		var entrada = prompt("Introduce un número del 1 al 10.");
		intentos++;
		if (entrada == aleatorio){
			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
			acierto = true;
			document.write("El número era: " + aleatorio);
		}else
			{
				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
			}
	}
}

if(dificultad == 2){
	alert("Has seleccionado el modo intermedio, solo tienes 5 intentos.");
	
	while(acierto == false && intentos < 5){
		var entrada = prompt("Introduce un número del 1 al 10.");
		intentos++;
		if (entrada == aleatorio){
			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
			acierto = true;
			document.write("El número era: " + aleatorio);
		}else
			{
				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
			}
	if (intentos == 5){
		alert("Has fallado. Game over.");
		document.write("El número era: " + aleatorio);
	}
	}
}

if(dificultad == 3){
	alert("Has seleccionado el modo difícil, solo tienes 3 intentos.");
	
	while(acierto == false && intentos < 3){
		var entrada = prompt("Introduce un número del 1 al 10.");
		intentos++;
		if (entrada == aleatorio){
			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
			acierto = true;
			document.write("El número era: " + aleatorio);
		}else
			{
				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
			}
	if (intentos == 3){
		alert("Has fallado. Game over.");
		document.write("El número era: " + aleatorio);
	}
	}
}















//*********************************************************************************** */



// var a =Math.floor( Math.random()*10);// lanzará numeros aleatorios entre el 0 y 9
// alert(a);
  
// var a =Math.floor( Math.random()*10);// lanzará numeros aleatorios entre el 0 y 9. el floor es para redondear el numero hacia abajo.
// alert(a);

// var a =Math.floor( Math.random()*10+1);//El +1, incluíra el 10.
// alert(a);

// var a =Math.floor( Math.random()*11);//del 0 al 10.
// alert(a);


// alert(Math.floor(Math.random()*(100-50))+50)//Rango de 50 a 100.



// let max=100,min=50;
// alert(Math.floor(Math.random()*(max-min))+min);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var aleatorio = Math.floor(Math.random() * 10) + 1;

// var intentos = 0;

// var acierto = false;

// var dificultad = 0;

// var select_dificultad = prompt("Selecciona la dificultad: Fácil = 1 - Intermedio = 2 - Difícil = 3");

// if (select_dificultad == 1){
// 	dificultad = 1;
// }

// if (select_dificultad == 2){
// 	dificultad = 2;
// }

// if (select_dificultad == 3){
// 	dificultad = 3;
// }





// if(dificultad == 1){
// 	alert("Has seleccionado el modo fácil, no tienes límite de intentos.");

// 	while(acierto == false){
// 		var entrada = prompt("Introduce un número del 1 al 10.");
// 		intentos++;
// 		if (entrada == aleatorio){
// 			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
// 			acierto = true;
// 			document.write("El número era: " + aleatorio);
// 		}else
// 			{
// 				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
// 			}
// 	}
// }

// if(dificultad == 2){
// 	alert("Has seleccionado el modo intermedio, solo tienes 5 intentos.");

// 	while(acierto == false && intentos < 5){
// 		var entrada = prompt("Introduce un número del 1 al 10.");
// 		intentos++;
// 		if (entrada == aleatorio){
// 			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
// 			acierto = true;
// 			document.write("El número era: " + aleatorio);
// 		}else
// 			{
// 				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
// 			}
// 	if (intentos == 5){
// 		alert("Has fallado. Game over.");
// 		document.write("El número era: " + aleatorio);
// 	}
// 	}
// }

// if(dificultad == 3){
// 	alert("Has seleccionado el modo difícil, solo tienes 3 intentos.");

// 	while(acierto == false && intentos < 3){
// 		var entrada = prompt("Introduce un número del 1 al 10.");
// 		intentos++;
// 		if (entrada == aleatorio){
// 			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
// 			acierto = true;
// 			document.write("El número era: " + aleatorio);
// 		}else
// 			{
// 				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
// 			}
// 	if (intentos == 3){
// 		alert("Has fallado. Game over.");
// 		document.write("El número era: " + aleatorio);
// 	}
// 	}
// } 

// //************************************************************************************************




// let aleatorio=Math.floor(Math.random()*10)+1;
// let intentos=0;
// let acierto=false;
// let dificultad=0;

// let select_dificultad=prompt('Selecciona la dificultad: Fácil = 1 - Intermedio = 2 - Difícil = 3');
//  if(select_dificultad==1){
//     dificultad=1;
//  }
//  if(select_dificultad==2){
//     dificultad=2;
//  }
//  if(select_dificultad==3){
//     dificultad=3;
//  }


// if(dificultad==1){
//    alert('has seleccionado el modo facil, no tiens limite de intentos');
//    while(acierto==false){
//       let entrada=prompt('Introduce un numero del 1 al 10.');
//       intentos++;

//       if (entrada==aleatorio){
//          alert('Enhorabuena, has acertado el número. Has utilizado ' + intentos  + ' intentos.');
//          acierto=true;
//          document.write('El numero era'+aleatorio);
//       }

//          else{
//             alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.")
//          }
//    }
// }





// if(dificultad==2){
//    alert('Has seleccionado el modo intermedio, tienes 5 intentos');
//    while(acierto==false&&intentos<5){
//       let entrada=prompt('Introduce un numero del 1 al 10.');
//       intentos++;
//       if(entrada==aleatorio){
//          alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.")
//       }
//       if(intentos==5){
//          alert("Has fallado. Game over.");
//          document.write("El número era: " + aleatorio)
//       }
//    }
// }




// if(dificultad == 3){
// 	alert("Has seleccionado el modo difícil, solo tienes 3 intentos.");

// 	while(acierto == false && intentos < 3){
// 		let entrada = prompt("Introduce un número del 1 al 10.");
// 		intentos++;
// 		if (entrada == aleatorio){
// 			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
// 			acierto = true;
// 			document.write("El número era: " + aleatorio);
// 		}else
// 			{
// 				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
// 			}
// 	if (intentos == 3){
// 		alert("Has fallado. Game over.");
// 		document.write("El número era: " + aleatorio);
// 	}
// 	}
// } 



// **********************************************************************************************************
// if(dificultad==1){
//    alert('has seleccionado el modo facil, no tiens limite de intentos');

//    while(acierto==false){
//       let entrada=prompt('Introduce un numero del 1 al 10.');
//       intentos++;

//       if (entrada==aleatorio){
//          alert('Enhorabuena, has acertado el número. Has utilizado ' + intentos  + ' intentos.');
//          acierto=true;

//          document.write('El numero era'+aleatorio);
//       }

//          else{
//             alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.")
//          }
//    }
// }




// //********************************************************************************************************


// let aleatorio=Math.floor(Math.random()*10)+1;

// dificultad=0;
// aciertos=false;
// intentos=0;


// let select_dificultad=prompt=('Selecciona la dificultad: Fácil = 1 - Intermedio = 2 - Difícil = 3');

// if(select_dificultad==1){
// 	select_dificultad=1;
// }

// if(select_dificultad==2){
// 	select_dificultad=2;
// }

// if(select_dificultad==3){
// 	select_dificultad=3;
// }


// if(select_dificultad==1){
// 	alert('Has seleccionado el modo facil, no tienes limite de intentos')

// 	while(aciertos=false){
// 		let entrada=prompt('Has selecionado el modo facil, no tienes limite de intentos')
// 		intentos++;

// 		if(entrada==aleatorio){
// 			alert('Super, acertates en el intento numero' +intentos);
// 			aciertos=true;
// 			alert('escogistes el nuemro' + aleatorio);
// 		}

// 		else{
// 			alert('Sorry, aún no aciertas, llevas' + intentos + 'intentos');
// 		}
// 	}
// }
// //**********************************************************************************************************************



// let aleatorio=Math.floor(Math.random()*10)+1;
// let intentos=0;
// let acierto=false;
// let dificultad=0;

// let select_dificultad=prompt('Selecciona la dificultad: Fácil = 1 - Intermedio = 2 - Difícil = 3');
//  if(select_dificultad==1){
//     dificultad=1;
//  }
//  if(select_dificultad==2){
//     dificultad=2;
//  }
//  if(select_dificultad==3){
//     dificultad=3;
//  }



// if(dificultad==1){
//    alert('has seleccionado el modo facil, no tiens limite de intentos');
//    while(acierto==false){
//       let entrada=prompt('Introduce un numero del 1 al 10.');
//       intentos++;

//       if (entrada==aleatorio){
//          alert('Enhorabuena, has acertado el número. Has utilizado ' + intentos  + ' intentos.');
//          acierto=true;
//          document.write('El numero era'+aleatorio);
//       }

//          else{
//             alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.")
//          }
//    }
// }


// //**********************************************************************************************************



// let aleatorio=Math.floor(Math.random()*10)+1;

// dificultad=0;
// aciertos=false;
// intentos=0;


// let select_dificultad=prompt('Selecciona la dificultad: Fácil = 1 - Intermedio = 2 - Difícil = 3');

// if(select_dificultad==1){
// 	select_dificultad=1;
// }

// if(select_dificultad==2){
// 	select_dificultad=2;
// }

// if(select_dificultad==3){
// 	select_dificultad=3;
// }


// if(select_dificultad==1){
// 	alert('Has seleccionado el modo facil, no tienes limite de intentos')

// 	while(aciertos==false){
// 		let entrada=prompt('Introduce un numero del 1 al 10')
// 		intentos++;

// 		if(entrada==aleatorio){
// 			alert('Super, acertates en el intento numero' +intentos);
// 			aciertos=true;
// 			alert('escogistes el nuemro' + aleatorio);
// 		}

// 		else{
// 			alert('Sorry, aún no aciertas, llevas' + intentos + 'intentos');
// 		}
// 	}
// }




// let random=Math.floor( Math.random()*10)+1;
// let aciertos=false;
// let dificultad=0;
// let intentos=0;

// let select_dificultad=prompt('Selecciona la dificultad: Fácil = 1 - Intermedio = 2 - Difícil = 3')
// if(select_dificultad==1){
// 	select_dificultad=1;
// }
// if(select_dificultad==2){
// 	select_dificultad=2;
// }
// if(select_dificultad==3){
// 	select_dificultad=3;
// }


// if(select_dificultad==1){
// 	alert('Has seleccionado el modo facil, no tienes limite de intentos')


// while(aciertos==false){
// 	let entrada=prompt('Ingrese un numero del 1 al 10');
// 	intentos++;// esto lo unico que hace, es contar los intentos

// 	if(entrada==random){
// 		alert('Super, diste en el blanco');
// 		aciertos==true;
// 		alert('Escogistes el nuemero'+ random);
		
// 	}
// 	else{
// 		alert('Sorry, no has acertado, llevas' + intentos+ 'intentos');
// 	}

// }
// }





// let aleatorio=Math.floor(Math.random()*10)+1;
// let aciertos=false;
// let dificultad=0;
// let intentos=0;

// let select_dificultad=prompt('Ingrese nivel de dificultad, 1, 2 o 3');
// if(select_dificultad==1){
// 	select_dificultad=1;
// }
// if(select_dificultad==2){
// 	select_dificultad=2;
// }
// if(select_dificultad==3){
// 	select_dificultad=3;
// }

// if(select_dificultad==1){
// 	alert('Escogiste la opcion 1, tienes intentos ilimitados')
	

// 		while(aciertos==false){
// 			let entrada =prompt('Ingrese un numerod el 1 al 10');
// 			intentos++;
// 		if(aleatorio==entrada){
// 			alert('Super, acertastes, escogistes el' + aleatorio);
             
// 		}
// 		else{
// 			alert('Fallastes, sigue intentandolo')
// 		}
// 	}
// }


// let aleatorio=Math.floor( Math.random()*10)+1;
// let aciertos=false;
// let dificultad=0;
// let intentos=0;
// let select_dificultad=prompt('Ingrese nivel de dificultad 1-2-3');

// if(select_dificultad==1){
// 	select_dificultad=1;
// }
// if(select_dificultad==2){
// 	select_dificultad=2;
// }
// if(select_dificultad==3){
// 	select_dificultad=3;
// }
// if(select_dificultad){
// 	alert('Escogiste 1, no tienes limite de intentos')
// 	intentos++;
// 	while(aciertos==false){
// 		let entrada=prompt('Escoge un nuemero del 1 al 10');
// 		if(aleatorio==entrada)
// 		alert('Muy bien acertastes')
// 		else{
// 			alert('fallastes, sigue intentandolo')
// 		}
// 	}
// }



// let aleatorio=Math.floor(Math.random()*10)+1;
// let select_dificultad=prompt('ingrese nivel de dificultad. 1-2-3');
// let aciertos=false;
// let dificultad=0;
// let intentos=0;

// if(select_dificultad==1){
// 	select_dificultad=1;
// }
// if(select_dificultad==2){
// 	select_dificultad=1;
// }
// if(select_dificultad==3){
// 	select_dificultad=3;
// }

// if(select_dificultad==1){
// 	alert('Escogiste 1, easy, tienes intentos ilimitados')
// 	intentos++;
// 	while(aciertos==false){
// 		let entrada=prompt('Ingrese numero del 1 al 10');
// 		if(aleatorio==entrada){
// 			alert('Bien, acertastes!!!!!!!!!!!!!');
// 		}
// 	    else{
// 			alert('Fallastes, sigue intentandolo')
// 		}	
// 	}
// }

// let aleatorio=Math.floor(Math.random()*10)+1;
// let select_dificultad=prompt('Escoge dificultad. 1-2-3');
// let aciertos=false;
// let dificultad=0;
// let intentos=0;

// if(select_dificultad==1){
// 	select_dificultad=1;
// }
// if(select_dificultad==2){
// 	select_dificultad=2;
// }
// if(select_dificultad==3){
// 	select_dificultad=3;
// }

// if(select_dificultad==1){
// 	alert('Ud. Escogio 1, no tiene limites de intentos');
// 	intentos++;
// 	while(aciertos==false){
// 	let entrada=prompt('Ingrese un numero del 1 al 10');
// 	if(aleatorio==entrada){
// 	alert('Bien, acertastes!!!!!!!!!!!!!!!');
//   }
//   else{
// 	  alert('Sorry. sigue intentandolo');
//   }
// }
// }

// let aleatorio=Math.floor(Math.random()*10)+1;
// let select_dificultad=prompt('Escoja el nivel de doficultad: 1-2-3');
// let aciertos=false;
// let dificultad=0;
// let intentos=0;

// if(select_dificultad==1){
// 	select_dificultad=1;
// }
// if(select_dificultad==2){
// 	select_dificultad=2;
// }
// if(select_dificultad==3){
// 	select_dificultad=3;
// }
// if(select_dificultad==1){
// 	alert('Ud. escogio el nivel 1, no tiene limite de intentos');
	
// 	while(aciertos==false){
// 		let entrada=prompt('Escoja un numero del 1 al 10');
// 		if(aleatorio==entrada){
// 			alert('Acertastes!!!!!!!!!!!!!!!');
// 		}
// 		else{
// 			alert('Perdiste, sigue intentandolo')
// 		}
// 	}
// }

// let aleatorio=Math.floor(Math.random()*10)+1;
// let select_dificultad=prompt('Ingrese nivel de dificultad 1-2-3');
// let aciertos=false;
// let dificultad=0;
// let intentos=0;
// if(select_dificultad==1){
// 	select_dificultad=1;
// }
// if(select_dificultad==2){
// 	select_dificultad=2;
// }
// if(select_dificultad==3){
// 	select_dificultad=3;
// }
// if(select_dificultad==1){
// 	alert('Modo facil. Escoge un numero del 1 al 10');
// 	while(aciertos==false){
// 		let entrada=prompt('Escoge un numero del 1 al 10');
// 		if(entrada==aleatorio){
// 			alert('Super, acertastes!!!!!!!!!!!!!!!')
// 		}
// 		else{
// 			alert('You Louse. sorry.')
// 		}
// 	}
// }


// let aleatorio=Math.floor(Math.random()*10)+1;
// let select_dificultad=prompt('Ingrese nivel de dificultad');
// let aciertos=false;
// let dificultad=0;
// let intentos=0;
// if(select_dificultad==1){
// 	select_dificultad=1;
// }
// if(select_dificultad==2){
// 	select_dificultad=2;
// }
// if(select_dificultad==3){
// 	select_dificultad=3;
// }




// if(select_dificultad==1){
// 	alert('Ud. escogió el nivel 1, tiene intentos ilimitados');
// 	while(aciertos==false){
// 		let entrada=prompt('Ingrese un numero del 1 al 10');
// 		if(aleatorio==entrada){
// 			alert('Bien!!!!!!!!!!!!!!!!!!!!!!')
// 		}
// 		else{
// 			alert('Perdiste, sigue intentándolo')
// 		}
// 	}
// }





// if(dificultad == 2){
// 	alert("Has seleccionado el modo intermedio, solo tienes 5 intentos.");

// 	while(acierto == false && intentos < 5){
// 		var entrada = prompt("Introduce un número del 1 al 10.");
// 		intentos++;
// 		if (entrada == aleatorio){
// 			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
// 			acierto = true;
// 			document.write("El número era: " + aleatorio);
// 		}else
// 			{
// 				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
// 			}
// 	if (intentos == 5){
// 		alert("Has fallado. Game over.");
// 		document.write("El número era: " + aleatorio);
// 	}
// 	}
// }



// let aleatorio=Math.floor(Math.random()*10)+1;
// let select_dificultad=prompt('Ingrese nivel de dificultad');
// let aciertos=false;
// let dificultad=0;
// let intentos=0;
// if(select_dificultad==1){
// 	select_dificultad=1;
// }
// if(select_dificultad==2){
// 	select_dificultad=2;
// }
// if(select_dificultad==3){
// 	select_dificultad=3;
// }
// // if(select_dificultad==2){
// // 	alert('Ecogiste el nivel 2, tienes 5 oportunidades');
// // 	while(aciertos==false&&intentos<5){
// // 		let entrada=prompt('Ingrese un numero del 1 al 10');
// // 		intentos++;
// // 		if(entrada==aleatorio){
// // 			alert('Bien!!!!!!!!!!!!!!!!');
			
// // 		}
// // 		else{
// // 			alert('Sorry, sigue participando.')
// // 		}
// // 		if(intentos==5){
// // 			alert('Game Over )-:')
// // 		}
// // 	}
// // }


// if(select_dificultad==2){
// 	alert('Ud. Escogió la opción 2, tienes 5 intentos');
// 	while(aciertos==false){
// 		let entrada=prompt('Ecoja un numero del 1 al 10.');
// 		intentos++;
// 		if(entrada==aleatorio){
// 			alert('Bien!!!!!!!!!!!!!!!!!')
// 		}
		
// 		else{
// 			alert('Perdistes Snifffffff )-: ');
// 		}
// 		if(intentos==5){
// 			alert('Game Over! KO.-')
// 		}
// 	}
// }


// if(select_dificultad==3){
// 	alert('Escogiste el niovel 3. solo tienes 3 intentos')
// 	while(aciertos==false){
//     let entrada=prompt('Escoge un numero del 1 al 10');
// 	intentos++;
// 	if(entrada==aleatorio){
// 		alert('Bien!!!!!!!!!!!!!');
// 	}    
// 	else{
// 		alert('fallaste snifffffffffffff )-: ')
// 	}
// 	if(intentos==3){
// 		alert('Game Over. KO.-')
// 	}
// 	}
// }

// */
// let aleatorio=Math.floor(Math.random()*10)+1;
// let select_dificultad= prompt('Escoja un nivel de dificultad. 1, 2, 3, 4 o 5_MX.');

// let aciertos=false;
// //let dificultad=0;
// let intentos=0;

// if(select_dificultad==1){
// 	select_dificultad=1;
// }
// if(select_dificultad==1){
// 	select_dificultad=1;
// }
// if(select_dificultad==1){
// 	select_dificultad=1;
// }

// if(select_dificultad==4){
// 	select_dificultad=4;
// }

// if(select_dificultad==5){
// 	select_dificultad=5;
// }



// if(select_dificultad==1){
// 	alert('Escogiste el nivel 1. No tienes limite de intentos');

// 	while(aciertos==false){
// 		intentos++;
// 		let entrada=prompt('Ingrese un numero del 1 al 10');
// 		if(entrada==aleatorio){
// 			if(aciertos=true)
// 			alert('Bien!!!!!!!!!!!!!!!!!!!!!!!');
			
// 		}
// 		else{
// 			alert('Perdiste, sigue intentandolo )-: ')
// 		}
// 	}
// }

// if(select_dificultad==2){
// 	alert('Escogiste el numero 2, tienes 3 intentos');
// 	while(aciertos==false&&intentos<5){
		
// 		let entrada=prompt('Ingrese in numero del 1 al 10');
// 		intentos++;

// 		if(entrada==aleatorio){
// 			if(aciertos=true)
// 				alert(`Bien, acertastes!!!!!!!!!! escogiste ${entrada}, en el intento ${intentos}`);
// 				alert('Refresca la pagina para seguir jugando');
// 			}
// 			else{
// 				alert('Perdiste, sigue intentandolo )-:')
// 			}
// 		if(intentos==5){
// 			alert('GAME OVER; YOU LOSE')
// 		}
// 	}
// }
// //*********************************************************** */
//  if(select_dificultad==3){
//  	alert('Ecogiste el nivel 3, tienes 3 oportunidades');
//  	while(aciertos==false&&intentos<3){
//  		let entrada=prompt('Ingrese un numero del 1 al 10');
//  		intentos++;
// 		 if(aciertos==true);
//  		if(entrada==aleatorio){
//  			alert('Bien!!!!!!!!!!!!!!!!');
//  		}
//  		else{
//  			alert('Sorry, sigue participando.')
//  		}
//  		if(intentos==3){
//  			alert('Game Over )-:')
//  		}
//  	}
//  }

// //***************************************************************************** */
// if(select_dificultad==4){
// 	alert('Ingresaste al maximo nivel, solo tienes 1 intento');
// 	while(aciertos==false&&intentos<2){
// 		let entrada=prompt('Ingrese un numero del 1 al 10');
// 		intentos++;
// 		if(aciertos==true);
// 		if(aciertos==entrada){
// 			alert('Bien!!!!!!!!!!!!!!!!!!!!!!')
// 		}
// 		else{
// 			alert('Sigue intentandolo.')
// 		}
// 		if(intentos==2){
// 			alert('GAME OVER; YOU LOSE.')
// 		}
// 	}
// }
// //******************************************************************************** */

// if(select_dificultad==5){
// 	alert('Escogiste el nivel 5_MatriX, solo tienes 1 intento.');
// 	while(aciertos==false&&intentos<2){
// 		let entrada=prompt('Ingrese un numero del 1 al 10');
// 		intentos++;
// 		if(aciertos=true);
// 		if(aciertos==entrada){
// 			alert('Bien!!!!!!!!!!!!!!!!!!!!!!!!!!')
// 		}
// 		else{
// 			alert('Sigue intentandolo')
// 		}
// 		if(intentos==1){
// 			alert('GAME_OVER YOU LOSE.')
// 		}
// 	}
// }


// let aleatorio=Math.floor(Math.random()*10)+1;
// let select_dificultad=prompt('Escoja el nivel de dificultad: 1, 2, 3');

// let aciertos=false;
// let intentos=0;
// let dificultad=0

// if(select_dificultad==1){
// 	dificultad=1;
// }
// if(select_dificultad==2){
// 	dificultad=2;
// }
// if(select_dificultad==3){
// 	dificultad=3;
//}
/*
if(dificultad==2){
	alert('Escogiste el nivel intermedio, tienes 3 intentos');
	while(aciertos==false){
		let entrada =prompt('Ingrese un numero del 1 al 10');
		intentos++;
		if(aleatorio==entrada){
			alert('Bien!!!!!!!!!!!!!!!!!!!!!')
			aciertos=true;            
		}
		else{
			alert('Sigue intentandolo.')
		}
		if(intentos==3){
			alert('GAME_OVER-Refresca la pagina para seguir jugando')
		}
	}
}


if(dificultad == 2){
	alert("Has seleccionado el modo intermedio, solo tienes 5 intentos.");
	
	while(aciertos == false && intentos < 5){
		var entrada = prompt("Introduce un número del 1 al 10.");
		intentos++;

		if (entrada == aleatorio){
			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
			aciertos = true;
			document.write("El número era: " + aleatorio);
		}else
			{
				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
			}
	if (intentos == 5){
		alert("Has fallado. Game over.");
		document.write("El número era: " + aleatorio);
	}
	}
}


if(dificultad==2){
	alert('Escogiste el nivel 2, tienes 5 intentos');
	while(aciertos==false&&intentos<5){
		let entrada=prompt('Escoja un numero del 1 al 10');
		intentos++;
		if(entrada==aleatorio){
			alert('Bien!!!!!!!!!!');
			aciertos=true;
		}
		else{
			alert('Sigue intentandolo');
		}
		if(intentos==5){
			alert('GAME_OVER.-')
		}
	}
}


if(dificultad==3){
	alert('Escogiste el nivel 3, tienes 3 intentos');
	while(aciertos==false&&intentos<3){
		let entrada=prompt('Ingrese un numero del 1 al 10');
		intentos++;
		if(entrada==aciertos){
			alert('Acertaste, muy Bien!');
			aciertos=true;
		}
		else{
			alert('Sigue intentandolo.')
		}
		if(intentos==3){
			alert('GAME_OVER_KO!')
		}
	}
}


let aleatorio=Math.floor(Math.random()*10)+1;
let select_dificultad=prompt('Escoja el nivel de dificultad del juego. 1, 2 o 3');

let aciertos=false;
let dificultad=0;
let intentos=0;

if(select_dificultad==1){
	dificultad=1;
}

if(select_dificultad==2){
	dificultad=2;
}

if(select_dificultad==3){
	dificultad=3;
}

if(dificultad==1){
	alert('Ud. Escogió el nivel 1, no tiene limite de intentos');
	while(aciertos==false){
		let entrada=prompt('Escoja un numero del 1 al 10');
		intentos++;
		if(entrada==aleatorio){
			alert(`Exelente, Acertaste, el numero era ${entrada} con tan solo ${intentos}, intentos.`)
			alert('Refresca la pagina para seguir jugando!')
			aciertos=true;
		}
		else{
			alert('Sigue intentandolo, no desfallescas');
		}
	}
}

if(dificultad==2){
	alert('Ud. Escogió el nivel 2, tienes 5 intentos')
	while(aciertos==false&&intentos<5){
		let entrada=prompt('Ingrese un numero del 1 al 10');
		intentos++;
		if(entrada==aleatorio){
			alert(`Acertaste en el intento ${intentos}, con el numero ${entrada}. te amamos!`);
			aciertos=true;
		}
		else{
			alert('Sigue intentandolo, no desfallescas');
		}
		if(intentos==5){
			alert('GAME_OVER_KO.-');
			alert('Refresca la pagina para seguir jugando')
		}
	}
}

if(dificultad==3){
	alert('Ud. Escogio el nivel 3, tienes 3 intentos.');
	while(aciertos==false&&intentos<3){
		let entrada=prompt('Ingrese un numero del 1 al 10.');
		intentos++;
		if(entrada==aleatorio){
			alert(`Acertaste en el intento ${intentos}, con el numero ${entrada}. te amamos!`)
            aciertos=true;     
		}
		else{
			alert('Sigue intentandolo!')
		}
		if(intentos==3){
			alert('GAME_OVER.')
			alert('Refresca la pagina para seguir participando')
		}
	}
}
//******************************************************************************
 
// let max=100,min=50;
// alert(Math.floor(Math.random()*(max-min))+min);

//let aleatorio=Math.floor(Math.random()*10)+1;
//let select_dificultad=prompt('Escoja el nivel de dificultad del juego. 1, 2 o 3');


let opcionMaquina = cachipum(0,2);
function cachipum(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

let opcionUsuario = prompt("¿Qué eliges?\nPiedr: 0\nPape: 1\nTijer: 2", 0);

let opciones = ["Piedr", "Pape", "Tijer"];

 alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

let piedr = 0;
let pape = 1;
let tijer = 2;

if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Perdiste Fer :( ");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Ganaste Fer!");
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        alert("Ganaste Fer!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Empate buuuu!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Perdiste Fer!");
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
        alert("Perdiste Fer CTM!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Ganaste Fer!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Empate buuuu!");
    }
}
else
{
    alert("¿WHT Fk?");
}




// let max=100,min=50;
//  alert(Math.floor(Math.random()*(max-min))+min);

*/
let aleatorio=Math.floor(Math.random()*10)+1;
let select_dificultad=prompt('Ingrese un nivel de dificultad. 1_facil, 2_Intermedio y 3_Dificil');

let aciertos=false;
let dificultad=0;
let intentos=0;

if(select_dificultad==1){
	dificultad=1;
}
if(select_dificultad==2){
	dificultad=2;
}
if(select_dificultad==3){
	dificultad=3;
}

if(dificultad==1){
	alert('Escogiste el nivel 1, no tienes limite de intentos.')
	while(aciertos==false){
		let entrada=prompt('Ingrese un numero del 1 al 10');
		intentos++;
		if(entrada==aleatorio){
			aciertos=true;
			alert('Ganaste!!!!!!!!!!')
			alert(`Le acertaste al numero ${entrada}, en ${intentos} intento(s). `)
			alert('Refresca la pagina para seguir jugando. APP_Nando_Script')
		}
		else{
			alert('Sigue Intentandolo.')
		}

	}
}
if(dificultad==2){
	alert('Escogoste el nivel 2, tienes 5 intentos');
	while(aciertos==false&&intentos<5){
		let entrada=prompt('Ingrese un numero del 1 al 10.')
			intentos++;
			if(entrada==aleatorio){
				aciertos=true;
				alert(`Bien, le acertaste al numero ${entrada} en  ${intentos} intento(s). !!!!`)
				alert('Refresca la pagina para seguir jugando. APP_Nando_Script');
			}
			else{
				alert('Sigue intentandolo.')
			}
			if(intentos==5){
				alert('GAME_OVER_KO.');
				alert('Refresca la pagina para seguir jugando. APP_Nando_Script');
			}
		}
	}
	if(dificultad==3){
		alert('Escogiste el nivel 3, es el mas dificil, solo tienes 3 intentos.');
		while(aciertos==false&&intentos<3){
			let entrada=prompt('Ingrese un numero del 1 al 10.');
			intentos++;
			if(entrada==aleatorio){
				aciertos=true;
				alert(`Bien, le acertaste al numero ${entrada} en  ${intentos} intento(s). !!!!`);
                alert('Refresca la pagina para seguir jugando.');
			}
			else{
				alert('Sigue intentandolo.');			
			}
			if(intentos==3){
				alert('GAME_OVER_KO. APP_Nando_Script.');
				alert('Refresca la pagina para seguir jugando.');
			}
		}

	}
