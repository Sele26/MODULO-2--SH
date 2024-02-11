ECMASCRIPT 6 
Nuevas Feactures:
//LET Y CONST:
Var: Realizan Hoistig ,tienen alcance de contexto de ejecucion 
Let:Tienen alcances de llaves, puedo cambiar su valor,no puedo tener dos variables con el mismo nombre.
Const:Estas no pueden cambiar su valor,tienen alcances de llaves.
Si pusheo una const puedo cambiar su valor.
-No usar var ya que asi exponemmos a todo el contexto de ejecucion.Ya que podemos pisar valores fuera de ese contexto.
-Todo es const hasta que se demuestra lo contrario , si no va const es let.

//ARROW FUNCTIONS
Se guarda la definicion o nombre de la funcion en una variable ,seguido por los parentesis de parametros y funcion flecha.


const sumar=(a,b) =>{   
    const resultado = a + b ;
    return resultado;
};

-Cambia la sintaxis de las funciones comun.
-Si lo pongo con let o var va a ser lo mismo.
-Se puede escribir y ahorrar mas lineas.

const sumar=(a,b) => a + b ;
Es este caso como no le pongo llaves lo retorna directamente.
Si tiene llaves debo de ponerlo si o si.

Metodo filter = recibe como parametro una cb en donde recibe cada elemnto del array que recorre y esta retorna una condicion que los numeros del array deben pasar 

const arr= [1,2,3,4,5]
const pares = arr.filter { function(num)=>{
 return num % 2 === 0;
}};

o
const pares = arr.filter(function(num)){
 return num % 2 === 0;
};


THIS =>
Las arrow functions toman el this donde fueron definidas , osea que hacen un autobind.


const bob ={
    nombre:"bob",
    amigos:["selene","alejo","elian"],


printFriends(){ //metodo de bob

this.amigos.forEach((friends)=> { //con el forEach recorremos el array de amigos y con la array function el this nombre me toma al bob 
    console.log(this.nombre,"conoce a ",friends);
})
}
};
bob.printFriends();


//OBJECT LITERALES
const nombre = "Jorge";
const apellido = "vega";
const edad = "23";

const objetoPersona = {
    nombre,
    apellido,
    edad,
};

console.log(objetoPersona);

//CLASES
Tienen dos sintaxis


function Persona (nombre,apellido){
    this.nombre = nombre ;
    this.apellido = apellido;
}

class Persona{
    constructor (nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

getNombre () {
    return this.nombre; //esta funcion retona el nombre de Persona 
}
    }


    class Empleado extends Persona { //Empleado hereda de persona
        
        constructor(nombre,apellido,cargo){
            super(nombre,apellido); //super es el constructor de Persona, la cual hereda todo del padre
            this.cargo=cargo;

        }
    }

    const empleado1= new Empleado("Persona","Casilla","jefe de ventas");

    console.log(empleado1);
    console.log(empleado1.getNombre())
Tanto como uno y como la otra sintaxis funcionan lo mismo

    //TEMPLATE LITERALS

    const nombre = "Jorge"
    console.log("Hola mi nombre es",nombre);

    Vamos a usar los BACkTICKS= alt + 96
    console.log(`Hola! mi nombre es ${nombre} y mi apellidos es ${apellido}`);

    Por ejemplo cuando queeramos construir url con datos:

    const usuario = "user";
    const password = "password";
    const puerto="puerto";
    const host="host";

    const url = `sql@${usuario}:${password}:${host}:${puerto};`

    //DESTRUCTURING
Vamos a poder extraer info de obj y arr y guardarlos directamentes en variables o utilizarlos

EJEMPLO:
const obj = {
    nombre:"selene";
    apellido:"Gonzalez";
    direccion:"Independencia";
}

function cualquiera (obj){ //vams a llamr todo el objeto, pero queremos que retorne una version mas corta del mismo objeto 
    console.log(obj);
    const {nombre,apellido}=obj; //realizo un copia del objeto , de lo que quiero  seleccionar y me las da en variables distintas

return{
    nombre,
    apellido,
}
 }
cualquiera(obj);

Estoy seleccionando los objetos y valores que quiero utilizar del objeto completo

o 

const cualquiera = ({nombre,apellido}) => {
return{
        nombre,
        apellido
    };

    }

    Tambien podemos realizar este metodo en array 
Esto lo vamos a utilizar generalente para array pequeños , donde tengamos certeza de lo que hay adentro 

    const arr = ["Elian","Jorge","Sonia"];
    const[persona1,persona2,persona3] = arr;

o 

const arr = ["VALOR X",function(){}]

const [valor , function ]= arr 

console.log(valor);
console.log (function);


//SPREAD
const arr1 =[1,2,3];
const arr2 = [4,5,6];

const nuevoArr = [...arr1]; //los ... me da los elemntos de arr1 , pero en un nuevo array 

arr1.push(5);

console.log(nuevoArr) //aqui solo me imprime los elemntos del nuevoArr 


ESTO TAMBIEN FUNCIONA CON OBJETO =


const persona = {
    nombre : "Jorge",
    edad: "23",
}


const personaConApllido = {
    ...persona,//me traigo las propiedades del objeto persona
    apellido:"Gonzalez",//agrego valor a persona 
    edad: "21", //aca estoy cambiando el valor de persona 
}

console.log(personaConApellido);


//COMPATIBILIDADES
