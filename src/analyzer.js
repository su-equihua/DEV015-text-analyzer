//Analyzer es la parte de mi documento que tiene que ver con la manipulacion de los datos 
const analyzer = {  
      
  getWordCount: (text) => {   // el parametro de la funcion es text
    //bloque de codigo de la funcion
    const palabras = text.trim();  //metodo trim para eliminar los espacios al inicio y al final de la cadena
    const numPalabras = palabras.split(/\s+/g);  /*hacer un arreglo (array) de subcadenas con split eliminando los espacios entre palabras
    *con una expresion regular (/\s+/g) que coincide con uno o mas caracteres de espacio e incluye los saltos de línea; 
    g para que haga una busqueda global en toda la cadena */
    //console.log("conteo de palabras:",numPalabras); //Imprimir en la consola 
    return numPalabras.length;    //la funcion retornará a la longitud de las palabras
   
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  
  getCharacterCount: (text) => {
    //console.log("caractereres:", text.length)  //ver en la consola
    return text.length   //length= longitud del texto; en este caso se hace un retorno para conocer la longitud de toda la cadena
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCountExcludingSpaces: (text) => {
    //1)cómo quitar los espacios de una cadena string
    /*se declara una constante con el metodo replace() ya que los string son datos primitivos inmutables asi que se 
    *reemplazan los espacios en blanco. La expresion / significa que es una exprecion regular que busca espacios.
    Regex de notacion literal \s para seleccionar espacios en blanco, tabulaciones y saltos de línea
    +g para que sea haga en toda la cadena de string */
    const caractereSinEspacio = text.replace(/\s+/g,"");

    //Otra opcion para que no se cuenten los espacios  const caracteresinespacio = text.split("").join("");

    /*2)Cómo quitar los signos de puntuacion... con el mismo metodo de replace
    *pero con una regex que busque caracteres que no sean letras, numeros, acentos y la letra ñ
    en una busqueda en toda la cadena g; se reemplazaran con "" (nada, es decir, que se eliminen)*/
    const caracterSinEspacioSigno = caractereSinEspacio.replace(/[^a-zA-z0-9ÁÉÍÓÚáéíóúÑñ]/g,"");
    //console.log("caracateres sin signo/espacio",caracterSinEspacioSigno.length);   //impresion de pantalla
    return caracterSinEspacioSigno.length 
    
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },

  getAverageWordLength: (text) => {    
  //1)Separar la cadena string en subcadenas con los metodos trim y split para quitar los espacios, se obtiene un arreglo de subcadenas 
  //2)Sacar el promedio de longitud del arreglo (lista); Promedio = suma de todos los elementos de la lista/ el numero de elementos de la lista
    const palabraSinEspacio = text.trim(); //eliminar espacios al inicio y fin del texto para que no los cuente como caracteres de las palabras
    const arregloPalabras = palabraSinEspacio.split(/\s+/g); //Se obtiene un arreglo de palabras (el metodo split siempre siempre devuelve un arrelgo)
    //Hay que obtener el numero de caracteres por palabra, estos numeros se suman y se dividen por el numero de palabras (cadenas)
    //Ciclo (bucle) "for" para que se cuenten los caracteres por palabra. Iterar el arreglo con un ciclo.
    //console.log(arregloPalabras);
   
    let sumaCaracteres = 0  //Declarar la ariable de inicio del bucle en 0 para que se vaya guardando la suma de todas las palabras del arreglo
    //i =indíce 
    for (let i = 0; i< arregloPalabras.length; i++) {  //la operacion se hará en todo el arreglo
      sumaCaracteres += arregloPalabras[i].length      //Obtener el numero de caracateres de cada palabra del arreglo y se suman
    }
    //Declarar una variable constante para obtener el promedio.
    const promedio = sumaCaracteres/arregloPalabras.length; //Promedio: dividir la suma de los caracteres por el numero de palabras en el texto
    //Todas las funciones deben retornar/devolver algo
    //return promedio.toFixed(1)  //Opcion 1) metodo toFixed para que solo me muestre un determinado numero de decimales
    return Number (promedio.toFixed(2))  //Opción 2) metodo to Fixed sea parte de un objeto de tipo Number para que solo salgan dos decimales de ser necesario
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberCount: (text) => {
    //Encontrar todos los numeros de la cadena string 
    //Contar la cantidad de número que hay
    //Se utiliza el metodo match que es como un filtro que me va ayudar a encontrar los numeros que hay en la cadena string, devuelve un arreglo
    //Regex: /\d/g para que busque todos los numeros coincidente de 0-9 individualmente
    //const numeros = text.match(/0-9/g); esta forma no funcinó
    //const numeros = text.match(/\d/g) //esta opción busca numeros enteros; los cuenta de manera individual  
    //Esta expresión incluye numeros enteros y numeros con decimales despues del entero,los cuenta como palabras
    const numeros =text.match(/\b\d+(\.\d+)?\b/g); //Constante que en la que se guardará el arreglo de numeros enteros y con decimales que se encuentre en la cadena de texto
    // \b Asegura que el número esté delimitado por caracteres no alfanumérico 
    if(numeros === null){   //Condicion: Si el valor del arreglo de numeros es nula que nos devuelva un valor 0 
      return 0;  
    }
    else{   //pero si no es asi, entonces que nos devuelva el conteo de numeros que hay en el texto
      return numeros.length;
    }  
    
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberSum: (text) => {
  //Obtener un arreglo que contenga los numeros en la cadena
    //Convertir esos numeros tipo string a datos primitivos number
    //Que cada numero se vaya sumando y de una suma total de todos los numeros que hay en el texto
    //const numeros = text.match(/\d+(\.\d+)?/g) //no funcionó porque si cuenta los numeros que hay en palabras
    const numeros = text.match(/\b\d+(\.\d+)?\b/g); //Constante para obtener el array (arreglo) de números de la cadena 
    let sumaNumeros = 0;    //Declaracion de variable que inicie la suma en 0
    if(numeros){   //condicionamos el código a modo de que si hay numeros en el arreglo se realice la función
      for (let i = 0; i < numeros.length; i++) {   //Declaramos un bucle que va a recorrer todo el arreglo hasta el último índice del arreglo
        sumaNumeros += parseFloat(numeros[i]);    //Cada iteración va a convertir el numero string en numero con parseFloat y lo va a sumar 
      }
      return sumaNumeros;  //Devolverá la suma total de cada numero que se encuentre en la cadena
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    }
    else{
      return 0  //si no se encuentran numeros entonces que devuelva 0
    }
  },
}
export default analyzer

