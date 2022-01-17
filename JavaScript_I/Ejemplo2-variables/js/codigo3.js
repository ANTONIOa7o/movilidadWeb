var nombre=window.prompt("Introduce nombre: ");
var apellidos=window.prompt("Introduce apellidos: ");
var edad=window.prompt("Introduce edad: ");
/*
window.promt-> será un dialogo que contiene un cuadro de texto de una linea, un boton"Cancel"
otro OK (Aceptar), y devuelve el string que el usuario introdujo.
No siempre utilizaremos string, y en ocasiones tendremos que realizar conversiones
*/

document.write("Hola!"+"<br/>"+ "mi nombre es: "+nombre+" mis apellidos son: "+ apellidos +" y tengo: "+ edad+"años.");
/*el caracter backslah \n en ambito html, no ejecutará atentos a ello., si lo hará en 
alert o console.log()*/
console.log("Hola!"+"\n"+ "mi nombre es: "+nombre+" mis apellidos son: "+ apellidos +" y tengo: "+ edad+"años.");