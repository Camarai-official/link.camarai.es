// Floating Chat - Migración del componente React
class FloatingChat {
  constructor() {
    this.isOpen = false;
    this.messages = [
      {
        role: "assistant",
        content: "¡Hola! Soy Alex. ¿Cómo puedo ayudarte a integrar CamarAI en tu restaurante hoy?"
      }
    ];
    this.isPending = false;
    this.init();
  }

  init() {
    this.bindEvents();
    this.renderMessages();
  }

  bindEvents() {
    const toggleBtn = document.getElementById('chat-toggle');
    const closeBtn = document.getElementById('chat-close');
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-input');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggleChat());
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeChat());
    }

    if (form) {
      form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.handleSubmit(e);
        }
      });
    }
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    const chatWindow = document.getElementById('chat-window');
    const toggleBtn = document.getElementById('chat-toggle');

    if (this.isOpen) {
      chatWindow.classList.add('open');
      toggleBtn.style.transform = 'scale(0)';
      toggleBtn.style.opacity = '0';
    } else {
      chatWindow.classList.remove('open');
      toggleBtn.style.transform = 'scale(1)';
      toggleBtn.style.opacity = '1';
    }
  }

  closeChat() {
    this.isOpen = false;
    const chatWindow = document.getElementById('chat-window');
    const toggleBtn = document.getElementById('chat-toggle');

    chatWindow.classList.remove('open');
    toggleBtn.style.transform = 'scale(1)';
    toggleBtn.style.opacity = '1';
  }

  async handleSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (!message || this.isPending) return;

    // Agregar mensaje del usuario
    this.addMessage('user', message);
    input.value = '';

    // Simular respuesta del asistente
    this.isPending = true;
    this.showTypingIndicator();

    try {
      // Simular delay de respuesta
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      
      const response = await this.getAIResponse(message);
      this.removeTypingIndicator();
      this.addMessage('assistant', response);
    } catch (error) {
      console.error('Error calling AI:', error);
      this.removeTypingIndicator();
      this.addMessage('assistant', 'Lo siento, no pude procesar tu mensaje. Inténtalo de nuevo.');
    }

    this.isPending = false;
  }

  async getAIResponse(message) {
    // Simular respuestas del AI basadas en palabras clave
    const responses = [
      "¡Excelente pregunta! CamarAI puede integrarse fácilmente en tu restaurante. ¿Te gustaría que te explique el proceso paso a paso?",
      "CamarAI funciona 24/7 y puede atender a tus clientes en múltiples idiomas. ¿En qué idiomas necesitas el servicio?",
      "La integración es muy sencilla. Solo necesitas un código QR y tu WhatsApp Business. ¿Ya tienes WhatsApp Business configurado?",
      "CamarAI puede reducir las esperas hasta un 40% y aumentar la rotación de mesas. ¿Cuántas mesas tiene tu restaurante?",
      "El sistema aprende de tus menús y puede hacer recomendaciones personalizadas. ¿Te interesa saber más sobre esta funcionalidad?",
      "Puedes configurar horarios, idiomas y personalizar las respuestas. ¿Qué horarios de atención necesitas?",
      "CamarAI se integra con tu sistema de gestión. ¿Usas algún software específico para tu restaurante?",
      "El costo es muy competitivo y se paga por uso. ¿Te gustaría conocer nuestros planes de precios?"
    ];

    // Seleccionar respuesta basada en palabras clave
    const lowerMessage = message.toLowerCase();
    let response = responses[Math.floor(Math.random() * responses.length)];

    if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('cuanto')) {
      response = "Nuestros planes son muy competitivos y se adaptan al tamaño de tu restaurante. ¿Te gustaría que te envíe información detallada de precios?";
    } else if (lowerMessage.includes('idioma') || lowerMessage.includes('español') || lowerMessage.includes('inglés')) {
      response = "CamarAI puede atender en más de 20 idiomas incluyendo español, inglés, francés, alemán, italiano y muchos más. ¿Qué idiomas necesitas?";
    } else if (lowerMessage.includes('instalar') || lowerMessage.includes('configurar') || lowerMessage.includes('integrar')) {
      response = "La instalación es muy sencilla. Solo necesitas escanear un código QR y configurar tu WhatsApp Business. ¿Te gustaría que te guíe paso a paso?";
    } else if (lowerMessage.includes('demo') || lowerMessage.includes('prueba') || lowerMessage.includes('test')) {
      response = "¡Perfecto! Puedes probar CamarAI ahora mismo enviando un mensaje al +34 641 647 388. ¿Te gustaría que te envíe el enlace directo?";
    }

    return response;
  }

  addMessage(role, content) {
    this.messages.push({ role, content });
    this.renderMessages();
    this.scrollToBottom();
  }

  showTypingIndicator() {
    const messagesContainer = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message assistant typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
      <img src="https://i.ibb.co/7NCBrPQG/Captura-de-pantalla-2025-07-07-230002-1.png" alt="Agente CamarAI" class="chat-message-avatar">
      <div class="chat-message-content">
        <div class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        Pensando...
      </div>
    `;
    messagesContainer.appendChild(typingDiv);
    this.scrollToBottom();
  }

  removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  renderMessages() {
    const messagesContainer = document.getElementById('chat-messages');
    if (!messagesContainer) return;

    // Limpiar mensajes existentes (excepto typing indicator)
    const existingMessages = messagesContainer.querySelectorAll('.chat-message:not(.typing-indicator)');
    existingMessages.forEach(msg => msg.remove());

    // Renderizar mensajes
    this.messages.forEach((message, index) => {
      const messageDiv = document.createElement('div');
      messageDiv.className = `chat-message ${message.role}`;
      
      if (message.role === 'assistant') {
        messageDiv.innerHTML = `
          <img src="https://i.ibb.co/7NCBrPQG/Captura-de-pantalla-2025-07-07-230002-1.png" alt="Agente CamarAI" class="chat-message-avatar">
          <div class="chat-message-content">${message.content}</div>
        `;
      } else {
        messageDiv.innerHTML = `
          <div class="chat-message-content">${message.content}</div>
        `;
      }
      
      messagesContainer.appendChild(messageDiv);
    });

    this.scrollToBottom();
  }

  scrollToBottom() {
    const messagesContainer = document.getElementById('chat-messages');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }
}

// Inicializar el chat cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new FloatingChat();
});
