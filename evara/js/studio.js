const bagSVGs = {
    tote: `<svg viewBox="0 0 100 100" class="bag-svg"><path class="bag-svg-path" d="M20 30 L80 30 L85 90 L15 90 Z" /><path d="M35 30 Q35 10 50 10 Q65 10 65 30" fill="none" stroke="#4A4A4A" stroke-width="2" /></svg>`,
    sling: `<svg viewBox="0 0 100 100" class="bag-svg"><rect class="bag-svg-path" x="25" y="40" width="50" height="40" rx="5" /><path d="M25 40 Q50 0 75 40" fill="none" stroke="#4A4A4A" stroke-width="2" /></svg>`,
    shoulder: `<svg viewBox="0 0 100 100" class="bag-svg"><path class="bag-svg-path" d="M15 40 Q50 30 85 40 L80 80 Q50 90 20 80 Z" /><path d="M15 40 Q50 10 85 40" fill="none" stroke="#4A4A4A" stroke-width="3" /></svg>`,
    mini: `<svg viewBox="0 0 100 100" class="bag-svg"><path class="bag-svg-path" d="M30 50 L70 50 L65 80 L35 80 Z" /><circle cx="50" cy="40" r="10" fill="none" stroke="#4A4A4A" stroke-width="2" /></svg>`
};

let currentConfig = {
    shape: 'tote',
    color: '#FAF9F6',
    material: 'leather',
    initials: ''
};

function updatePreview() {
    const previewContainer = document.getElementById('bag-preview');
    previewContainer.innerHTML = bagSVGs[currentConfig.shape];

    const bagPath = previewContainer.querySelector('.bag-svg-path');
    if (bagPath) {
        bagPath.style.fill = currentConfig.color;

        // Apply "material" effects
        if (currentConfig.material === 'suede') {
            bagPath.style.filter = 'saturate(0.8) contrast(0.9)';
        } else if (currentConfig.material === 'leather') {
            bagPath.style.filter = 'drop-shadow(0 2px 2px rgba(0,0,0,0.05))';
        } else {
            bagPath.style.filter = 'none';
        }
    }

    const initialsOverlay = document.getElementById('initials-overlay');
    initialsOverlay.textContent = currentConfig.initials;

    // Adjust initials color based on bag color brightness
    const color = currentConfig.color.replace('#', '');
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    initialsOverlay.style.color = brightness > 128 ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)';
}

// Event Listeners
document.querySelectorAll('#shape-options .option-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelector('#shape-options .active').classList.remove('active');
        card.classList.add('active');
        currentConfig.shape = card.dataset.value;
        updatePreview();
    });
});

document.querySelectorAll('#color-options .option-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelector('#color-options .active').classList.remove('active');
        card.classList.add('active');
        currentConfig.color = card.dataset.value;
        updatePreview();
    });
});

document.querySelectorAll('#material-options .option-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelector('#material-options .active').classList.remove('active');
        card.classList.add('active');
        currentConfig.material = card.dataset.value;
        updatePreview();
    });
});

document.getElementById('initials-input').addEventListener('input', (e) => {
    currentConfig.initials = e.target.value.toUpperCase();
    updatePreview();
});

document.getElementById('save-bag').addEventListener('click', () => {
    alert('Your custom Évara bag has been saved to your digital atelier.');
});

// Initialize
updatePreview();
