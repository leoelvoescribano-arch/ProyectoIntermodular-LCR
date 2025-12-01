const correctAnswers = {
    // Primer cuestionario
    q0: "1", q1: "2", q2: "1", q3: "0",
    q4: "0", q5: "1", q6: "0", q7: "1",

    // Segundo cuestionario
    q_new0: "B", q_new1: "B", q_new2: "B", q_new3: "C",
    q_new4: "D", q_new5: "B", q_new6: "D", q_new7: "D",

    // Tercer cuestionario
    q_rup0: "c", q_rup1: "b", q_rup2: "d", q_rup3: "a"
};

document.getElementById("quiz-all").addEventListener("submit", function(e) {

    e.preventDefault();

    let keys = Object.keys(correctAnswers);
    let correct = 0;
    let output = "";

    keys.forEach((key, i) => {
        let selected = document.querySelector(`input[name="${key}"]:checked`);

        if (!selected) {
            output += `<p class='incorrect'>Pregunta ${i+1}: No respondida</p>`;
        } else if (selected.value === correctAnswers[key]) {
            correct++;
            output += `<p class='correct'>Pregunta ${i+1}: ✔ Correcta</p>`;
        } else {
            output += `<p class='incorrect'>Pregunta ${i+1}: ✘ Incorrecta — Correcta: ${correctAnswers[key]}</p>`;
        }
    });

    let note = ((correct / keys.length) * 10).toFixed(2);

    let win = window.open("", "_blank");
    win.document.write(`
        <html>
        <head>
            <title>Resultados</title>
            <style>
                body { background:#260013; font-family:Arial; color:white; padding:20px; }
                h1 { color:#ff4acb; }
                .correct { color:#93ff93; }
                .incorrect { color:#ff6b6b; }
            </style>
        </head>
        <body>
            <h1>Resultados del Cuestionario Completo</h1>
            <h2>Nota final: ${note} / 10</h2>
            ${output}
        </body>
        </html>
    `);
});