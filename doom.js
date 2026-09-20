(() => {
    if (!/^#unlocked-(es|en)$/.test(location.hash)) return;
    const english = location.hash === '#unlocked-en';
    const canvas = document.getElementById('canvas');
    const status = document.getElementById('connection');
    const start = document.getElementById('doom-start');
    const fullscreen = document.getElementById('doom-fullscreen');
    let started = false;
    let failed = false;
    document.documentElement.lang = english ? 'en' : 'es';
    document.getElementById('game').hidden = false;
    if (english) {
        document.getElementById('back').textContent = 'Back to portfolio';
        document.getElementById('controls').textContent = 'Arrows: move · Ctrl: fire · Space: open doors · Enter: confirm · Esc: menu. Click the game to focus it.';
        start.textContent = 'Start DOOM';
        fullscreen.textContent = 'Fullscreen';
        status.textContent = 'Classic DOOM — shareware episode. All game files are included locally.';
    }
    function showError() {
        failed = true;
        status.textContent = english
            ? 'Could not start DOOM. Reload this page and check that the assets/doom folder is complete.'
            : 'No se pudo iniciar DOOM. Recarga esta página y comprueba que la carpeta assets/doom esté completa.';
        status.setAttribute('role', 'alert');
        start.disabled = false;
        start.textContent = english ? 'Retry' : 'Reintentar';
    }
    function loadScript(path) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = new URL(path, location.href).href;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    function decode(base64) {
        const binary = atob(base64);
        return Uint8Array.from(binary, character => character.charCodeAt(0));
    }
    start.addEventListener('click', async () => {
        if (failed) { location.reload(); return; }
        if (started) return;
        started = true;
        start.disabled = true;
        status.textContent = english ? 'Starting DOOM…' : 'Iniciando DOOM…';
        try {
            await loadScript('assets/doom/engine/doom-assets.js');
            const data = decode(window.DoomAssets.data).buffer;
            const wasm = decode(window.DoomAssets.wasm);
            delete window.DoomAssets;
            // Preloaded buffers avoid fetch/XHR entirely, including on file://.
            window.Module = {
                canvas,
                arguments: ['-iwad', 'doom1.wad'],
                wasmBinary: wasm,
                getPreloadedPackage: () => data,
                locateFile: file => new URL('assets/doom/engine/' + file, location.href).href,
                print: () => {},
                printErr: message => console.warn('[DOOM]', message),
                onAbort: showError,
                setStatus: () => {},
                postRun: [() => {
                    if (failed) return;
                    start.hidden = true;
                    fullscreen.disabled = false;
                    canvas.focus();
                    status.textContent = english
                        ? 'DOOM ready. Press Enter to start; Esc opens the menu.'
                        : 'DOOM listo. Pulsa Enter para comenzar; Esc abre el menú.';
                }]
            };
            await loadScript('assets/doom/engine/doomgeneric.js');
        } catch (error) {
            console.error('[DOOM]', error);
            showError();
        }
    });
    canvas.addEventListener('click', () => canvas.focus());
    canvas.addEventListener('contextmenu', event => event.preventDefault());
    canvas.addEventListener('keydown', event => {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Control', 'Tab'].includes(event.key)) event.preventDefault();
    });
    canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); showError(); });
    fullscreen.addEventListener('click', async () => {
        try { await canvas.requestFullscreen(); canvas.focus(); }
        catch { status.textContent = english ? 'Fullscreen is not available in this browser.' : 'Este navegador no permite pantalla completa.'; }
    });
})();
