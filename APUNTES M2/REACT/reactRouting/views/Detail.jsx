//es un hooks
import { useEffect } from "react";

import { useParams } from "react-router-dom";
// vista del usuario 
const Detail = () => {
    // este useParams (hooks)lo qe hace es darle un objeto que tiene dentro el id de la card que estamos seleccionando de la vista
    // pero como sabe useparams que es el id? porque yo le dije en el archivo app que el path era /detail/:id (osea algo del id)
    const { id } = useParams();
    //useEffect maneja el ciclo de vida del componente
    //lo hace de distintas maneras, ya que se escriben en distintas formas
    
    //componentDidMount - lo que pasa cuando el componente se monta 
    //recibe una cb(se ejecuta cuando se monta el componenente) y un aray vacio 
    useEffect (()=>{
    //en un ecenario real haria un fetch de cada id , osea importaria toda la info de esos id. 

    },[]);
    
    return (
<> 
<h2> Esta seria la ficha del usuario de ID  </h2>
  
    </>
 )
};

export default Detail;