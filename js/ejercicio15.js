let texto = prompt("Introduce un texto:");
    let cantidadchar = texto.length;    
    texto = texto.toUpperCase();  
    let vocal;
    let contador = 0;
    let i;
    for (i = 0; i < cantidadchar; i++) {
        vocal = texto.charAt(i);    
        if ((vocal == "A") || (vocal == "E") || (vocal == "I") || (vocal == "O") || (vocal == "U")) {
            contador++;
        }
    }
    document.write(` El número de Vocales es: ${contador} .`);
