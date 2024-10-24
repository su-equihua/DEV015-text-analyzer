//Analyzer es el archivo donde escribire el código para la manipulacion de los datos 
const analyzer = {  
      
  getWordCount: (text) => {
    const palabras = text.trim();
    const numPalabras = palabras.split(/\s+/g);  
    //console.log("conteo de palabras:",numPalabras);
    return numPalabras.length;    //retornar la longitud de las palabras
   
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  
  getCharacterCount: (text) => {
    //console.log("caractereres:", text.length)
    return text.length
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCountExcludingSpaces: (text) => {
    const caractereSinEspacio = text.replace(/\s+/g,"");
    const caracterSinEspacioSigno = caractereSinEspacio.replace(/[^a-zA-z0-9ÁÉÍÓÚáéíóúÑñ]/g,"");
    //console.log("caracateres sin signo/espacio",caracterSinEspacioSigno.length);
    return caracterSinEspacioSigno.length 
    
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },

  getAverageWordLength: (text) => {    
    const palabraSinEspacio = text.trim();
    const arregloPalabras = palabraSinEspacio.split(/\s+/g);
    //console.log(arregloPalabras);
   
    let sumaCaracteres = 0
    for (let i = 0; i< arregloPalabras.length; i++) {
      sumaCaracteres += arregloPalabras[i].length
    }
    const promedio = sumaCaracteres/arregloPalabras.length;

    return Number (promedio.toFixed(2))
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberCount: (text) => {
    const numeros =text.match(/\b\d+(\.\d+)?\b/g); 
    if(numeros === null){ 
      return 0;  
    }
    else{
      return numeros.length;
    }  
    
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberSum: (text) => {
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
    let sumaNumeros = 0;
    if(numeros){
      for (let i = 0; i < numeros.length; i++) {
        sumaNumeros += parseFloat(numeros[i]); 
      }
      return sumaNumeros; 
    }
    else{
      return 0
    }
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
}
export default analyzer

