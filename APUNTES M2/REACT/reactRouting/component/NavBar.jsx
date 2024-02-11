import { Link} from "react-router-dom"
const NavBar = () => {
    return ( 
        <div>
            {/* link viene de reat por eso debemos importar */}
            {/* la etiqueta link es para darle link a los componententes de nav y las rutas se las damos con el to */}
       <Link to="/">
             <p>Landing</p>
             </Link>
             <Link to="/home">
             <p>Home</p>
             </Link>
             <Link to="/about">
             <p>About</p>
             </Link>
             <hr />  
        </div>
    );
    };
    
    export default NavBar;