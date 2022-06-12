

const personaje = [
    {nombre: "rachel", apellido:"green"},
    {nombre: "ross", apellido:"geller"},
    {nombre: "phoebe", apellido:"buffay"},
    {nombre: "chandler", apellido:"bing" },
    {nombre: "monica", apellido:"geller" },
    {nombre: "joey", apellido:"tribbiani"},   
];


class InicioJuego{
    constructor()
}






class Personajes{

    constructor(personaje){
        this.nombre = personaje.nombre;
        this.apellido = personaje.apellido;
    }

    preguntas = [saberNombre, saberApellido];

    saberNombre(){
        let respuesta = true;
        alert("Te diremos el apellido de un personaje y tiene que introducir su nombre");
        const indexNombre = Math.round(Math.random() * 5);
       nombreIntroducido = prompt(`El nombre del personaje que se apellida ${personaje.apellido[indexNombre]} es:`);
        if (nombreIntroducido === personaje.nombre[indexNombre] ) {
            alert(`Correcto. El personaje es: ${personaje.nombre} ${personaje.apellido}`);
            respuesta = true;
        } else {
            alert(`Correcto. El personaje es: ${personaje.nombre} ${personaje.apellido}`);
            respuesta = false;
        }
        
    }


    eleccion(){
        const indexNombreApellido = Math.round(Math.random() * 2);
        preguntas[indexNombreApellido];
    }
    
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
        alert("Introduce un numero menor 5")
    }

    
}

alert("Gracias por jugar!!")