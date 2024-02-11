MODULOS =>ARCHIVOS
-pieza de codigos que cumple una tarea epcifica e indica de que pieza del codigo depende => 
DEPENDENCIAS:Es cuando creamos vario modulos lo cual estan dependiendo ya que en un modulo especifico (Hola) utilize sus funciones o variables en otro modulo(Chau) y asi sucesivamente.

EXPORTACIONES
-tenemos tres modulos =funciones.js
                       index.js
                       variables.js
FUNCIONES.JS = Tenemos funciones suma y resta.
INDEX.JS = realizo console.log y llamo a la funcion suma 


Para exportar FUNCIONES.JS 
Se va a crear un objeto de suma con la funcion suma al igual que la resta.
   ** module.exports = {
        suma,
        resta,
    };**
Yo lo que estoy diciendo qu en FUCNIONES.js suma y resta es lo que esta a disposicion de exportar

Para IMPORTAR suma y resta a INDEX.JS
 **const obj = require("./funciones.js);**
 por ejemplo si yo quiero utilizar a suma en index.js 

** const resultado = obj.suma(3,5)**

 Si me quiero traer a INDEX.JS solo suma y no esta :

   ** const { suma } = require("./funciones.js);**
  
Entonces solo estoy importando a suma.





                       
