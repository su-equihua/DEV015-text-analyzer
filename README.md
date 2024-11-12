# Analizador de texto

## Índice

* [Descripción del proyecto](#descripción-del-proyecto)
* [Funcionalidades](#funcionalidades)
* [Diseño de página](#diseño-de-página)
* [Instrucciones de uso](#instrucciones-de-uso)
* [Lenguajes utilizados](#lenguajes-utilizados)
* [Desarrollo del proyecto](#desarrollo-del-proyecto)

## Descripción del proyecto
El Analizador de Texto es una aplicación web que permite a la usuaria extraer y analizar información clave de un texto. Ofrece métricas como el conteo de palabras, caracteres (con y sin espacios), números, la suma de estos números, y la longitud promedio de las palabras. Además, incluye la opción de limpiar el área de texto para realizar el análisis de más textos.

![Vista general de la aplicación](https://raw.githubusercontent.com/su-equihua/DEV015-text-analyzer/refs/heads/main/Images/vista-app.png)

## Funcionalidades de esta herramienta
 
En la aplicación, la usuaria ingresa el texto en un cuadro de texto, y a medida que escribe, se calculan en tiempo real las métricas.
Las métricas que se calculan son las siguientes:

- Conteo de palabras: muestra el número total de palabras en el texto.
- Conteo de caracteres: contabiliza todo los caracteres, incluidos espacios y signos de puntuación.
- Conteo de caracteres excluyendo signos de puntuación y espacios: muestra el número de caracteres sin contar espacios ni signos de puntuación.
- Detección y conteo de números: detecta la presencia de números y los contabiliza.
- Suma de números: genera la suma total de los números presentes en el texto.
- Longitud promedio de las palabras: calcula y muestra la longitud media de las palabras del texto de entrada.

 Además, la aplicación cuenta con un botón que permite limpiar el contenido del cuadro de texto y restablecer las métricas.

## Diseño de página

Se eligió un diseño limpio y sencillo para esta página web, con el objetivo de minimizar distracciones y permitir que la usuaria se concentre en los resultados de las métricas extraídas de su texto. El enfoque minimalista asegura una experiencia clara y agradable para la usuaria.

El prototipo del diseño fue desarrollado en la plataforma [Figma](https://www.figma.com/design/gPZw8WugkFAppaxjQ5n8LY/Analizador-de-texto?node-id=0-1&m=dev&t=pZ5WAYglNpOcUv5l-1).

## Instrucciones de uso

1) Abre la aplicación en el navegador de tu elección.
2) Escribe el texto que deseas analizar en el área de texto.
3) Las métricas se actualizarán automáticamente mientras escribes.
4) Para borrar el texto y restablecer las métricas a su valor inicial, utiliza el botón "Eliminar texto".

## Lenguajes utilizados

Este código fue desarrollado utilizando los tres lenguajes fundamentales para el desarrollo web: HTML, JavaScript y CSS.

## Desarrollo del proyecto

El tiempo estimado para completar este proyecto fue de 3 sprints:

* Primer Sprint: Se configuró el entorno de trabajo y se desarrolló la estructura base de la página en el archivo HTML.
* Segundo Sprint: Se implementaron las funciones de los métodos de objeto y el manejador de eventos en JavaScript, permitiendo la interacción de la usuaria con la página.
* Tercer Sprint: Se realizaron pruebas para asegurar el correcto funcionamiento de la página y se diseñaron los estilos visuales con CSS.

Aunque el código de esta aplicación es de autoría única, el desarrollo se hizo posible gracias a la orientación y apoyo de otras desarrolladoras web.
