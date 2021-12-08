//Evento Formulario
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault(
        alert("¿Desea confirmar los datos ingresados?")
    );
    let formulario = e.target
    console.log(formulario.children[0].value); 
    console.log(formulario.children[1].value);  
}

//Evento Boton Comprar
let botonComprar = document.getElementById("botonComprar")
      botonComprar.addEventListener("click", respuestaClick)
      function respuestaClick(){
        alert("Su proceso de comprar iniciará a partir de este momento");
      }
;
