//Analyzer es la parte de mi documento que tiene que ver con la manipulacion de los datos "parte interna del negocio"
const analyzer = {  
    
  getWordCount: (text) => {   // el parametro de la funcion es text
    //bloque de codigo de la funcion
    const palabras = text.trim();  //metodo trim para eliminar los espacios al inicio y al final de la cadena
    const words = palabras.split(/\s+/g)  /*hacer un arreglo (array) de subcadenas con split eliminando los espacios entre palabras
    expresion regular (/\s+/g); g para que haga una busqueda global en toda la cadena */
    console.log("conteo de palabras:",words); //Imprimir en la consola 
    return words.length;    // la funcion retornará a la longitud de las palabras
   
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  
  getCharacterCount: (text) => {
    console.log("caractereres:", text.length)  //ver en la consola
    return text.length   //length= longitud del texto; en este caso se hace un retorno para conocer la longitud del texto
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCountExcludingSpaces: (text) => {
    //const caracteresinespacio = 
    
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //if (typeof === 'number')  //si el texto es de tipo nombre
    return 
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    

    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
