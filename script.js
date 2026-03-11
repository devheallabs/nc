document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('notify-form');
    const message = document.getElementById('form-message');
    const emailInput = document.getElementById('email');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = emailInput.value;
            
            // Visual feedback
            message.textContent = 'Enlisting you in the waitlist...';
            message.style.color = 'var(--primary)';
            
            // Artificial delay for premium feel
            setTimeout(() => {
                message.textContent = `Welcome to the future of coding, ${email}! We'll be in touch soon.`;
                form.reset();
                
                // Reset message after a few seconds
                setTimeout(() => {
                    message.textContent = '';
                }, 5000);
            }, 1000);
        });
    }

    // Interactive blobs following mouse movement (subtle)
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const blob1 = document.querySelector('.blob-1');
        const blob2 = document.querySelector('.blob-2');
        
        if (blob1 && blob2) {
            blob1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
            blob2.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
        }
    });

    // Console greeting
    console.log('%cDevHeal Labs AI', 'color: #00FF9D; font-size: 24px; font-weight: bold;');
    console.log('%cJoin the health-tech revolution for developers.', 'color: #00A3FF; font-size: 14px;');
});
