

const cantidadPreg = ()=>{
    cantidad = prompt("Cuantas preguntas quieres responder?")
    if ((cantidad == 1) || (cantidad == 2) || (cantidad == 3) || (cantidad == 4) || (cantidad == 5) || (cantidad == 6) || (cantidad == 7) || (cantidad == 8) || (cantidad == 9) || (cantidad == 10)) {
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


alert(`Responde con un True y tu respuesta será correcta. Si tienes mas de la mitad correctas ganas el juego. Tienes tres chances (Te diremos al final el resultado)`)
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
        alert("Introduce un numero menor 10")
    }

    
}

alert("Gracias por jugar!!")