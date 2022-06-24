

const divSaludo = document.getElementById("divSaludo");
const elementoNombre = document.getElementById("nombre")

const btnJugar = document.getElementById("btnJugar");
const divJugar = document.getElementById("boxJugar");

const divExplicacion1 = document.getElementById("divExplicacion1");
const explicacion1 = document.getElementById("explicacion1");

const formJuego = document.getElementById("formJuego");
const pregunta = document.getElementById("pregunta");
const respuestas = document.getElementById("respuesta");

const formContestacion1 = document.getElementById("formContestacion1");
const contestacion1 = document.getElementById("contestacion1");

const divResultado = document.getElementById("divResultado");
const resultado = document.getElementById("resultado");

const datosPersonajes = [
    {id: 1, nombre: "rachel", apellido:"green"},
    {id: 2, nombre: "ross", apellido:"geller"},
    {id: 3, nombre: "phoebe", apellido:"buffay"},
    {id: 4, nombre: "chandler", apellido:"bing" },
    {id: 5, nombre: "monica", apellido:"geller" },
    {id: 6, nombre: "joey", apellido:"tribbiani"},   
];

const preguntasRespuestas = [
    {id: 1, pregunta: "¿Cómo se llama la cafetería a la que siempre van?", opciones: ["Central Park","Central Perk","Central Cafe"], respCorrecta: "central perk" },
    {id: 2, pregunta: "¿Como se llama el hijo de ross?",  opciones: ["Ben","Ross Jr.","David"], respCorrecta: "ben" },
    {id: 3, pregunta: "¿A cuál de los tres chicos conocía Julia Roberts? Di su nombre.",  opciones: ["Ross","Joey","Chandler"], respCorrecta: "chandler" },
    {id: 4, pregunta: "¿Para qué marca de ropa trabaja Rachel?",  opciones: ["Prada","Ralph Lauren","Gucci"], respCorrecta: "ralph lauren"  },
    {id: 5, pregunta: "¿Cómo se llamaba la compañera de piso de Joey?",   opciones: ["Janine","Janet","Jane"], respCorrecta: "janine" },
    {id: 6, pregunta: "¿A qué fruta es alérgico Ross?",  opciones: ["Manzana","Piña","Kiwi"], respCorrecta: "kiwi" },   
]

const inicioJuego =() =>{ 
    nombreParticipante(); 

   
}

const nombreParticipante = () => {
    divJugar.style.display = "none";
    divSaludo.style.display = `block`;
    
    divSaludo.addEventListener(`submit`, (e) => {
        e.preventDefault();  
        let nombre = elementoNombre.value;
        divSaludo.style.display = "none";
        primerJuego(nombre);

    })
    
}



const primerJuego = (nombre) => {
    divExplicacion1.style.display = "block";
    explicacion1.innerText = `Hola ${nombre}. Tendras que contestar 6 preguntas. Si contestas correctamente tres o mas pasas a la segunda parte del juego.`;
    divExplicacion1.addEventListener("submit", (e) => {
        e.preventDefault();
        divExplicacion1.style.display = "none";
        let correctas = 0;
        let incorrectas = 0;
        pregunta1(correctas,incorrectas);
        
 
        /* let resultado = resumenJuego(correctas, incorrectas); */
        
    } )
   
}

const pregunta1 = (corr, incorr) => {
    formContestacion1.style.display = "none";
    formJuego.style.display = `block`;
    pregunta.innerText = preguntasRespuestas[0].pregunta;
    
    formJuego.addEventListener("submit", (e) => {
        e.preventDefault();
        let respPartcipante = respuestas.value;
        if (respPartcipante.toLowerCase() === preguntasRespuestas[0].respCorrecta) {
            formJuego.style.display = "none",
            formContestacion1.style.display = "block";
            contestacion1.innerText = "Correcto!!"
            corr++
        } else { 
            formJuego.style.display = "none",
            formContestacion1.style.display = "block";
            contestacion1.innerText = `Incorrecto. La respuesta es ${preguntasRespuestas[0].respCorrecta.toUpperCase()}`
            incorr++
        }
        formContestacion1.addEventListener("submit", (e) => {
            e.preventDefault();
            respuestas.value = "";
            pregunta2(corr, incorr);
        })
    })


}

const pregunta2 = (corr, incorr) => {
    formContestacion1.style.display = "none";
    formJuego.style.display = `block`;
    pregunta.innerText = preguntasRespuestas[1].pregunta;
    
    formJuego.addEventListener("submit", (e) => {
        e.preventDefault();
        let respPartcipante = respuestas.value;
        if (respPartcipante.toLowerCase() === preguntasRespuestas[1].respCorrecta) {
            formJuego.style.display = "none",
            formContestacion1.style.display = "block";
            contestacion1.innerText = "Correcto!!"
            corr++
        } else { 
            formJuego.style.display = "none",
            formContestacion1.style.display = "block";
            contestacion1.innerText = `Incorrecto. La respuesta es ${preguntasRespuestas[1].respCorrecta.toUpperCase()}`
            incorr++
        }
        formContestacion1.addEventListener("submit", (e) => {
            e.preventDefault();
            pregunta3(corr, incorr);
        })
    })


}

