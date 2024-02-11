Libreria de Java Script declarativa , eficiente y flexible.

TIPOS DE PROGRAMACION :
IMPERATIVA :describe como hacer algo paso a paso 
**DECLARATIVA:** describe que se quierehacer sin especificar como hacerlo.

VIRTUAL DOM : Propio DOM 
Nosotros en nuetra app dom, vamos a hacer un cambio EN UNOS DE LOS ELEMNTOS , ESE CAMBIO IMPACTA EN UNO DE LOS ELEMNTOS HIJOS Y DESPUES QUE HAYA HECHO ESE CAMBIO LO COMPARA CON EL DOM REAL , y recien ahi sabiendo esas diferencias lo vuelca.
React al tener su propio DOM puede jugar con sus propias reglas en el  dom virtual.
-resumidamente lo que hace es compara los dos DOM y buscar las diferencias y lo aplicas al DOM ORIGINAL.

FRAMEWORK- **create-react-app**
comando para crear mi propia app (npx crete-react-app nombre de la app)
-Asi empiezo a crear mi proyecto de react
-Lo que hace es darle una estructura para empezar a realizar una app.
-Comando **npm start** , para abrir la pagia directamnete en el navegador.

COMPONENTES
-Unidad modular de la interfaz de usuario.
-Divide la aplicacion en partes independientes y reutilizables
Por ejemplo =>Yo voy a poder armar un boton y reutilizarlo en la misma aplicacion muchas veces al igual que llevarlos a otra app. 
-Mejor eficiencia en el codigo.

COMPONENT DRIVEN DEVELOPER
Son las secciones en donde se divide la app por ejemplo Menu o barra de nvegacion.
La cual cada uno de esos componentes las puedo ir reutilizando.
   ***Principio de Responsabilidad Unica**
   -Debemos saber que tipo de  tarea tiene cada  componente para tener todo mejor ordenado con sus funciones.
   -Cada componente tiene un proposito y responsabilidad.
    **JSX**
 -Permite escribir HTML dentro del codigo JS
 -Dentro de src voy a crear una carpeta COMPONENT donde ahi adentro voy a ir ordenando todos los componentes que voy a ir creando =>
 LISTAPERSONAS: dentro de ella va a estar el archivo jsx
 Este comoponente es una funcion de JS
 -EN EL ARCHIVO LISTAPERSONAS.JSX =>
 Importamos REACT 
 COMPONENTE FUNCIONALES =
 
 primeramente importo React

      const listaPersona = () =>{
         return (
            <div>// Aqui comienza el componente de la lista en general 
            <div> //Aqui comienza uno de los componentes
            <hr></hr>//sirve para realizar una linea como separacion
            <p>Nombre:Jorge Vega</p>
            <p>Edad:23</p>
            <hr></hr>
            </div> //Aqui termina uno de los componentes
            
  <div>
            <hr></hr>
            <p>Nombre:Selene Gonzalez</p>
            <p>Edad:23</p>
            <hr></hr>
            </div>

              <div>
            <hr></hr>//sirve para realizar una linea como separacion
            <p>Nombre:Jorge Vega</p>
            <p>Edad:23</p>
            <hr></hr>
            </div>
            </div>
         );
      };

      export default listaPersonas; //dejo disponible la carpeta para exportarla 
-OTRA MANERA DE PODER CREAR ListaPersona
-COMPONENTES DE CLASE =

class ListaPersonas extends React.Component{ //aqui decimos que listaPersona hereda de React los Componentes
constructor (props) { //recibe props al constructor
   super(props); //constructor de la clase de la que hereda
}

render () {
   return(
      <div>
      <hr></hr>
      <p>Nombre:{this.props.name}</p>
      <p>Edad:{this.props.age}</p>
      <hr></hr>
      </div>
   ) 
   //aca abajo va todo el componente que hicimos arriba 
}
}

export default listaPersonaclass 

-Pero para tener esta lista de persona en archivo APP.JS devo exportarlo e importarlo 
 -EN EL ARCHIVO APP

 -Ahora queremos tener cada uno es esos componentes como uno solo , pero cada componente deberia de tener algo similar a un argumento par cada valor en este caso quiero pasarle NOMBRE Y EDAD en los ejemplos de arriba.
 -Entonces dentro de COMPONENT ,creo otra carpeta PERSONAITEMS para crear a la persona de cada componente.
     
     -Carpeta PERSONAITEMS - Archivo PersonaItems.jsx
     ///DENTRO DE ARCHIVO PERSONAITEMS///

     importamos React

     const PersonaItem = (props) =>{
      return(
         <div>
         <hr></hr>
         <p>Nombre:{props.name}</p>
         <p>Edad: {prop.age}</p>
         <hr></hr>
         </div>
      );
     };
     export defaul PersonaItems


///DENTRO DE ARCHIVO listaPersona///
     importamos React
     importamos PersonaItems 

     const ListaPersonas = (props) => {
      return (
         <div>
         <PersonaItem name="Jorge Vega" age= "32"/> //como HTML no conoce de numeros puedo ponerle al age {32}
         <PersonaItems/>
         <PersonaItems/>
         </div>
      )

     }

export default listaPersona;

///PROPS
-Un componente puede recibir Prop (informacion y funcionalidades) que le heredan de un padre a un hijo 

///DENTRO DE ARCHIVO listaPersona///
     importamos React
     importamos PersonaItems 

     const ListaPersonas = (props) => {
      return (
         <div>
         </div>
         {props.lista.map(persona=>{
          return <PersonaItem name={persona.name} age={persona.age} />

})}// como props de ListaPeronas es un array ,por cada elemento del mismo mostrar una persona 
         

     }

export default listaPersona;

//WEBPACK

   





