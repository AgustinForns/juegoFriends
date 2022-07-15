


const divSaludo = document.getElementById("divSaludo");
const elementoNombre = document.getElementById("nombre");
const textSaludo = document.getElementById("textSaludo");

const btnJugar = document.getElementById("btnJugar");
const divJugar = document.getElementById("divJugar");

const divExplicacion1 = document.getElementById("divExplicacion1");
const explicacion1 = document.getElementById("explicacion1");

const formJuego = document.getElementById("formJuego");
const pregunta = document.getElementById("pregunta");
const respuestas = document.getElementById("respuesta");
const opcion1 = document.getElementById("opcion1");
const opcion2 = document.getElementById("opcion2");
const opcion3 = document.getElementById("opcion3");
const resp1 = document.getElementById("resp1");
const resp2 = document.getElementById("resp2");
const resp3 = document.getElementById("resp3");

const formContestacion1 = document.getElementById("formContestacion1");
const contestacion1 = document.getElementById("contestacion1");

const divResultado = document.getElementById("divResultado");
const resultado = document.getElementById("resultado");

const divJuego2 = document.getElementById("divJuego2");
const respJ2 = document.getElementById("respJ2");
const btnRJ2 = document.getElementById("btnRJ2");
const pregJ2 = document.getElementById("pregJ2");

const divMostrarPersonajes = document.getElementById("divMostrarPersonajes");

 const URLpreguntasYrespuetsas = "/preguntasYrespuestas.json"
/*  const preguntasRespuestasMix = mezclarPreguntas(); */


/* class Contenedor {
    esconder(contenedor){
        contenedor.className = "hide";
    }
    
    mostrar(contenedor){
        contenedor.className = `${toString.contenedor}`;
    }
}

class Introduccion {
    //INICIO DEL JUEGO
    inicioJuego () {
        nombreParticipante();
    }

    //SE PIDE EL NOMBRE AL PARTICIPANTE

    nombreParticipante() {
        divJugar.className = "hide";
        divSaludo.className = "divSaludo";
        divSaludo.addEventListener(`submit`, (e) => {
            e.preventDefault();
            let nombre = elementoNombre.value;
            divSaludo.className = "hide";
            primerJuego(nombre);
    
        })
    }    

}


 */


/* 
class PrimerJuego {
    constructor(){

    }

    //EXPLICACION E INTRODUCCION AL JUEGO

    primerJuego(nombre){
        divExplicacion1.className = "divExplicacion1"
        explicacion1.innerText = `Hola ${nombre}. Tendras que contestar 4 preguntas. Si contestas correctamente tres o mas pasas a la segunda parte del juego.`;
    
        divExplicacion1.addEventListener("submit", (e) => {
            e.preventDefault();
            divExplicacion1.className = "hide";
            let correctas = 0;
            let incorrectas = 0;
            let index = 0;
            preguntas(correctas, incorrectas, index);
        })
    
    }

    //FUNCION DONDE SE GENERA EL JUEGO

    preguntas(corr, incorr, index) {
        if (index < 5) {
            index++
            let opciones = [];
            formContestacion1.className = "hide";
            formJuego.className = `formJuego`;
            pregunta.innerText = preguntasRespuestasMix[index].pregunta;
            opcion1.innerText = preguntasRespuestasMix[index].opciones[0].resp;
            opcion2.innerText = preguntasRespuestasMix[index].opciones[1].resp;
            opcion3.innerText = preguntasRespuestasMix[index].opciones[2].resp;
            resp1.value = preguntasRespuestasMix[index].opciones[0].resp;
            resp2.value = preguntasRespuestasMix[index].opciones[1].resp;
            resp3.value = preguntasRespuestasMix[index].opciones[2].resp;
            resp1.checked  = false;
            resp2.checked  = false;
            resp3.checked  = false;
            opciones = [resp1, resp2, resp3];
    
        
    
            formJuego.addEventListener("submit", (e) => {
                e.preventDefault();
                let opcionElegida = "";
                for (const opcion of opciones) {
                    if (opcion.checked) {         
                        opcionElegida = opcion.value;
                  
                    }
    
                }
    
                if (opcionElegida == (preguntasRespuestasMix[index].respCorr)) {
    
                    formJuego.className = "hide";
                    formContestacion1.className = "formContestacion1";
                    contestacion1.innerText = "Correcto!!";
                    corr++;
                }
                else {
                    formJuego.className = "hide";
                    formContestacion1.className = "formContestacion1";
                    contestacion1.innerText = `Incorrecto. La respuesta es ${(preguntasRespuestasMix[index].respCorr).toUpperCase()}`;
                    incorr++;
    
                }
    
                formContestacion1.addEventListener("submit", (e) => {
                    e.preventDefault();
                
                    preguntas(corr, incorr, index);
                })
    
            })
    
        } else {
            resumenJuego1(corr, incorr);
        }
    
    
    
    }

    //FUNCION PARA MEZCLAR PREGUNTAS

    mezclar(array){
        array.sort(() => Math.random() - 0.5);
    }

  


    

}
 */

