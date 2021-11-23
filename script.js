//Objeto: Silla
class silla{
    constructor(codigo, moneda, precio, iva, color, marca, envio){
        this.codigo = codigo;
        this.moneda = moneda;
        this.precio = precio;
        this.iva = iva;
        this.color = color;
        this.marca = marca;
        this.envio = 15;
    }
    precioFinal(){
        console.log("Esta mueble sale " + (this.moneda) + (this.precio * this.iva));
    }

    precioFinalConEnvio(){
        console.log("Con envío, este mueble sale " + (this.moneda) + ((this.precio * this.iva) + this.envio))
    }
}

const sillaNordica = new silla ("N1", "U$S", 100, 1.21, "blanco", "Baires");
sillaNordica.precioFinal();
sillaNordica.precioFinalConEnvio();

const sillaIndustrial = new silla ("I1", "U$S", 120, 1.21, "wengue", "Woodem")
sillaIndustrial.precioFinal()
sillaIndustrial.precioFinalConEnvio();

const sillaPino = new silla ("P1", "U$S", 55, 1.21, "natural", "Hindu")
sillaPino.precioFinal()
sillaPino.precioFinalConEnvio();


//Objeto: Mesa
class mesa{
    constructor(codigo, moneda, precio, iva, color, marca, envio){
        this.codigo = codigo;
        this.moneda = moneda;
        this.precio = precio;
        this.iva = iva;
        this.color = color;
        this.marca = marca;
        this.envio = 15;
    }
    precioFinal(){
        console.log("Esta mueble sale " + (this.moneda) + (this.precio * this.iva));
    }

    precioFinalConEnvio(){
        console.log("Con envío, este mueble sale " + (this.moneda) + ((this.precio * this.iva) + this.envio))
    }
}

const mesaNordica = new mesa ("N2", "U$S", 200, 1.21, "blanco", "Baires");
mesaNordica.precioFinal();
sillaNordica.precioFinalConEnvio();

const mesaIndustrial = new mesa ("I2", "U$S", 220, 1.21, "wengue", "Woodem")
mesaIndustrial.precioFinal()
mesaIndustrial.precioFinalConEnvio();

const mesaPino = new mesa ("P2", "U$S", 160, 1.21, "natural", "Hindu")
mesaPino.precioFinal()
mesaPino.precioFinalConEnvio();


//Objeto: Sillon
class sillon{
    constructor(codigo, moneda, precio, iva, color, marca, envio){
        this.codigo = codigo;
        this.moneda = moneda;
        this.precio = precio;
        this.iva = iva;
        this.color = color;
        this.marca = marca;
        this.envio = 15;
    }
    precioFinal(){
        console.log("Esta mueble sale " + (this.moneda) + (this.precio * this.iva));
    }

    precioFinalConEnvio(){
        console.log("Con envío, este mueble sale " + (this.moneda) + ((this.precio * this.iva) + this.envio))
    }
}

const sillonNordica2Cuerpos = new sillon ("SN2", "U$S", 300, 1.21, "blanco", "Baires");
sillonNordica2Cuerpos.precioFinal();
sillonNordica2Cuerpos.precioFinalConEnvio();

const sillonNordica3Cuerpos = new sillon ("SN3", "U$S", 400, 1.21, "wengue", "Woodem")
sillonNordica3Cuerpos.precioFinal()
sillonNordica3Cuerpos.precioFinalConEnvio();

const sillonReclinable = new sillon ("SR", "U$S", 350, 1.21, "natural", "Hindu")
sillonReclinable.precioFinal()
sillonReclinable.precioFinalConEnvio();

const sofaCama = new sillon ("SC", "U$S", 450, 1.21, "natural", "Hindu")
sofaCama.precioFinal()
sofaCama.precioFinalConEnvio();



/*let numeroSillaNordica= prompt("Ingrese número de Sillas Nordicas a comprar");

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

alert ("Se aplica cupón 20%OFF en su compra y queda en " + costoFinal)*/
