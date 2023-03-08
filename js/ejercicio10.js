let i,j;

let filas = parseInt(prompt("Introduce numero de filas"));

let colum = parseInt(prompt("Introduce numero de columnas"));

let resultado = filas * colum;

document.write("<table border>");
if(!isNaN(filas) && !isNaN(colum))
{
    for (i = 0; i < filas; i++) {
    
    document.write("<tr>");
    
    for (j = 0; j < colum; j++) {
        
        document.write("<td>");
        
        document.write(resultado);
        
        resultado--;
        
        document.write("</td>");
    }
    
    document.write("</tr>");
}
}
else{
    alert("Por favor ingrese un numero entero");
}



document.write("</table>");