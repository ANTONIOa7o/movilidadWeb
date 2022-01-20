
var estiloBorde = false;//falso no tiene borde; true ->Si tiene borde
var estiloColor = false;
var estiloSombra = false;

function borde() {
    //si no tiene borde se lo pongo
    if (estiloBorde == false) {
        document.getElementById("cuadrado").style.border = "5px solid #0d47a1";
        estiloBorde = true

    } else {
        document.getElementById("cuadrado").style.border = "none";
        estiloBorde = false
    }
}

function color() {
if(!estiloColor){

    document.getElementById("cuadrado").style.backgroundColor = "pink";
    estiloColor = true;
}else{
    document.getElementById("cuadrado").style.backgroundColor ="#2196f3";
    estiloColor=false;
}

}

function sombra() {
if(!estiloSombra){
    document.getElementById("cuadrado").className="sombra"; 
}else{
    document.getElementById("cuadrado").className = null;
}
estiloSombra = !estiloSombra;
}