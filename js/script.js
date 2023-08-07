
//Mensaje de bienvenida 
alert("Bienvenido/a a Santero Café. \n*Recuerda que la reserva mínima es para 2 personas")

//Elegir horario
let horario = prompt("Selecciona un horario para la reserva. \nOpción 1 - 21 horas \nOpción 2 - 22 horas \nOpción 3 - 23 horas \n\nPresiona (X) para salir.");
while (horario != "x") {

switch (horario) {
case "1": 
console.log("Horario seleccionado fue 21 Horas")
	break;
case "2": 
console.log("Horario seleccionado fue 22 Horas")
	break;
case "3": 
console.log("Horario seleccionado fue 23 Horas")
	break;

default:
	alert("Opcion no valida")
	break;

//Condicion de salida	
alert("Esperamos que vuelvas pronto. Gracias!");
}

//Ingresar cantidad de lugares
function verificarDisponibilidad(numPersonas) {
	if (numPersonas >= 2) {
	  return true;
	} else {
	  return false;
	}
  }
  

  function hacerReserva(nombreCliente, numPersonas) {
	if (verificarDisponibilidad(numPersonas)) {
	  alert(`La reserva a nombre de ${nombreCliente} ha sido exitosa! \nSe han reservado ${numPersonas} lugares a las ${horario} Hrs.`);
	  
	} else {
	  alert(`Lo siento, no hay mesas disponibles para ${numPersonas} persona.`);
	}
  }
  
  const nombreCliente = prompt("Ingrese su nombre:");
  const numMesasDeseadas = parseInt(prompt("Cuántos lugares desea reservar?"));
  
  hacerReserva(nombreCliente, numMesasDeseadas, horario);
  console.log(hacerReserva)
  alert("Gracias por la reserva, lo esperamos!");
  
}





