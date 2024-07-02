document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.dynamicButton');
    
    buttons.forEach(function(button) {
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = '#2ecc71';
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#3498db';
            button.style.transform = 'scale(1)';
        });
    });

    var imageContainer = document.getElementById('imageContainer');
    var image = imageContainer.querySelector('img');

    imageContainer.addEventListener('mouseover', function() {
        image.style.transform = 'scale(1.2) rotate(10deg)';
        image.style.filter = 'blur(3px)';
    });

    imageContainer.addEventListener('mouseout', function() {
        image.style.transform = 'scale(1) rotate(0deg)';
        image.style.filter = 'blur(0)';
    });

    var background = document.getElementById('background');

    document.addEventListener('mousemove', function(event) {
        var x = event.clientX / window.innerWidth;
        var y = event.clientY / window.innerHeight;
        background.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.1), rgba(44,62,80,1))`;
    });

    var navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            link.style.color = '#3498db';
        });

        link.addEventListener('mouseout', function() {
            link.style.color = 'white';
        });
    });

    document.addEventListener('click', function(event) {
        for (var i = 0; i < 10; i++) {
            createSparkle(event.clientX, event.clientY);
        }
    });

    function createSparkle(x, y) {
        var sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.setProperty('--translate-x', (Math.random() * 200 - 100) + 'px');
        sparkle.style.setProperty('--translate-y', (Math.random() * 200 - 100) + 'px');
        sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(sparkle);
        
        sparkle.addEventListener('animationend', function() {
            sparkle.remove();
        });
    }
});
