


const datosPersonajes = [
    {id: 1, nombre: "rachel", apellido:"green"},
    {id: 2, nombre: "ross", apellido:"geller"},
    {id: 3, nombre: "phoebe", apellido:"buffay"},
    {id: 4, nombre: "chandler", apellido:"bing" },
    {id: 5, nombre: "monica", apellido:"geller" },
    {id: 6, nombre: "joey", apellido:"tribbiani"},   
];

const inicioJuego =() =>{ 
    let nombre = nombreParticipante();
    segundoJuego(primerJuego(), nombre);
}

const nombreParticipante = () => {
    let nombre = prompt("Hola!! Introduce tu nombre para empezar el juego.");
    return nombre;

}



const primerJuego = () => {
    alert("Te diremos el nombre o apellido de un personaje y tienes que introducir el dato que no te demos. Si tienes 3 respuestas correctas pasas a la asgeunda sección del juego");
    let correctas = 0;
    let incorrectas = 0;
    datosPersonajes.forEach(element => {
        const indexNombreApellido = Math.round(Math.random() * 1);
        if (indexNombreApellido === 0) {
             if (saberNombre(element) === true) {
                correctas++;
            } else {
                incorrectas++;
            }
        }
        else{
            if (saberApellido(element) === true) {
                correctas++;
            } else {
                incorrectas++;
            }
        }
      
    });

    let resultado = resumenJuego(correctas, incorrectas);
    return resultado;
}

const resumenJuego = (corr, incorr)=> {
    alert(`Como resultado obtuviste ${corr} respuestas correctas y ${incorr} respuestas incorrectas`);
    if (corr > 2) {
        return true
    } else {
        return false;
    }
}


const saberNombre = (persona) =>{
    let respuesta = true; 
    let nombreIntroducido = prompt(`El nombre del personaje que se apellida ${persona.apellido} es:`);
    if (nombreIntroducido.toLowerCase() === persona.nombre ) {
        alert(`Correcto. El personaje es: ${persona.nombre} ${persona.apellido}`);
        respuesta = true;
    } else {
        alert(`Incorrecto. El personaje es: ${persona.nombre} ${persona.apellido}`);
        respuesta = false;
    }
    return respuesta;
}

const saberApellido = (persona) =>{
    let respuesta = true;  
    let nombreIntroducido = prompt(`El apellido del personaje que tiene como nombre ${persona.nombre} es:`);
    if (nombreIntroducido.toLowerCase() === persona.apellido ) {
        alert(`Correcto. El personaje es: ${persona.nombre} ${persona.apellido}`);
        respuesta = true;
    } else {
        alert(`Incorrecto. El personaje es: ${persona.nombre} ${persona.apellido}`);
        respuesta = false;
    }
    return respuesta;
}

const imprimirPersonajes = () => {
    datosPersonajes.forEach(element => {
        
    });
}

const mostrarPersonajes = () => {
    let parrafo = document.getElementById("listaPersonajes");
    parrafo.innerText = `La lista de personajes es: 
    ${datosPersonajes[0].id} ${datosPersonajes[0].nombre} ${datosPersonajes[0].apellido}
    ${datosPersonajes[1].id} ${datosPersonajes[1].nombre} ${datosPersonajes[1].apellido}
    ${datosPersonajes[2].id} ${datosPersonajes[2].nombre} ${datosPersonajes[2].apellido}
    ${datosPersonajes[3].id} ${datosPersonajes[3].nombre} ${datosPersonajes[3].apellido}
    ${datosPersonajes[4].id} ${datosPersonajes[4].nombre} ${datosPersonajes[4].apellido}
    ${datosPersonajes[5].id} ${datosPersonajes[5].nombre} ${datosPersonajes[5].apellido}`
}

/* const mostrarRespuesta = () => {
    let divRespuestas = document.getElementById("respuestas");
    let respuestas = document.createElement("p");
    respuestas.innerHTML = ""
} */

const mensajeGanador = (nombre) => {
    let divResultado = document.getElementById("resultadoJuego");
    let resultado = document.createElement("p");
    resultado.innerText = `Felicidades ${nombre}!! Ganaste el juego.`;
    divResultado.append(resultado);

}

