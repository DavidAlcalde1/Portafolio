// Función para agregar el efecto de fuego y sonido
function applyFireEffect(hobbieClass, soundFile) {
    const hobbyItem = document.querySelector(hobbieClass);
    const fireSound = new Audio(soundFile);

    function addFireEffect(event) {
        event.target.classList.add('fire-effect');
        fireSound.currentTime = 0;
        fireSound.play();
    }

    function removeFireEffect(event) {
        event.target.classList.remove('fire-effect');
        fireSound.pause();
    }

    // Asigna eventos a cada <li>
    hobbyItem.addEventListener('mouseenter', addFireEffect);
    hobbyItem.addEventListener('mouseleave', removeFireEffect);
}

// Aplica efectos a los distintos hobbies
applyFireEffect('.hobbie1', '../sounds/Teclado _ Efecto de sonido.mp3');
applyFireEffect('.hobbie2', '../sounds/Turkish March.mp3');
applyFireEffect('.hobbie3', '../sounds/music.mp3');  // Reemplaza por otro sonido
applyFireEffect('.hobbie4', '../sounds/Risas y Aplausos.mp3');
applyFireEffect('.hobbie5', '../sounds/Fritura.MP3');
applyFireEffect('.hobbie6', '../sounds/canto.MP3');

// Aplica efectos a los distintos skills 
applyFireEffect('.skills__list li:nth-child(1)');  // HTML5
applyFireEffect('.skills__list li:nth-child(2)');  // JavaScript
applyFireEffect('.skills__list li:nth-child(3)');  // CSS
applyFireEffect('.skills__list li:nth-child(4)');  // React

// Aplica efectos a los distintos estudios académicos
applyFireEffect('.academic__list li:nth-child(1)'); //UPLA
applyFireEffect('.academic__list li:nth-child(2)'); //CCF
applyFireEffect('.academic__list li:nth-child(3)'); //ALURA

// RESTRCCIONES DEL FORMULARIO

document.querySelector('.contact__form').addEventListener('submit', function(event) {
    // Captura los campos del formulario
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Validación de correos electrónicos
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Bandera para indicar si el formulario es válido
    let isValid = true;
    let errorMessage = '';

    // Validación del campo "Nombre"
    if (nameInput.value.trim().length < 2) {
        isValid = false;
        errorMessage += 'El nombre debe tener al menos 2 caracteres.\n';
    }

    // Validación del campo "Correo Electrónico"
    if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        errorMessage += 'Introduce un correo electrónico válido.\n';
    }

    // Validación del campo "Asunto"
    if (subjectInput.value.trim() === '' || subjectInput.value.trim().length < 3) {
        isValid = false;
        errorMessage += 'El asunto no puede estar vacío y debe tener al menos 3 caracteres.\n';
    }

    // Validación del campo "Mensaje"
    if (messageInput.value.trim().length < 10) {
        isValid = false;
        errorMessage += 'El mensaje debe tener al menos 10 caracteres.\n';
    }

    // Si el formulario no es válido, evitar el envío y mostrar errores
    if (!isValid) {
        event.preventDefault(); // Detener el envío del formulario
        alert(errorMessage); // Mostrar los mensajes de error
    }
});
