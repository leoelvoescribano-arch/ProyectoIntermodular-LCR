document.addEventListener("DOMContentLoaded", () => {

    // REGISTRO
    document.getElementById("registration-form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Registro completado. Ahora puedes realizar el cuestionario.");
    });

    // FUNCIÓN PARA CALIFICAR
    function revisar(formId, respuestas) {
        let form = document.getElementById(formId);
        let score = 0;

        respuestas.forEach(r => {
            let seleccion = form.querySelector(`input[name="${r.name}"]:checked`);
            if (seleccion) {
                if (seleccion.value === r.value) {
                    score++;
                    seleccion.parentElement.classList.add("correct");
                } else {
                    seleccion.parentElement.classList.add("incorrect");
                }
            }
        });

        return score;
    }

    // CUESTIONARIO 1
    const r1 = [
        {name:"q0",value:"1"},
        {name:"q1",value:"2"},
        {name:"q2",value:"1"},
        {name:"q3",value:"0"},
        {name:"q4",value:"0"},
        {name:"q5",value:"1"},
        {name:"q6",value:"0"},
        {name:"q7",value:"1"},
    ];

    document.getElementById("quiz-form").addEventListener("submit", e => {
        e.preventDefault();
        let correctas = revisar("quiz-form", r1);
        let nota = (correctas / r1.length * 10).toFixed(2);

        alert(`Resultados del Test 1:\nCorrectas: ${correctas}/${r1.length}\nNota: ${nota}/10`);
    });

    // CUESTIONARIO 2
    const r2 = [
        {name:"q_new0",value:"B"},
        {name:"q_new1",value:"B"},
        {name:"q_new2",value:"B"},
        {name:"q_new3",value:"C"},
        {name:"q_new4",value:"D"},
        {name:"q_new5",value:"B"},
        {name:"q_new6",value:"D"},
        {name:"q_new7",value:"D"},

        {name:"q_rup0",value:"c"},
        {name:"q_rup1",value:"b"},
        {name:"q_rup2",value:"d"},
        {name:"q_rup3",value:"a"}
    ];

    document.getElementById("quiz-new-form").addEventListener("submit", e => {
        e.preventDefault();
        let correctas = revisar("quiz-new-form", r2);
        let nota = (correctas / r2.length * 10).toFixed(2);

        alert(`Resultados del Test 2:\nCorrectas: ${correctas}/${r2.length}\nNota: ${nota}/10`);
    });

});