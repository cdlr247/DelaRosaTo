# **¿Qué es AJAX y cómo funciona?**  

<div style="text-align: justify">

AJAX significa JavaScript asíncrono y XML (Asynchronous JavaScript and XML). Es un conjunto de técnicas de desarrollo web que permiten que las aplicaciones web funcionen de forma asíncrona, procesando cualquier solicitud al servidor en segundo plano.

En palabras llanas, Ajax permite acceder a datos existentes en el servidor sin necesidad de recargar la página completamente. Estas consultas contra el servidor se realizan por medio de Javascript y los datos se procesan mediante éste mismo lenguaje, permitiendo actualizar el contenido de la página justamente donde sea preciso.

## **Componentes de AJAX**
Ajax es una combinación de los siguientes lenguajes de programación y elementos:

- HTML (o XHTML) y CSS: Base para el diseño de la página.
- DOM y Javascript: Forma de acceder dinámicamente a las partes de la página.
- objeto XMLHttpRequest: Es el que permite la comunicación asíncrona (en segundo plano) con el servidor.
- XML : Formato en el que están los datos que se solicitan al servidor; aunque otros formatos también pueden funcionar, como son HTML, texto plano(txt), json ... etc.
- PHP : En este manual trataremos también cómo mandar datos al servidor. Este los recoge mediante PHP. Una vez enviados pueden guardarse en una base de datos o procesarlos para enviar alguna información.

## **Cómo funciona AJAX**
Usando sólo PHP u otros lenguajes de servidor, al hacer una petición, el servidor realiza una serie de tareas y después nos devuelve los datos. Mientras se realiza este proceso la página permanece en espera, es decir está parada. Esto puede que no tenga importancia si se manejan pocos datos y el servidor tiene potencia para responder rápidamente. Sin embargo si se manejan muchos datos o hay muchas peticiones a la vez (páginas muy visitadas), el tiempo de respuesta puede ser más largo. Mientras se espera la respuesta la página permanece parada.

Con ajax al trabajar de forma asincrona, permite que el usuario pueda seguir haciendo otras cosas o la página pueda mostrar otras cosas mientras se produce la respuesta.

Los siguientes gráficos muestran la forma de trabajar pidiendo datos al servidor de forma sincrona (sin ajax) o asíncrona (con ajax):

Forma clásica de trabajar al interactuar con el servidor:
![Hubo un error al cargar la imágen](https://aprende-web.net/progra/objetos/modeloAjax1.gif "Grafico 1 AJAX")

Forma de trabajar con ajax al interactuar con el servidor
![Hubo un error al cargar la imágen](https://aprende-web.net/progra/objetos/modeloAjax2.gif "Grafico 2 AJAX")

Ajax es particularmente útil en paginas que manejan gran cantidad de datos o que son usadas por una gran cantidad de usuarios. Algunos ejemplos de páginas que usan ajax son Gmail (el correo de Google) o Google Maps.

![Hubo un error al cargar la imágen](https://www.aprenderaprogramar.com/images/stories/Cursos/CU011/CU01193E_1.png "Esquema AJAX")
</div>