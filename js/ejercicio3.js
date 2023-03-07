let cadena ="";

do {
    let texto = prompt("Ingrese un texto cualquiera");

    if(isNaN(texto))
    {
        if (cadena == "") {
            cadena = cadena + texto;
        }
        else {
            cadena = cadena + "-" + texto;
        }
    }
    else {
        alert("Solo puede ingresar texto")
    }
} while (confirm("¿Quiere continuar?"));

document.write(`<h1> ${cadena} </h1>`);


