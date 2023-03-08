let v, i;
let num = parseInt(prompt("Ingrese un número"))
if (num> 0 && num <= 50)
{
    for(i =1 ;   i<=num; i++)
{
   
    for(v = 1; v<=i; v++)
    {
         document.write(v)
    }
    document.write("<br>")
}
}
else
{
    alert("Ingrese un numero que no supere los 50 y sea mayor a 0")
}