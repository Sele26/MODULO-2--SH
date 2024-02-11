FORMAS DE TRABAJR ESTILOS CON REACT

LEGACY =>
-define los estilos en un archivo app.css lo exporta y lo importa en el modulo app.js
-El problema es que al tener solo un modulo para todos los componentes es que va a ser un archivo muy grande para toda la app 
-Es css normal el basico que ya sabemos 

INLINE STYLING =>
(podemos escribir css en js)

EJEMPLO EN ARCHIVO CARD.JSX

const Card => {
    const tituloStyle= {
        color: "red", //lo debo escribi como un string al color porque si no la busca como variable 
        fontSize: "medium", //no puedo escribir quemaqueil (font-size)
    };

    return (
        <div className="container">
    <h1 style={tituloStyle}>Esto es titulo de Cards </h1>
    </div>
    );

    };
PROS: no hay configuracion , no hay coliciones
CONTRAS: Perdemos los pseudoSelectores(hover..etc)
Sintaxis rara.

CSS MODULES =>
escribimos css propiamente dicho y mantener scope locales
- El componente tiene su propia modulo css, entonces yo puedo poner el mismo nombre de class en este componente ya que no se va a pisar con otro.
PROS:Estilos locales , no puede haber colisiones
Organizado , los estilos son locales para cada componente 
CONTRAS:pierdo todo los estilos globales 
-Debo tener cuidado ya que cuando yo destructuro los estilos en cada componente esos estilos se vuelven variables, y puedo pisar variables de cada componente

STYLES COMPONENTS =>
Hace cumplir las mejores practicas eliminando la asociason entres estilos y componentes.

Para poder utilizarlo debo instalarlo en la terminal
**npm i styled-components**
