document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("quiz-form");
    const questions = document.querySelectorAll(".question");
    const nextBtn = document.getElementById("next-btn");
    const finishBtn = document.getElementById("finish-btn");

    let index = 0;

    const correctas = {
        p1:"B", p2:"B", p3:"B", p4:"C",
        p5:"D", p6:"B", p7:"D", p8:"D",
        p9:"C", p10:"B", p11:"D", p12:"A"
    };

    mostrarPregunta(0);

    function mostrarPregunta(i) {
        questions.forEach(q => q.style.display = "none");
        questions[i].style.display = "block";

        nextBtn.style.display = i === questions.length - 1 ? "none" : "block";
        finishBtn.style.display = i === questions.length - 1 ? "block" : "none";
    }

    nextBtn.addEventListener("click", () => {
        if (!respuestaMarcada()) {
            alert("Debes seleccionar una respuesta para continuar.");
            return;
        }
        index++;
        mostrarPregunta(index);
    });

    function respuestaMarcada() {
        return document.querySelector(`input[name="p${index+1}"]:checked`);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let aciertos = 0;
        let resultados = "<h2>Resultados del Examen</h2><ul>";

        for (let i = 1; i <= 12; i++) {
            const marcada = document.querySelector(`input[name="p${i}"]:checked`);
            const valor = marcada ? marcada.value : null;
            const ok = correctas[`p${i}`];

            if (valor === ok) aciertos++;

            resultados += `
                <li>
                    <strong>Pregunta ${i}:</strong><br>
                    Tu respuesta: ${valor || "Sin responder"}<br>
                    Correcta: ${ok} 
                    ${valor === ok ? "✅" : "❌"}
                </li><br>
            `;
        }

        resultados += "</ul>";

        const nota = (aciertos / 12 * 10).toFixed(2);

        form.outerHTML = `
            <div class="container">
                <h1>Examen terminado</h1>
                <h2>Nota final: <strong>${nota}/10</strong></h2>
                <h3>Aciertos: ${aciertos} / 12</h3>
                ${resultados}
            </div>
        `;
    });

});