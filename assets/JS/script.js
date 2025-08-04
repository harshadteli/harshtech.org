 // Fade-in effect
    window.addEventListener('load', () => {
      const container = document.querySelector('.container');
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    });

    // Multi-line typing effect
    const lines = [
      "Intelligent Solutions for a Smarter World powered by AI",
      "We build smart, scalable digital solutions."
    ];

    const typewriter = document.getElementById("typewriter");
    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
      if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];
        if (charIndex < currentLine.length) {
          typewriter.textContent += currentLine.charAt(charIndex);
          charIndex++;
          setTimeout(typeLine, 40);
        } else {
          typewriter.textContent += '\n';
          charIndex = 0;
          lineIndex++;
          setTimeout(typeLine, 600); // Pause between lines
        }
      }
    }

    setTimeout(typeLine, 1000); // Start after initial delay