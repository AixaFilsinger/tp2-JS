let cadena = "";

do {
    let texto = prompt("Ingrese un texto cualquiera");

    if(isNaN(texto))
    {
        if(texto == ""){
            cadena = cadena + "";
        }
        else{
            cadena = cadena + "-" +texto;
        }
    }
} while (confirm("¿Quiere continuar?"));

document.write(`<h1> ${cadena} </h1>`);