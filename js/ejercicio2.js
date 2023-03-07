let nota = parseInt(prompt("Ingrese una nota entre 0 a 10"));

if (isNaN(nota))
{
  alert("por favor ingrese un número entre 0 y 10");
} 
else {
    switch (nota) {
        case 0:
        case 1:
        case 2:
            alert(`La nota ${nota} es muy deficiente`)
          break;
          case 3:
          case 4:
            alert(`La nota ${nota} es insuficiente`);
          break;
          case 5:
          case 6:
                alert(`La nota ${nota} es Suficiente`);
          break;
        case 7:
            alert(`La nota ${nota} es Bien`);
          
          break;
          case 8:
          case 9:
            alert(`La nota ${nota} es Notable`);
            break;
            case 10:
                alert(`La nota ${nota} es sobresaliente`)
          default:
              document.write('Seleccionaste una opcion erronea');
      }

}
