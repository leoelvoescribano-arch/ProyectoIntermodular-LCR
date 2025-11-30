// app.js

// =======================
// SPA: Navegación entre secciones
// =======================
const navButtons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('section');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.section;
        sections.forEach(sec => sec.classList.remove('active'));
        const targetSection = document.getElementById(target);
        if(targetSection) targetSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// =======================
// Registro de usuario
// =======================
const registrationForm = document.getElementById('registration-form');
if(registrationForm){
    registrationForm.addEventListener('submit', function(e){
        e.preventDefault();
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const birthdate = this.birthdate.value;
        if(!name || !email || !birthdate){
            alert('Por favor, completa todos los campos.');
            return;
        }
        alert(`Registrado con éxito:\nNombre: ${name}\nEmail: ${email}\nFecha de nacimiento: ${birthdate}`);
        this.reset();
    });
}

// =======================
// Cuestionarios
// =======================
const quizForms = document.querySelectorAll('form[id^="quiz"]');

quizForms.forEach(form => {
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const questions = this.querySelectorAll('.question');
        let score = 0;
        questions.forEach(q => {
            const correctAnswer = q.dataset.correct; // si lo defines
            const selected = q.querySelector('input[type="radio"]:checked');
            if(selected && selected.value === correctAnswer){
                score++;
            }
        });
        alert(`Cuestionario enviado. Respuestas correctas: ${score} de ${questions.length}`);
    });
});