# GetNews - Portal de Noticias Web

Repositorio del proyecto GetNews, una página web responsive para la visualización de noticias y artículos de tecnología.

**Enlace al proyecto:** https://jaimefontang.github.io/GetNews---Web/

## Descripción

Este proyecto consiste en una landing page desarrollada con HTML, CSS y JavaScript nativo (Vanilla JS). El objetivo es implementar una interfaz adaptativa y funcional sin el uso de frameworks externos.

## Tecnologías utilizadas

* **HTML5:** Estructura semántica del contenido.
* **CSS3:**
    * Diseño responsive mediante Media Queries.
    * CSS Grid y Flexbox para la maquetación.
    * Variables CSS para gestión de colores.
* **JavaScript:** Lógica del cliente para validaciones y manipulación del DOM.

## Funcionalidades

El proyecto incluye las siguientes características:

1.  **Diseño Responsive:** La interfaz se adapta a resoluciones de escritorio (grid de 5 columnas) y dispositivos móviles (columna única y menús ajustados).
2.  **Modo Oscuro/Claro:** Botón para alternar el tema visual. El script modifica las clases del `body` y actualiza los iconos y logotipos dinámicamente.
3.  **Formulario de Newsletter:** Validación en el lado del cliente utilizando JavaScript (comprobación de campos vacíos y formato de email con Regex) con feedback visual en el botón de envío.
4.  **Botón Scroll-to-Top:** Aparece automáticamente al hacer scroll hacia abajo para volver al inicio de la página.
5.  **Contador dinámico:** Simulación de incremento de suscriptores mediante funciones de tiempo en JS.

## Instalación

Para ejecutar el proyecto localmente:

1.  Clonar el repositorio.
2.  Abrir el archivo `index.html` en el navegador.

## Estructura del proyecto

* `/estilos`: Contiene la hoja de estilos principal (`style.css`).
* `/js`: Contiene el archivo de lógica (`main.js`).
* `/static`: Carpeta con imágenes y vídeos.
* `index.html`: Archivo principal.

  ## Galería de imágenes

### Versión Escritorio
**Modo Claro:**
![Vista Escritorio](static/imagenes/Desktop_preview.png)

**Modo Oscuro:**
![Vista Modo Oscuro](static/imagenes/DesktopDarkMode_preview.png)

### Versión Móvil
<img src="static/imagenes/Mobile_preview.png" width="300" alt="Vista Móvil">
