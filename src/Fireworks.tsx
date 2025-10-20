import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

interface Firework {
  x: number;
  y: number;
  targetY: number;
  vx: number;
  vy: number;
  exploded: boolean;
  particles: Particle[];
  color: string;
}

const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio with loop
    audioRef.current = new Audio('/fireworks-07-419025.mp3');
    audioRef.current.volume = 0.4; // Set volume to 40%
    audioRef.current.loop = true; // Enable looping
    
    // Start playing the firework sound
    audioRef.current.play().catch(err => console.log('Firework sound play failed:', err));
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fireworks: Firework[] = [];
    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#ff8c42', '#ee6c4d', '#9b5de5'];

    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const targetY = Math.random() * canvas.height * 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      fireworks.push({
        x,
        y: canvas.height,
        targetY,
        vx: (Math.random() - 0.5) * 2,
        vy: -8 - Math.random() * 3,
        exploded: false,
        particles: [],
        color
      });
    };

    const createParticles = (firework: Firework) => {
      const particleCount = 50 + Math.random() * 50;
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 2 + Math.random() * 3;
        firework.particles.push({
          x: firework.x,
          y: firework.y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          maxLife: 1,
          color: firework.color,
          size: 2 + Math.random() * 2
        });
      }
    };

    const updateFireworks = () => {
      fireworks.forEach((firework, index) => {
        if (!firework.exploded) {
          firework.x += firework.vx;
          firework.y += firework.vy;
          firework.vy += 0.1; // Gravity

          if (firework.y <= firework.targetY) {
            firework.exploded = true;
            createParticles(firework);
          }
        } else {
          firework.particles.forEach((particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.05; // Gravity
            particle.life -= 0.01;
          });

          firework.particles = firework.particles.filter(p => p.life > 0);

          if (firework.particles.length === 0) {
            fireworks.splice(index, 1);
          }
        }
      });
    };

    const drawFireworks = () => {
      // Don't clear with black - use transparent fade instead
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((firework) => {
        if (!firework.exploded) {
          ctx.beginPath();
          ctx.arc(firework.x, firework.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = firework.color;
          ctx.fill();
        } else {
          firework.particles.forEach((particle) => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.life;
            ctx.fill();
            ctx.globalAlpha = 1;
          });
        }
      });
    };

    let animationId: number;
    let lastFireworkTime = 0;

    const animate = (currentTime: number) => {
      if (currentTime - lastFireworkTime > 800) {
        createFirework();
        lastFireworkTime = currentTime;
      }

      updateFireworks();
      drawFireworks();
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default Fireworks;
