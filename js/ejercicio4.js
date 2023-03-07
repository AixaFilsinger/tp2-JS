let resultado = 0;

do {
    let numero =parseInt(prompt("Ingrese un número")) ;

    if(!isNaN(numero))
    {
        if (resultado == 0) {
            resultado = resultado + numero;
        }
        else {
            resultado = resultado + numero;
        }
    }
    else {
        alert("Solo puede ingresar números")
    }
} while (confirm("¿Quiere continuar?"));

document.write(`<h1> La suma de los números es: ${resultado} </h1>`);