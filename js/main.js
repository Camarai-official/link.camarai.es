// Main JavaScript - Carga todos los componentes
class App {
  constructor() {
    this.components = {};
    this.init();
  }

  init() {
    this.loadHeader();
    this.loadLinkSection();
    this.loadSocialLinks();
    this.loadFloatingChat();
    this.addScrollAnimations();
  }

  loadHeader() {
    const headerContainer = document.getElementById('header-component');
    console.log('Loading header component...');
    headerContainer.innerHTML = `
      <div class="header-component">
        <div class="logo-container">
          <img 
            src="https://i.ibb.co/hJ4MdwYr/0517-20-unscreen.gif" 
            alt="CamarAI Logo" 
            class="header-logo"
          />
        </div>
        <div class="title-container">
          <h1 class="header-title">camarai.es</h1>
        </div>
        <div class="description-button-container">
          <p class="header-description text-small">
            Presentamos CamarAI, el asistente virtual que atiende a tus clientes por WhatsApp, en cualquier idioma, 24/7. Reduce esperas y aumenta la rotación de mesas.
          </p>
          <div class="header-cta">
            <a href="https://www.camarai.es/" target="_blank" rel="noopener noreferrer" class="gradient-button gradient-button--lg">
              Únete a la BETA
            </a>
          </div>
        </div>
      </div>
    `;
  }

  loadLinkSection() {
    const linkSectionContainer = document.getElementById('link-section-component');
    linkSectionContainer.innerHTML = `
      <div class="link-section">
        <div class="link-grid">
          <a href="https://api.whatsapp.com/send/?phone=34641647388&text=Hola%2C+me+interesa+saber+m%C3%A1s+sobre+CamarAI+%EF%BF%BD&type=phone_number&app_absent=0" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="link-card animate-slide-up stagger-1">
            <div class="link-card-content">
              <div class="link-card-header">
                <div class="link-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div class="link-card-text">
                  <h3>Camarero AI</h3>
                  <p>Prueba la demo del camarero virtual</p>
                </div>
              </div>
            </div>
          </a>

          <a href="#" class="link-card animate-slide-up stagger-2">
            <div class="link-card-content">
              <div class="link-card-header">
                <div class="link-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div class="link-card-text">
                  <h3>Gerente AI</h3>
                  <p>Explora las capacidades del gerente virtual.</p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://prototype-test.camarai.es/" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="link-card animate-slide-up stagger-3">
            <div class="link-card-content">
              <div class="link-card-header">
                <div class="link-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <path d="M9 9h6v6H9z"/>
                  </svg>
                </div>
                <div class="link-card-text">
                  <h3>Dashboard Gerente</h3>
                  <p>Visualiza la demo del panel de control.</p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://www.camarai.es/" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="link-card animate-slide-up stagger-4">
            <div class="link-card-content">
              <div class="link-card-header">
                <div class="link-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                </div>
                <div class="link-card-text">
                  <h3>Visita nuestra web</h3>
                  <p>Descubre todo el potencial de CamarAI.</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    `;
  }

  loadSocialLinks() {
    const socialContainer = document.getElementById('social-links-component');
    socialContainer.innerHTML = `
      <div class="social-links">
        <a href="https://www.instagram.com/camarai.es/" 
           target="_blank" 
           rel="noopener noreferrer" 
           aria-label="Instagram" 
           class="social-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        
        <a href="https://x.com/Camaraioficial" 
           target="_blank" 
           rel="noopener noreferrer" 
           aria-label="X" 
           class="social-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
          </svg>
        </a>
        
        <a href="#" 
           target="_blank" 
           rel="noopener noreferrer" 
           aria-label="LinkedIn" 
           class="social-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      </div>
    `;
  }

  loadFloatingChat() {
    const chatContainer = document.getElementById('floating-chat-component');
    chatContainer.innerHTML = `
      <div class="floating-chat">
        <button class="chat-toggle" id="chat-toggle" aria-label="Open chat">
          <img src="https://i.ibb.co/7NCBrPQG/Captura-de-pantalla-2025-07-07-230002-1.png" alt="Chat Icon">
        </button>
        
        <div class="chat-window" id="chat-window">
          <div class="chat-header">
            <div class="chat-header-info">
              <img src="https://i.ibb.co/7NCBrPQG/Captura-de-pantalla-2025-07-07-230002-1.png" alt="Agente CamarAI" class="chat-avatar">
              <div class="chat-header-text">
                <h3>Soporte CamarAI</h3>
                <p>Generalmente responde en segundos</p>
              </div>
            </div>
            <button class="chat-close" id="chat-close" aria-label="Close chat">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          
          <div class="chat-messages" id="chat-messages">
            <div class="chat-message assistant">
              <img src="https://i.ibb.co/7NCBrPQG/Captura-de-pantalla-2025-07-07-230002-1.png" alt="Agente CamarAI" class="chat-message-avatar">
              <div class="chat-message-content">
                ¡Hola! Soy Alex. ¿Cómo puedo ayudarte a integrar CamarAI en tu restaurante hoy?
              </div>
            </div>
          </div>
          
          <div class="chat-input">
            <form class="chat-form" id="chat-form">
              <input type="text" placeholder="Escribe un mensaje..." class="chat-input-field" id="chat-input" autocomplete="off">
              <button type="submit" class="chat-send" id="chat-send" aria-label="Send message">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  addScrollAnimations() {
    // Observador de intersección para animaciones
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, {
      threshold: 0.1
    });

    // Observar elementos que necesitan animación
    document.querySelectorAll('.link-card').forEach(card => {
      observer.observe(card);
    });
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
