document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------ DATOS DEL TEST ------------------------------ */

    const preguntas = [
        {
            pregunta: "¿Cuál es el objetivo principal del proceso software?",
            opciones: [
                "Construir software rápidamente",
                "Regular y organizar las tareas del desarrollo para obtener software de calidad",
                "Eliminar la documentación",
                "Aumentar el coste del desarrollo"
            ]
        },
        {
            pregunta: "¿Qué problema NO formaba parte de la crisis del software?",
            opciones: [
                "Costes imprecisos",
                "Mala productividad",
                "Software de excelente calidad",
                "Incapacidad para satisfacer la demanda"
            ]
        },
        {
            pregunta: "¿Quién transforma requisitos en diseño técnico?",
            opciones: [
                "Desarrollador",
                "Analista de sistemas",
                "Tester",
                "Usuario final"
            ]
        },
        {
            pregunta: "¿Quién construye el código fuente?",
            opciones: [
                "Desarrollador",
                "Administrador de red",
                "Gerente de producto",
                "Auditor"
            ]
        },
        {
            pregunta: "¿Quién valida que el software cumple requisitos?",
            opciones: [
                "Tester",
                "Diseñador UI",
                "Arquitecto",
                "Cliente"
            ]
        }
    ];

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

        let html = "<h2>Resultados del test</h2><ul>";

        respuestas.forEach((r, i) => {
            html += `<li><strong>${i + 1}.</strong> ${r ?? "No respondida"}</li>`;
        });

        html += "</ul>";

        resultsDiv.innerHTML = html;
        resultsDiv.style.display = "block";
    }

});