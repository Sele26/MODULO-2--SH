---ROUTING---
-Proceso de dirigir un usuaruia a diferentes paginas dentro de una misma aplicacion web, estas paginas estaran definidas en un url.
REACT ROUTING DOM
-el componente padre de tdo va a hacer => <Router/>.
-Single page application = aplicaion web que se carga una sola web y luego se actualiza dinamicamnte

En este caso vamos a tener solo un HTLM y todo va a ocurrir en una sola pagina desde el ROOT, osea vamos a tener diferentes vistas.
Libreria react-router-dom = que nos permite hacer todo esto.

-TENDREMOS QUE INSTALAR = npm i react-router-dom@5.2.0 (version de la que estamos instalando router).


-El ejercicio vamos a hacer lo siguiente => 
    localhost:3000= quiero que me muestre un mensaje de bienvenida y boton para entrar a la pagina
    localhost:3000/home => quiero que me muestre las Cards=> Card
    localhost:3000/about =quiero que me muestre el about

-Cuando instalamos router, en el archivo index.js vamos a importar {BrowserRouter} , este componente va a abrazar a APP 

cont root = ReactDOM.createRoot(document.getElemntById("root"));
root.render (
    <BrowserRouter>
    <App />
     </BrowserRouter>
);

Con esto le esta dando la capacidad a APP de definir rutas. Entonces desde el archivo app voy a hacerlo.

-Primero debemos realizar las configuracion => debemos tener BrowserRout y los Route (que los creamos en APP.JS)
Pero para aqui me flta un componente que cada ruta.
Por ejemplo: nos falta en el archivo app.js el elemnto home que hace referencia a un componente.

<Route path="/about" elemnt={/home}>

-Entonces creamos una carpeta Views (vistas)con todos esos componente que necesitamos para las distintas paginas.

---NAVEGACION ---
Podemos crear elemntos en nuestro componente que nos permita movernos de una ruta a otra 

<Link /> Esta etiqueta nos permite adjuntar un enlace  a un elemnto 
<Navlink /> es similiar al anterior, con la diferencia de que permite modificar los estilos del link cuando esta activo