const mensajePerdedor = (nombre) => {
    let divResultado = document.getElementById("resultadoJuego");
    let resultado = document.createElement("p");
    resultado.innerText = `Ups ${nombre}... Perdiste!!`;
    divResultado.append(resultado)
}



const segundoJuego = (resultado, nombre) => {
    if (resultado === true) {
        let nom = prompt("Vamos a ver si te acuerdas lo anterior. Tienes que dar un nombre y apellido sin equivocarte. Primero da un nombre: ");
        if ((datosPersonajes.some(id => id.nombre === nom.toLowerCase())) === true) {
            let apell = prompt(`Es correcto! Un personaje se llama ${nom}. Nos puedes decir su apellido?`);
            if ((datosPersonajes.find((id) => id.nombre === nom)).apellido === apell) {
                alert(`Es correcto! El nombre y apellido del personaje es ${nom} ${apell}`);
                mostrarPersonajes();
                alert("Ganaste la segunda parte del juego!!")
                mensajeGanador(nombre);
            } else {
                alert(`Incorrecto. El nombre y apellido del personaje es ${nom} ${(datosPersonajes.find(id => id.nombre === nom)).apellido}`);
                mostrarPersonajes();
                alert("El juego termino!!!");
                mensajePerdedor(nombre);
            }
        } else {     
            alert(`Incorrecto. El nombre que ingresaste no pertenece a ningun personaje`);
            mostrarPersonajes();
            alert("El juego termino!!!")
            mensajePerdedor(nombre);
        }   
    } else {
        alert("Nos vemos la proxima!")
        mostrarPersonajes()
        mensajePerdedor(nombre);
    }




    
}


inicioJuego()  
 









/* const inicioJuego = () => {
    alert("Bienvenido a QuienSabeMasFriends");
    let 

    const indexNombreApellido = Math.round(Math.random() * 1);
    const indexPersonaje = Math.round(Math.random() * (personaje.length));

    const nuevoJuego = new PreguntasPersonales(datosPersonajes[indexPersonaje]);
    nuevoJuego.preguntas[indexNombreApellido];


    let decision = "s"
    while ((decision !== "N") && (decision !== "n") ) {
        let correctas = 0
        let incorrectas = 0
        let cantidad = cantidadPreg();
        for (let pregunta = 1; pregunta <= cantidad; pregunta++) {
            let respuesta = prompt("Tu respuesta es correcta?")
            if ((respuesta == "True")) {
                correctas++
            } else {
                incorrectas++
            }
        }
        if (cantidad !== false) {
            resumenJuego(correctas, incorrectas, cantidad)
        } else {
            alert("Introduce un numero menor 5")
        }

        
    }

    alert("Gracias por jugar!!")


}


const contar = (result) => {
    let correctas = 0;
    let incorrectas = 0;
    if (result === True) {
        correctas++
    } else {
        incorrectas++
    }
    return correctas, incorrectas;
}


























const cantidadPreg = ()=>{
    cantidad = prompt("Cuantas preguntas quieres responder? Actualmente puede responder hasta 5 incluidas")
    if ((cantidad == 1) || (cantidad == 2) || (cantidad == 3) || (cantidad == 4) || (cantidad == 5)) {
        return cantidad
    } else {
        alert("Elije una opcion valida")
        return false
        
    }
}
 

const resumenJuego = (corr, incorr, cantidad)=> {
    if (corr > (cantidad/2)) {
        alert(`Felicidades!! Ganaste. Tus respuestas correctas fueron ${corr} y tus respuestas incorrectas fueron ${incorr}`)
        decision = prompt("Para salir del juego pulsa N. Si quieres jugar otra vez pulsa cualquier otra tecla.")
    } else {
        alert(`Ups.. Perdiste! Tus respuestas correctas fueron ${corr} y tus respuestas incorrectas fueron ${incorr}`)
        decision = prompt("Para salir del juego pulsa N. Si quieres jugar otra vez pulsa cualquier otra tecla.")
    }
    
}
 */
