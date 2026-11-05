const questions = [
  {
    question: '¿Qué deberíamos definir primero al comenzar una aplicación?',
    options: ['Los colores', 'El problema que queremos resolver', 'El framework CSS', 'Las animaciones'],
    correct: 1,
    explanation: 'Antes de decidir cómo será una aplicación, debemos entender qué problema queremos resolver.',
  },
  {
    question: '¿Quién es el usuario?',
    options: ['La tecnología utilizada', 'La persona que utiliza la aplicación para conseguir algo', 'El servidor', 'El código JavaScript'],
    correct: 1,
    explanation: 'El usuario es la persona que utiliza la aplicación para lograr un objetivo.',
  },
  {
    question: '¿Cuál es un objetivo de usuario?',
    options: ['Consultar los cursos disponibles', 'Utilizar Bootstrap', 'Crear un div', 'Añadir display: flex'],
    correct: 0,
    explanation: 'Un objetivo describe lo que una persona quiere conseguir, no una tecnología o una tarea técnica.',
  },
  {
    question: '¿Cuál de estos sería un actor correctamente definido?',
    options: ['Marta', 'Cliente', 'Botón de reserva', 'Página de inicio'],
    correct: 1,
    explanation: 'Un actor representa un rol dentro del sistema, no una persona concreta ni un elemento de la interfaz.',
  },
  {
    question: '¿Cuál sería un caso de uso?',
    options: ['Reservar una cita', 'Bootstrap', 'Página responsive', 'CSS'],
    correct: 0,
    explanation: 'Un caso de uso es una acción que realiza una persona para conseguir un objetivo.',
  },
  {
    question: '¿Qué expresa principalmente una historia de usuario?',
    options: ['Una necesidad del usuario', 'El diseño final', 'La base de datos', 'El código necesario'],
    correct: 0,
    explanation: 'Una historia de usuario expresa qué necesita una persona y para qué lo necesita.',
  },
  {
    question: '¿Qué es un flujo alternativo?',
    options: ['El camino principal de la aplicación', 'Lo que ocurre ante una situación diferente o un error', 'Una librería JavaScript', 'Un tipo de usuario'],
    correct: 1,
    explanation: 'Un flujo alternativo describe qué hace el sistema cuando el camino esperado no puede completarse.',
  },
  {
    question: 'Antes de diseñar una pantalla, ¿qué deberíamos saber?',
    options: ['Qué colores vamos a utilizar', 'Qué necesita hacer el usuario', 'Qué framework vamos a instalar', 'Qué animaciones tendrá'],
    correct: 1,
    explanation: 'Antes de decidir cómo será una pantalla debemos saber qué acción debe permitir realizar al usuario.',
  },
  {
    question: '¿Cómo sabemos que un caso de uso ha terminado correctamente?',
    options: ['Porque existe un botón', 'Porque el usuario ha conseguido el resultado que necesitaba', 'Porque utilizamos JavaScript', 'Porque la página tiene estilos'],
    correct: 1,
    explanation: 'El resultado correcto es que la persona haya conseguido el objetivo por el que utilizó la aplicación.',
  },
  {
    question: 'Una clínica veterinaria quiere que sus clientes puedan solicitar una cita desde su web. ¿Cuál debería ser el primer paso del desarrollador?',
    options: ['Crear inmediatamente el botón “Pedir cita”', 'Elegir Bootstrap', 'Definir quién solicita la cita y cómo debe hacerlo', 'Programar directamente el formulario'],
    correct: 2,
    explanation: 'Antes de diseñar o programar debemos definir el usuario, su objetivo y el flujo que debe seguir para conseguirlo.',
  },
];

const quiz = document.querySelector('#useCaseQuiz');
const result = document.querySelector('#quizResult');
const checkButton = document.querySelector('#checkQuiz');
const resetButton = document.querySelector('#resetQuiz');

function letter(index) { return String.fromCharCode(65 + index); }

function renderQuiz() {
  quiz.innerHTML = questions.map((item, questionIndex) => `
    <fieldset class="quiz-question" data-question="${questionIndex}">
      <legend>${questionIndex + 1}. ${item.question}</legend>
      ${item.options.map((option, optionIndex) => `
        <label><input type="radio" name="question-${questionIndex}" value="${optionIndex}">
          <span>${letter(optionIndex)}. ${option}</span></label>
      `).join('')}
      <div class="question-feedback" aria-live="polite" hidden></div>
    </fieldset>
  `).join('');
}

function feedbackFor(item, selectedIndex) {
  if (selectedIndex === null) return { state: 'unanswered', content: '<strong>◌ Sin responder</strong><p>Selecciona una respuesta antes de continuar con esta pregunta.</p>' };
  if (selectedIndex === item.correct) return { state: 'correct', content: `<strong>✓ Correcta</strong><p>${item.explanation}</p>` };
  return { state: 'incorrect', content: `<strong>✕ Revisa esta idea</strong><p>Tu respuesta: ${item.options[selectedIndex]}</p><p>Respuesta correcta: <strong>${item.options[item.correct]}</strong></p><p>${item.explanation}</p>` };
}

function globalMessage(score) {
  if (score >= 8) return 'Muy bien. Ya distingues los conceptos fundamentales y puedes continuar con la siguiente parte.';
  if (score >= 5) return 'Tienes clara la idea general, pero conviene revisar algunos conceptos antes de continuar.';
  return 'Conviene volver a las lecciones sobre usuario, objetivo y caso de uso antes de repetir el test.';
}

function checkQuiz() {
  let score = 0;
  questions.forEach((item, questionIndex) => {
    const fieldset = quiz.querySelector(`[data-question="${questionIndex}"]`);
    const selected = fieldset.querySelector('input:checked');
    const selectedIndex = selected ? Number(selected.value) : null;
    const feedback = feedbackFor(item, selectedIndex);
    const feedbackElement = fieldset.querySelector('.question-feedback');
    fieldset.classList.remove('is-correct', 'is-incorrect', 'is-unanswered');
    fieldset.classList.add(`is-${feedback.state}`);
    feedbackElement.hidden = false;
    feedbackElement.innerHTML = feedback.content;
    if (selectedIndex === item.correct) score += 1;
  });
  result.hidden = false;
  result.innerHTML = `<h3>${score} de ${questions.length} respuestas correctas</h3><p>${globalMessage(score)}</p>`;
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetQuiz() {
  quiz.reset();
  quiz.querySelectorAll('.quiz-question').forEach((fieldset) => {
    fieldset.classList.remove('is-correct', 'is-incorrect', 'is-unanswered');
    const feedback = fieldset.querySelector('.question-feedback');
    feedback.hidden = true;
    feedback.innerHTML = '';
  });
  result.hidden = true;
  result.innerHTML = '';
}

checkButton.addEventListener('click', checkQuiz);
resetButton.addEventListener('click', resetQuiz);
renderQuiz();