const pregunta3 = (corr, incorr) => {
    formContestacion1.style.display = "none";
    formJuego.style.display = `block`;
    pregunta.innerText = preguntasRespuestas[2].pregunta;
    
    formJuego.addEventListener("submit", (e) => {
        e.preventDefault();
        let respPartcipante = respuestas.value;
        if (respPartcipante.toLowerCase() === preguntasRespuestas[2].respCorrecta) {
            formJuego.style.display = "none",
            formContestacion1.style.display = "block";
            contestacion1.innerText = "Correcto!!"
            corr++
        } else { 
            formJuego.style.display = "none",
            formContestacion1.style.display = "block";
            contestacion1.innerText = `Incorrecto. La respuesta es ${preguntasRespuestas[2].respCorrecta.toUpperCase()}`
            incorr++
        }
        formContestacion1.addEventListener("submit", (e) => {
            e.preventDefault();
            pregunta4(corr, incorr);
            
        })
    })


}

const pregunta4 = (corr, incorr) => {
    formContestacion1.style.display = "none";
    formJuego.style.display = `block`;
    pregunta.innerText = preguntasRespuestas[3].pregunta;
    
    formJuego.addEventListener("submit", (e) => {
        e.preventDefault();
        let respPartcipante = respuestas.value;
        if (respPartcipante.toLowerCase() === preguntasRespuestas[3].respCorrecta) {
            formJuego.style.display = "none",
            formContestacion1.style.display = "block";
            contestacion1.innerText = "Correcto!!"
            corr++
        } else { 
            formJuego.style.display = "none",
            formContestacion1.style.display = "block";
            contestacion1.innerText = `Incorrecto. La respuesta es ${preguntasRespuestas[3].respCorrecta.toUpperCase()}`
            incorr++
        }
        formContestacion1.addEventListener("submit", (e) => {
            e.preventDefault();
            pregunta5(corr, incorr)
            
        })
    })


}

const pregunta5 = (corr, incorr) => {
    formContestacion1.style.display = "none";
    formJuego.style.display = `block`;
    pregunta.innerText = preguntasRespuestas[4].pregunta;
    
    formJuego.addEventListener("submit", (e) => {
        e.preventDefault();
        let respPartcipante = respuestas.value;
        if (respPartcipante.toLowerCase() === preguntasRespuestas[4].respCorrecta) {
            formJuego.style.display = "none",
            formContestacion1.style.display = "block";
            contestacion1.innerText = "Correcto!!"
            corr++
        } else { 
            formJuego.style.display = "none",
            formContestacion1.style.display = "block";
            contestacion1.innerText = `Incorrecto. La respuesta es ${preguntasRespuestas[4].respCorrecta.toUpperCase()}`
            incorr++
        }
        formContestacion1.addEventListener("submit", (e) => {
            e.preventDefault();
            pregunta6(corr, incorr);
            
        })
    })


}

const pregunta6 = (corr, incorr) => {
    formContestacion1.style.display = "none";
    formJuego.style.display = `block`;
    pregunta.innerText = preguntasRespuestas[5].pregunta;
    
    formJuego.addEventListener("submit", (e) => {
        e.preventDefault();
        let respPartcipante = respuestas.value;
        if (respPartcipante.toLowerCase() === preguntasRespuestas[5].respCorrecta) {
            formJuego.style.display = "none",
            formContestacion1.style.display = "block";
            contestacion1.innerText = "Correcto!!"
            corr++
        } else { 
            formJuego.style.display = "none",
            formContestacion1.style.display = "block";
            contestacion1.innerText = `Incorrecto. La respuesta es ${preguntasRespuestas[5].respCorrecta.toUpperCase()}`
            incorr++
        }
        formContestacion1.addEventListener("submit", (e) => {
            e.preventDefault();
            resumenJuego1(corr, incorr);
            
        })
    })


}



const resumenJuego1 = (corr, incorr)=> {
    formJuego.style.display = "none";
    formContestacion1.style.display = "block";
    contestacion1.innerText = `Como resultado obtuviste ${corr} respuestas correctas y ${incorr} respuestas incorrectas`
    formContestacion1.addEventListener("submit", (e) => {
        if (corr > 2) {
            formContestacion1.style.display = "none";
            segundoJuego()
        } else {
            formContestacion1.style.display = "none";
            divResultado.style.display = "block";
            resultado.innerText = "Fin del juego";
            mostrarPersonajes();
        }
    })

}


