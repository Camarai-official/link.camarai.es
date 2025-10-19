// Animated Background - Migración del componente React
class AnimatedBackground {
  constructor() {
    this.container = document.getElementById('animated-background');
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animationId = null;
    this.init();
  }

  init() {
    this.createBackground();
    this.createCanvas();
    this.createParticles();
    this.animate();
  }

  createBackground() {
    this.container.innerHTML = `
      <div class="background-overlay">
        <!-- Viñeta "agujero" -->
        <div class="vignette"></div>
        
        <!-- Overlay radial -->
        <div class="radial-overlay"></div>
        
        <!-- Aura animada -->
        <div class="animated-aura"></div>
        
        <!-- Canvas para partículas -->
        <canvas class="particles-canvas"></canvas>
      </div>
    `;

    // Aplicar estilos inline para el fondo
    this.container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0;
      background-color: #0A0D10;
    `;

    const overlay = this.container.querySelector('.background-overlay');
    overlay.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `;

    // Viñeta
    const vignette = this.container.querySelector('.vignette');
    vignette.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      width: 150%;
      height: 140%;
      background: radial-gradient(ellipse at 50% 55%, transparent 10%, #050C0F 100%);
      transform: translate3d(-50%, -50%, 0);
    `;

    // Overlay radial
    const radialOverlay = this.container.querySelector('.radial-overlay');
    radialOverlay.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 5;
      width: 100%;
      height: 100%;
      background: radial-gradient(ellipse at 50% 75%, #a900ff 20%, transparent 75%);
      mix-blend-mode: overlay;
      transform: translate3d(-50%, -50%, 0);
    `;

    // Aura animada
    const aura = this.container.querySelector('.animated-aura');
    aura.style.cssText = `
      position: absolute;
      top: -71.5%;
      left: 50%;
      z-index: 3;
      width: 30%;
      height: 140%;
      background-image: linear-gradient(20deg, #00f8f1 0%, #ffbd1e20 16.5%, #ff53da 33%, #fe848f20 49.5%, #00f8f1 66%, #00f8f160 85.5%, #ffbd1e 100%);
      background-position: 0% 100%;
      background-size: 100% 200%;
      border-radius: 0 0 100% 100%;
      filter: blur(50px);
      mix-blend-mode: plus-lighter;
      opacity: 0.75;
      transform: translate3d(-50%, 0, 0);
      animation: background-shift 5s linear infinite;
    `;

    // Canvas
    this.canvas = this.container.querySelector('.particles-canvas');
    this.canvas.style.cssText = `
      display: block;
      width: 100%;
      height: 100%;
    `;
  }

  createCanvas() {
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  resizeCanvas() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * window.devicePixelRatio;
    this.canvas.height = rect.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  createParticles() {
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: this.getRandomColor()
      });
    }
  }

  getRandomColor() {
    const colors = [
      'rgba(0, 248, 241, 0.3)', // #00f8f1
      'rgba(255, 189, 30, 0.2)', // #ffbd1e
      'rgba(255, 83, 218, 0.3)', // #ff53da
      'rgba(254, 132, 143, 0.2)', // #fe848f
      'rgba(155, 110, 253, 0.3)'  // #9B6EFD
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(particle => {
      // Actualizar posición
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Rebotar en los bordes
      if (particle.x < 0 || particle.x > window.innerWidth) {
        particle.vx *= -1;
      }
      if (particle.y < 0 || particle.y > window.innerHeight) {
        particle.vy *= -1;
      }
      
      // Mantener dentro de los límites
      particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
      particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));
      
      // Dibujar partícula
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = particle.color;
      this.ctx.globalAlpha = particle.opacity;
      this.ctx.fill();
    });
    
    this.ctx.globalAlpha = 1;
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new AnimatedBackground();
});
