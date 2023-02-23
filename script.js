
//---------------------------------------------------------------------------------OBTENCION DE HTML



//-----------------------------------------------------------------PANTANLLA DE INICIO

//HEADER
const txtTitulo = document.getElementById("txtTitulo");
const txtFrase = document.getElementById("txtFrase");
const navBotones = document.getElementById("navBotones")
const btnJugar1 = document.getElementById("btnJugar1");
const btnExplicacion = document.getElementById("btnExplicacion");

//----------------------------EXPLICACION
const divExplicacionJuego = document.getElementById("divExplicacionJuego");
const btnJugar2 = document.getElementById("btnJugar2");
const btnSalirExplicacion = document.getElementById("btnSalirExplicacion");


//---------------------------DAR INICIO AL JUEGO
const btnJugar0 = document.getElementById("btnJugar0");
const divJugar = document.getElementById("divJugar");

//---------------------------SALUDAR
const divSaludo = document.getElementById("divSaludo");
const elementoNombre = document.getElementById("nombre");
const textSaludo = document.getElementById("textSaludo");


//-----------------------------------------------------------------JUEGO 1
//-----------------------------EXPLICACION DEL JUEGO
const divExplicacion1 = document.getElementById("divExplicacion1");
const explicacion1 = document.getElementById("explicacion1");
//-----------------------------DESARROLLO DEL JUEGO
//----MOSTRAR OPCIONES
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
//----RESPONDER SI ES CORRECTA O INCORRECTA
const formContestacion1 = document.getElementById("formContestacion1");
const contestacion1 = document.getElementById("contestacion1");

//---------------------------------------------------JUEGO2
//--------------------------EXPLICACION DEL JUEGO
const divExplicacion2 = document.getElementById("divExplicacion2");
const explicacion2 = document.getElementById("explicacion2");
//-------------------------DESARROLLO DE JUEGO
const divJuego2 = document.getElementById("divJuego2");
const temporizador2 = document.getElementById("temporizador2");
const respJ2 = document.getElementById("respJ2");
const btnRJ2 = document.getElementById("btnRJ2");
const pregJ2 = document.getElementById("pregJ2");




//-------------------------------------------------FINALIZACION DEL JUEGO
//------------------------MOSTRAR PERSONAJES
const divMostrarPersonajes = document.getElementById("divMostrarPersonajes");
const txtMostrarPersonajes = document.getElementById("txtMostrarPersonajes");
const volverJugar = document.getElementById("volverJugar");


//--------------------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------OBTENCION DE URL DATOS .JSON
 const URLpreguntasYrespuetsas = "datos/preguntasYrespuestas.json";
 const URLdatosPersonajes = "datos/datosPersonajes.json";



//----------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------DEFINCION DE CLASES


//-------------------------------------------------ANIMACIONES

class Animaciones {
    static aparecer(element){
        element.animate({
            opacity: [ 0, 0.9, 1 ],
            offset: [ 0, 0.8 ],
            easing: [ 'ease-in', 'ease-out' ],
          }, 1000);
    }
    
    static rotar(element){
        element.animate([
            {transform: "rotate(360deg)"}
        ],{
            iterations: 1,
            easing: "ease",
            duration: 1000

        })
    }

    static agrandar(element){
        element.animate([
            {transform: "scale(0.8)"},
            {transform: "scale(1)"}
        ], {
            iterations: 1,
            easing: "ease-in-out",
            duration: 1000,
        }
    )}

    static entrar(element){
        element.animate([
            {transform: "translateX(-500px)"},
            {transform: "translateX(0)"}
        ], {
            iterations: 1,
            easing: "Linear",
            duration: 1000,
        }
        )}
}

//-------------------------------------------------EXPLICACION JUEGO ENTERO

class ExplicacionEntera {
    static mostrarExplicacion(){
        divJugar.className = "hide";
        divSaludo.className = "hide";
        divExplicacionJuego.className = "divExplicacionJuego";
    }
}

//-------------------------------------------------ESCUCHAR BOTONES PANTALLAS INICIALES

class EscucharBotonesIntroduccion{

    static listenBtnJugar(){
        for(let i = 0; i < 3; i++){
            let btnJugar = document.getElementById(`btnJugar${i}`)
            btnJugar.addEventListener("click", (e) => {
                e.preventDefault();
                Introduccion.nombreParticipante();
                })
            }
        } 

