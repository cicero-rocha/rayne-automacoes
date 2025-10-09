import { useState, useEffect } from 'react';
import { Calculator as CalculatorIcon, MessageSquare, Users, Zap, Settings, Smartphone } from 'lucide-react';

interface CalculatorConfig {
  messagesPerMonth: number;
  hasIntegrations: boolean;
  needsCustomization: boolean;
  hasMultipleChannels: boolean;
  needsAdvancedAI: boolean;
  businessSize: 'small' | 'medium' | 'large' | 'enterprise';
}

export default function Calculator() {
  const [config, setConfig] = useState<CalculatorConfig>({
    messagesPerMonth: 1000,
    hasIntegrations: false,
    needsCustomization: false,
    hasMultipleChannels: false,
    needsAdvancedAI: false,
    businessSize: 'small'
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [recommendedPlan, setRecommendedPlan] = useState('');

  const calculatePrice = () => {
    let basePrice = 297; // Preço essencial
    let multiplier = 1;

    // Ajuste por quantidade de mensagens
    if (config.messagesPerMonth <= 1000) {
      basePrice = 297;
    } else if (config.messagesPerMonth <= 5000) {
      basePrice = 597;
    } else if (config.messagesPerMonth <= 15000) {
      basePrice = 997;
    } else {
      basePrice = 1497;
    }

    // Multiplicadores por funcionalidades
    if (config.hasIntegrations) multiplier += 0.3;
    if (config.needsCustomization) multiplier += 0.4;
    if (config.hasMultipleChannels) multiplier += 0.5;
    if (config.needsAdvancedAI) multiplier += 0.6;

    // Ajuste por tamanho do negócio
    switch (config.businessSize) {
      case 'medium':
        multiplier += 0.2;
        break;
      case 'large':
        multiplier += 0.4;
        break;
      case 'enterprise':
        multiplier += 0.8;
        break;
    }

    const finalPrice = Math.round(basePrice * multiplier);
    setEstimatedPrice(finalPrice);

    // Determinar plano recomendado
    if (finalPrice <= 350) {
      setRecommendedPlan('Essencial');
    } else if (finalPrice <= 800) {
      setRecommendedPlan('Avançado');
    } else if (finalPrice <= 1500) {
      setRecommendedPlan('Premium');
    } else {
      setRecommendedPlan('Enterprise');
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [config]);

  const handleWhatsAppQuote = () => {
    const message = `
Olá! Gostaria de solicitar um orçamento personalizado:

📊 *Calculadora de Automação RAYNE*

🔧 *Configuração Desejada:*
• Mensagens/mês: ${config.messagesPerMonth.toLocaleString()}
• Integrações: ${config.hasIntegrations ? 'Sim' : 'Não'}
• Personalização: ${config.needsCustomization ? 'Sim' : 'Não'}
• Múltiplos canais: ${config.hasMultipleChannels ? 'Sim' : 'Não'}
• IA avançada: ${config.needsAdvancedAI ? 'Sim' : 'Não'}
• Porte do negócio: ${config.businessSize === 'small' ? 'Pequeno' : 
                     config.businessSize === 'medium' ? 'Médio' : 
                     config.businessSize === 'large' ? 'Grande' : 'Enterprise'}

💰 *Valor Estimado:* R$ ${estimatedPrice.toLocaleString()}
🎯 *Plano Recomendado:* ${recommendedPlan}

Gostaria de mais detalhes sobre esta automação!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5515991134942?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-emerald-900/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calculadora de <span className="text-gradient">Automação</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Configure suas necessidades e descubra o investimento ideal para sua automação
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Painel de Configuração */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-8">
                <CalculatorIcon className="w-8 h-8 text-emerald-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Configure sua Automação</h3>
              </div>

              <div className="space-y-8">
                {/* Mensagens por mês */}
                <div>
                  <label className="flex items-center text-white font-semibold mb-4">
                    <MessageSquare className="w-5 h-5 mr-2 text-blue-400" />
                    Mensagens por mês: {config.messagesPerMonth.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={config.messagesPerMonth}
                    onChange={(e) => setConfig(prev => ({ ...prev, messagesPerMonth: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>500</span>
                    <span>50.000+</span>
                  </div>
                </div>

                {/* Tamanho do negócio */}
                <div>
                  <label className="flex items-center text-white font-semibold mb-4">
                    <Users className="w-5 h-5 mr-2 text-green-400" />
                    Porte do seu negócio
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'small', label: 'Pequeno' },
                      { value: 'medium', label: 'Médio' },
                      { value: 'large', label: 'Grande' },
                      { value: 'enterprise', label: 'Enterprise' }
                    ].map((size) => (
                      <button
                        key={size.value}
                        onClick={() => setConfig(prev => ({ ...prev, businessSize: size.value as any }))}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          config.businessSize === size.value
                            ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400'
                            : 'border-slate-600 bg-slate-800/50 text-gray-300 hover:border-slate-500'
                        }`}
                      >
                        {size.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Funcionalidades extras */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Funcionalidades Extras</h4>
                  <div className="space-y-3">
                    {[
                      { 
                        key: 'hasIntegrations', 
                        label: 'Integrações com sistemas',
                        icon: Settings,
                        description: 'CRM, ERP, E-commerce'
                      },
                      { 
                        key: 'needsCustomization', 
                        label: 'Personalização avançada',
                        icon: Zap,
                        description: 'Fluxos únicos e específicos'
                      },
                      { 
                        key: 'hasMultipleChannels', 
                        label: 'Múltiplos canais',
                        icon: Smartphone,
                        description: 'WhatsApp, Telegram, Instagram'
                      },
                      { 
                        key: 'needsAdvancedAI', 
                        label: 'IA Avançada',
                        icon: CalculatorIcon,
                        description: 'ChatGPT personalizado'
                      }
                    ].map((feature) => {
                      const Icon = feature.icon;
                      return (
                        <label
                          key={feature.key}
                          className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                            config[feature.key as keyof CalculatorConfig]
                              ? 'border-emerald-500 bg-emerald-500/10'
                              : 'border-slate-600 bg-slate-800/30 hover:border-slate-500'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={config[feature.key as keyof CalculatorConfig] as boolean}
                            onChange={(e) => setConfig(prev => ({ 
                              ...prev, 
                              [feature.key]: e.target.checked 
                            }))}
                            className="sr-only"
                          />
                          <Icon className={`w-5 h-5 mr-3 ${
                            config[feature.key as keyof CalculatorConfig] ? 'text-emerald-400' : 'text-gray-400'
                          }`} />
                          <div className="flex-1">
                            <div className={`font-medium ${
                              config[feature.key as keyof CalculatorConfig] ? 'text-emerald-400' : 'text-white'
                            }`}>
                              {feature.label}
                            </div>
                            <div className="text-sm text-gray-400">{feature.description}</div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Painel de Resultado */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8">Seu Orçamento Personalizado</h3>

                <div className="text-center mb-8">
                  <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
                    R$ {estimatedPrice.toLocaleString()}
                  </div>
                  <div className="text-emerald-400 font-semibold text-lg">
                    Plano: {recommendedPlan}
                  </div>
                  <div className="text-gray-400 text-sm mt-2">
                    *Valor estimado baseado na configuração
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 mb-8">
                  <h4 className="text-white font-semibold mb-4">O que está incluído:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Até {config.messagesPerMonth.toLocaleString()} mensagens/mês
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Chatbot WhatsApp completo
                    </li>
                    {config.hasIntegrations && (
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        Integrações com sistemas
                      </li>
                    )}
                    {config.needsCustomization && (
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        Personalização avançada
                      </li>
                    )}
                    {config.hasMultipleChannels && (
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        Múltiplos canais de atendimento
                      </li>
                    )}
                    {config.needsAdvancedAI && (
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        IA personalizada com ChatGPT
                      </li>
                    )}
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Suporte técnico especializado
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Relatórios e análises
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={handleWhatsAppQuote}
                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all glow"
                  >
                    Solicitar Orçamento via WhatsApp
                  </button>
                  
                  <div className="text-center text-sm text-gray-400">
                    📱 Resposta em até 1 hora • 🔒 Sem compromisso
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}