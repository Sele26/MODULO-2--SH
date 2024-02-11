//METODOS HTTP
JQUERY :Primeros paquetes de herramientas groso , en donde se encuntra ajax.
Debo scripear ajax dentro de html.


-Gracias a AJAX el cliente (nav) va a poder decirle al servidor que necesita que le mande una informacion.
-El cliente por ejemplo quiere mostrar una lista de usuarios ,pero html no tiene esa lsta guardada pero si le podemos pedir al servidor lo cual ese pedido se llama peticion (REQUEST) y el servidor le va a dar una RESPONSE.
-Esto se debe llevar a cabo mediante un protocolo HTTP.
-REQUEST: el servidor la recibe , la cual va a tener un plan de accion mediante cada tipo de la misma , para saber que respuesta debe enviar.Como cliente yo hago la peticion con la ruta definida por ejemplo user.
Al servidor le podemos pedir que guarde informacion.

PROTOCOLO PARA PERDIRLE INFORMACION => METODO GET
PROTOCOLO PARA GUARDAR INFORMACION =>
METODO POST
PROTOCOLO PARA BORRAR INFORMACION =>
METODO DELETE
PROTOCOLO PARA MODIFICAR INFORMACION =>
METODO PUT

En cada metodo siempre va a ver una REQUEST Y UNA RESPONSE.

//EVENTOS
Event LOOP = Cuando en JS tenemos una tarea lo cual lleva tiempo en ejecutarse la delega a WEB API (herramientas).

EJEMPLOS:

En html = dentro de body => en la etiqueta script
Le pedimos a un servidor informacion de usuarios.
<body>
<h1>Usuarios de mi Aplicacion</h1>
<ol></ol>

<script>
    

    $.get(url de donde quremos sacar la info:www.ajax.com/users , (response)=>{ //utilizo una fucion cb para que me devuelva la respuesta
        console.log(response);

    )}

    </script>

    -Si yo quiero realizar una peticion de tipo HTTP osea GET.
    -Necesito pedirle a una web API que lo haga por mi 

    -En esta web se encuentra AJAX => $