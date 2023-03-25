//Función clima con un parámetro booleano de nombre cualquiera para saber si llueve o no.
function clima(estaLloviendo){
    //Condicional específica donde el parámetro es verdadero.
    if(estaLloviendo === true){
        console.log("Sí está lloviendo");
    }
    //Condicional específica donde el parámetro es falso.
    else if(estaLloviendo === false){
        console.log("No está lloviendo");
    }
}
//Se llama la función y se produce un parámetro falso o verdadero para producir la función condicional.
clima(false);


//Función calcular con tres parámetro numéricos para calcularlos.
function calcular(numer1, numer2, numer3){
    //Constante de suma entre los dos primeros parámetros.
    const SUMAR = numer1 + numer2;
    //Constante de resultado para sumar el resultado anterior con el último parámetro.
    const RESULTADO = SUMAR + numer3;
    //Devuelve el resultado a la función.
    return RESULTADO;
}
//Se llama a la consola para mostrar la función según 3 parámetros cualquiera.
console.log(calcular(2,3,4));


//Se hacen 2 variables y transfieren a float para hacer un prompt para su valor.
let base = parseFloat(prompt("Ingrese base del triángulo"));
let altura = parseFloat(prompt("Ingrese altura del triángulo"));
//Se escribe el resultado de las 2 variables anteriores con respecto a la fórmula: área del triángulo.
document.write("El área del triángulo es ")
document.write(base*altura/2);


//Se crean 3 variables num prompt float y se llama a la función promedio con estas de parámetros.
var num1 = parseFloat(prompt("Ingrese nota 1"));
var num2 = parseFloat(prompt("Ingrese nota 2"));
var num3 = parseFloat(prompt("Ingrese nota 3"));
//Función promedio que toma 3 parámetros para saber su promedio y según el resultado definir si aprueba o no.
function promedio(num1,num2,num3){
    let resultado = (num1+num2+num3)/3;
    if(resultado > 3.0){
        document.write(", Has aprobado las notas");
    }
    else if(resultado < 3.0){
        document.write(", no has aprobado las notas");
    }
}
promedio(num1,num2,num3);


//Se llama a función de calculadora
function calculadora(){
    //Se crean 3 variables, 2 float y 1 string para luego formar el string operación en minúsculas.
    let nume1 = parseFloat(prompt("Ingrese el primer número a calcular"));
    let nume2 = parseFloat(prompt("Ingrese el segundo número a calcular"));
    let operacion = prompt("Qué operación deseas hacer?");
    operacion.toLowerCase();
    //Switch con casos para realizar operación según el string.
    switch(operacion){
        case "suma":
            return(nume1 + nume2);
        case "sumar":
            return(nume1 + nume2);
        case "resta":
            return(nume1 - nume2);
        case "restar":
            return(nume1 - nume2);
        case "multiplicacion":
            return(nume1 * nume2);
        case "multiplicación":
            return(nume1 * nume2);
        case "division":
            return(nume1 / nume2);
        case "dividir":
            return(nume1 / nume2);
        case "potenciacion":
            return(nume1 ** nume2);
        case "potenciación":
            return(nume1 ** nume2);
        case "potenciar":
            return(nume1 ** nume2);
        case "exponenciar":
            return(nume1 ** nume2);
        case "exponenciación":
            return(nume1 ** nume2);
        case "exponenciacion":
            return(nume1 ** nume2);
        default:
            return(" no se ha podido calcular por un error en el operando");
    }
}
//Saca al HTML escribiendo el resultado del cálculo.
document.write(", el resultado de la calculadora es de ")
document.write(calculadora())
