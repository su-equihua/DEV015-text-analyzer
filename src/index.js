//Index es la parte de mi documento que tiene que ver con toda la interacción de la usuaria con mi página
//Se conecta con analyzer importándolo
import analyzer from './analyzer.js';

// para saber que está funcionando el js
//console.log("hola, si estoy conectado");
//Utilizando selectores del DOM
//console.log(document.querySelector("textarea"));
//console.log(document.getElementById("reiniciar"));


/*Declaracion de una variable constante; querySelector requiere llamar al elemento junto con su atributo de interés 
('textarea[name="user-input"]); tambien se puede utilizar getElementBy */
const textarea = document.querySelector('textarea[name="user-input"]');

/*Declarar las constantes de cada metrica fuera de alguna función para poder ser utilizadas más de una vez 
(boton y actualizacion de metricas)*/
const palabras = document.querySelector('li[data-testid="word-count"]'); 
const caracateres = document.querySelector('li[data-testid="character-count"]');
const sinEspacioSignos = document.querySelector('li[data-testid="character-no-spaces-count"]');
const numeros = document.querySelector('li[data-testid="number-count"]');
const sumaNumeros = document.querySelector('li[data-testid="number-sum"]');
const longitud = document.querySelector('li[data-testid="word-length-average"]');


// Funcion: Actualizar las métricas cuando se escriba en el cuadro de texto
// Sintax de addEventListener(type, listener) = addEventListener(event,function)
textarea.addEventListener("input",function(){ 
//creamos una const con target.value que nos dará el valor de input
  const text = event.target.value;  
  //Se utiliza un evento input para detectar el cambio del valor al escribir o pegar un texto; evento keydown lo detecta solo por teclado
  /* event.target Se refiere al elemento que desencadenó un evento específico (es una referencia al objeto en el que se lanzó el evento)
En este caso queremos el valor de input (campo de entrada) que el usario ingresó, se usa: event.target.valuea o textarea.value*/
  /*Quedaría asi: textarea.addEventListener("input",(event)=>{], pero nos limitaremos a usar event porque
 ya está implicito (se tacha por default en la const, podemos no escribirla) */


  //impresion en la pantalla con la constante
  //console.log("El usario está escribiendo:", text);

  //Funcion: Actualizar con el atributo textContent el resultado del listado de metricas
  //Las metricas hechas en analyzer mostrarán sus resultados con la constante text
  //analyzer.getWordCount(event.target.value)... de no haber hecho una constante quedaría así
  palabras.textContent = "Palabras:" + " "+ analyzer.getWordCount(text); 
  /*Se utiliza el atributo textConten con la constante anteriormente construida, el texto de cada metrica
 + el valor obtenido con el metodo correspondiente de analyzer*/

  caracateres.textContent = "Caracteres:" + " " + analyzer.getCharacterCount(text);
  sinEspacioSignos.textContent = "Caracteres sin espacio:" + " " + analyzer.getCharacterCountExcludingSpaces(text);
  numeros.textContent = "Números:" + " " + analyzer.getNumberCount(text);
  sumaNumeros.textContent = "Suma de números:" + " " + analyzer.getNumberSum(text);
  longitud.textContent = "Longitud promedio:" + " " + analyzer.getAverageWordLength(text);
}); 

//Funcion: Botón para limpiar el contenido de la caja de texto
//se declara la constante
const btn = document.getElementById("reiniciar"); 
//Se utiliza el manejador EventListener con el evento click
btn.addEventListener("click", ()=>{   
/*Se hace un llamado al valor de input de mi texta y que al borrar el contenido lo deje en blanco "" 
(no dejar espacio entre las comillas porque actualiza la caja con ese espacio)*/
  document.querySelector('textarea[name="user-input"]').value = "";  
  //console.log("se borró el contenido"); //impresion en pantalla

  //Ordenamos que se actualice en valor 0 cada metrica utlizando textConten con cada una de las const
  palabras.textContent = "Palabras: ";
  caracateres.textContent = "Caracteres: "; 
  sinEspacioSignos.textContent = "Caracteres sin espacio: "; 
  numeros.textContent = "Números: "; 
  sumaNumeros.textContent = "Suma de números: ";
  longitud.textContent = "Longitud promedio: ";

});
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`