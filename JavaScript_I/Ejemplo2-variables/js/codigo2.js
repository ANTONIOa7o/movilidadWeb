var texto="Hola";
var numero=8.4;
var booleana=true;


document.write(texto + "<br/>");
document.write(numero+"<br/>");
document.write(booleana + "<br/>");

/*concatenacion de variable

Además de utilizar el elemento "+" como concatenador, tendremos caracteres
de escape, o carácter backslash, acompañado por el simbolo '/'. Se usa
para resolver la representacion desde javaScript con simbolos no podian ser
incluidos de forma normal dentro de un texto

Secuencias de escape                      RESULTADO

\'                                  Comilla simple
\"                                  Comilla doble
\\                                  Simbolo \
\n                                   salto de linea
\t                                  Tabulacion
*/

alert(texto+"\n"+numero+"\n"+booleana);