// Create falling characters
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
        const container = document.getElementById('fallingChars');
        
        function createFallingChar() {
            const char = document.createElement('div');
            char.className = 'char';
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            char.style.left = Math.random() * 100 + 'vw';
            char.style.animationDuration = (Math.random() * 5 + 5) + 's';
            char.style.animationDelay = Math.random() * 5 + 's';
            char.style.fontSize = (Math.random() * 20 + 10) + 'px';
            container.appendChild(char);
            
            // Remove character after animation completes
            setTimeout(() => {
                char.remove();
            }, parseFloat(char.style.animationDuration) * 1000);
        }
        
        // Create initial characters
        for (let i = 0; i < 50; i++) {
            createFallingChar();
        }
        
        // Keep creating new characters
        setInterval(createFallingChar, 300);
        
        // After animation completes, show loading and redirect
        setTimeout(() => {
            document.querySelector('.center-text').style.display = 'none';
            document.getElementById('loading').style.display = 'block';
            
            setTimeout(() => {
                window.location.href = 'main.html';
            }, 1000);
        }, 5000);
