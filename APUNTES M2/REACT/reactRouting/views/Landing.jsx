import { useHistory } from "react-router-dom"; //useHistory from "react-router-dom";
// import {useNavigate} from "react-router-dom"; este es para la version 6 
const Landing = () => { 
  //tenemos la posibilidd de manipular el historial, el historial es el de navegacion  
const history = useHistory();

<>
    <h1>Bienvenido a la demo de react routing</h1>
    
    <button onClick={() => history.push("/home")}>Ingresar</button>
      </>
};

export default Landing;