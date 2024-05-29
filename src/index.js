//Index es la parte de mi documento que tiene que ver con toda la interacción de la usuaria con mi página
//Se conecta con analyzer importándolo
import analyzer from './analyzer.js';

// para saber que está funcionando el js
console.log("hola, si estoy conectado");
//Utilizando selectores del DOM
console.log(document.querySelector("textarea"));
console.log(document.getElementById("reiniciar"));


// 1) Actualizar las métricas cuando se escriba en el cuadro de texto
/*Declaracion de una variable constante; querySelector requiere llamar al elemento junto con su atributo de interés 
('textarea[name="user-input"]); tambien se puede utilizar getElementBy */
const textarea = document.querySelector('textarea[name="user-input"]');
// Sintax de addEventListener(type, listener) = addEventListener(event,function)
// Se utiliza un evento input para detectar el cambio del valor al escribir o pegar un texto; evento keydown lo detecta solo por teclado 
/* event.target Se refiere al elemento que desencadenó un evento específico (es una referencia al objeto en el que se lanzó el evento)
En este caso queremos el valor de input (campo de entrada) que el usario ingresó, se usa: event.target.valuea*/
/*Quedaría asi: textarea.addEventListener("input",(event)=>{], pero nos limitaremos a usar event porque
 ya está implicito (se tacha por default en la const, podemos no escribirla) */
textarea.addEventListener("input",()=>{ 
    //creamos una const que tenga con target.value
    const text = event.target.value;
    //impresion en la pantalla con la constante
    console.log("El usario está escribiendo:", text);
    //todas las metricas hechas en analyzer mostarán sus resultados con la constante text
    //analyzer.getWordCount("conteo de palabras" + event.target.value)... de no haber hecho una constante quedaría así
    analyzer.getWordCount(text)
    analyzer.getCharacterCount(text);
    analyzer.getCharacterCountExcludingSpaces(text);
    analyzer.getNumberSum(text);
    analyzer.getNumberCount(text);
    analyzer.getAverageWordLength(text);
});

//2) Botón para limpiar el contenido de la caja de texto
const btn = document.getElementById("reiniciar"); //se declara la constante
btn.addEventListener("click", (limpiarContenido)=>{   //Se utiliza el manejador EventListener con el evento click
document.querySelector('textarea[name="user-input"]').value = " ";  //Se hace un llamado al valor de input de mi texta y que al borrar el contenido lo deje en blanco " "
console.log("se borró el contenido");
});

// 3)Actualizar el atributo textContent del listado de metricas
//const listado = document.getElementsByClassName ("metricas");
//textContent = listado + analyzer.getCharacterCount; 
//console.log("metricas",listado);
//textContent = listado.getCharacterCount;
//.value = "0";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

