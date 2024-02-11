Temas de la LECTURE
-Preprosesadores 
-Framework 
-Formas de dar estilos

Media Queries: lugar donde se va a mostrar la pagina

Existn dos formas de aplicar estilos:
FLEXBOX :UNA SOLA DIMENSION O LINEA DE DISEÑOS EN LA PAGINA PORQUE EJEMPLO TODO VERTICAL O TODO HORIZONTAL.
-Justify-content:podemos alinear los elemntos en forma horizontal => tiene los siguientes valores:
flex-start:alinea elemntos al lado izquierdo del contenedor 
flex-end: alinea elemntos al lado derecho del contenedor 
center:alinea elemntos en el centro del contenedor
space-between:muestra elemntos con la misma distancia entre ellos 
space-around: muetra elemntos con la misma separacion a su al rededor.


GRID: ME PERMITE UBICAR LAS COSAS COMO A MI MAS ME GUSTE , SECCIONA LA PANTALLA EN 12 PARTES IGUALES , ENTONCES NOS PERMITE UBICAR NUETROS CONTENEDORES EN DONDE QUERRAMOS.


MEDIA QUERIES : nos permiten realizar diseños responsive (para interfaces de usuarios que se adaptan a la pantalla)
Defino tamaños de pantallas para tal y tal medidas de pantallas.

FRAMEWORKS: Nos provee distintas herramnientas para realizar aplicaciones.
Ya tienen componenetes estilizados, lo cual nos ahorramos el estilo de una tabla , login , etc.
Por ejemplo:
-Boostrap:plantillas facil adaptacion.No es ligero.
PARA TRABAJAR CON ESTE MISMO:
-Debemos instalarla
-Etiquta script o link dentro de head y copiamos el url de bustrap


-React Boostrap:
-Foundation:Gran flexibilida a la hora del disño UI , gran cantidad de herramientas. 
-Bulma: elegante y minimalista , pero no esta tan desarrollada.
-Tailwind
-Material UI
-Anti-Desing

CSS PREPROSESADORES
Prograa que interpreta una sintaxis y las convierte en css puro , nos permite escribir estilo claro, mantenible y escalables.
-Less: Crea variables lo cual solo agregamos una @ antes del nombre . Podemos crear funciones , 
Nos permite tner selectores agrupados o aislados-
Podemos importar un archivo dentro del otro con @import.
Podemos crear mixins, con bloques de codigos que ya tiene estilo y lo podemos utilzar en distintas partes del codigo , le puedo pasar parametros.
Por ejemplo:

.boder-text{
    border:10px;
    color:red;
}
.line{
    .border-text();
    backraund-color:salmon;
}
Tambien le podemos pasar parametros a estos mismos estilos para poder pasarles los valores que querramos.

Tmbien tenemos herencias osea el padre le deja la herencia al hijo.


//Variables:
@color-fondo:#F55;
@width:10px;

Ejemplo:
h1{
    backgraund-color:@color-fondo;
}

//FUNCIONES:
@base:#029;
@width:0.5;

Ejemplo:


.class{
    width:percentage(width);//aqui se realiza una fucnion percentage (es misma de less para realzar el porcentage de la propiedad width)
    color:saturate(@base,5%);//aqui va a utilizar el color de @base y lo va a realizar en su 5% de saturacion
}

//ANIDADOS:
Puedo seleccionar los ul , ol que esten dentro del nav y editarlas a todas juntas.

nav{
ul{
margin:10px
        }
ol{
        color:red
    }
}

//IMPORTACIONES:Puedo tener un modulo o archivo de less con variables e importar esa hoja en los disntisntos archivos que vamos a utilizar par los estilos

//MIXINS:
Puedo crear funciones similares a JS ,a la que voy a poder llamar para pedirles ciertos valores definidos

Ejemplo:

.important-text{
    color:black;
    font-size:25px;
    font-weight:bold;
}

.danger{
    .important-text(); //importo a la funcion de arriba trayendome todos los elemntos que la misma tiene.
    backgraund-color:red;
}
//MIXINS CON PARAMETROS


.bordered(@color;@widht){
    border:@widht solid @color;
}

.myArticle{
    .border(blue;1px)
}

//HERENCIA

.button-basic{
    border:none;
    padding:15px 30px;
    text-aling:center;
}
.button-report{
    extend(.button-basic);
}


REACT ESTILOS
DISTINTAS FORMAS DE APLICAR REACT
-LEGACY - Formas clasicas de aplicar estilos, creo una hoja de estilos y la importo , creando class es las etiquetas de HTML -Esto es gracias a WEBPACK.
Cuando se instala el webpack de react siempre trae una hoja de estilos.
Tiene compatibilidad
Los estilos son globales.
-INLINE STYLING : puedo escribir css como si fueran obj de JS.
Por ejemplo: 

const cardStyle = {
    backgroundColor: "red",
    borderRadius: "16px",

} //escribimos los estilos como objetos de js, lo escribimos solos con comas y no con ; y varios componentes que cambian.

No debo configurar nada , tiene estilos globale.
Perdemos los pseudosSelecortores,sintaxis rara.

-CSS MODULES : Crea modulos locales , no globales.
Los estilos son locales lo cual no va a ver colisiones con el tema de repetir nombres de clases y demas.
Perdemos los estilos globales.
Nombre del archivo - card.module.css
Este archivo se debe importar al archivo jsx :
import style from "./Card.module.css";
import style = ya que estamos especificando que es estilo, entonces se crea el objeto de css 

-EJEMPLO PARA CAMBIOS DE TRANSICION CON EL MOUSE

//antes vamos a tener solo el container original digamos y luego realizamos los  cambios de transicion, en este caso container

.container:hover{ //hover es cuando queremos que un elemnto cambie en la accion de pasar el mouse sobre el mismo 
box-shadow:0 00.5em rosa , 0 0 0.5em rosa, 0 5em rosa; //crea las sombras de los elemntos para que vaya graduando su color 
transition:2s; //sirve para saber el tiempo en aparecer el cambio.Si esta no estaria el cambio es de repente 
cursor:pointer; //puntero del maouse que realiza el cambio cuando se posa sobre el elemnto
background-color:pink;
color:black
}

-EJEMPLO PARA CAMBIAR DE LUGAR LAS CARTAS DEL CONTENEDOR


@media(min-width:760px) and (max-widht:1280px){
    .cardsContainer{
        background-color:aqua;
        padding:30px;
        border-radius:20px;
        display:flex;
        flex-wrap:wrap;
        widht:700px;
    }
    } //estos estilos van a tomar los estilos que estan a la medida de la pantall que pusimos em el @media


@media(min-width:1280px){
.cardsContainer{
    background-color:blue;
    padding:40px;//se separe del contenedor 
    border-radius:20px//redondear puntas del contenedor
    display:flex;//se alinea de manera horizontal
}
}

-STYLES COMPONENTS:forma muy utilizada , version mejorada del module.Para utilizaro neceito instalarlo(npm install styled-components),crear componentes estilizados.

Como trabajamos css con html :
POR EJEMPLO:
En la hoja de HTML  en el head tenemos un link donde importa una careta index.css.
Primeramente cuando instalamos LESS , vamos a teners en la carpeta less todas los archivos que esta crea cuando se instala .
Lo cual vamos a importar todos estos archivos a una carpeta principal que es index.less
De la siguiente sintaxis :
@import "variables"; //variables es el nombre del archivos less

Cuando hagamos este cambio todos los archivos de less se importara en el index.css , lo cual llevara todos los codigos al archivos css






