const saberNombre = (persona) =>{
    let respuesta = true;
    formContestacion1.style.display = "none";
    formJuego.style.display = "block";
    pregunta.innerText = `El nombre del personaje que se apellida ${persona.apellido} es:`
    respuestaUsuario = respuestas.value;
    /* let nombreIntroducido = prompt(`El nombre del personaje que se apellida ${persona.apellido} es:`); */
    formJuego.addEventListener("submit", (e) => {
        e.preventDefault();
        if (respuestaUsuario.toLowerCase() === persona.nombre ) {
            formContestacion1.style.display = "block";
            formJuego.style.display = "none";
            contestacion1.innerText = `Correcto. El personaje es: ${persona.nombre} ${persona.apellido}`
            formContestacion1.addEventListener("submit", (e) => {
                e.preventDefault();
                
            })
            respuesta = true;
            /* alert(`Correcto. El personaje es: ${persona.nombre} ${persona.apellido}`); */
            
        } else {
            formContestacion1.style.display = "block";
            formJuego.style.display = "none";
            contestacion1.innerText = `Correcto. El personaje es: ${persona.nombre} ${persona.apellido}`
            formContestacion1.addEventListener("submit", (e) => {
                e.preventDefault();
                
            })
            respuesta = false;
           /*  alert(`Incorrecto. El personaje es: ${persona.nombre} ${persona.apellido}`); */
            
        }
        return respuesta;
    })

    
}

const saberApellido = (persona) =>{
    let respuesta = true;  
    formJuego.style.display = "block";
    pregunta.innerText = `El nombre del personaje que se apellida ${persona.apellido} es:`;
    respuestaUsuario = respuestas.value;
    /* let nombreIntroducido = prompt(`El apellido del personaje que tiene como nombre ${persona.nombre} es:`); */
    formJuego.addEventListener("submit" , (e) => {
        e.preventDefault();
        if (respuestaUsuario.toLowerCase() === persona.apellido ) {
            formContestacion1.style.display = "block";
            formJuego.style.display = "none";
            contestacion1.innerText = `Correcto. El personaje es: ${persona.nombre} ${persona.apellido}`
            formContestacion1.addEventListener("submit", (e) => {
                e.preventDefault();
                
            })
             respuesta = true;
        } else {
            formContestacion1.style.display = "block";
            formJuego.style.display = "none";
            contestacion1.innerText = `Correcto. El personaje es: ${persona.nombre} ${persona.apellido}`
            formContestacion1.addEventListener("submit", (e) => {
                e.preventDefault();
                
            })
            respuesta = false;
        }
        return respuesta;
    })

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

/* const mensajeGanador = (nombre) => {
    let divResultado = document.getElementById("resultadoJuego");
    let resultado = document.createElement("p");
    resultado.innerText = `Felicidades ${nombre}!! Ganaste el juego.`;
    divResultado.append(resultado);

}

const mensajePerdedor = (nombre) => {
    let divResultado = document.getElementById("resultadoJuego");
    let resultado = document.createElement("p");
    resultado.innerText = `Ups ${nombre}... Perdiste!!`;
    divResultado.append(resultado);
}

 */

const segundoJuego = (nombre) => {
        divExplicacion1.style.display = "block";
        divResultado.style.display = "none";
        formContestacion1.style.display = "none";
        explicacion1.innerText = "Vamos a ver si te sabes algun nombre. Tienes que dar un nombre y apellido sin equivocarte."
        divExplicacion1.addEventListener("submit", (e) => {
            e.preventDefault();
            divExplicacion1.style.display = "none";
            formJuego.style.display = "block";
            pregunta.innerText = "Di primero un nombre:"
            formJuego.addEventListener("submit", (e) => {
                e.preventDefault();
                let nom = respuestas.value;
                if ((datosPersonajes.some(id => id.nombre === nom.toLowerCase())) === true) {
                    formJuego.style.display = "none",
                    formContestacion1.style.display = "block"
                    contestacion1.innerText =`Es correcto! Un personaje se llama ${nom}.`
                    formContestacion1.addEventListener("submit", (e) => {
                        e.preventDefault();
                        divExplicacion1.style.display = "none";
                        formContestacion1.style.display = "none";
                        formJuego.style.display = "block";
                        pregunta.innerText = `Ahora di el apellido de ${nom}`;
                        formJuego.addEventListener("submit", (e) => {
                            e.preventDefault();
                            let apell = respuestas.value;
                            if ((datosPersonajes.find((id) => id.nombre === nom)).apellido === apell) {
                                formJuego.style.display = "none";
                                formContestacion1.style.display = "none";
                                divResultado.style.display = "block";
                                resultado.innerText = `Es correcto! El nombre y apellido del personaje es ${nom} ${apell}
                                Ganaste la segunda parte del juego`
                            } else {
                                formJuego.style.display = "none"
                                formContestacion1.style.display = "none";
                                divResultado.style.display = "block";
                                resultado.innerText = `Incorrecto. El nombre y apellido del personaje es ${nom} ${(datosPersonajes.find(id => id.nombre === nom)).apellido}. Fin del juego`;       
                                
                            }                       
                      
                        })
                    })
                } else { 
                    formContestacion1.style.display = "none";
                    formJuego.style.display = "none";
                    divResultado.style.display = "block";
                    resultado.innerText = `Incorrecto. El nombre que ingresaste no pertenece a ningun personaje. Perdiste la segunda parte del juego.`                    
                           
                    
                }   
            })
        })
    }      


btnJugar.addEventListener("click", inicioJuego );



        /* datosPersonajes.forEach(element => {
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
        
        }); */

 








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
