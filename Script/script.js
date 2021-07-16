//variables y constantes//
let total= 0 ;
let , cant; 
let descuento; 
let compra;
let totalDesc = 0;
const compt= 820000


//operaciones//

function compra () {
    compra= document.getElementById("cant").value;
    compra= compt * cant;
    
}

function total() {
    total = document.getElementById("total").value;
    total= (compt * cant)- descuento;
}

if (cant <= 3280000 && cant >= 1680000) {
    descuento = compra * 0.15;    
}
else if (cant <= 6560000 && cant > 3280000) {
    descuento = compra * 0.25;   
}
else if (cant <= 9840000 && cant > 6560000) {
    descuento = compra * 0.35;   
}
else if (cant > 9840000) {
    descuento = compra * 0;   
}
else{
    descuento = compra * 0;
    alert('El valor ingresado no es válido');
}

    

document.getElementsById("compra").innerHTML = compra;
document.getElementsById("descuento").innerHTML = descuento;
document.getElementsById("total").innerHTML = total;
