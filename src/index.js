//Index es el archivo donde escribiré la interacción de la usuaria con mi página
import analyzer from './analyzer.js';

const textarea = document.querySelector('textarea');

const palabras = document.querySelector('li[data-testid="word-count"]');
const caracateres = document.querySelector('li[data-testid="character-count"]');
const sinEspacioSignos = document.querySelector('li[data-testid="character-no-spaces-count"]');
const numeros = document.querySelector('li[data-testid="number-count"]');
const sumaNumeros = document.querySelector('li[data-testid="number-sum"]');
const longitud = document.querySelector('li[data-testid="word-length-average"]');


// Funcion: Actualizar las métricas cuando se escriba en el cuadro de texto
textarea.addEventListener("input",function(event){ 
  const text = event.target.value;  
  //console.log("El usario está escribiendo:", text);

  palabras.textContent = "Palabras:" + " "+ analyzer.getWordCount(text); 

  caracateres.textContent = "Caracteres:" + " " + analyzer.getCharacterCount(text);
  sinEspacioSignos.textContent = "Caracteres sin espacio:" + " " + analyzer.getCharacterCountExcludingSpaces(text);
  numeros.textContent = "Números:" + " " + analyzer.getNumberCount(text);
  sumaNumeros.textContent = "Suma de números:" + " " + analyzer.getNumberSum(text);
  longitud.textContent = "Longitud promedio:" + " " + analyzer.getAverageWordLength(text);
}); 

//Funcion: Botón para limpiar el contenido de la caja de texto
const btn = document.getElementById("reiniciar");
btn.addEventListener("click", ()=>{
  document.querySelector('textarea[name="user-input"]').value = ""; 

  palabras.textContent = "Palabras: ";
  caracateres.textContent = "Caracteres: "; 
  sinEspacioSignos.textContent = "Caracteres sin espacio: "; 
  numeros.textContent = "Números: "; 
  sumaNumeros.textContent = "Suma de números: ";
  longitud.textContent = "Longitud promedio: ";

});
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`