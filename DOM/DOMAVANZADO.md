Fron-ed 
PASOS PARA CREAR UNA PAGINA WEB 
1-DOM => Pagina de internet , representacion de una pagina HTML lo cual fue convertida a un objeto de js.
Por ello nosotros debemos contruirla.

2-CSSOM => Estructura similar al DOM y representa la regla de estilos de css. 

3-Render Tree => junta el DOM Y CSSOM , en donde se deja solo los elemntos visibles 

4-Generacion de LAYOUT=> 
-Determina el tamaño de viewport(pantalla donde vamos a abrir la pagina  por ejemplo computadora o celular)
-Da e contexto para calcular los estilos que dependen de el 
-El viewport se puede configurar mediante el tag meta viewport 

 5-Paiting => Es cuano la pagina aparece en la pantalla.
 Ejecutando JS =>
 -Cuando JS ejecuta el codigo y se encuntra con una etiqueta <script> se detiene para ejecutarla y luego sigue leyendo.
 
 Cuando nosotros abrimos en nuestro navegador el nuestro html , es un objeto de js.

 Para pder interactuar html con js vamos a utilizar el concepto del DOM API , lo cual es una caja de herramientas la cual me da soluciones a la hora de trabajr con el DOM , lo cual quiero que el DOM sea interactivo.

-CODIGO del DOM api
SELECTORES:
- Si queremos seleccionar un elemento de el DOM : en este caso el document es el DOM y queremos seleccionar el elemnto id "titulo".

document.getElementById("titulo");

- Si queremos seleccionar los elemntos por el nombre de ETIQUETA 

document.getElementByTagName("p");
 - En el caso de tener varios p podemos elegir que parrafo quiero seleccionar 

 document.getElementByTaName("p")[2]; //en este caso seleccionamos el parrafo 2 del array 

 var miparrafo = document.getElementByTagName("p")[2]; //lo que hice es colocarla en una variable.

 miParrafo.innerHtml="Hola"  //cambio el valor de ese parrafo a Hola

 -QUE PASA CUANDO TENGO CLASS 
document.getElementByClassName("contenido"); //selecciono lasetiquetas con la class CONTENIDO 

-QUERYSELECTOR = es otro tipo de selector 

var parrafos=document.querySelectorAll("p"); //me selecciona todos los parrafos
  var titulo=document.querySelector("#titulo"); //selecciono el id # titulo 
  var contenido=document.querySelector(".contenido") //selecciona la class contenido solo la primera si hay varias 
var parrafos=document.querySelector("p") //me trae solo el primero.


ELEMNTOS = Accion de que algo esta sucediendo o algo que sucedio 
EVENT TARGET = Escuchador del evento , esto tiene definido que hacer cuando esto ocurre.
<boton>

var boton=document.querySelector("#boton#); //seleccionamos al boton 

boton.addEventListener("click",function()(alert{"Apretame"})); //Le digo al boton que cuando ecuche que realice el click y cuando esto suceda se ejecuta la funcion de alert.

-Podemos tener en la etiqueta de scrip que colocamos la funcion por fuera del EventListener.

<script>
    var boton=querySelector("#boton");

    function clickHandler(){
        var otros= document.querySelector("#otros");
        otros.id ="contenido"; //lo que hacemos aca es que seleccionamos el id otros y luego cambiamos el id a contenido , entonces cuando se realiza el click de abajo el parrafo con el id otros se cambia al color de contenidos // si es class en vez de id se coloca className.

    }

    boton.addEventListener("click",clickHandler()) //decimos que cuando se haga click se ejecute la funcion clickHandler

-CREAMOS DIV O ETIQUETAS NUEVAS EN CADA CLICK AL BOTON 
function cambiarClase(event) //funcion que se ejecuta la hacer click en el div que creamos
var div=event.target
if (div.className == "contenido") div.className="otross"
else div.className ="contenido"


event.target.className="otros" //target es una propiedad que indica el quien desencadeno este evento  en este caso div

function clickHndler()
var div =document.createElement("div"); //creo un div

var parrafo=document.createElement("p"); //creo un parrafo

parrafo.innerText= Lorem //le agrego un texto al parrafo

div.appendChild(parrafo); //creo un hijo dentro del parrafo entonces se agrega el parrafo dentro del div

div.className="contenido"; //le dimos las clases de estilo al div

document.querySelector("body").appendChild(div); // selecciono el body para traerlo y le doy un hejo ue seria el div

div.addEventListener("click" , cambiarClas );

-EVENT LOOP 
Cada vez que el navegador se encuntra con un proceso que va a demorar tiempo , se delega a la web api esta se encarga de procesarlo , lo delega y es lanzado.
















