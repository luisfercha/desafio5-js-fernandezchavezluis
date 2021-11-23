class silla{
    constructor(codigo, moneda, precio, color, marca){
        this.codigo = codigo;
        this.moneda = moneda;
        this.precio = precio;
        this.color = color;
        this.marca = marca;
    }
    precioFinal(){
        console.log("Esta mueble sale " + (this.moneda) + (this.precio));
    }
}

const sillaNordica = new silla ("C420", "u$d", 100, "blanco", "Baires");
sillaNordica.precioFinal();

let numeroSillaNordica= prompt("Ingrese número de Sillas Nordicas a comprar");

if ((numeroSillaNordica !=0) && (numeroSillaNordica != null)){
    alert("Usted va a comprar " + numeroSillaNordica + " Sillas Nordicas" )
}else{
    alert("Error: Ingrese un número mayor a 0")
}

let numeroMesaRatona= prompt("Ingrese número de Mesas Ratonas a comprar");

if ((numeroMesaRatona !=0) && (numeroMesaRatona != null)){
    alert("Usted va a comprar " + numeroMesaRatona + " Mesas Ratonas" )
}else{
    alert("Error: Ingrese un número mayor a 0")
}

let numeroSofaTresCuerpos= prompt("Ingrese número de Sofa de Tres Cuerpos a comprar");

if ((numeroSofaTresCuerpos !=0) && (numeroSofaTresCuerpos != null)){
    alert("Usted va a comprar " + numeroSofaTresCuerpos + " Sofa de Tres Cuerpos" )
}else{
    alert("Error: Ingrese un número mayor a 0")
}

let costoSillaNordica = numeroSillaNordica * 100

let costoMesaRatona = numeroMesaRatona * 200

let costoSofaTresCuerpos = numeroSofaTresCuerpos * 300

let costoSubTotal = costoSillaNordica + costoMesaRatona + costoSofaTresCuerpos

alert ("El subtotal de su compra es de " + costoSubTotal)

let iva = costoSubTotal * 21/100
let costoTotal = costoSubTotal + iva;

alert ("Se suma el IVA y el total es de " + costoTotal)

let descuentoCupon20OFF = costoTotal * 20/100
let costoFinal = costoTotal - descuentoCupon20OFF

alert ("Se aplica cupón 20%OFF en su compra y queda en " + costoFinal)
