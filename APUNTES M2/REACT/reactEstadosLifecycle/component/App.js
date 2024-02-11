// import EstadosClase from "./reactEstadosLifecycle/EstadosClase"
import Cards from "./Cards"
//componente funcionales = se pueden utilizar HOOKS QUE SON FUNCIONES QUE YA TIENE REACT 
//{useState} ES UN HOOKS
import { useState } from "react"; 
import SearchBar from "./SearchBar";


//app va atener un estado 
function App(){
    //DESTRUCTURING = users(estado), setUsers(funcion para cambiar el estado)
    const[users,setUsers]= useState([
        // { name:"selene" , email:"sele.rulo@hotmail.com"}
    ]);
    //realizo una funcion que pide en el servidor jsonplay los id
    const searchUser = (id) =>{
        //fetch realiza una peticion al servidor que trae los id que le pedimos a lo ultimo ${id}
        fetch("urldejson/${id}")
        //aqui decimos que queremos hacer con la respuesta 
     .then(res=>res.json())
     //aqui recibimos la data = objeto del usuario 
     .then(data=>setUsers([...users,data]))
     //usamos la funcion setUsers que es la que modifica el estado la cual es un array vacio 
    //hacemos ...users,data (osea que le estamos dando el valor que ya tenia users mas la dat nueva que vamos a ejecutar)
    //esta funcion va a ser ejecutada por serchBar    
}

   
    return(
        // A partir de ahora tengo un estado que se llama users ={}
    // setUsers en la funcion encargada de modificar ese estado

<div className="App">
<SearchBar onSearch = {searchUser} /> //boton de buscador
<Cards users={users} /> //aca le paso como props el estado que es useState
</div>
    );
}

export default App;