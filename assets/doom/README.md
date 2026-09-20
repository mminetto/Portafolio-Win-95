# DOOM local

Esta integración reemplaza js-dos y sus descargas externas por DoomGeneric compilado a WebAssembly. Solo se carga después de activar el easter egg y pulsar **Iniciar DOOM**.

## Código fuente

- `../../vendor/doom/id-software/`: copia íntegra de [id-Software/DOOM](https://github.com/id-Software/DOOM), commit `a77dfb96cb91780ca334d0d4cfd86957558007e0`. Es el código C original para Linux; por sí solo no se ejecuta en un navegador.
- `../../vendor/doom/doomgeneric/`: adaptación portátil [ozkl/doomgeneric](https://github.com/ozkl/doomgeneric), commit `613f870b6fa83ede448a247de5a2571092fa729d`, último commit anterior a la publicación del binario utilizado. Incluye el backend Emscripten y `Makefile.emscripten`.
- Se conservan las licencias GPL y los avisos originales en ambas carpetas. No se modificó el código C importado.

## Motor distribuido

Se usa el compilado publicado por el autor en [ozkl/ozkl.github.io](https://github.com/ozkl/ozkl.github.io/tree/9afecfaa82b211d5154511c3827b2f7029797e2d/doomgeneric), commit `9afecfaa82b211d5154511c3827b2f7029797e2d`. No fue compilado localmente. `engine/doomgeneric.js` se conserva sin cambios.

`engine/doom-assets.js` contiene el WebAssembly y el archivo de datos originales codificados en Base64. `doom.js` los entrega mediante `wasmBinary` y `getPreloadedPackage`, evitando peticiones fetch/XHR y permitiendo abrir el portafolio mediante `file://`. Los SHA-256 de los tres archivos originales están en `engine/SHA256.json`.

Los datos incluyen `doom1.wad` (episodio shareware), instrumentos GUS y configuración de música. La documentación shareware se conserva en `README.TXT` y `HELPME.TXT`; los créditos de los instrumentos están en `engine/dgguspat.txt`. Los datos de juego conservan sus condiciones originales y no se relicencian bajo la GPL del motor.

## Mantenimiento

Publica también las carpetas `assets/doom/` y `vendor/doom/`. No hace falta instalar un emulador, compilar C ni contactar un CDN al jugar. El paquete local ocupa aproximadamente 16 MB y no se descarga al visitar el escritorio.

Para actualizar el motor, conserva la fuente correspondiente y sus licencias; recompila el backend Emscripten o usa un compilado del autor. Si cambia el archivo `.data`, actualiza también su cargador `.js`. Para volver a empaquetar un par de archivos `.wasm`/`.data`, codifica sus bytes completos en Base64 y asigna `window.DoomAssets = { wasm: "...", data: "..." }` en `engine/doom-assets.js`; actualiza los hashes.
