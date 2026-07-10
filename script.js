document.addEventListener('DOMContentLoaded', () => {
    // Slider Logic
    const track = document.getElementById('slider-track');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = dots.length;
    let currentIndex = 0;
    let slideInterval;

    const updateSlider = (index) => {
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 10}%)`;
        
        // Update dots
        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    const nextSlide = () => {
        let nextIndex = (currentIndex + 1) % totalSlides;
        updateSlider(nextIndex);
    };

    // Auto sliding interval (every 3 seconds)
    const startAutoSlide = () => {
        slideInterval = setInterval(nextSlide, 3000);
    };

    const stopAutoSlide = () => {
        clearInterval(slideInterval);
    };

    // Dot click interaction
    dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            stopAutoSlide();
            const targetIndex = parseInt(e.target.getAttribute('data-slide'));
            updateSlider(targetIndex);
            startAutoSlide();
        });
    });

    // Start sliding
    startAutoSlide();

    // Pause slider when mouse is hovering the mockup
    const mockup = document.querySelector('.phone-mockup');
    mockup.addEventListener('mouseenter', stopAutoSlide);
    mockup.addEventListener('mouseleave', startAutoSlide);

    // Modern light effect on feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
});