    static listenBtnVolverJugar(){
        volverJugar.addEventListener("click", (e) => {
            e.preventDefault();
            location.reload()
        })    
    }   
       
    
    static listenBtnExplicacion(){
        btnExplicacion.addEventListener("click", (e) =>{
        e.preventDefault();
        ExplicacionEntera.mostrarExplicacion();
    })
    }
     
    static listenBtnSalir(){     
        btnSalirExplicacion.addEventListener("click", (e) => {
            e.preventDefault();
            Introduccion.mostrarPantallaInicio();
        })
    }
  
}

//------------------------------------------------ INICIO DEL JUEGO
class Introduccion {
    //MOSTRAR PANTALLA DE INCIO DE JUEGO
    static mostrarPantallaInicio(){
       
        divJugar.className ="divJugar";
        navBotones.className = "navBotones";
        divSaludo.className = "hide";
        divExplicacion1.className ="hide" ;
        formContestacion1.className = "hide";
        divExplicacion2.className ="hide" ;
        formJuego.className = "hide";
        divJuego2.className = "hide";
        divMostrarPersonajes.className = "hide";
        divExplicacionJuego.className = "hide";
    }


    //PEDIR NOMBRE AL PARTICIPANTE
    static nombreParticipante () {
        divMostrarPersonajes.className = "hide";
        navBotones.className = "hide";

        if (!!localStorage.getItem("nombreParticipante")) {
            divExplicacionJuego.className = "hide";
            divJugar.className = "hide";
            divSaludo.className = "divSaludo";
            Animaciones.agrandar(divSaludo);
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
            divExplicacionJuego.className = "hide";

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


//-----------------------------------------------PRIMER JUEGO
class PrimerJuego {
     //OBTENER DATOS DE ARCHIVO .JSON Y MEZCLAR PREGUNTAS PARA MAS ALEATORIDAD
     static mezclarPreguntas () {

        fetch(URLpreguntasYrespuetsas)
        .then((res) => {
            return res.json();
        }).then(preguntasRespuestas => {
            const preguntasRespuestasMezcladas = preguntasRespuestas.sort(() => Math.random() - 0.5);
            localStorage.setItem("preguntasMezcladas", JSON.stringify(preguntasRespuestasMezcladas));
        })
        .catch(() => {
            Introduccion.mostrarPantallaInicio();
        })
        .finally(() => {
            
        })
      
    }

    //EXPLICACION E INICIO DEL JUEGO
    static primerJuego = (nombre) => {
        divExplicacion1.className = "divExplicacion1";
        Animaciones.aparecer(divExplicacion1);
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

    //ANALISIS PREGUNTA (DETERMINAR SI ES CORRECTA O INCORRECTA)
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
                    confirmButtonColor: "#ce8383",
                    allowOutsideClick: false,
                       
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
                confirmButtonColor: "#ce8383",
                allowOutsideClick: false,
                       
                }).then((result) => {
                    if (result.isConfirmed) {
                    PrimerJuego.preguntas(corr, incorr, index);
                    }
                })    
            } 
    }

   
    
    //FUNCION DONDE SE GENERA EL JUEGO (SE REPITE HASTA PERDER O PASAR AL SEGUNDO JUEGO)
    static preguntas = (corr, incorr, index) => {
        
        if (index < 5 && corr < 3 && incorr < 3 ) {
            formJuego.className = `formJuego`;           
            Animaciones.aparecer(formJuego);
            let tiempoEspera;
            let intervaloTiempo;
            let tiempo = 5;
            temporizador1.innerText = tiempo;
            index++;
            let opciones = [];
            const preguntasRespuestasMix =(JSON.parse(localStorage.getItem("preguntasMezcladas")));
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
                tiempo--;
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
            clearInterval(PrimerJuego.intervaloTiempo);
            PrimerJuego.resumenJuego1(corr, incorr);
        }
    }


    //RESUMEN DE PRIMER JUEGO (DETERMINA SI PIERDE ELPRIMER JUEGO O GANA Y PASA AL SEGUNDO)
    static resumenJuego1 = (corr, incorr) => {
        formJuego.className = "hide";
        formContestacion1.className = "formContestacion1";
        Animaciones.rotar(formContestacion1);
        contestacion1.innerText = `Como resultado obtuviste ${corr} respuestas correctas y ${incorr} respuestas incorrectas`;
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
                    confirmButtonColor: "#ce8383",
                    allowOutsideClick: false,
                   
                }).then((result) => {
                    if (result.isConfirmed) {
                        FinDelJuego.mostrarPersonajes();
                    }
                })
            }
        })    
    }
}
 
