

const divSaludo = document.getElementById("divSaludo");
const elementoNombre = document.getElementById("nombre")

const btnJugar = document.getElementById("btnJugar");
const divJugar = document.getElementById("boxJugar");

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

const datosPersonajes = [
    {id: 1, nombre: "rachel", apellido:"green"},
    {id: 2, nombre: "ross", apellido:"geller"},
    {id: 3, nombre: "phoebe", apellido:"buffay"},
    {id: 4, nombre: "chandler", apellido:"bing" },
    {id: 5, nombre: "monica", apellido:"geller" },
    {id: 6, nombre: "joey", apellido:"tribbiani"},   
];

const preguntasRespuestas = [
    {id: 1, 
    pregunta: "¿Cómo se llama la cafetería a la que siempre van?", 
    opciones: [{resp:"Central Park" , const: false}, {resp:"Central Perk" , const: true}, {resp:"Central Cafe" , const: false}],
    respCorrecta: "Central Perk"},

    {id: 2, 
    pregunta: "¿Como se llama el hijo de ross?",  
    opciones: [{resp:"Ben" , const: true}, {resp:"Ross Jr." , const: false}, {resp:"David" , const: false}],
    respCorrecta: "Ben"},

    {id: 3, 
    pregunta: "¿A cuál de los tres chicos conocía Julia Roberts? Di su nombre.",  
    opciones:  [{resp:"Ross" , const: false}, {resp:"Joey" , const: false}, {resp:"Chandler" , const: true}],
    respCorrecta: "Chandler"},


    {id: 4, 
    pregunta: "¿Para qué marca de ropa trabaja Rachel?",  
    opciones: [{resp:"Prada" , const: false}, {resp:"Ralph Lauren" , const: true}, {resp:"Gucci" , const: false}], 
    respCorrecta:  "Ralph Lauren"  },

    {id: 5,
    pregunta: "¿Cómo se llamaba la compañera de piso de Joey?",
    opciones: [{resp:"Janine" , const: true}, {resp:"Janet" , const: false}, {resp:"Jane" , const: false}], 
    respCorrecta: "Janine" },

    {id: 6,
    pregunta: "¿A qué fruta es alérgico Ross?",
    opciones: [{resp:"Manzana" , const: false}, {resp:"Piña" , const: false}, {resp:"Kiwi" , const: true}],
    respCorrecta: "Kiwi" },   
]

//PREGUNTAS MEZCLADAS

let preguntasRespuestasMix = preguntasRespuestas.sort(() => Math.random() - .5);



//INICIO DEL JUEGO

const inicioJuego =() =>{ 
    nombreParticipante();   
}

btnJugar.addEventListener("click", inicioJuego );
//1. SE PIDE EL NOMBRE AL PARTICIPANTE

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

//2. EMPIEZA EL PRIMER JUEGO

const primerJuego = (nombre) => {
    divExplicacion1.style.display = "block";
    explicacion1.innerText = `Hola ${nombre}. Tendras que contestar 4 preguntas. Si contestas correctamente tres o mas pasas a la segunda parte del juego.`;
    
    divExplicacion1.addEventListener("submit", (e) => {
        e.preventDefault();
        divExplicacion1.style.display = "none";
        let correctas = 0;
        let incorrectas = 0;
        let index = 0;
        
        preguntas(correctas,incorrectas,index);
        
        
    } )
   
}

const preguntas = (corr, incorr, index) => {
    console.log(index)   
    if (index < 4) {
        let opciones = [];
        formContestacion1.style.display = "none";
        formJuego.style.display = `block`;
        pregunta.innerText = preguntasRespuestasMix[index].pregunta;
        opcion1.innerText = preguntasRespuestasMix[index].opciones[0].resp;
        opcion2.innerText = preguntasRespuestasMix[index].opciones[1].resp;
        opcion3.innerText = preguntasRespuestasMix[index].opciones[2].resp;
        resp1.value = preguntasRespuestasMix[index].opciones[0].resp;
        resp2.value = preguntasRespuestasMix[index].opciones[1].resp;
        resp3.value = preguntasRespuestasMix[index].opciones[2].resp;
        opciones = [resp1, resp2,  resp3];

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

          

            if ((opcionElegida) === preguntasRespuestasMix[index].respCorrecta) {
                
                formJuego.style.display = "none";
                formContestacion1.style.display = "block";
                contestacion1.innerText = "Correcto!!";
                corr++;
            }
            else {
                formJuego.style.display = "none";
                formContestacion1.style.display = "block";
                contestacion1.innerText = `Incorrecto. La respuesta es ${(preguntasRespuestasMix[index].respCorrecta).toUpperCase()}`
                incorr++
            }
            
            formContestacion1.addEventListener("submit", (e) => {  
                e.preventDefault(); 
                console.log(opcionElegida);
                index++
                console.log(index)
                preguntas(corr, incorr, index);
            })
        })

    } else {
        resumenJuego1(corr,incorr);
    }
    
}

//SEGUN EL RESULTADO EN EL JUEGO 1 PIERDO O PASO AL JUEGO 2
const resumenJuego1 = (corr, incorr)=> {
    console.log(corr)
    divResultado.style.display = "none";
    formJuego.style.display = "none";
    formContestacion1.style.display = "block";
    contestacion1.innerText = `Como resultado obtuviste ${corr} respuestas correctas y ${incorr} respuestas incorrectas`
    formContestacion1.addEventListener("submit", (e) => {
        e.preventDefault();
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