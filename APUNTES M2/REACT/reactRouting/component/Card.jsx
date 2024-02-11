
import { Link } from "react-router-dom"; 

const Card = (props)=> {
    return(
<div>
<hr />
<p>{props.id}</p>
{/* Yo quiero que cuando haga click en el nombre de cada card quiero que me lleve a una ficha que me muestre los datos de esa persona-esta vista se llama ditail  */}
{/* to = va a llevar a detail y su id de cada usuario que va a ir cambiando su numero de id  */}
<Link to={`/detail/${props.id}`}>
<h2>{props.name}</h2>
</Link>
<hr />
</div>
 );
}  ; 

export default Card;