//----------------------------------------------------SEGUNDO JUEGO
class SegundoJuego{
    //BUSCAR LOS DATOS DE PERSONAJES DEL ARCHIVO .JSON
    static buscarDatosPersonajes(){
        if (!!localStorage.getItem("datosPersonajes")){
        } else {
            fetch(URLdatosPersonajes)
            .then( (res) => {
                return res.json();
            }).then(datosPersonaje => {
                localStorage.setItem("datosPersonajes", JSON.stringify(datosPersonaje));
            })
            .catch (() => {
                Introduccion.mostrarPantallaInicio();
            })
            .finally(() => {
    
            })   
        }       
    }

    //DETERMINAR SI EL APELLIDO INGRESADO ES CORRECTO
    static leerApellido(datosPersonajes, nom){
        let apell = respJ2.value.toLowerCase();
        if ((datosPersonajes.find((id) => id.nombre.toLowerCase() === nom.toLowerCase())).apellido.toLowerCase() === apell) {
          
            Swal.fire({
                title: 'Ganaste!!',
                text: `Es correcto! El nombre y apellido del personaje es ${nom.charAt(0).toUpperCase() + nom.slice(1)} ${apell.charAt(0).toUpperCase() + apell.slice(1)}
                Ganaste la segunda parte del juego`,
                icon: 'success',
                confirmButtonText: 'Fin de Juego',
                color: "gray",
                confirmButtonColor: "#ce8383",
                allowOutsideClick: false,
               
            }).then((result) => {
                divJuego2.className = "hide";
                if (result.isConfirmed) {
                    FinDelJuego.mostrarPersonajes();
                }
            })              
        } else {

            Swal.fire({
                title: 'Ups... Perdiste!',
                text: `El nombre y apellido del personaje es ${nom.charAt(0).toUpperCase() + nom.slice(1)} ${(datosPersonajes.find((id) => id.nombre.toLowerCase() === nom.toLowerCase())).apellido}`,
                icon: 'warning',
                confirmButtonText: 'Fin de Juego',
                color: "gray",
                confirmButtonColor: "#ce8383",
                allowOutsideClick: false,
               
            }).then((result) => {
                divJuego2.className = "hide";
                if (result.isConfirmed) {
                    FinDelJuego.mostrarPersonajes();
                }
            })
        }           
    }

    //DTERMINAR SI EL NOMBRE INGRESADO ES CORRECTO
    static leerNombre(datosPersonajes) {
        let nom = respJ2.value;
        if ((datosPersonajes.some(id => id.nombre.toLowerCase() === nom.toLowerCase())) === true) {
           

            Swal.fire({
                title: 'Correcto!',
                text: `Un personaje se llama ${nom.charAt(0).toUpperCase() + nom.slice(1)}.`,
                icon: 'success',
                confirmButtonText: 'Siguiente',
                color: "gray",
                confirmButtonColor: "#ce8383",
                allowOutsideClick: false,
               
            }).then((result) => {
                if (result.isConfirmed) {   
                    formJuego.className = "hide";
                    divJuego2.className = "hide";
                    respJ2.value = "";
                    respJ2.placeholder = "Apellido del personaje" ;        
                    divExplicacion2.className = "hide";
                    divJuego2.className = "divJuego2";
                    Animaciones.aparecer(divJuego2);
                    pregJ2.innerText = `Ahora di el apellido de ${nom}`;
                    

                    let intervaloTiempo2;
                    let tiempoEspera2;
                    let tiempo2 = 10;

                    temporizador2.innerText = tiempo2;
        
                    intervaloTiempo2 = setInterval(() => {
                        tiempo2--;
                        temporizador2.innerText = tiempo2;
                        
                    }, 1000);
            
                    tiempoEspera2 = setTimeout(() => {
                        clearTimeout(tiempoEspera2);
                        clearInterval(intervaloTiempo2);
                        SegundoJuego.leerApellido(datosPersonajes, nom);
                    }, 10000)     
        

                    btnRJ2.addEventListener("click", () => {
                        clearTimeout(tiempoEspera2);
                        clearInterval(intervaloTiempo2);
                        SegundoJuego.leerApellido(datosPersonajes, nom);                   
                    })     
                }
            })
        } else { 
            
            Swal.fire({
                title: 'Ups... Te equivocaste.',
                text: `No existe ningun personaje con ese nombre`,
                icon: 'warning',
                confirmButtonText: 'Fin de Juego',
                color: "gray",
                confirmButtonColor: "#ce8383",
                allowOutsideClick: false,
               
            }).then((result) => {
                if (result.isConfirmed) {
                    divJuego2.className = "hide";
                    FinDelJuego.mostrarPersonajes();
                }
            })                                          
        }      
    }

