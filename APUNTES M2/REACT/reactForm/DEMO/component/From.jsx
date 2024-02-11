import style from "./From.module.css";
import { useState } from "react";
//esta funcion lo que hace es recbir el email y vea si esta bien , si no esta bien que lo guarde en un estado de error
const validate=(from, setErrors, errors)=>{
    if(!from.email) setErrors({...errors, email:"Email vacio" });
    else {
    //testeamos que el email sea valido con la expresion regular de la libreria regax
if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(from.email)) 
setErrors({...errors, email:"" });//esto cuando esta bien 
else setErrors({...errors, email:"Email invalido" });//esto cuando esta mal 
};
};
    
const From = (props) => {
    //creamos estados = handlers 
    // const[username, setUsername] = useState('');
    // const[password, setPassword] = useState('');
    // Pero es mas facil crear un solo estado para todo el formulario 
    const [from, setFrom] = useState({
        email: '',
         password: ''
        });
//estado para los input con error
 const [errors, setErrors] = useState({
    email:"",
    password:""
 });      
        //esta funcion recibe el evento y tengo que diferenciar en que propiedad estoy modificando , en este caso me tengo que traer al name .Por ejemplo name="username"
// const handleChange = (event) =>{
//     if(event.target.name === 'username'){
//         setFrom({...from, username: event.target.value})
//     }
//     if(event.target.name === 'password'){
//         setFrom({...from, password: event.target.value})
    // }
    //Ahora vamos a realizar la misma fucnion solo que somplificada
const handleChange = (event) =>{
    const property = event.target.name; //cada input tiene un name ,entonces dejo claro que quiero modificar el name 
    const value = event.target.value; //dejo claro que quiero modificar el value
    
    setFrom({...from, [property]: value}); //[property] es lo que ya tengo guardado y value es lo que quiero modificar 
    validate(from, setErrors, errors) //le damos todas las funciones que va a usar el validate
};

const submitHandler = (event) =>{
    event.preventDefault(); //no me recargue la pagina cuando yo aprieto enviar 
    alert("LOGIN SUCCESSFULLY");
    
};

    return (
        <from onSubmit={submitHandler}>
             <div>
             <label htmlFor="email">email:</label>  //el label es la etiqueta que usamos para dar el nombre del campo
            <input type="text" name="email" value={from.username} onChange={handleChange} className={errors.email ? style.errors : style.secess}/> //cada input debe tener un name
            //el className es para darle un estilo , en este caso preguntamos si hay un error.email = style.error pero si no : style.seccess.
            <span>{errors.email}</span> //mensaje para mostrar el error del email.
            </div>
            <div>
            <label htmlFor="password">Paswords:</label>
            <input type="text"  name="password" value={from.password} onChange={handleChange}/> //el type de pasword puede ser pasword para que no se vea la contraseña
            </div>
            //submit es cuando se presiona
            <button type="submit">Login</button>

        </from>
    );
};

export default From;

//el value , toma el valor que se coloca en el username y password.
//el name del input , debe ser el mismos que tiene el estado 