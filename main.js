let telefono

alert("Estamos buscando desarrolladores que nos ayuden en nuestro trabajo")

function númeroDeT(){
    telefono = parseInt(prompt("ingresá tu número de telefono"))
    telefono = confirm ( "El número "+telefono+ " " + "es correcto?")
}

let buscarTrabajo = confirm("¿Deseas trabajar con nosotros?")

while(buscarTrabajo){
    let puesto= prompt("¿En qué área desea trabajar? Digite la letra correspondiente A. Desarrollador-Frontend B. Desarrollador backend");

    if(puesto == ""){
        alert("por favor ingresá una opción")
    }else if (puesto == "A" || puesto == "B"){
        númeroDeT()
        alert("Te hablaremos a la brevedad ¡Gracias por contactarnos!")
        buscarTrabajo = false
    }
    else{
        alert ("la opción ingresada no es valida")
        buscarTrabajo = confirm ("¿Deseas trabajar con nosotros?")
    }

    
}

alert ("Gracias por tenernos en cuenta")