/* class SegundoJuego{
    constructor(){

    }
    
    segundoJuego() {
        divExplicacion1.className = "divExplicacion1";
        divResultado.className = "hide";
        formContestacion1.className = "hide";
        explicacion1.innerText = "Vamos a ver si te sabes algun nombre. Tienes que dar un nombre y apellido sin equivocarte."
        divExplicacion1.addEventListener("submit", (e) => {
            e.preventDefault();
            divExplicacion1.className = "hide";
            formJuego.className = "hide";
            divJuego2.className = "divJuego2";
            pregJ2.innerText = "Di primero un nombre:"
            btnRJ2.addEventListener("click", () => {
                let nom = respJ2.value;
                if ((datosPersonajes.some(id => id.nombre === nom.toLowerCase())) === true) {
                    formJuego.className = "hide";
                    divJuego2.className = "hide";
                    formContestacion1.className = "formContestacion1"
                    contestacion1.innerText =`Es correcto! Un personaje se llama ${nom}.`
                    formContestacion1.addEventListener("submit", (e) => {
                        e.preventDefault();
                        divExplicacion1.className = "hide";
                        formContestacion1.className = "hide";
                        formJuego.className = "hide";
                        divJuego2.className = "divJuego2";
                        pregJ2.innerText = `Ahora di el apellido de ${nom}`;
                        btnRJ2.addEventListener("click", () => {
                            let apell = respJ2.value;
                            if ((datosPersonajes.find((id) => id.nombre === nom)).apellido === apell) {
                                formJuego.className = "hide";
                                formContestacion1.className = "hide";
                                divJuego2.className = "hide";
                                divResultado.className = "divResultado";
                                resultado.innerText = `Es correcto! El nombre y apellido del personaje es ${nom} ${apell}
                                Ganaste la segunda parte del juego`
                            } else {
                                formJuego.className = "hide"
                                formContestacion1.className = "hide";
                                divJuego2.className = "hide";
                                divResultado.className = "block";
                                resultado.innerText = `Incorrecto. El nombre y apellido del personaje es ${nom} ${(datosPersonajes.find(id => id.nombre === nom)).apellido}. Fin del juego`;       
                                
                            }                       
                    
                        })
                    })
                } else { 
                    formContestacion1.className = "hide";
                    formJuego.className = "hide";
                    divJuego2.className = "hide";
                    divResultado.className = "divResultado";
                    resultado.innerText = `Incorrecto. El nombre que ingresaste no pertenece a ningun personaje. Perdiste la segunda parte del juego.` ;                   
                        
                    
                }   
            })
        })
    } 

    
    

    
}
 */

 
const datosPersonajes = [
    { id: 1, nombre: "Rachel", apellido: "Green" },
    { id: 2, nombre: "Ross", apellido: "Geller" },
    { id: 3, nombre: "Phoebe", apellido: "Buffay" },
    { id: 4, nombre: "Chandler", apellido: "Bing" },
    { id: 5, nombre: "Monica", apellido: "Geller" },
    { id: 6, nombre: "Joey", apellido: "Tribbiani" },
];



//PREGUNTAS MEZCLADAS

const mezclarPreguntas = () => {

    fetch(URLpreguntasYrespuetsas)
    .then((res) => {
        console.log(res);
        return res.json();
    }).then(preguntasRespuestas => {
        const preguntasRespuestasMezcladas = preguntasRespuestas.sort(() => Math.random() - 0.5);
        sessionStorage.setItem("preguntasMezcladas", JSON.stringify(preguntasRespuestasMezcladas));
        console.log(preguntasRespuestasMezcladas)
    })
    .catch(() => {
        console.log("error");
    })
    .finally(() => {
        
    })
  
}


/*    try{

    const preguntasRespuestasJSON = await fetch(URLpreguntasYrespuetsas);
    const preguntasRespuestas = await preguntasRespuestasJSON.json();
    const preguntasRespuestasMezcladas = preguntasRespuestas.sort(() => Math.random() - 0.5);
    console.log(preguntasRespuestasMezcladas);
    

    } catch {
        console.log("cooregi");
    }
    finally{
       
    } */






