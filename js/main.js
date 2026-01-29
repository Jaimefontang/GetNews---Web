// Archivo: main.js
// Descripción: Funcionalidades JS del sitio web Getnews
// Contenido: Validación del formulario, Botón Tema oscuro, Botón scroll al inicio, Contador suscripciones


// Al cargar el DOM: activar funcionalidades
document.addEventListener('DOMContentLoaded', () => {

    // === 1. ENVIO DEL FORMULARIO DE NEWSLETTER ===
    // Escucha el evento submit del formulario y valida los campos antes de enviar.
    const formulario = document.querySelector('.newsletter-form');

    // Comprobamos que el formulario existe para evitar errores
    if (formulario) {
        formulario.addEventListener('submit', function (event) {
            event.preventDefault(); //Detiene el envio automatico del formulario
            console.log('Formulario enviado. Iniciando validación...');

            const resultado = validar(formulario); //Ejecuta la validacion

            if (resultado) {
                // Feedback visual cambio color botón a verde y mensaje ¡Suscrito!
                const btnSubmit = formulario.querySelector('.submitBtn');
                const textoOriginal = btnSubmit.innerText;

                // Cambiamos estilo del botón 
                btnSubmit.innerText = "¡Suscrito!";
                btnSubmit.style.backgroundColor = "#4CAF50";
                btnSubmit.style.color = "white";
                btnSubmit.style.border = "none";

                formulario.reset();// Limpia los campos si se envia OK
                console.log('Formulario reseteado tras validación correcta.');

                // Restauramos el botón a los 3 segundos
                setTimeout(() => {
                    btnSubmit.innerText = textoOriginal;
                    btnSubmit.style.backgroundColor = ""; // Vuelve al CSS original
                    btnSubmit.style.color = "";
                    btnSubmit.style.border = "";
                }, 3000);
            }
        });
    }

    // === 2. BOTÓN DE MODO CLARO / OSCURO ===
    // Cambia la clase del body y actualiza logos, íconos y textos al hacer clic en el botón.
    const botonModoOscuro = document.getElementById('btnModoOscuro');
    const body = document.body;

    // Elementos que cambian
    const logo = document.getElementById('logoPrincipal');
    const logoFooter = document.getElementById('logoFooter');
    const iconoTema = document.getElementById('iconoTema');
    const textoTema = document.getElementById('textoTema');
    // El contenedor del icono (si lo necesitas para estilos específicos)
    const contIcono = document.getElementById('contIcono');

    if (botonModoOscuro) {
        botonModoOscuro.addEventListener('click', () => {
            body.classList.toggle('modo-oscuro');

            if (body.classList.contains('modo-oscuro')) {
                console.log('Tema oscuro activado');
                // IMPORTANTE: Asegúrate de que las mayúsculas coinciden con tus archivos reales
                logo.src = "static/imagenes/LogoW.png"; // logo blanco
                logoFooter.src = "static/imagenes/LogoW.png"; // logo blanco
                iconoTema.src = "static/imagenes/iconSun.png";
                textoTema.textContent = "Tema claro";

                // Estilos inline para el botón en modo oscuro
                botonModoOscuro.style.backgroundColor = "#d3d3d3";
                botonModoOscuro.style.color = "#464646";
                if (contIcono) contIcono.style.backgroundColor = "#464646";

            } else {
                console.log('Tema claro activado');
                logo.src = "static/imagenes/LogoB.png"; // logo original
                logoFooter.src = "static/imagenes/LogoB.png";
                iconoTema.src = "static/imagenes/iconMoon.png";
                textoTema.textContent = "Tema oscuro";

                // Restauramos estilos del botón
                botonModoOscuro.style.backgroundColor = "#464646";
                botonModoOscuro.style.color = "#d3d3d3";
                if (contIcono) contIcono.style.backgroundColor = "#d3d3d3";
            }
        });
    }

    // === 3. BOTÓN SCROLL A INICIO ===
    // Al hacer clic en el botón, se hace scroll suave hacia la parte superior.
    const scrollBtn = document.querySelector('.scroll-top-btn');

    if (scrollBtn) {
        // Añadimos lógica para que solo aparezca al bajar (opcional, mejora UX)
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.style.display = 'flex';
            } else {
                scrollBtn.style.display = 'none';
            }
        });

        scrollBtn.addEventListener('click', function () {
            console.log('Botón scroll pulsado.');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // === 4. CONTADOR DE SUSCRIPTORES ===
    // Muestra un número de suscriptores que se incrementa cada 10 segundos.
    const constSusc = document.getElementById('contSusc');

    if (constSusc) {
        let contador = 1200;
        setInterval(() => {
            contador++;
            constSusc.innerHTML = `Ya somos <span id="numSusc">${contador}</span>, ¡Únete!`;
            // Quitamos el log para no ensuciar la consola cada 10s
        }, 10000);
    }

}); // Cierre DOMContentLoaded


// === 5. FUNCIÓN validar(formulario) ===
// Comprueba que los campos estén completos y que el email sea válido.

//Validación campos completos
function validar(formulario) {
    // Usamos .trim() para evitar que espacios en blanco cuenten como texto
    if (
        formulario.nombre.value.trim().length === 0 ||
        formulario.apellidos.value.trim().length === 0 ||
        formulario.email.value.trim().length === 0
    ) {
        console.log('Hay campos vacios o solo espacios');
        // Hemos quitado el alert() intrusivo.
        // Si quieres, aquí podrías poner un borde rojo a los inputs.
        return false;
    }


    //Validación email 
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(formulario.email.value)) {
        console.log('Formato de email no valido');
        alert('Por favor, introduce un email válido (ej: hola@dominio.com)'); // Dejamos solo este alert por si acaso
        return false;
    }

    console.log("Los campos estan rellenos con: ");
    console.log("Nombre: " + formulario.nombre.value);
    console.log("Apellidos: " + formulario.apellidos.value);
    console.log("Email: " + formulario.email.value);
    return true;
}