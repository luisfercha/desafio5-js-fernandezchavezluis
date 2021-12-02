//Inicio con saludo
alert("Bienvenido a Muebles E-Commerce");


//Simulador interactivo
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


//Stock de productos
class producto {
    constructor(codigo, nombre, moneda, precio, color, marca){
        this.codigo = codigo;
        this.nombre = nombre;
        this.moneda = moneda;
        this.precio = parseFloat(precio);
        this.color = color;
        this.marca = marca;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}

const productos = []
//Sillas
productos.push(new producto("SN", "Silla Nórdica", "U$S", 100, "blanco", "Baires"));
productos.push(new producto("SI", "Silla Industrial", "U$S", 120, "wengue", "Wooden"));
productos.push(new producto("SP", "Silla Pino", "U$S", 55, "natural", "Hindu"));
//Mesas
productos.push(new producto("MN", "Mesa Nórdica", "U$S", 200, "blanco", "Baires"));
productos.push(new producto("MI", "Mesa Industrial", "U$S", 220, "wengue", "Wooden"));
productos.push(new producto("MP", "Mesa Pino", "U$S", 160, "natural", "Hindu"));
//Sillones
productos.push(new producto("SN2C", "Sillón Nórdico 2 Cuerpos", "U$S", 300, "blanco", "Baires"));
productos.push(new producto("SN3C", "Sillón Nórdico 3 Cuerpos", "U$S", 400, "blanco", "Baires"));
productos.push(new producto("SR", "Sillón Reclinable", "U$S", 350, "blanco", "Baires"));
productos.push(new producto("SC", "Sofá Cama", "U$S", 450, "blanco", "Baires"));


//Se aplica Sort para ordenar prodcutos con precio de menor a mayor
productos.sort((a, b) => {
    if (a.precio < b.precio) {
        return -1;
    }

    if (a.precio > b.precio) {
        return 1;
    }

    return 0;
});

//Se imprime por Console
console.log(productos)