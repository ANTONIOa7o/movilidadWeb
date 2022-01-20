/*
El método getElemntById() NOS DEVUELVE EL ELEMENTO QUE TIENE EL ATRIBUTO Id="",con el valor
especificado. Siendo su uso mas extendido cuando queremos manipular u obtener informacion
de un elemento de su DOCUMENTO

*/

function funcionesMath(){
    document.getElementById('resultado').innerHTML=
    "<label style='color: red' >Logaritmo: "+Math.log(1000)+"</label><br/>"+
    "Exponencial: "+ Math.exp(8)+"<br/>"+
    "Raiz Cuadrada: "+ Math.sqrt(9)+"<br/>"+
    "Pontencia 2^8: "+ Math.pow(2,8)+"<br/>"+
    "Valor Absoluto: "+ Math.abs(-666755)+"<br/>"+
    "Redondeo a la Baja(6.3458): " + Math.floor(6.3458)+"<br/>"+
    "Redondeo al alza(6.3458): " + Math.ceil(6.3458)+"<br/>"+
    "Redondeo medio(6.3458): "+ Math.round(6.3458)+"<br/>"+
    "Random Semilla: "+ Math.random()+"<br/>"+
    "Random del 1 al 10: "+ Math.random()*10+"<br/>"+
    "Valor maximo: "+ Math.max(1,3,4,9)+"<br/>"+
    "Valor minimo: "+Math.min(1,3,4,9) +"<br/>"+
    "Coseno de PI: " + Math.cos(Math.PI)+"<br/>";

}

function funcionesString(){
var texto="JavaScript estructuras de Cadena de Texto";
document.getElementById('resultado').innerHTML=
//Define el texto en minuscula
"Minuscula: "+ texto.toLowerCase()+"<br/>"+
"Mayusculas: "+  texto.toUpperCase()+"<br/>"+
"Localizar valor @: " + texto.indexOf("@")+"<br/>"+
"Longitud: "+ texto.length+"<br/>"+
"Unicode: "+ String.fromCharCode(960)+"<br/>"+
"Valor unicode: "+texto.charCodeAt(texto.indexOf('J'))+"<br/>";
}

function funcionesDate(){
    var fecha = new Date();//objects
    document.getElementById('resultado').innerHTML=
    "Fecha:" + fecha.toLocaleDateString()+"<br/>"+
    "Hora: "+ fecha.toLocaleTimeString()+"<br/>"+
    "Minutos: " + fecha.getMinutes()+"<br/>"+
    "Segundos: "+ fecha.getSeconds()+"<br/>"+
    "Milisegundos: "+ fecha.getUTCMilliseconds()+"<br/>"+
    "Mes: "+ fecha.getMonth()+"<br/>"+
    "Dia: "+ fecha.getDay()+"<br/>";
}