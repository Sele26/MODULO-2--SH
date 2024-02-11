---Creamos Formularios con React ---
Existen formularios controlados y no controlados

-Tenemos los formularios de contacto , para crear un usuario ,comentarios, entre otros.
-Ingresamos datos y tenemos un boton donde enviamos por asi decirlo los datos hacia algun lugar.Esta info viaja a un servidor y se almacena en base de datos.

-vamos a crear un estado que corresponda al usuario.

---Ese estado debe estar---

---CONTROLADOS ||| NO CONTROLADOS ---
-Debemos validar   -Su valor viene del
esa informacion      DOM
sea correcta.
-el INPUT setea
al estado y estado
setea al input
-Se valora en 
tiempo real si el 
valor esta mal.



-Regex - son esxpresiones que validan una informacion recibida y ver si estan bien o mal => lo cual se buscan y se guardan ya que son dificiles de expresar. 
por ejemplo:
 
 if (toda la expresion que copiamos para saber validar un meil/.test(from.email)) 
 entonces en el .tests (que debemos poner al final de esta condicion) colocamos la funcion estado con el input que queremos verificar en este caso un email.


 ---KEY---
 te permite identificar de manera unica a los elemntos renderizaos de una lista.
 -React necesita que cada vez que agarro un lista con elementos parecidos  , por ejemplo cuando mapeamos las card. Nos pide que identifiquemos ese elemnto con una key para que no tengamos errores

 Por ejemplo=EN EL COMPONENT CARD 
 Le voy a agregar una propiedad KEY

 key ={id}

 Porque ponemos el id como key? Porque es una propiedad que cambia en cada Card osea card 1 card 2 card 3 y asi.
Y asi React puede identificar que cada componente es diferente.