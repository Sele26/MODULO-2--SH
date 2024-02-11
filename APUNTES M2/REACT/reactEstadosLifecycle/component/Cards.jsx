import Card from "./Card";
//Cards recibe los props ose el estado de users que le da APP
const Cards = (props)=>{ //las props van a ser el users de app
    return(
      <>
      //realizo el llamado del estado , recorro users y en cada uno de los recorrido(map)muestro una cards con name y email
    {props.users.map(users=>{
         return <Card name={users.name} email={users.email} />
       })}    
         </>  )
        
}

export default Cards;