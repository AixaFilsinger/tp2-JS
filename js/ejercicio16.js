let texto = prompt("Introduce un Texto:");
let cantidadchar = texto.length;
let i;
let letra;
let resultado = "";
for (i = 0; i < cantidadchar; i++) 
{
    letra = texto.charAt(i);   
    resultado = letra + resultado;
}
document.write(resultado);