//function contarVocales(teexto){retur cantidadVocales}
const contarVocales = palabra => {
    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales
}

const cadena = 'jhenry es de puquio lucanas ayacucho'
const vocales = contarVocales(cadena)
console.log(vocales)
//calculadora
function sumar(a,b,operacion){
    
    if(operacion == 'suma'){
        total = a + b;
    }else if( operacion == 'resta'){
    total = a - b;
    }else if(operacion == 'multiplicacion'){
        total = a * b;
    }else if(operacion == 'divicion'){
        total = a /b ;
        
    }  
    return total
    
}
console.log(sumar(6,2,"resta"))