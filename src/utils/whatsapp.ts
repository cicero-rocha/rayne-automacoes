// Utilitário para integração com WhatsApp
export const whatsappUtils = {
  // Número do WhatsApp da empresa
  phoneNumber: '5515991134942',
  
  // Formatar mensagem de orçamento da calculadora
  formatCalculatorQuote: (config: {
    messagesPerMonth: number;
    hasIntegrations: boolean;
    needsCustomization: boolean;
    hasMultipleChannels: boolean;
    needsAdvancedAI: boolean;
    businessSize: string;
  }, estimatedPrice: number, recommendedPlan: string) => {
    return `
🎯 *SOLICITAÇÃO DE ORÇAMENTO - CALCULADORA*

📊 *Configuração Desejada:*
• Mensagens/mês: ${config.messagesPerMonth.toLocaleString()}
• Integrações: ${config.hasIntegrations ? 'Sim' : 'Não'}
• Personalização: ${config.needsCustomization ? 'Sim' : 'Não'}
• Múltiplos canais: ${config.hasMultipleChannels ? 'Sim' : 'Não'}
• IA avançada: ${config.needsAdvancedAI ? 'Sim' : 'Não'}
• Porte do negócio: ${
  config.businessSize === 'small' ? 'Pequeno' : 
  config.businessSize === 'medium' ? 'Médio' : 
  config.businessSize === 'large' ? 'Grande' : 'Enterprise'
}

💰 *Valor Estimado:* R$ ${estimatedPrice.toLocaleString()}
🎯 *Plano Recomendado:* ${recommendedPlan}

Gostaria de mais detalhes sobre esta automação!
    `.trim();
  },

  // Formatar mensagem de orçamento personalizado
  formatCustomQuote: (form: {
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    businessType: string;
    currentSolution: string;
    objectives: string[];
    monthlyVolume: string;
    budget: string;
    timeline: string;
    additionalInfo: string;
  }) => {
    return `
🎯 *SOLICITAÇÃO DE ORÇAMENTO PERSONALIZADO*

👤 *Dados de Contato:*
• Empresa: ${form.companyName}
• Responsável: ${form.contactName}
• E-mail: ${form.email}
• Telefone: ${form.phone}

🏢 *Informações do Negócio:*
• Tipo de negócio: ${form.businessType}
• Volume mensal: ${form.monthlyVolume}
• Solução atual: ${form.currentSolution || 'Não informado'}

🎯 *Objetivos com a Automação:*
${form.objectives.map(obj => `• ${obj}`).join('\n')}

💰 *Orçamento previsto:* ${form.budget || 'A definir'}
⏱️ *Prazo desejado:* ${form.timeline || 'A definir'}

📝 *Informações adicionais:*
${form.additionalInfo || 'Não informado'}

---
Solicito um orçamento detalhado para esta automação!
    `.trim();
  },

  // Abrir WhatsApp com mensagem
  openWhatsApp: (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappUtils.phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  },

  // Mensagem rápida para contato geral
  quickContact: (service: string) => {
    const message = `
Olá! Tenho interesse no serviço de automação *${service}*.

Gostaria de saber mais detalhes e receber um orçamento personalizado.

Aguardo retorno! 😊
    `.trim();
    
    whatsappUtils.openWhatsApp(message);
  },

  // Mensagem para análise gratuita
  freeAnalysis: () => {
    const message = `
Olá! Gostaria de solicitar a *Análise Gratuita* do meu negócio.

Tenho interesse em entender como a automação pode ajudar a:
• Melhorar o atendimento
• Aumentar as vendas
• Otimizar processos

Quando podemos conversar? 😊
    `.trim();
    
    whatsappUtils.openWhatsApp(message);
  }
};

// Função para smooth scroll para seção
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Formatter para preços
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

// Validador de formulários
export const validateForm = {
  email: (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  phone: (phone: string) => {
    // Remove caracteres não numéricos
    const cleanPhone = phone.replace(/\D/g, '');
    // Verifica se tem pelo menos 10 dígitos (telefone brasileiro)
    return cleanPhone.length >= 10 && cleanPhone.length <= 11;
  },
  
  required: (value: string) => {
    return value.trim().length > 0;
  }
};

export default whatsappUtils;