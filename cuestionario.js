document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------ TODAS LAS PREGUNTAS ------------------------------ */

    const preguntas = [

        /* ---- 5 ORIGINALES ---- */
        {
            pregunta: "¿Cuál es el objetivo principal del proceso software?",
            opciones: [
                "Construir software rápidamente",
                "Regular y organizar las tareas del desarrollo para obtener software de calidad",
                "Eliminar la documentación",
                "Aumentar el coste del desarrollo"
            ],
            correcta: "Regular y organizar las tareas del desarrollo para obtener software de calidad"
        },
        {
            pregunta: "¿Qué problema NO formaba parte de la crisis del software?",
            opciones: [
                "Costes imprecisos",
                "Mala productividad",
                "Software de excelente calidad",
                "Incapacidad para satisfacer la demanda"
            ],
            correcta: "Software de excelente calidad"
        },
        {
            pregunta: "¿Quién transforma requisitos en diseño técnico?",
            opciones: [
                "Desarrollador",
                "Analista de sistemas",
                "Tester",
                "Usuario final"
            ],
            correcta: "Analista de sistemas"
        },
        {
            pregunta: "¿Quién construye el código fuente?",
            opciones: [
                "Desarrollador",
                "Administrador de red",
                "Gerente de producto",
                "Auditor"
            ],
            correcta: "Desarrollador"
        },
        {
            pregunta: "¿Quién valida que el software cumple requisitos?",
            opciones: [
                "Tester",
                "Diseñador UI",
                "Arquitecto",
                "Cliente"
            ],
            correcta: "Tester"
        },

        /* ---- 12 PREGUNTAS SOBRE MODELOS DE CICLO DE VIDA ---- */

        {
            pregunta: "¿Cuál es la principal desventaja del modelo en cascada?",
            opciones: [
                "Es muy costoso implementarlo",
                "No permite volver atrás ni cambios de requisitos",
                "Requiere muchos programadores",
                "No tiene fases definidas"
            ],
            correcta: "No permite volver atrás ni cambios de requisitos"
        },
        {
            pregunta: "En el modelo espiral, ¿qué se hace en cada vuelta de la espiral?",
            opciones: [
                "Análisis → Diseño → Codificación → Pruebas",
                "Identificar riesgos → Prototipo → Evaluación → Planificación",
                "Planificación → Ejecución → Control → Cierre",
                "Requisitos → Prototipo → Implementación → Mantenimiento"
            ],
            correcta: "Identificar riesgos → Prototipo → Evaluación → Planificación"
        },
        {
            pregunta: "¿Qué modelo entrega versiones funcionales del producto desde etapas tempranas?",
            opciones: [
                "Modelo en cascada",
                "Modelo incremental y modelo espiral",
                "Modelo en V",
                "Modelo de prototipado"
            ],
            correcta: "Modelo incremental y modelo espiral"
        },
        {
            pregunta: "El modelo más adecuado cuando el cliente no tiene claros los requisitos es…",
            opciones: [
                "Modelo en cascada",
                "Modelo incremental",
                "Modelo evolutivo (prototipado)",
                "Modelo espiral"
            ],
            correcta: "Modelo evolutivo (prototipado)"
        },
        {
            pregunta: "¿En qué modelo de ciclo de vida el riesgo es el eje principal de decisión?",
            opciones: [
                "Modelo en cascada",
                "Modelo incremental",
                "Modelo en V",
                "Modelo espiral"
            ],
            correcta: "Modelo espiral"
        },
        {
            pregunta: "¿Cuál es la característica principal del modelo incremental?",
            opciones: [
                "Se completa todo el proyecto antes de entregar",
                "El producto se construye y entrega por partes funcionales",
                "Se enfoca principalmente en riesgos",
                "Requiere requisitos completamente definidos"
            ],
            correcta: "El producto se construye y entrega por partes funcionales"
        },
        {
            pregunta: "En el modelo en cascada, ¿cuándo se detectan la mayoría de los errores?",
            opciones: [
                "Durante el análisis de requisitos",
                "En la fase de diseño",
                "Durante la codificación",
                "En la fase de verificación/pruebas (muy tarde)"
            ],
            correcta: "En la fase de verificación/pruebas (muy tarde)"
        },
        {
            pregunta: "¿Qué modelo combina elementos de prototipado y gestión explícita de riesgos?",
            opciones: [
                "Modelo en cascada",
                "Modelo incremental",
                "Modelo en V",
                "Espiral"
            ],
            correcta: "Espiral"
        },

        /* ---- 4 PREGUNTAS RUP Y ÁGIL ---- */

        {
            pregunta: "¿En qué fase de RUP se construye la mayor parte del sistema?",
            opciones: ["Inicio", "Elaboración", "Construcción", "Transición"],
            correcta: "Construcción"
        },
        {
            pregunta: "En Scrum, ¿quién es el responsable de priorizar el Product Backlog?",
            opciones: ["Scrum Master", "Product Owner", "Development Team", "Stakeholders"],
            correcta: "Product Owner"
        },
        {
            pregunta: "¿Cuál de estas opciones NO es un principio del Manifiesto Ágil?",
            opciones: [
                "Individuos e interacciones sobre procesos y herramientas",
                "Software funcionando sobre documentación extensiva",
                "Colaboración con el cliente sobre negociación contractual",
                "Seguir un plan es más importante que responder al cambio"
            ],
            correcta: "Seguir un plan es más importante que responder al cambio"
        },
        {
            pregunta: "RUP se caracteriza por ser:",
            opciones: [
                "Iterativo e incremental",
                "Predictivo y secuencial",
                "En cascada",
                "Rígido y no adaptable"
            ],
            correcta: "Iterativo e incremental"
        },

        /* ---- 2 PREGUNTAS FASES ---- */
        {
            pregunta: "¿Cuál es el objetivo principal del proceso software?",
            opciones: [
                "Construir software rápidamente",
                "Regular y organizar las tareas del desarrollo para obtener software de calidad",
                "Eliminar la documentación",
                "Aumentar el coste del desarrollo"
            ],
            correcta: "Regular y organizar las tareas del desarrollo para obtener software de calidad"
        },
        {
            pregunta: "¿Qué problema NO formaba parte de la crisis del software?",
            opciones: [
                "Costes imprecisos",
                "Mala productividad",
                "Software de excelente calidad",
                "Incapacidad para satisfacer la demanda"
            ],
            correcta: "Software de excelente calidad"
        },

        /* ---- 8 PREGUNTAS PERFILES ---- */

        {
            pregunta: "¿Quién se encarga de transformar requisitos en un diseño técnico del sistema?",
            opciones: ["Desarrollador", "Analista de sistemas", "Tester", "Usuario final"],
            correcta: "Analista de sistemas"
        },
        {
            pregunta: "¿Quién construye el código fuente del software?",
            opciones: ["Desarrollador", "Administrador de red", "Gerente de producto", "Auditor"],
            correcta: "Desarrollador"
        },
        {
            pregunta: "¿Quién valida que el software cumple los requisitos y funciona correctamente?",
            opciones: ["Tester", "Diseñador UI", "Arquitecto", "Cliente"],
            correcta: "Tester"
        },
        {
            pregunta: "¿Quién define la visión del producto y las prioridades de desarrollo?",
            opciones: ["Arquitecto", "Gerente de producto", "Desarrollador", "Tester"],
            correcta: "Gerente de producto"
        },
        {
            pregunta: "¿Quién diseña la experiencia visual e interactiva del usuario?",
            opciones: ["Diseñador UX/UI", "Analista", "Tester", "Arquitecto de software"],
            correcta: "Diseñador UX/UI"
        },
        {
            pregunta: "¿Quién se encarga de las decisiones técnicas de alto nivel?",
            opciones: ["Tester", "Arquitecto de software", "Community manager", "Contable"],
            correcta: "Arquitecto de software"
        },
        {
            pregunta: "¿Quién gestiona tiempos, recursos y riesgos del proyecto?",
            opciones: ["Administrador de sistemas", "Project manager", "UX designer", "Tester"],
            correcta: "Project manager"
        },
        {
            pregunta: "¿Quién se encarga del mantenimiento y soporte en producción?",
            opciones: ["Equipo de soporte / DevOps", "Equipo de ventas", "Marketing", "Clientes"],
            correcta: "Equipo de soporte / DevOps"
        }

    ];

    /* ------------------------------ VARIABLES ------------------------------ */

    let index = 0;
    let respuestas = new Array(preguntas.length).fill(null);

    const questionContainer = document.getElementById("question-container");
    const progressBar = document.getElementById("progress-bar");
    const progressContainer = document.getElementById("progress-container");
    const prevBtn = document.getElementById("btn-prev");
    const nextBtn = document.getElementById("btn-next");
    const finishBtn = document.getElementById("btn-finish");
    const resultsDiv = document.getElementById("results");

    /* ------------------------------ REGISTRO ------------------------------ */

    document.getElementById("registration-form").addEventListener("submit", e => {
        e.preventDefault();
        document.getElementById("registration").style.display = "none";
        progressContainer.style.display = "block";
        document.getElementById("buttons").style.display = "block";
        mostrarPregunta();
    });

    /* ------------------------------ MOSTRAR PREGUNTA ------------------------------ */

    function mostrarPregunta() {
        const q = preguntas[index];

        questionContainer.innerHTML = `
            <div class="question">
                <p><strong>${index + 1}. ${q.pregunta}</strong></p>
                ${q.opciones.map((op, i) =>
                    `<label><input type="radio" name="preg${index}" value="${op}" ${respuestas[index] === op ? "checked" : ""}> ${op}</label><br>`
                ).join("")}
            </div>
        `;

        actualizarBarra();
        actualizarBotones();
    }

    /* ------------------------------ BARRA DE PROGRESO ------------------------------ */

    function actualizarBarra() {
        const progreso = ((index + 1) / preguntas.length) * 100;
        progressBar.style.width = progreso + "%";
    }

    /* ------------------------------ BOTONES ------------------------------ */

    function actualizarBotones() {
        prevBtn.style.display = index > 0 ? "inline-block" : "none";
        nextBtn.style.display = index === preguntas.length - 1 ? "none" : "inline-block";
        finishBtn.style.display = index === preguntas.length - 1 ? "inline-block" : "none";
    }

    nextBtn.addEventListener("click", () => {
        guardarRespuesta();
        index++;
        mostrarPregunta();
    });

    prevBtn.addEventListener("click", () => {
        guardarRespuesta();
        index--;
        mostrarPregunta();
    });

    finishBtn.addEventListener("click", () => {
        guardarRespuesta();
        mostrarResultados();
    });

    function guardarRespuesta() {
        const seleccionada = document.querySelector(`input[name="preg${index}"]:checked`);
        if (seleccionada) respuestas[index] = seleccionada.value;
    }

    /* ------------------------------ RESULTADOS ------------------------------ */

    function mostrarResultados() {
        questionContainer.style.display = "none";
        document.getElementById("buttons").style.display = "none";
        progressContainer.style.display = "none";

        let aciertos = 0;
        let html = "<h2>Resultados del test</h2><ul>";

        preguntas.forEach((preg, i) => {
            const correcta = preg.correcta;
            const marcada = respuestas[i];

            if (marcada === correcta) aciertos++;

            html += `
                <li>
                    <strong>${i + 1}.</strong>  
                    Tu respuesta: ${marcada ?? "No respondida"}<br>
                    Correcta: <strong>${correcta}</strong>  
                    ${marcada === correcta ? "✅" : "❌"}
                </li><br>
            `;
        });

        const nota = (aciertos / preguntas.length) * 10;

        html += `</ul><h3>Puntuación final: <strong>${nota.toFixed(2)}/10</strong></h3>`;

        resultsDiv.innerHTML = html;
        resultsDiv.style.display = "block";
    }

});