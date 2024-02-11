import { Route } from "react-router-dom";
import Home from "../views/Home";
import Landing from "../views/Landing";
import NavBar from "./NavBar";
import About from "../views/About";
import Detail from "../views/Detail";

function App() {
    return(
    <div className="App">
        <Route  path="/" component={NavBar} /> 
        {/* aqui vamos a colocar todas las rutas  estamos trabajando con la version 5*/}
 {/* <Switch> //switch es utilizado para la version 6 */}
    {/* la ruta localhost:3000 decimos exact path para que muestre la pagina cuando es exactamente esa */}
    <Route exact path="/" component={Landing} /> 
    {/* //la ruta localhome:3000/home
    <Route path="/home"><h1>Estamos en el home donde queremos mostrar las Cards</h1>
    </Route> */}
    <Route  path="/home" component={Home} /> 
   
    {/* //la ruta localhost:3000/about
    <Route path="/about"><h1>Estamos en el about</h1>
    </Route> */}
     <Route  path="/About" component={About} />
     <Route  path="/detail/:id" component={Detail} />  
 {/* </Switch>  */}
            </div>
        );
  };
  
  export default App;

// version 6
//   function App() {
//     return(
//     <div className="App">
//  <NavBar> //lo coloco afuera para que permanesca siempre y no se vaya en los diferentes routes
// <Routes>
        
//         <Route exact path="/" elements={Landing} /> 
//         <Route  path="/home" elements={Home} /> 
//         <Route  path="/About" elements={About} />
//         <Route  path="/detail/:id" elements={Detail} />  
// </NavBar> 
// </Routes>
//             </div>
//         );
//   };
  