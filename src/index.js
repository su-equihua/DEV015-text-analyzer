import analyzer from './analyzer.js';

console.log("hola, si estoy conectado");
// para saber que está funcionando el js

console.log(document.querySelector("textarea"));

console.log(document.getElementById("reiniciar"));

// Se crea la variable que en este caso es una const para hacer la declaración a través del DOM usando un etiqueta HTML
const textarea = document.querySelector("textarea");

// Sintax de addEventListener(type, listener) a lo es lo mismo addEventListener(event,function), en este caso se utiliza una funcion en flecha
//Opción b: usar un evento keydown para detectar el teclado
textarea.addEventListener("keydown",()=>{

    analyzer.getWordCount()

    analyzer.getCharacterCount()

    analyzer.getCharacterCountExcludingSpaces()

    analyzer.getAverageWordLength()

    analyzer.getNumberCount()

    analyzer.getNumberSum() //funciones
}

// Opcion a: Se utiliza un evento input por si el cambio del valor se da por pegar el texto sin limitarnos solo a la deteccion del texto
textarea.addEventListener("input",()=>{

    analyzer.getWordCount()

    analyzer.getCharacterCount()

    analyzer.getCharacterCountExcludingSpaces()

    analyzer.getAverageWordLength()

    analyzer.getNumberCount()

    analyzer.getNumberSum() //funciones


// Actualizar las métricas cuando se escriba en el cuadro de texto

// Se hace una declaración por medio del Id
const btn = document.getElementById("reiniciar");
// Evento con add 
btn.addEventListener("click",())


// Limpiar el contenido de la caja de texto


let update = element.element.getAttribute ("textContent")
let update = element.innerHTML ("li")

let metricas = document.querySelector("li");
let.log(metricas.innerHTML);

let metrica = document.querySelector("li");
let.log(metricas.textContent);

// La aplicación actualiza el atributo textContent o innerHTML de los li que mostrar del texto

//Aquí se manipula el HTML a través de JS
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

