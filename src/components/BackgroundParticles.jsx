import { useEffect, useRef } from 'react';

function BackgroundParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: null, y: null, radius: 160 };

    // Colors palette: Sky, Indigo, Emerald, Purple
    const colors = [
      { fill: 'rgba(56, 189, 248, ', shadow: 'rgba(56, 189, 248, 0.6)' },   // Sky blue
      { fill: 'rgba(129, 140, 248, ', shadow: 'rgba(129, 140, 248, 0.6)' }, // Indigo
      { fill: 'rgba(52, 211, 153, ', shadow: 'rgba(52, 211, 153, 0.6)' },  // Emerald
      { fill: 'rgba(192, 132, 252, ', shadow: 'rgba(192, 132, 252, 0.6)' }, // Purple
    ];

    // Mouse Trail & Click Burst arrays
    const trailParticles = [];
    const burstParticles = [];

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Spawn mouse trail particle on movement
      if (Math.random() < 0.6) {
        const colorObj = colors[Math.floor(Math.random() * colors.length)];
        trailParticles.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8 - 0.4,
          radius: Math.random() * 2.2 + 1,
          alpha: 0.8,
          color: colorObj,
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleClick = (e) => {
      // Click burst of 18 glowing sparks
      const sparkCount = 18;
      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.3;
        const speed = Math.random() * 3 + 2;
        const colorObj = colors[Math.floor(Math.random() * colors.length)];

        burstParticles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 2.5 + 1.5,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015,
          color: colorObj,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    // Floating constellation background particles
    const particleCount = Math.min(Math.floor((width * height) / 14000), 70);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const colorObj = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        baseRadius: Math.random() * 2 + 1,
        pulseOffset: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.5 + 0.3,
        color: colorObj,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw floating constellation nodes
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Movement
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < -10) p1.x = width + 10;
        if (p1.x > width + 10) p1.x = -10;
        if (p1.y < -10) p1.y = height + 10;
        if (p1.y > height + 10) p1.y = -10;

        // Radius pulsing
        const currentRadius = p1.baseRadius + Math.sin(time + p1.pulseOffset) * 0.6;

        // Mouse influence: Push away gently
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p1.x;
          const dy = mouse.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p1.x -= (dx / dist) * force * 2;
            p1.y -= (dy / dist) * force * 2;

            // Connect line to mouse cursor
            const mouseLineAlpha = (1 - dist / mouse.radius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${mouseLineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `${p1.color.fill}${p1.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p1.color.shadow;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // 2. Render & update mouse trail particles
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const tp = trailParticles[i];
        tp.x += tp.vx;
        tp.y += tp.vy;
        tp.alpha -= 0.02;

        if (tp.alpha <= 0) {
          trailParticles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(tp.x, tp.y, tp.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${tp.color.fill}${tp.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = tp.color.shadow;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 3. Render & update click burst particles
      for (let i = burstParticles.length - 1; i >= 0; i--) {
        const bp = burstParticles[i];
        bp.x += bp.vx;
        bp.y += bp.vy;
        bp.vx *= 0.95;
        bp.vy *= 0.95;
        bp.alpha -= bp.decay;

        if (bp.alpha <= 0) {
          burstParticles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(bp.x, bp.y, bp.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${bp.color.fill}${bp.alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = bp.color.shadow;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-85"
    />
  );
}

export default BackgroundParticles;
