


const divSaludo = document.getElementById("divSaludo");
const elementoNombre = document.getElementById("nombre");
const textSaludo = document.getElementById("textSaludo");

const btnJugar = document.getElementById("btnJugar");
const divJugar = document.getElementById("divJugar");

const divExplicacion1 = document.getElementById("divExplicacion1");
const explicacion1 = document.getElementById("explicacion1");

const divExplicacion2 = document.getElementById("divExplicacion2");
const explicacion2 = document.getElementById("explicacion2");

const formJuego = document.getElementById("formJuego");
const temporizador1 = document.getElementById("temporizador1");
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
const temporizador2 = document.getElementById("temporizador2");
const respJ2 = document.getElementById("respJ2");
const btnRJ2 = document.getElementById("btnRJ2");
const pregJ2 = document.getElementById("pregJ2");

const divMostrarPersonajes = document.getElementById("divMostrarPersonajes"); 

 const URLpreguntasYrespuetsas = "datos/preguntasYrespuestas.json";
 const URLdatosPersonajes = "datos/datosPersonajes.json";





class Introduccion {
    
    //MOSTRAR PANTALLA DE INCIO DE JUEGO
    static mostrarPantallaInicio(){
        divJugar.className ="divJugar";
        divSaludo.className = "hide";
        divExplicacion1.className ="hide" ;
        formContestacion1.className = "hide";
        divExplicacion2.className ="hide" ;
        formContestacion1.className = "hide";
        formJuego.className = "hide";
        divJuego2.className = "hide";
        divResultado.className = "hide"; 
        divMostrarPersonajes.className = "hide";
    }


    //PEDIR NOMBRE AL PARTICIPANTE
    static nombreParticipante () {    
        if (!!localStorage.getItem("nombreParticipante")) {
            divJugar.className = "hide";
            divSaludo.className = "divSaludo";
            elementoNombre.className = "hide";
            textSaludo.innerText = `Bienvenido de nuevo ${localStorage.getItem("nombreParticipante")}`;
    
            divSaludo.addEventListener(`submit`, (e) => {
                e.preventDefault();
                divSaludo.className = "hide";
                PrimerJuego.primerJuego(localStorage.getItem("nombreParticipante"));
        })
        } else {    
            divJugar.className = "hide";
            divSaludo.className = "divSaludo";

            divSaludo.addEventListener(`submit`, (e) => {
                e.preventDefault();
                let nombre = elementoNombre.value;
                localStorage.setItem("nombreParticipante",nombre);
                divSaludo.className = "hide";
                PrimerJuego.primerJuego(nombre);
    
            })
        }   
    }

}


class libreria {
    constructor(){

    }

    mensaje(){

    }
}



class PrimerJuego {
    constructor(id, pregunta, opciones, respCorr){
        this.id = id;
        this. pregunta = pregunta;
        this.opciones = opciones;
        this.respCorr = respCorr;
    }

