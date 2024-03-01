//cuando llame a la funcion el valor que introduzca pasara por un switch para clasificarlo 
//se activara el diplay flex del div en cuestion

function winlinVE(id){

    switch(id){
        case 1:
        document.getElementById("VE1").style.display = "flex";

        break;


        case 2:
        document.getElementById("VE2").style.display = "flex";

        break
    }

}

//Le dira al display de los dos elementos que sea nada

function cerrarVE(){

    document.getElementById("VE1").style.display = "none";
    document.getElementById("VE2").style.display = "none";


}

