//quiero hacer a jsonplaceholder una peticion de tipo GET a /users
//voy a recibir informacion de usuarios dentro de un array 
//quiero mostrar esta info armando una lista de Nombres de los uasuarios.
    

// const USERS_URL= "http://jsonplaceholder.typicode.com/users" //las constantes fijas por convecion son llamadas con mayusculas
// $.get(`${USERS_URL}/users`, (response)=>{ //utilizo una fucion cb para que me devuelva la respuesta
//         response.forEach(user => {
//             //voy a realizar un recorrido con el forEach y crear un elemento HTML que represnete a cada usuario.
//        const li =document.createElement("li");//creamos la etiqueta li (dentro de las ol) para cada elemnto iterado del array
//        li.innerHTML = user.name;//agregamos los elemntos dentro de la lista de los nombres de cada usuario
//        const listaUsuarios = document.querySelector("#listaUsuarios");
//        //const listaUsuarios = $("#listaUsuarios")[0];//tambien podemos usar query selector 
//        //colocamos el [0] porque listaUsuarios es una sola cosa y quiero acceder a ella
//        //listaUsuarios.append(li);
//        listaUsuarios.appendChild(li);
    
//     });

//  });

//METODO AJAX
//REALIZAMOS EL METODO AJAX CON EL GET PARA PEDRILE INFORACION 
$.get(`${URL_BASE}/users`, showUsers);

const URL_BASE = "https://jsonplaceholder.typicode.com";
const listaUsuarios = document.querySelector("#listaUsuarios");//SELECCIONAMOS EL ELEMENTO LISTAUSUARIOS DENTRO DEL DOM 

//CREAMOS UNA FUNCION QUE RECIBE TODOS LOS USUARIOS DE LA API Y RECCORE EL ARRAY DE TODOS LOS USUARIOS
const showUsers = (users) =>{
   users.forEach(createListItem)
      
   };
   //CREAMOS UAN FUCNCION EN DONDE TOMAMOS CADA USAURIO QUE ITERAMOS.
const createListItem = (user)=>{
   const li = document.createElement("li");//CREAMOS UNA LI EN EL DOM PARA CADA USUARIO 
   li.innerHTML = user.name;//EN LA LISTA AGREGAMOS EL NOMBRE DEL USUARIO
   listaUsuarios.appendChild(li);//agregamos el elemnto a las lista de usuarios
};



