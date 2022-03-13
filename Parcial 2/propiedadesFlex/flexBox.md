
# **Flexbox**
<div style="text-align: justify">

Flexbox es un sistema de elementos flexibles que llega con la idea de olvidar estos mecanismos y acostumbrarnos a una mecánica más potente, limpia y personalizable, en la que los elementos HTML se adaptan y colocan automáticamente y es más fácil personalizar los diseños. Está especialmente diseñado para crear, mediante CSS, estructuras de una sóla dimensión.

Para empezar a utilizar flexbox lo primero que debemos hacer es conocer algunos de los elementos básicos de este nuevo esquema, que son los siguientes:  

![Hubo un error al cargar la imágen](https://lenguajecss.com/css/maquetacion-y-colocacion/flexbox/flexbox-como-funciona.png "Elementos del flexbox")


- Contenedor: Es el elemento padre que tendrá en su interior cada uno de los ítems flexibles. Observa que al contrario que muchas otras estructuras CSS, por norma general, en Flex establecemos las propiedades al elemento padre.

  - Eje principal: Los contenedores flexibles tendrán una orientación principal específica. Por defecto, es en horizontal (en fila).
  - Eje secundario: De la misma forma, los contenedores flexibles tendrán una orientación secundaria, perpendicular a la principal. Si la principal es en horizontal, la secundaria será en vertical, y viceversa.
 
- Ítem: Cada uno de los hijos flexibles que tendrá el contenedor en su interior.

Para activar el modo flexbox, hemos utilizado sobre el elemento contenedor la propiedad display que vimos en Tipos de elementos, y especificar el valor flex o inline-flex (dependiendo de como queramos que se comporte el contenedor)

## Propiedades del contenedor (elemento padre)

| Propiedad       | Valores                                                                                        | Función                                                                                                                                                                |
|-----------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| display         | flex                                                                                           | Establece un contenedor en bloque,  similar a block (ocupa todo el ancho del padre).                                                                                   |
| display         | inline-flex                                                                                    | Establece un contenedor en línea,  similar a inline-block (ocupa solo el contenido).                                                                                   |
| flex-direction  | row \| row-reverse \|  column \| column-reverse                                                | Cambia la orientación del eje principal.                                                                                                                               |
| flex-wrap       | nowrap \| wrap \| wrap-reverse                                                                 | Evita o permite el desbordamiento (multilinea).                                                                                                                        |
| flex-flow       | <flex-direction> <flex-wrap>                                                                   | Podemos resumir los valores de las propiedades flex-direction  y flex-wrap, especificándolas en una sola propiedad y ahorrándonos  utilizar las propiedades concretas: |
| justify-content | flex-start \| flex-end \| center \|  space-between \| space-around \|  space-evenly            | Se utiliza para alinear los ítems del eje principal  (por defecto, el horizontal).                                                                                     |
| align-content   | flex-start \| flex-end \| center \|  space-between \| space-around \|  space-evenly \| stretch | Sirve para alinear cada una de las líneas del contenedor multilinea.                                                                                                   |
| align-items     | flex-start \| flex-end \| center \|  stretch \| baseline                                       | Usada para alinear los ítems del eje secundario (por defecto, el vertical).                                                                                            |
| row-gap         | normal \| size                                                                                 | Espacio entre filas (sólo si flex-direction: column)                                                                                                                   |
| column-gap      | normal \| size                                                                                 | Espacio entre columnas (sólo si flex-direction: row)                                                                                                                   |

## Propiedades de items (elemento hijo)

| Propiedad   | Valores                                                          | Función                                                                                                                                                                           |
|-------------|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| flex-grow   | 0 \| Número                                                      | Número que indica el factor de crecimiento del ítem respecto al resto.                                                                                                            |
| flex-shrink | 1 \| Número                                                      | Número que indica el factor de decrecimiento del ítem respecto al resto.                                                                                                          |
| flex-basis  | Size \| content                                                  | Tamaño base de los ítems antes de aplicar variación.                                                                                                                              |
| order       | 0 \| Número                                                      | Número (peso) que indica el orden de aparición de los ítems.                                                                                                                      |
| align-self  | auto \| flex-start \| flex-end \|  center \| stretch \| baseline | Nos permite cambiar el comportamiento de align-items y sobreescribirlo con comportamientos específicos para ítems concretos que no queremos que se  comporten igual que el resto. |


</div>