//FUNCIONES PARA MOSTRAR O ESCONDER CONTENEDORES

const esconder = (contenedor) => {
    contenedor.className = "hide";
}

const mostrar = (contenedor) => {
    contenedor.className = `${toString.contenedor}`;
}


//VISULIZACION INICIAL DE LOS CONTENEDORES

 divJugar.className ="divJugar";
divSaludo.className = "hide";
divExplicacion1.className ="hide" ;
formContestacion1.className = "hide";
formJuego.className = "hide";
divJuego2.className = "hide";
divResultado.className = "hide"; 
divMostrarPersonajes.className = "hide";



//INICIO DEL JUEGO




const inicioJuego = () => {
    nombreParticipante();
    
}
btnJugar.addEventListener("click", inicioJuego);


//1. SE PIDE EL NOMBRE AL PARTICIPANTE

const nombreParticipante = () => {
    
    if (!!localStorage.getItem("nombreParticipante")) {
        divJugar.className = "hide";
        divSaludo.className = "divSaludo";
        elementoNombre.className = "hide";
        textSaludo.innerText = `Bienvenido de nuevo ${localStorage.getItem("nombreParticipante")}`;
        
        divSaludo.addEventListener(`submit`, (e) => {
            e.preventDefault();
            divSaludo.className = "hide";
            primerJuego(localStorage.getItem("nombreParticipante"));

    })
    } else {
        
        divJugar.className = "hide";
        divSaludo.className = "divSaludo";
        divSaludo.addEventListener(`submit`, (e) => {
            e.preventDefault();
            let nombre = elementoNombre.value;
            localStorage.setItem("nombreParticipante",nombre);
            divSaludo.className = "hide";
            primerJuego(nombre);

        })
    }


    

}

//2. EMPIEZA EL PRIMER JUEGO

const primerJuego = (nombre) => {
    divExplicacion1.className = "divExplicacion1"
    explicacion1.innerText = `Hola ${nombre}. Tendras que contestar 4 preguntas. Si contestas correctamente tres o mas pasas a la segunda parte del juego.`;
    mezclarPreguntas();
    divExplicacion1.addEventListener("submit", (e) => {
        e.preventDefault();
        divExplicacion1.className = "hide";
        let correctas = 0;
        let incorrectas = 0;
        let index = 0;
        preguntas(correctas, incorrectas, index);
    
        
    })

}

 

const preguntas = (corr, incorr, index) => {
    if (index < 4) {
        index++;
        let opciones = [];
        formContestacion1.className = "hide";
        formJuego.className = `formJuego`;
        const preguntasRespuestasMix =(JSON.parse(sessionStorage.getItem("preguntasMezcladas")));
        console.log(preguntasRespuestasMix[index]);
        /* const {pregunta: textPregunta, opciones: elecciones, respCorr: respuestaCorrecta} = preguntasRespuestasMix[index]; */
        pregunta.innerText = preguntasRespuestasMix[index].pregunta;
        opcion1.innerText = preguntasRespuestasMix[index].opciones[0].resp;
        opcion2.innerText = preguntasRespuestasMix[index].opciones[1].resp;
        opcion3.innerText = preguntasRespuestasMix[index].opciones[2].resp;
        resp1.value = preguntasRespuestasMix[index].opciones[0].resp;
        resp2.value = preguntasRespuestasMix[index].opciones[1].resp;
        resp3.value = preguntasRespuestasMix[index].opciones[2].resp;
        resp1.checked  = false;
        resp2.checked  = false;
        resp3.checked  = false;
        opciones = [resp1, resp2, resp3];


    /*     pregunta.innerText = preguntasRespuestasMix[index].pregunta;
        opcion1.innerText = preguntasRespuestasMix[index].opciones[0].resp;
        opcion2.innerText = preguntasRespuestasMix[index].opciones[1].resp;
        opcion3.innerText = preguntasRespuestasMix[index].opciones[2].resp;
        resp1.value = preguntasRespuestasMix[index].opciones[0].resp;
        resp2.value = preguntasRespuestasMix[index].opciones[1].resp;
        resp3.value = preguntasRespuestasMix[index].opciones[2].resp;
        resp1.checked  = false;
        resp2.checked  = false;
        resp3.checked  = false;
        opciones = [resp1, resp2, resp3];
 */
      

        formJuego.addEventListener("submit", (e) => {
            e.preventDefault();
            let opcionElegida = "";
            for (const opcion of opciones) {
                if (opcion.checked) {
                    opcionElegida = opcion.value;
                }

            }

            if (opcionElegida == (preguntasRespuestasMix[index].respCorr)) {
                
                /* formJuego.className = "hide";
                formContestacion1.className = "formContestacion1";
                contestacion1.innerText = "Correcto!!"; */
                corr++;
                Swal.fire({
                    title: 'Es correcta.',
                    icon: 'success',
                    confirmButtonText: 'Siguiente pregunta',
                    color: "gray",
                   
                }).then((result) => {
                    if (result.isConfirmed) {
                        preguntas(corr, incorr, index);
                    }
                })
            

            }
            else {
                /* formJuego.className = "hide";
                formContestacion1.className = "formContestacion1";
                contestacion1.innerText = `Incorrecto. La respuesta es ${(preguntasRespuestasMix[index].respCorr).toUpperCase()}`; */
                incorr++;
                Swal.fire({
                    title: 'Ups... Te equivocaste.',
                    text: `La respuesta es ${(preguntasRespuestasMix[index].respCorr).toUpperCase()}`,
                    icon: 'warning',
                    confirmButtonText: 'Siguiente pregunta',
                    color: "gray",
                   
                }).then((result) => {
                    if (result.isConfirmed) {
                        preguntas(corr, incorr, index);
                    }
                })
                
            }

        /*     formContestacion1.addEventListener("submit", (e) => {
                e.preventDefault();
                preguntas(corr, incorr, index);
            })
 */
        })

    } else {
        resumenJuego1(corr, incorr);
    }



}