    //INICIO DEL SEGUNDO JUEGO
    static segundoJuego() {
    
        SegundoJuego.buscarDatosPersonajes();
        divMostrarPersonajes.className = "hide";
        formContestacion1.className = "hide";
        divExplicacion2.className = "divExplicacion2";
        divMostrarPersonajes.className = "hide";
        Animaciones.aparecer(divExplicacion2);
        explicacion2.innerText = "Vamos a ver si te sabes algun nombre. Tienes que dar un nombre y apellido sin equivocarte."
        const datosPersonajes = (JSON.parse(localStorage.getItem("datosPersonajes")));
    

        divExplicacion2.addEventListener("submit", (e) => {
            e.preventDefault();
            divExplicacion2.className = "hide";
            divJuego2.className = "divJuego2";
            Animaciones.aparecer(divJuego2);
            respJ2.value = "";
            pregJ2.innerText = "Di primero un nombre:";
            respJ2.placeholder = "Nombre del Personaje";

            let intervaloTiempo2;
            let tiempoEspera2;
            let tiempo2 = 10;
            temporizador2.innerText = tiempo2;

            intervaloTiempo2 = setInterval(() => {
                tiempo2--;
                temporizador2.innerText = tiempo2;
                
            }, 1000);
    
            tiempoEspera2 = setTimeout(() => {
                clearTimeout(tiempoEspera2);
                clearInterval(intervaloTiempo2);
                SegundoJuego.leerNombre(datosPersonajes); 
            }, 10000)     


            btnRJ2.addEventListener("click", () => {
                clearTimeout(tiempoEspera2);
                clearInterval(intervaloTiempo2); 
                SegundoJuego.leerNombre(datosPersonajes); 
            })
        })
    }     
}



//--------------------------------------------------FIN DEL JUEGO
class FinDelJuego{
    //MOSTRAR PRESONAJES
    static mostrarPersonajes() {
        if (!!localStorage.getItem("datosPersonajes")) {
            FinDelJuego.mostrarPersonaje();
        } else {
            fetch(URLdatosPersonajes)
            .then( (res) => {
                return res.json();
            }).then(datosPersonaje => {
                localStorage.setItem("datosPersonajes", JSON.stringify(datosPersonaje));
            })
            .catch (() => {
                Introduccion.mostrarPantallaInicio();
            })
            .finally(() => {
                FinDelJuego.mostrarPersonaje();
            })       
            
            
        }
    }

    static mostrarPersonaje(){
        divMostrarPersonajes.className = "divMostrarPersonajes";
        txtMostrarPersonajes.innerHTML = "";
        let titulo = document.createElement("h3");
        titulo.innerText = "Dato curioso - El nombre y apellido de uno de los cinco personajes es:"
        txtMostrarPersonajes.className = "txtMostrarPersonajes";
        Animaciones.entrar(divMostrarPersonajes);
        txtMostrarPersonajes.append(titulo);
        let datosPersonajes = JSON.parse(localStorage.getItem("datosPersonajes"));
        let random = Math.floor((Math.random() * ((datosPersonajes.length)-0)) +0);
        const {nombre, apellido} = (datosPersonajes)[random];
        let personaje = document.createElement("h5");
        personaje.innerText = `--- ${nombre} ${apellido}`
        txtMostrarPersonajes.append(personaje);    
    }
}


 
//----------------------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------PROGRAMACION

//PANTALLA INICIAL
Introduccion.mostrarPantallaInicio();

//ESCUCHAR BOTONES 

EscucharBotonesIntroduccion.listenBtnJugar();
EscucharBotonesIntroduccion.listenBtnSalir();
EscucharBotonesIntroduccion.listenBtnExplicacion();
EscucharBotonesIntroduccion.listenBtnVolverJugar();












