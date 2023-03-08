let vocales = ["a", "e", "i", "o", "u"];
    let texto = prompt("Introduce un texto");
    
    let textomayu = texto.toLowerCase();
    
    let posicion_vocal = 0;
    
    let parar = false;
    
    for (let i = 0; i < textomayu.length; i++) 
    {
        
        for (let j = 0; j < vocales.length; j++) 
        {
           
            if (vocales[j] == textomayu.charAt(i))
             {
                
                posicion_vocal = i;

                parar = true;
                
                break;
            }
        }
        
        if (parar) 
        {
           
            break;
        }
    }
    
    document.write(`La primer vocal está en la posición ${ posicion_vocal} `);