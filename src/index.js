import analyzer from './analyzer.js';

// para saber que está funcionando el js
console.log("hola, si estoy conectado");
console.log(document.querySelector("textarea"));
console.log(document.getElementById("reiniciar"));

// Declaracion de la variable, en este caso es una constante usando DOM y usando un etiqueta HTML
const textarea = document.querySelector("textarea").value;

// Actualizar las métricas cuando se escriba en el cuadro de texto
// Sintax de addEventListener(type, listener) es lo mismo addEventListener(event,function)
/* Se utiliza un evento input por si el cambio del valor se da por pegar el texto sin 
*limitarnos solo a la deteccion del texto por teclado (keydown) */

textarea.addEventListener("input", function wordCount(){ //aquí van los parametros de la funcion
    //bloque de codigo de la funcion
const texto = string.trim();
const palabras = string.plit(/\s+/)
return palabras.length; // una funcion debe retornar a algo

console.log("recuento:",palabras)  //para ver en la consola 
});



// Se hace una declaración por medio del Id
const btn = document.getElementById("reiniciar");
// Evento con add 
btn.addEventListener("click",())


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

