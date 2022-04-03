# **Evento Bubbling y Capturing**

<div style="text-align: justify">


Tanto Bubbling «Burbuja» como Capturing «Captura» son dos modelos que los eventos del DOM utilizan para propagarse.  

Cuando interactúas con un elemento del DOM, como por ejemplo cuando haces clic en un botón, JavaScript ejecutará las acciones asociadas el evento que ha ocurrido. Sin embargo, también ejecutará las acciones asociadas a los elementos del DOM que contengan al botón. Es decir, el clic se propagará desde los elementos de menor jerarquía hasta sus ancestros, a no ser que frenes la propagación de algún modo, como por ejemplo usando la función Event.preventDefault().

Para explicarlo mejor vamos a proponer el siguiente ejemplo:

        <div id="container">
            <button id="boton" >Ey colega!</button>
        </div>

Imagínate que quieres detectar cuando se hace clic en el botón **#boton** y que tienes un listener que has asociado el mismo mediante JavaScript:

    document.getElementById('mi-boton').addEventListener('click', function(){
    console.log('Se ha detectado un clic en el botón');
    });

Imagínate que también tienes otro listener en el elemento **#container**:

    document.getElementById('container').addEventListener('click', function(){
    console.log('Se ha detectado un clic en el container');
    });
Estos listeners se ejecutarán en orden, y este orden se determina mediante los modelos bubbling o capturing. Vamos a ver en qué consisten:

- Event Bubbling: Los eventos se propagarán en orden ascendente desde le elemento en el que se hace clic, que es el de menor jerarquía, hasta sus padres, que son los de mayor jerarquía. En el ejemplo propuesto, la acción asociada al elemento **#boton** se iniciará antes que la acción asociada al elemento #container. Este es el método que se usa por defecto.
- Event Capturing: Los eventos se propagarán en orden inverso, comenzando por los elementos de mayor jerarquía y descendiendo por su árbol de hijos hasta los elementos de menor jerarquía. Es decir, que JavaScript recorrerá el DOM desde el objeto Window e irá descendiendo hasta el elemento en el que hemos hecho clic. Con esta filosofía, en nuestro ejemplo se iniciaría primero la acción asociada al elemento #container y luego la asociada al elemento **#boton**.  

Como ahora ya sabes, la metodología que se usa por defecto es la del bubbling, pero puedes usar también la metodología capturing agregando un tercer argumento al método addEventListener de JavaScript, que debería tener el valor **true**:

    document.getElementById('container').addEventListener(
    'click',
    function(){
    console.log('Se ha detectado un clic en el container');
    },
    true
    );

En JavaScript, primero se ejecutarán todas las acciones que usen la metodología capturing, comenzando desde el objeto Window y descendiendo hasta el elemento con el que hemos interactuado, y luego las que usen bubbling, por lo que ahora debería iniciarse primero el evento **'click'** que hemos asociado el elemento **#container**.

Una vez se haya llegado desde el elemento Window hasta el objetivo, se repetirá el proceso, aunque ahora ascendiendo mediante bubbling hasta el objeto Window, iniciando las acciones asociadas al evento definidas mediante bubbling durante el camino.

Y esto ha sido todo.
</div>