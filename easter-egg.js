(() => {
    const sequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'
    ];
    let recent = [];

    window.addEventListener('blur', () => { recent = []; });
    document.addEventListener('keydown', event => {
        if (event.repeat) return;
        if (event.isComposing || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ||
            event.target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) {
            recent = [];
            return;
        }

        recent.push(event.key);
        recent = recent.slice(-sequence.length);
        if (!sequence.every((key, index) => recent[index] === key)) return;

        recent = [];
        event.preventDefault();
        const url = new URL('doom.html', window.location.href);
        url.hash = document.documentElement.lang === 'en' ? 'unlocked-en' : 'unlocked-es';
        // Keep the opening synchronous with the final keypress for popup policies.
        window.open(url.href, '_blank', 'noopener,noreferrer');
    });
})();
