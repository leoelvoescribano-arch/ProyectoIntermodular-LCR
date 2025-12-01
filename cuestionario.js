// --- RESPUESTAS CORRECTAS (primer cuestionario) ---
const correctQuiz1 = [
    1, // q0
    2, // q1
    1, // q2
    0, // q3
    0, // q4
    1, // q5
    0, // q6
    1  // q7
];

// --- RESPUESTAS CORRECTAS (segundo cuestionario: ciclo de vida + RUP/Ágil) ---
const correctNewQuiz = {
    q_new0: "B",
    q_new1: "B",
    q_new2: "B",
    q_new3: "C",
    q_new4: "D",
    q_new5: "B",
    q_new6: "D",
    q_new7: "D",

    // RUP y Ágil
    q_rup0: "c",
    q_rup1: "b",
    q_rup2: "d",
    q_rup3: "a"
};


// --- FUNCIÓN PARA CALIFICAR CUESTIONARIO 1 ---
document.getElementById("quiz-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let aciertos = 0;
    let total = correctQuiz1.length;
    let resultado = "";

    for (let i = 0; i < total; i++) {
        let seleccionada = document.querySelector(`input[name="q${i}"]:checked`);
        if (!seleccionada) {
            resultado += `<p class="incorrect">Pregunta ${i + 1}: No respondida</p>`;
            continue;
        }

        if (parseInt(seleccionada.value) === correctQuiz1[i]) {
            aciertos++;
            resultado += `<p class="correct">Pregunta ${i + 1}: Correcta ✔</p>`;
        } else {
            resultado += `<p class="incorrect">Pregunta ${i + 1}: Incorrecta ✘</p>`;
        }
    }

    // NOTA SOBRE 10
    let nota = ((aciertos / total) * 10).toFixed(2);

    alert(`Tu nota del primer test es: ${nota} / 10`);
    mostrarResultados("Primer cuestionario", nota, resultado);
});


// --- FUNCIÓN PARA CALIFICAR CUESTIONARIO 2 ---
document.getElementById("quiz-new-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let keys = Object.keys(correctNewQuiz);
    let aciertos = 0;
    let resultado = "";

    keys.forEach((key, index) => {
        let seleccionada = document.querySelector(`input[name="${key}"]:checked`);

        if (!seleccionada) {
            resultado += `<p class="incorrect">Pregunta ${index + 1}: No respondida</p>`;
        } else if (seleccionada.value === correctNewQuiz[key]) {
            aciertos++;
            resultado += `<p class="correct">Pregunta ${index + 1}: Correcta ✔</p>`;
        } else {
            resultado += `<p class="incorrect">Pregunta ${index + 1}: Incorrecta ✘ — Correcta: ${correctNewQuiz[key]}</p>`;
        }
    });

    // NOTA SOBRE 10
    let nota = ((aciertos / keys.length) * 10).toFixed(2);

    alert(`Tu nota del segundo test es: ${nota} / 10`);
    mostrarResultados("Segundo cuestionario", nota, resultado);
});


// --- FUNCIÓN PARA MOSTRAR RESULTADOS BONITOS ---
function mostrarResultados(titulo, nota, texto) {
    let ventana = window.open("", "_blank");
    ventana.document.write(`
        <html>
        <head>
            <title>Resultados</title>
            <style>
                body {
                    background: #220014;
                    color: #ffd3f5;
                    font-family: 'Trebuchet MS';
                    padding: 20px;
                }
                h1 { color: #ff39ba; text-align:center; }
                .correct { color: #7CFF7C; }
                .incorrect { color: #FF6B6B; }
            </style>
        </head>
        <body>
            <h1>${titulo}</h1>
            <h2>Nota: ${nota} / 10</h2>
            ${texto}
        </body>
        </html>
    `);
}
