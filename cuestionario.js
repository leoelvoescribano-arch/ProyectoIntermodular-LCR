document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------ PREGUNTAS DEL TEST ------------------------------ */

    const preguntas = [
        /* --- TEST MODELOS DE CICLO DE VIDA (8 preguntas) --- */

        {
            pregunta: "¿Cuál es la principal desventaja del modelo en cascada?",
            opciones: ["Es muy costoso", "No permite volver atrás ni cambios de requisitos", "Requiere muchos programadores", "No tiene fases definidas"],
            correcta: "No permite volver atrás ni cambios de requisitos"
        },
        {
            pregunta: "En el modelo espiral, ¿qué se hace en cada vuelta?",
            opciones: [
                "Análisis → Diseño → Codificación → Pruebas",
                "Identificar riesgos → Prototipo → Evaluación → Planificación",
                "Planificación → Ejecución → Control → Cierre",
                "Requisitos → Prototipo → Implementación → Mantenimiento"
            ],
            correcta: "Identificar riesgos → Prototipo → Evaluación → Planificación"
        },
        {
            pregunta: "¿Qué modelo entrega versiones funcionales desde etapas tempranas?",
            opciones: [
                "Modelo en cascada",
                "Modelo incremental y modelo espiral",
                "Modelo en V",
                "Modelo de prototipado"
            ],
            correcta: "Modelo incremental y modelo espiral"
        },
        {
            pregunta: "Modelo adecuado cuando el cliente no tiene claros los requisitos:",
            opciones: [
                "Modelo en cascada",
                "Modelo incremental",
                "Modelo evolutivo (prototipado)",
                "Modelo espiral"
            ],
            correcta: "Modelo evolutivo (prototipado)"
        },
        {
            pregunta: "¿En qué modelo el riesgo es el eje principal?",
            opciones: [
                "Modelo en cascada",
                "Modelo incremental",
                "Modelo en V",
                "Modelo espiral"
            ],
            correcta: "Modelo espiral"
        },
        {
            pregunta: "Característica principal del modelo incremental:",
            opciones: [
                "Se completa todo antes de entregar",
                "Se construye y entrega por partes funcionales",
                "Se enfoca en riesgos",
                "Requiere requisitos totalmente definidos"
            ],
            correcta: "Se construye y entrega por partes funcionales"
        },
        {
            pregunta: "En el modelo en cascada, ¿cuándo se detectan la mayoría de los errores?",
            opciones: [
                "Durante análisis",
                "En la fase de diseño",
                "Durante la codificación",
                "En pruebas (muy tarde)"
            ],
            correcta: "En pruebas (muy tarde)"
        },
        {
            pregunta: "¿Qué modelo combina prototipado y gestión de riesgos?",
            opciones: [
                "Modelo en cascada",
                "Modelo incremental",
                "Modelo en V",
                "Espiral"
            ],
            correcta: "Espiral"
        },

        /* --- TEST RUP Y ÁGIL (4 preguntas) --- */

        {
            pregunta: "¿En qué fase de RUP se construye la mayor parte del sistema?",
            opciones: ["Inicio", "Elaboración", "Construcción", "Transición"],
            correcta: "Construcción"
        },
        {
            pregunta: "En Scrum, ¿quién prioriza el Product Backlog?",
            opciones: ["Scrum Master", "Product Owner", "Development Team", "Stakeholders"],
            correcta: "Product Owner"
        },
        {
            pregunta: "¿Qué opción NO es un principio del Manifiesto Ágil?",
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

    /* ------------------------------ PINTAR PREGUNTA ------------------------------ */

    function mostrarPregunta() {
        const q = preguntas[index];

        questionContainer.innerHTML = `
            <div class="question">
                <p><strong>${index + 1}. ${q.pregunta}</strong></p>
                ${q.opciones.map(op =>
                    `<label>
                       <input type="radio" name="preg${index}" value="${op}"
                       ${respuestas[index] === op ? "checked" : ""}> ${op}
                     </label><br>`
                ).join("")}
            </div>
        `;

        actualizarBarra();
        actualizarBotones();
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

    /* ------------------------------ BARRA DE PROGRESO ------------------------------ */

    function actualizarBarra() {
        progressBar.style.width = ((index + 1) / preguntas.length) * 100 + "%";
    }

    /* ------------------------------ RESULTADOS ------------------------------ */

    function mostrarResultados() {

        questionContainer.style.display = "none";
        document.getElementById("buttons").style.display = "none";
        progressContainer.style.display = "none";

        let aciertos = 0;
        let html = "<h2>Resultados del test</h2>";

        html += "<ul>";

        preguntas.forEach((p, i) => {
            const correcta = p.correcta;
            const respuesta = respuestas[i];

            if (respuesta === correcta) aciertos++;

            html += `
                <li>
                    <strong>${i + 1}. ${p.pregunta}</strong><br>
                    Tu respuesta: <span style="color:${respuesta === correcta ? '#7CFF7C' : '#FF6B6B'}">${respuesta ?? "No respondida"}</span><br>
                    Correcta: <strong style="color:#7CFF7C">${correcta}</strong>
                </li>
                <br>
            `;
        });

        html += "</ul>";

        const nota = ((aciertos / preguntas.length) * 10).toFixed(2);

        html += `<h2 style="text-align:center;">Nota final: <span style="color:#00eaff;">${nota} / 10</span></h2>`;

        resultsDiv.innerHTML = html;
        resultsDiv.style.display = "block";
    }

});