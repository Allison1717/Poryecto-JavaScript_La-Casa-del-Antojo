let nombreComprador =prompt("Ingrese su nombre: ");
let nombreAntojo = prompt("Bienvenid@ "+ nombreComprador+" ingrese el nombre del antojo que desea comprar: (n para salir)");
let cantidad = prompt("Ingrese la cantidad del producto: (0 para salir)");
const porcentajeDescuento=0.30;

while  (nombreAntojo != "n" && cantidad != 0){
    switch (nombreAntojo) {
        case "Pie de limon":
            if(cantidad>=3){
                alert("Total a pagar por el pie de limón es: S/ " + (5.2 * cantidad)-(5.2 * cantidad)*porcentajeDescuento +
                " El descuento fue de: S/" + ((5.2 * cantidad)*porcentajeDescuento)+ " El total fue de: S/" + (5.2 * cantidad));
            }
            else{
                alert("Total a pagar por el pie de limón es: S/ " + 5.2 * cantidad);
            }
            break;
        case "Selva negra":
            if(cantidad>5){
                alert("Total a pagar por la Selva negra es: S/ " + (4.9 * cantidad)-(4.9 * cantidad)*porcentajeDescuento +
                " El descuento fue de: S/" + ((4.9 * cantidad)*porcentajeDescuento)+ " El total fue de: S/" + (4.9* cantidad));
            }
            else{
                alert("Total a pagar por la Selva negra es: S/ " + 4.9 * cantidad);
            }
            break;
        case "Hamburguesa Royal":
            alert("Total a pagar por la Hamburguesa Royal es: S/ " + 11.50 * cantidad);
            break;
        case "Batido de Lucuma":
            let agrandar =prompt("¿Desea agrandar su bebida por + S/ 3.0 c/u?: (Digite 's' o 'n'): ");
            if(agrandar=='s'){
                let cantidadAgrandar=prompt("¿A cuantos de ellos desea aumentarle el tamaño? ")
                if (cantidadAgrandar>0) {
                    alert("Total a pagar por el batido de lucuma es: S/ " + ((3*cantidadAgrandar)+(8.50 * cantidad)));
                }
            }else{
                alert("Total a pagar por el batido de lucuma es: S/ " + 8.50 * cantidad);
            }
            break;
        case "Alitas broaster":
            alert("Total a pagar por la alita broaster es: S/ " + 7.60 * cantidad);
            break;
        case "Enchiladas":
           alert("Total a pagar por las enchiladas es: S/ " + 30 * cantidad);
            break;
        case "Tacos":
            alert("Total a pagar por los tacos es: S/ " + 25.50 * cantidad);
            break;
        case "Frapuccino de Fresa":
            let adicional =prompt("¿Desea adicionar chispas de chocolate + S/ 5.0 c/u?: (Digite 's' o 'n'): ");
            if(adicional=='s'){
                let cantidadAdicional=prompt("¿A cuantos de ellos desea aumentarle las chispas de chocolate? ")
                if (cantidadAdicional>0) {
                    alert("Total a pagar por el Frapuccino de fresa es: S/ " +((5*cantidadAdicional)+(17*cantidad)));
                }
            }
            else{
                alert("Total a pagar por el Frapuccino de fresa es: S/ " + 17 * cantidad);
            }
           
            break;    
        default:
            alert("No se encuentra este menú en la carta");
    }
    nombreAntojo = prompt("Ingrese el nombre del antojo que desea comprar: (n para salir");
    cantidad = prompt("Ingrese la cantidad del producto: (0 para salir)");
}