//SEGUN EL RESULTADO EN EL JUEGO 1 PIERDO O PASO AL JUEGO 2
const resumenJuego1 = (corr, incorr) => {
    divResultado.className = "hide";
    formJuego.className = "hide";
    formContestacion1.className = "formContestacion1";
    contestacion1.innerText = `Como resultado obtuviste ${corr} respuestas correctas y ${incorr} respuestas incorrectas`
    formContestacion1.addEventListener("submit", (e) => {
        e.preventDefault();
        if (corr > 2) {
            formContestacion1.className = "hide";
            segundoJuego();
        } else {
            formContestacion1.className = "hide";
            /* divResultado.className = "divResultado";
            resultado.innerText = "Fin del juego"; */

            Swal.fire({
                title: 'Ups.. Perdiste',
                text: `Intenta de nuevo!`,
                icon: 'warning',
                confirmButtonText: 'Fin de Juego',
                color: "gray",
               
            }).then((result) => {
                if (result.isConfirmed) {
                    mostrarPersonajes();
                }
            })
        }
    })

}




//SEGUNDO JUEGO

const segundoJuego = () => {
    divExplicacion1.className = "divExplicacion1";
    divResultado.className = "hide";
    formContestacion1.className = "hide";
    explicacion1.innerText = "Vamos a ver si te sabes algun nombre. Tienes que dar un nombre y apellido sin equivocarte."
    divExplicacion1.addEventListener("submit", (e) => {
        e.preventDefault();
        divExplicacion1.className = "hide";
        formJuego.className = "hide";
        divJuego2.className = "divJuego2";
        pregJ2.innerText = "Di primero un nombre:"
        btnRJ2.addEventListener("click", () => {
            let nom = respJ2.value;
            if ((datosPersonajes.some(id => id.nombre.toLowerCase() === nom.toLowerCase())) === true) {
                formJuego.className = "hide";
                divJuego2.className = "hide";
                /* formContestacion1.className = "formContestacion1"
                contestacion1.innerText =`Es correcto! Un personaje se llama ${nom}.` */
                Swal.fire({
                    title: 'Correcto!',
                    text: `Un personaje se llama ${nom.toUpperCase()}.`,
                    icon: 'success',
                    confirmButtonText: 'Siguiente',
                    color: "gray",
                   
                }).then((result) => {
                    if (result.isConfirmed) {
                        divExplicacion1.className = "hide";
                        formContestacion1.className = "hide";
                        formJuego.className = "hide";
                        divJuego2.className = "divJuego2";
                        pregJ2.innerText = `Ahora di el apellido de ${nom}`;

                        btnRJ2.addEventListener("click", () => {
                            let apell = respJ2.value.toLowerCase();
                            if ((datosPersonajes.find((id) => id.nombre.toLowerCase() === nom.toLowerCase())).apellido.toLowerCase() === apell) {
                                formJuego.className = "hide";
                                formContestacion1.className = "hide";
                                divJuego2.className = "hide";
                                /* divResultado.className = "divResultado";
                                resultado.innerText = `Es correcto! El nombre y apellido del personaje es ${nom} ${apell}
                                Ganaste la segunda parte del juego` */

                                Swal.fire({
                                    title: 'Ganaste!!',
                                    text: `Es correcto! El nombre y apellido del personaje es ${nom} ${apell}
                                    Ganaste la segunda parte del juego`,
                                    icon: 'success',
                                    confirmButtonText: 'Fin de Juego',
                                    color: "gray",
                                   
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        mostrarPersonajes();
                                    }
                                })

                               
                            } else {
                                formJuego.className = "hide"
                                formContestacion1.className = "hide";
                                divJuego2.className = "hide";
                                /* divResultado.className = "divResultado";
                                resultado.innerText = `Incorrecto. El nombre y apellido del personaje es ${nom} ${(datosPersonajes.find(id => id.nombre.toLowerCase() === nom.toLowerCase())).apellido}. Fin del juego`;       
                                mostrarPersonajes(); */

                                Swal.fire({
                                    title: 'Ups... Perdiste!',
                                    text: `El nombre y apellido del personaje es ${nom} ${(datosPersonajes.find((id) => id.nombre.toLowerCase() === nom.toLowerCase())).apellido.toLowerCase()}`,
                                    icon: 'warning',
                                    confirmButtonText: 'Fin de Juego',
                                    color: "gray",
                                   
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        mostrarPersonajes();
                                    }
                                })


                            }                       
                      
                        })
                        
                    }
                })


/* 
                formContestacion1.addEventListener("submit", (e) => {
                    e.preventDefault();
                    
                    divExplicacion1.className = "hide";
                    formContestacion1.className = "hide";
                    formJuego.className = "hide";
                    divJuego2.className = "divJuego2";
                    pregJ2.innerText = `Ahora di el apellido de ${nom}`;
                    btnRJ2.addEventListener("click", () => {
                        let apell = respJ2.value.toLowerCase();
                        if ((datosPersonajes.find((id) => id.nombre.toLowerCase() === nom.toLowerCase())).apellido.toLowerCase() === apell) {
                            formJuego.className = "hide";
                            formContestacion1.className = "hide";
                            divJuego2.className = "hide";
                            divResultado.className = "divResultado";
                            resultado.innerText = `Es correcto! El nombre y apellido del personaje es ${nom} ${apell}
                            Ganaste la segunda parte del juego`
                           
                        } else {
                            formJuego.className = "hide"
                            formContestacion1.className = "hide";
                            divJuego2.className = "hide";
                            divResultado.className = "divResultado";
                            resultado.innerText = `Incorrecto. El nombre y apellido del personaje es ${nom} ${(datosPersonajes.find(id => id.nombre.toLowerCase() === nom.toLowerCase())).apellido}. Fin del juego`;       
                            mostrarPersonajes();
                        }                       
                  
                    })
                }) */
            } else { 
                /* formContestacion1.className = "hide";
                formJuego.className = "hide";
                divJuego2.className = "hide";
                divResultado.className = "divResultado";
                resultado.innerText = `Incorrecto. El nombre que ingresaste no pertenece a ningun personaje. Perdiste la segunda parte del juego.` ;  */
                formJuego.className = "hide";
                formContestacion1.className = "hide";
                divJuego2.className = "hide";
                Swal.fire({
                    title: 'Ups... Te equivocaste.',
                    text: `No existe ningun personajes con ese nombre`,
                    icon: 'warning',
                    confirmButtonText: 'Fin de Juego',
                    color: "gray",
                   
                }).then((result) => {
                    if (result.isConfirmed) {
                        mostrarPersonajes();
                    }
                })
                
                       
                
            }   
        })
    })
} 



//MOSTRAR PERSONAJES

const mostrarPersonajes = () => {
    let titulo = document.createElement("h3");
    titulo.innerText = "La lista de personajes es:"
    divMostrarPersonajes.className = "divMostrarPersonajes";
    divMostrarPersonajes.append(titulo);
    for ( const datosPersonaje of datosPersonajes) {
        const {nombre, apellido} = datosPersonaje;
        let personaje = document.createElement("h5");
        personaje.innerText = `--- ${nombre} ${apellido}`
        divMostrarPersonajes.append(personaje);

    }

}