let cadena = prompt("Introduce un texto:");
    let cantidadchar = cadena.length;   
    let char;
    let i;
    for (i = 0; i < cantidadchar; i++) {
	char = cadena.charAt(i);    
	if (i == cantidadchar - 1) {
		document.write(char);
	}
	else {
		document.write(char + "-");
	}
    }