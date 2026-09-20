# Minetto.exe — Portafolio Windows 95

Portafolio personal de **Matías Minetto**, inspirado en el escritorio de Windows 95. Presenta mi perfil profesional, formación, habilidades, proyectos y contacto en una interfaz retro e interactiva.

## Características

- Ventanas arrastrables, menú Inicio y barra de tareas.
- Contenido en español e inglés.
- Currículum y proyectos con enlaces a sus repositorios.
- Buscaminas con estética clásica, cronómetro y tres dificultades.

## Uso

Clona el repositorio y abre `index.html` en un navegador moderno. No requiere compilación. DOOM también funciona al abrir los archivos directamente, sin servidor local. También se puede publicar directamente en GitHub Pages o cualquier alojamiento estático.

Desarrollado con **HTML, CSS y JavaScript**, sin frameworks.

## Easter egg: DOOM

Con el portafolio enfocado y fuera de los campos de texto, presiona las flechas en este orden:

**↑ ↑ ↓ ↓ ← → ← →**

La secuencia abre una nueva pestaña del portafolio con DOOM clásico en su edición shareware (primer episodio), ejecutado localmente con WebAssembly mediante DoomGeneric, una adaptación del motor original de id Software. No aparece ningún acceso en el escritorio ni en los menús, y el reproductor solo se carga al activar el secreto.

Pulsa **Iniciar DOOM** y haz clic dentro del juego para darle el foco. Usa las **flechas** para moverte, **Ctrl** para disparar, **Espacio** para abrir puertas, **Enter** para confirmar y **Esc** para abrir el menú.

Permite la apertura de pestañas para el sitio. El motor, los gráficos y el sonido están incluidos en el proyecto: no se usan CDNs ni servicios externos para jugar. La copia local funciona sin Internet en navegadores de escritorio modernos con WebAssembly y WebGL. El secreto es una interacción oculta, no una restricción de acceso. DOOM pertenece a id Software. El código oficial y la adaptación para navegador están en `vendor/doom/`, con sus licencias. La procedencia del motor y los datos shareware está en [assets/doom/README.md](assets/doom/README.md).

## Proyecto destacado

[Sistema de gestión de depósito](https://github.com/mminetto/Sistema-de-gestion-de-deposito-2024): administración de productos, stock, usuarios, remitos y movimientos de inventario.
