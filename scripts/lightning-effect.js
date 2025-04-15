document.addEventListener('DOMContentLoaded', () => {
    const createLightning = () => {
        const lightningCount = Math.floor(Math.random() * 5) + 1; // Create 1 to 3 lightnings at a time

        for (let i = 0; i < lightningCount; i++) {
            const lightning = document.createElement('div');
            lightning.className = 'lightning';
            lightning.style.left = `${Math.random() * 100}%`;
            lightning.style.top = `${Math.random() * 100}%`;
            document.body.appendChild(lightning);

            setTimeout(() => {
                lightning.remove();
            }, 500); // Lightning disappears after 500ms
        }
    };

    setInterval(createLightning, 3000); // Create lightnings every 3 seconds
});