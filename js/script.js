function convertir() {
	const cantidad = parseFloat(document.getElementById("cantidad").value);
	const monedaOrigen = document.getElementById("monedaOrigen").value;
	const monedaDestino = document.getElementById("monedaDestino").value;
	const valorDolarBlue = parseFloat(document.getElementById("valorDolarBlue").value);

	const tiposDeCambio = {
		USD_UYU: 45, // Tipo de cambio del dólar estadounidense a pesos uruguayos (ejemplo)
		USD_ARS: 550, // Tipo de cambio del dólar estadounidense al dólar blue (ejemplo)
		UYU_USD: 1 / 45, // Tipo de cambio de pesos uruguayos a dólares estadounidenses (ejemplo)
		ARS_USD: 1 / valorDolarBlue, // Tipo de cambio del dólar blue al dólar estadounidense (valorDolarBlue ingresado por el usuario)
		UYU_ARS: 1 * valorDolarBlue, // Tipo de cambio de pesos uruguayos a dólares estadounidenses (ejemplo)
	};

	if (isNaN(cantidad) || cantidad <= 0) {
		alert("Por favor, ingrese una cantidad válida.");
		return;
	}

	if (!(monedaOrigen + '_' + monedaDestino in tiposDeCambio) && !(monedaDestino + '_' + monedaOrigen in tiposDeCambio)) {
		alert("Las monedas seleccionadas no son válidas para la conversión.");
		return;
	}

	let resultado;
	if (monedaOrigen === "USD") {
		resultado = (cantidad * tiposDeCambio['USD_' + monedaDestino]).toFixed(2);
	} else if (monedaDestino === "USD") {
		resultado = (cantidad * tiposDeCambio[monedaOrigen + '_USD']).toFixed(2);
	} else {
		resultado = (cantidad * tiposDeCambio[monedaOrigen + '_' + monedaDestino]).toFixed(2);
	}

	document.getElementById("resultado").innerText = `${cantidad} ${monedaOrigen} equivale a ${resultado} ${monedaDestino}.`;
}
