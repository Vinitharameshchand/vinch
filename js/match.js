const presets = {
    office: {
        image: 'https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?auto=format&fit=crop&q=80&w=1000',
        suggestions: [
            { name: 'The Architect Tote', price: '$450', img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=300', desc: 'Structured and commanding. Perfect for boardrooms.' },
            { name: 'The Minimalist Brief', price: '$380', img: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&q=80&w=300', desc: 'Sleek ivory leather with gold hardware.' }
        ]
    },
    casual: {
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000',
        suggestions: [
            { name: 'Sunday Slouch', price: '$290', img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=300', desc: 'Soft suede in sage green. Effortlessly chic.' },
            { name: 'The Market Bucket', price: '$220', img: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=300', desc: 'Woven canvas for breezy afternoons.' }
        ]
    },
    party: {
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=1000',
        suggestions: [
            { name: 'Midnight Spark', price: '$520', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=300', desc: 'Black satin with a vintage-inspired clasp.' },
            { name: 'The Petite Clutch', price: '$340', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=300', desc: 'Gold metallic finish to catch the light.' }
        ]
    },
    travel: {
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1000',
        suggestions: [
            { name: 'The Wanderer Duffle', price: '$680', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300', desc: 'Spacious and durable tan leather.' },
            { name: 'Citizen Crossbody', price: '$260', img: 'https://images.unsplash.com/photo-1591561911082-295191001932?auto=format&fit=crop&q=80&w=300', desc: 'Hands-free luxury for the global explorer.' }
        ]
    }
};

function renderSuggestions(style) {
    const list = document.getElementById('suggestions-list');
    const data = presets[style];

    document.getElementById('outfit-preview').src = data.image;

    list.innerHTML = data.suggestions.map(bag => `
        <div class="bag-suggestion reveal active">
            <img src="${bag.img}" alt="${bag.name}">
            <div class="bag-info">
                <h4>${bag.name}</h4>
                <p>${bag.desc}</p>
                <p style="margin-top: 5px; font-weight: 500;">${bag.price}</p>
            </div>
        </div>
    `).join('');
}

// Event Listeners
document.querySelectorAll('.preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelector('.preset-chip.active').classList.remove('active');
        chip.classList.add('active');
        renderSuggestions(chip.dataset.style);
    });
});

document.getElementById('outfit-upload').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            document.getElementById('outfit-preview').src = event.target.result;
            // For custom uploads, we show a mixed recommendation
            renderSuggestions('casual');
            alert("Analyzing your outfit's color harmony...");
        };
        reader.readAsDataURL(file);
    }
});

// Initialize
renderSuggestions('office');