     //FUNCION PARA MEZCLAR PREGUNTAS
     static mezclarPreguntas () {

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

    //EXPLICACION E INICIO DEL JUEGO
    static primerJuego = (nombre) => {
        divExplicacion1.className = "divExplicacion1"
        explicacion1.innerText = `Hola ${nombre}. Tendras que contestar 3 preguntas correctas. Tienes cinco chances y cinco segundos para responder cada pregunta.`;
        PrimerJuego.mezclarPreguntas();
        divExplicacion1.addEventListener("submit", (e) => {
            e.preventDefault();
            divExplicacion1.className = "hide";
            let correctas = 0;
            let incorrectas = 0;
            let index = 0;
            PrimerJuego.preguntas(correctas, incorrectas, index);
        
            
        })
    
    }

    //TEMPORIZADOR
    intervaloTiempo = setInterval((tiempo) => {
        tiempo++;
        segundosDom.innerHTML = PrimerJuego.pad(tiempo % 60);
        console.log(tiempo);
        tiempoDom.innerHTML = tiempo;
      }, 1000);


    //ANALISIS PREGUNTA
    static analisisRespuesta(opciones, corr, incorr, preguntasRespuestasMix, index){
        let opcionElegida = "";
            for (const opcion of opciones) {
                if (opcion.checked) {
                    opcionElegida = opcion.value;
                }   
            }
    
            if (opcionElegida == (preguntasRespuestasMix[index].respCorr)) {
                corr++;
                Swal.fire({
                    title: 'Es correcta.',
                    icon: 'success',
                    confirmButtonText: 'Siguiente pregunta',
                    color: "gray",
                       
                }).then((result) => {
                    if (result.isConfirmed) {
                        PrimerJuego.preguntas(corr, incorr, index);
                    }
                })     
            }
            else {
                incorr++;
                Swal.fire({
                title: 'Ups... Te equivocaste.',
                text: `La respuesta es ${(preguntasRespuestasMix[index].respCorr).toUpperCase()}`,
                icon: 'warning',
                confirmButtonText: 'Siguiente pregunta',
                color: "gray",
                       
                }).then((result) => {
                    if (result.isConfirmed) {
                    PrimerJuego.preguntas(corr, incorr, index);
                    }
                })    
            } 
    }

    //PAD
    static pad (val) {
        let valString = val.toString();
        if (valString.length < 2) {
          return '0' + valString;
        } else {
          return valString;
        }
      }

    //FUNCION DONDE SE GENERA EL JUEGO
    static preguntas = (corr, incorr, index) => {
        if (index < 5 && corr < 3 && incorr < 3 ) {
            let tiempoEspera;
            let intervaloTiempo;
            let tiempo = 0;
            temporizador1.innerText = tiempo;
            index++;
            let opciones = [];
            formContestacion1.className = "hide";
            formJuego.className = `formJuego`;
            const preguntasRespuestasMix =(JSON.parse(sessionStorage.getItem("preguntasMezcladas")));
            console.log(preguntasRespuestasMix[index]);
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
            
            intervaloTiempo = setInterval(() => {
                tiempo++;
                console.log(tiempo)
                temporizador1.innerText = tiempo;
                
            }, 1000);

            tiempoEspera = setTimeout(() => {
                clearTimeout(tiempoEspera);
                clearInterval(intervaloTiempo);
                PrimerJuego.analisisRespuesta(opciones, corr, incorr, preguntasRespuestasMix, index)
            }, 5000) 

    

            formJuego.addEventListener("submit", (e) => {
                e.preventDefault();
                clearTimeout(tiempoEspera);
                clearInterval(intervaloTiempo);
                PrimerJuego.analisisRespuesta(opciones, corr, incorr, preguntasRespuestasMix, index);
            }) 
            
            
    
        } else {
            clearTimeout(PrimerJuego.tiempoEspera);
            PrimerJuego.resumenJuego1(corr, incorr);
        }
    }


    //RESUMEN DE PRIMER JUEGO
    static resumenJuego1 = (corr, incorr) => {
        divResultado.className = "hide";
        formJuego.className = "hide";
        formContestacion1.className = "formContestacion1";
        contestacion1.innerText = `Como resultado obtuviste ${corr} respuestas correctas y ${incorr} respuestas incorrectas`
        formContestacion1.addEventListener("submit", (e) => {
            e.preventDefault();
            if (corr > 2) {
                formContestacion1.className = "hide";
                SegundoJuego.segundoJuego();
            } else {
                formContestacion1.className = "hide";
                Swal.fire({
                    title: 'Ups.. Perdiste',
                    text: `Intenta de nuevo!`,
                    icon: 'warning',
                    confirmButtonText: 'Fin de Juego',
                    color: "gray",
                   
                }).then((result) => {
                    if (result.isConfirmed) {
                        FinDelJuego.mostrarPersonajes();
                    }
                })
            }
        })    
    }
}
 

class SegundoJuego{
    constructor(id, nombre, apellido){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    static buscarDatosPersonajes(){
        fetch(URLdatosPersonajes)
        .then( (res) => {
            console.log(res);
            return res.json();
        }).then(datosPersonaje => {
            sessionStorage.setItem("datosPersonajes", JSON.stringify(datosPersonaje));
            console.log(datosPersonaje);
        })
        .catch (() => {
            console.log("error");
        })
        .finally(() => {

        })
    }

    static pedirApellido(datosPersonajes, nom){
        let apell = respJ2.value.toLowerCase();
        if ((datosPersonajes.find((id) => id.nombre.toLowerCase() === nom.toLowerCase())).apellido.toLowerCase() === apell) {
            formJuego.className = "hide";
            formContestacion1.className = "hide";
            divJuego2.className = "hide";

            Swal.fire({
                title: 'Ganaste!!',
                text: `Es correcto! El nombre y apellido del personaje es ${nom.charAt(0).toUpperCase() + nom.slice(1)} ${apell.charAt(0).toUpperCase() + apell.slice(1)}
                Ganaste la segunda parte del juego`,
                icon: 'success',
                confirmButtonText: 'Fin de Juego',
                color: "gray",
               
            }).then((result) => {
                if (result.isConfirmed) {
                    FinDelJuego.mostrarPersonajes();
                }
            })              
        } else {
            formJuego.className = "hide"
            formContestacion1.className = "hide";
            divJuego2.className = "hide";

            Swal.fire({
                title: 'Ups... Perdiste!',
                text: `El nombre y apellido del personaje es ${nom.charAt(0).toUpperCase() + nom.slice(1)} ${(datosPersonajes.find((id) => id.nombre.toLowerCase() === nom.toLowerCase())).apellido}`,
                icon: 'warning',
                confirmButtonText: 'Fin de Juego',
                color: "gray",
               
            }).then((result) => {
                if (result.isConfirmed) {
                    FinDelJuego.mostrarPersonajes();
                }
            })
        }           
    }

    static pedirNombre(datosPersonajes) {
        let nom = respJ2.value;
        if ((datosPersonajes.some(id => id.nombre.toLowerCase() === nom.toLowerCase())) === true) {
            formJuego.className = "hide";
            divJuego2.className = "hide";

            Swal.fire({
                title: 'Correcto!',
                text: `Un personaje se llama ${nom.charAt(0).toUpperCase() + nom.slice(1)}.`,
                icon: 'success',
                confirmButtonText: 'Siguiente',
                color: "gray",
               
            }).then((result) => {
                if (result.isConfirmed) {            
                    divExplicacion2.className = "hide";
                    formContestacion1.className = "hide";
                    formJuego.className = "hide";
                    divJuego2.className = "divJuego2";
                    pregJ2.innerText = `Ahora di el apellido de ${nom}`;

                    let intervaloTiempo2;
                    let tiempoEspera2;
                    let tiempo2 = 0;
                    temporizador2.innerText = tiempo2;
        
                    intervaloTiempo2 = setInterval(() => {
                        tiempo2++;
                        console.log(tiempo2);
                        temporizador2.innerText = tiempo2;
                        
                    }, 1000);
            
                    tiempoEspera2 = setTimeout(() => {
                        clearTimeout(tiempoEspera2);
                        clearInterval(intervaloTiempo2);
                        SegundoJuego.pedirApellido(datosPersonajes, nom);
                        /* let apell = respJ2.value.toLowerCase();
                        if ((datosPersonajes.find((id) => id.nombre.toLowerCase() === nom.toLowerCase())).apellido.toLowerCase() === apell) {
                            formJuego.className = "hide";
                            formContestacion1.className = "hide";
                            divJuego2.className = "hide";

                            Swal.fire({
                                title: 'Ganaste!!',
                                text: `Es correcto! El nombre y apellido del personaje es ${nom.charAt(0).toUpperCase() + nom.slice(1)} ${apell.charAt(0).toUpperCase() + apell.slice(1)}
                                Ganaste la segunda parte del juego`,
                                icon: 'success',
                                confirmButtonText: 'Fin de Juego',
                                color: "gray",
                               
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    FinDelJuego.mostrarPersonajes();
                                }
                            })              
                        } else {
                            formJuego.className = "hide"
                            formContestacion1.className = "hide";
                            divJuego2.className = "hide";

                            Swal.fire({
                                title: 'Ups... Perdiste!',
                                text: `El nombre y apellido del personaje es ${nom.charAt(0).toUpperCase() + nom.slice(1)} ${(datosPersonajes.find((id) => id.nombre.toLowerCase() === nom.toLowerCase())).apellido}`,
                                icon: 'warning',
                                confirmButtonText: 'Fin de Juego',
                                color: "gray",
                               
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    FinDelJuego.mostrarPersonajes();
                                }
                            })
                        }      */  
                    }, 10000)     
        

                    btnRJ2.addEventListener("click", () => {
                        clearTimeout(tiempoEspera2);
                        clearInterval(intervaloTiempo2);
                        SegundoJuego.pedirApellido(datosPersonajes, nom);
                        /* let apell = respJ2.value.toLowerCase();
                        if ((datosPersonajes.find((id) => id.nombre.toLowerCase() === nom.toLowerCase())).apellido.toLowerCase() === apell) {
                            formJuego.className = "hide";
                            formContestacion1.className = "hide";
                            divJuego2.className = "hide";

                            Swal.fire({
                                title: 'Ganaste!!',
                                text: `Es correcto! El nombre y apellido del personaje es ${nom.charAt(0).toUpperCase() + nom.slice(1)} ${apell.charAt(0).toUpperCase() + apell.slice(1)}
                                Ganaste la segunda parte del juego`,
                                icon: 'success',
                                confirmButtonText: 'Fin de Juego',
                                color: "gray",
                               
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    FinDelJuego.mostrarPersonajes();
                                }
                            })              
                        } else {
                            formJuego.className = "hide"
                            formContestacion1.className = "hide";
                            divJuego2.className = "hide";

                            Swal.fire({
                                title: 'Ups... Perdiste!',
                                text: `El nombre y apellido del personaje es ${nom.charAt(0).toUpperCase() + nom.slice(1)} ${(datosPersonajes.find((id) => id.nombre.toLowerCase() === nom.toLowerCase())).apellido}`,
                                icon: 'warning',
                                confirmButtonText: 'Fin de Juego',
                                color: "gray",
                               
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    FinDelJuego.mostrarPersonajes();
                                }
                            })
                        }  */                      
                    })     
                }
            })
        } else { 
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
                    FinDelJuego.mostrarPersonajes();
                }
            })                                          
        }      
    }

    static segundoJuego() {
    
        SegundoJuego.buscarDatosPersonajes();
        divExplicacion2.className = "divExplicacion2";
        divResultado.className = "hide";
        formContestacion1.className = "hide";
        explicacion2.innerText = "Vamos a ver si te sabes algun nombre. Tienes que dar un nombre y apellido sin equivocarte."
        const datosPersonajes = (JSON.parse(sessionStorage.getItem("datosPersonajes")));
        console.log(datosPersonajes);

        divExplicacion2.addEventListener("submit", (e) => {
            e.preventDefault();
            divExplicacion2.className = "hide";
            formJuego.className = "hide";
            divJuego2.className = "divJuego2";
            pregJ2.innerText = "Di primero un nombre:"

            let intervaloTiempo2;
            let tiempoEspera2;
            let tiempo2 = 0;
            temporizador2.innerText = tiempo2;

            intervaloTiempo2 = setInterval(() => {
                tiempo2++;
                console.log(tiempo2);
                temporizador2.innerText = tiempo2;
                
            }, 1000);
    
            tiempoEspera2 = setTimeout(() => {
                clearTimeout(tiempoEspera2);
                clearInterval(intervaloTiempo2);
                SegundoJuego.pedirNombre(datosPersonajes); 
                /* let nom = respJ2.value;
                if ((datosPersonajes.some(id => id.nombre.toLowerCase() === nom.toLowerCase())) === true) {
                    formJuego.className = "hide";
                    divJuego2.className = "hide";
    
                    Swal.fire({
                        title: 'Correcto!',
                        text: `Un personaje se llama ${nom.charAt(0).toUpperCase() + nom.slice(1)}.`,
                        icon: 'success',
                        confirmButtonText: 'Siguiente',
                        color: "gray",
                       
                    }).then((result) => {
                        if (result.isConfirmed) {
                            divExplicacion2.className = "hide";
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
    
                                    Swal.fire({
                                        title: 'Ganaste!!',
                                        text: `Es correcto! El nombre y apellido del personaje es ${nom.charAt(0).toUpperCase() + nom.slice(1)} ${apell.charAt(0).toUpperCase() + apell.slice(1)}
                                        Ganaste la segunda parte del juego`,
                                        icon: 'success',
                                        confirmButtonText: 'Fin de Juego',
                                        color: "gray",
                                       
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            FinDelJuego.mostrarPersonajes();
                                        }
                                    })              
                                } else {
                                    formJuego.className = "hide"
                                    formContestacion1.className = "hide";
                                    divJuego2.className = "hide";
    
                                    Swal.fire({
                                        title: 'Ups... Perdiste!',
                                        text: `El nombre y apellido del personaje es ${nom.charAt(0).toUpperCase() + nom.slice(1)} ${(datosPersonajes.find((id) => id.nombre.toLowerCase() === nom.toLowerCase())).apellido}`,
                                        icon: 'warning',
                                        confirmButtonText: 'Fin de Juego',
                                        color: "gray",
                                       
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            FinDelJuego.mostrarPersonajes();
                                        }
                                    })
                                }                       
                            })     
                        }
                    })
                } else { 
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
                            FinDelJuego.mostrarPersonajes();
                        }
                    })                                          
                }    
                 */
            }, 10000)     


            btnRJ2.addEventListener("click", () => {
                clearTimeout(tiempoEspera2);
                clearInterval(intervaloTiempo2); 
                SegundoJuego.pedirNombre(datosPersonajes); 
                /* let nom = respJ2.value;
                if ((datosPersonajes.some(id => id.nombre.toLowerCase() === nom.toLowerCase())) === true) {
                    formJuego.className = "hide";
                    divJuego2.className = "hide";
    
                    Swal.fire({
                        title: 'Correcto!',
                        text: `Un personaje se llama ${nom.charAt(0).toUpperCase() + nom.slice(1)}.`,
                        icon: 'success',
                        confirmButtonText: 'Siguiente',
                        color: "gray",
                       
                    }).then((result) => {
                        if (result.isConfirmed) {
                            divExplicacion2.className = "hide";
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
    
                                    Swal.fire({
                                        title: 'Ganaste!!',
                                        text: `Es correcto! El nombre y apellido del personaje es ${nom.charAt(0).toUpperCase() + nom.slice(1)} ${apell.charAt(0).toUpperCase() + apell.slice(1)}
                                        Ganaste la segunda parte del juego`,
                                        icon: 'success',
                                        confirmButtonText: 'Fin de Juego',
                                        color: "gray",
                                       
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            FinDelJuego.mostrarPersonajes();
                                        }
                                    })              
                                } else {
                                    formJuego.className = "hide"
                                    formContestacion1.className = "hide";
                                    divJuego2.className = "hide";
    
                                    Swal.fire({
                                        title: 'Ups... Perdiste!',
                                        text: `El nombre y apellido del personaje es ${nom.charAt(0).toUpperCase() + nom.slice(1)} ${(datosPersonajes.find((id) => id.nombre.toLowerCase() === nom.toLowerCase())).apellido}`,
                                        icon: 'warning',
                                        confirmButtonText: 'Fin de Juego',
                                        color: "gray",
                                       
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            FinDelJuego.mostrarPersonajes();
                                        }
                                    })
                                }                       
                            })     
                        }
                    })
                } else { 
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
                            FinDelJuego.mostrarPersonajes();
                        }
                    })                                          
                }    */
            })
        })
    }     
}


class FinDelJuego{
    constructor() {

    }

    static mostrarPersonajes() {
        let titulo = document.createElement("h3");
        titulo.innerText = "La lista de personajes es:"
        divMostrarPersonajes.className = "divMostrarPersonajes";
        divMostrarPersonajes.append(titulo);
        for ( const datosPersonaje of (JSON.parse(sessionStorage.getItem("datosPersonajes")))) {
            const {nombre, apellido} = datosPersonaje;
            let personaje = document.createElement("h5");
            personaje.innerText = `--- ${nombre} ${apellido}`
            divMostrarPersonajes.append(personaje);
        }
    }
}

 

//INCIO DEL JUEGO

Introduccion.mostrarPantallaInicio();


btnJugar.addEventListener(`click`, (e) => {
    e.preventDefault();
    Introduccion.nombreParticipante()

})









