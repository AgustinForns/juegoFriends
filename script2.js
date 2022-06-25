

const divSaludo = document.getElementById("divSaludo");
const elementoNombre = document.getElementById("nombre")

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

 
const datosPersonajes = [
    { id: 1, nombre: "rachel", apellido: "green" },
    { id: 2, nombre: "ross", apellido: "geller" },
    { id: 3, nombre: "phoebe", apellido: "buffay" },
    { id: 4, nombre: "chandler", apellido: "bing" },
    { id: 5, nombre: "monica", apellido: "geller" },
    { id: 6, nombre: "joey", apellido: "tribbiani" },
];

const preguntasRespuestas = [
    {
        id: 1,
        pregunta: "¿Cómo se llama la cafetería a la que siempre van?",
        opciones: [{ resp: "Central Park", const: false }, { resp: "Central Perk", const: true }, { resp: "Central Cafe", const: false }],
        respCorr: "Central Perk",
    },

    {
        id: 2,
        pregunta: "¿Como se llama el hijo de ross?",
        opciones: [{ resp: "Ben", const: true }, { resp: "Ross Jr.", const: false }, { resp: "David", const: false }],
        respCorr: "Ben",
    },

    {
        id: 3,
        pregunta: "¿A cuál de los tres chicos conocía Julia Roberts?",
        opciones: [{ resp: "Ross", const: false }, { resp: "Joey", const: false }, { resp: "Chandler", const: true }],
        respCorr: "Chandler",
    },


    {
        id: 4,
        pregunta: "¿Para qué marca de ropa trabaja Rachel?",
        opciones: [{ resp: "Prada", const: false }, { resp: "Ralph Lauren", const: true }, { resp: "Gucci", const: false }],
        respCorr: "Ralph Lauren",
    },

    {
        id: 5,
        pregunta: "¿Cómo se llamaba la compañera de piso de Joey?",
        opciones: [{ resp: "Janine", const: true }, { resp: "Janet", const: false }, { resp: "Jane", const: false }],
        respCorr: "Janine",
    },

    {
        id: 6,
        pregunta: "¿A qué fruta es alérgico Ross?",
        opciones: [{ resp: "Manzana", const: false }, { resp: "Piña", const: false }, { resp: "Kiwi", const: true }],
        respCorr: "Kiwi",
    },
]

//PREGUNTAS MEZCLADAS

const preguntasRespuestasMix = preguntasRespuestas.sort(() => Math.random() - 0.5);
console.log(preguntasRespuestasMix)





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

/* 
mostrar(divJugar);
esconder(divSaludo);
esconder(divExplicacion1);
esconder(formContestacion1);
esconder(formJuego);
esconder(divJuego2);
esconder(divResultado);
 */





//INICIO DEL JUEGO

const inicioJuego = () => {
    nombreParticipante();
}
btnJugar.addEventListener("click", inicioJuego);


//1. SE PIDE EL NOMBRE AL PARTICIPANTE

const nombreParticipante = () => {
    divJugar.className = "hide";
    divSaludo.className = "divSaludo";
    divSaludo.addEventListener(`submit`, (e) => {
        e.preventDefault();
        let nombre = elementoNombre.value;
        divSaludo.className = "hide";
        primerJuego(nombre);

    })

}

//2. EMPIEZA EL PRIMER JUEGO

const primerJuego = (nombre) => {
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



const preguntas = (corr, incorr, index) => {
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

        console.log(opciones);
        console.log(index)

        formJuego.addEventListener("submit", (e) => {
            e.preventDefault();
            let opcionElegida = "";
            for (const opcion of opciones) {
                if (opcion.checked) {
                    console.log(opcion.checked)
                    opcionElegida = opcion.value;
                    console.log(opcionElegida);
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
                console.log(opcionElegida);
                
                console.log(index)
                preguntas(corr, incorr, index);
            })

        })

    } else {
        resumenJuego1(corr, incorr);
    }



}

//SEGUN EL RESULTADO EN EL JUEGO 1 PIERDO O PASO AL JUEGO 2
const resumenJuego1 = (corr, incorr) => {
    console.log(corr)
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
            divResultado.className = "divResultado";
            resultado.innerText = "Fin del juego";
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