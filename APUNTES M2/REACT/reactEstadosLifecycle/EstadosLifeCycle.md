ESTADOS => (unos de los conceptos mas importantes de react)
-informacion que va a tener el componente de forma interna.
-Donde se guarda toda esta informacion?
- Estado=objeto que contiene informacion de un componente.

-Al archivo ESTADOCLASE lo debo importar en el archivo APP.JS 

POR EJEMPLO =>


import EstadoClase from "./EstadosClase.jsx"


function App(){
    return (
        <div className = "App">
        <EstadosClase/>
        </div>

    );
 
}

-En React cuando un estado cambie , va a re  renderizar la informacion en la pantalla-
-Osea si quisieramos mostrar en la pantalla dos botones que uno sume y otro reste un numero(estado), debemos usar estados de react, porque si usamos solo una funcion en la funcion clase , no se va a renderizar.
-El problema de React es que una vez que esta el evento es la consola hay una diley ya que en la pantalla siempre va uno mas adelante que la consola.
-Entonces cuando yo necesito que el evento que arranca en 0 ,aumente a 1 y que se muestre tanto en la patalla como en la cosola,debo de hacer una funcion cb para que se iguale lo que se muestra en la pantalla a lo que se imprime en consola.


---CICLOS DE VIDAS---
Creamos el montaje osea se crea el componente entonces el constructor(que este toma las props y crea el estado), toma las props y se renderiza(todo los componentte y lo manda al dom virtual).
-Porque riact necesita actualizar el DOM?
Para hacer visible el componente en la pantalla , esto pasa luego de la renderizacion 
-Entoces se dispara una funcion componentDidMout =>que signica el componente se monto.
y esta funcion se utiliza cuando queremos mostrar algo un vez que el componente se termino de montar.Porejemplo un cartel.

-Que pasa cuando queremos actualizar un componente?
Se ejecuta componentDidUpdate

-Que pasa cuando queremos hacer algo cuando el componente de desmonta?
componentwillUnmount => por ejemplo borro todo lo que guarde antes en ese estado.

-ONE WAY DAT FLOW 
(componentens y containers)

APP (es el que trae toda la info de los componentes y se los pasa a los otro container)=>CARDS=>(es el que recibe esos caracteres y los desglosa)CARD=>(es el que realiza algo con cada componente y los muestra)

CARD=dumb
CARDS=Smart
APP=INFO

-De arriba hacia abajo se pasa info y de abajo hacia arriba se pasan eventos (padre e hijos)


-Resumidamente lo que realize en la carpeta COMPONENTS
-APP es el inicio en donde yo tengo el estado de USERS 
-Esos Users los importa Cards en donde los mapea y se los manda a el archivo Card con las prosps por ejemplo name y email.
-Card los recibe y los muestra.
-Search es un input con un boton de buscador.
-En app esta el estado de los usuarios que se mostrara en Cards y depende de que el estado cambie para que se actualicen.

-Entonces cuando Search realice una busqueda que dependende que los users osea el estado cambie.

INTALAR REACT DEVELOPER TOOLS = Extension para ver en la consola components
