let edad= parseInt(prompt("Ingrese su edad"));
if(!edad)
{
    alert("Por favor ingrese un número entero")
}
else
{
    if(edad > 18){
    alert(`Usted tiene ${edad} años por lo tanto es mayor de edad ¡Tiene permitido conducir!`)
}
else
{
    alert(`Usted tiene ${edad} años por lo tanto es menor de edad ¡NO tiene permitido conducir!`)
}


}
