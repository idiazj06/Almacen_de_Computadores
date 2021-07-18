//Definicion de variables y constantes
let valorDesc = 0;
let valorCompra = 0;
let valorDescuento = 0;
let valorTotal = 0;
let valNull = "El valor ingresado no es válido";
const valorComputador = Number(820000);

//Captura de datos
function capturaDatos() {
    let computadores = document.getElementById('inputCantComp').value;

    //Definicion de variable ValorCompra
    valorCompra = computadores * valorComputador;
    //Enlace para que se muestre en HTML
    document.getElementById('inputValCompra').value = `$ ${valorCompra}`;

    //Condicional para calculo del descuento en base al valor de la compra
    if (valorCompra >= 1640000 && valorCompra < 3280000) {
        valorDescuento = valorCompra * 0.15;
    } else if (valorCompra > 3280000 && valorCompra <= 6560000) {
        valorDescuento = valorCompra * 0.25;
    } else if (valorCompra > 6560000 && valorCompra <= 9840000) {
        valorDescuento = valorCompra * 0.35;
    } else {
        (valorCompra > 9840000)
        valorDescuento = 0;
    }
    //Enlace para que muestre la variable ValorDescuento en HTML
    document.getElementById('inputValDescuento').value = `$ ${valorDescuento}`;

    //Definicion de variable valorTotal
    valorTotal = valorCompra - valorDescuento;

    //Enlace para que se muestre en HTML
    document.getElementById('inputValTotal').value = `$ ${valorTotal}`;

    //Condicional para mensaje de descuento
    if (valorCompra >= 1640000 && valorCompra <= 9840000) {
        valorDesc = (valorDescuento / valorCompra) * 100;
    } else if (valorCompra > 9840000) {
        valorDesc = '0';
    } else {
        (computadores <= 1640000);
        valorDesc = '0';
    }

    //Enlace para que se muestre en HTML
    document.getElementById('valorDesc').innerHTML = `Su descuento fue del ${valorDesc} %`
}