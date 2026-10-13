let Totalcompra = 100000;
let descuento = 0;
let Escliente = false;
let TotalPagar = 0;

if (Totalcompra > 100000 && Escliente)  {
    descuento = Totalcompra * 20 / 100;
    console.log ("El Total a pagar es : ", Totalcompra - descuento);
} else if (Totalcompra > 100000) {
    descuento = Totalcompra * 10 / 100;
    console.log ("El Total a pagar es : ", Totalcompra - descuento);
} else if (Totalcompra <= 100000 && Escliente) {
    descuento = Totalcompra * 5 / 100;
    console.log ("El Total a pagar es : ", Totalcompra - descuento);
} else if (Totalcompra <= 100000) {
    console.log ("Sin descuento")
    console.log ("El Total a pagar es : ", Totalcompra - descuento);
}
console.log ("El descuento es : ", descuento);
console.log ("El Total final a pagar es : ", Totalcompra - descuento);
       