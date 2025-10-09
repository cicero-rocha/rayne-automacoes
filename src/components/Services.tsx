import { Check, Zap, Rocket, Crown, Gift } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Gift,
      name: 'Gratuito',
      price: 'R$ 0',
      description: 'Perfeito para começar',
      features: [
        'Análise do seu negócio',
        'Proposta personalizada',
        'Consultoria inicial',
        'Identificação de oportunidades',
      ],
      color: 'from-gray-600 to-gray-700',
      highlighted: false,
    },
    {
      icon: Zap,
      name: 'Essencial',
      price: 'A partir de R$ 297',
      description: 'Automação básica',
      features: [
        'Chatbot WhatsApp',
        'Respostas automáticas',
        'Menu interativo',
        'Suporte por 30 dias',
        'Até 1000 mensagens/mês',
      ],
      color: 'from-blue-600 to-cyan-600',
      highlighted: false,
    },
    {
      icon: Rocket,
      name: 'Avançado',
      price: 'A partir de R$ 597',
      description: 'Solução completa',
      features: [
        'Tudo do Essencial',
        'Integração com sistemas',
        'Automação de vendas',
        'Relatórios avançados',
        'Até 5000 mensagens/mês',
        'Suporte prioritário',
      ],
      color: 'from-emerald-500 to-blue-600',
      highlighted: true,
    },
    {
      icon: Crown,
      name: 'Premium',
      price: 'Sob consulta',
      description: 'Solução enterprise',
      features: [
        'Tudo do Avançado',
        'IA personalizada',
        'Múltiplos canais',
        'API customizada',
        'Mensagens ilimitadas',
        'Suporte 24/7 dedicado',
        'Treinamento da equipe',
      ],
      color: 'from-purple-600 to-pink-600',
      highlighted: false,
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Escolha o pacote ideal para transformar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all hover:scale-105 ${
                  service.highlighted
                    ? 'border-emerald-500 shadow-2xl shadow-emerald-500/20'
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className={`inline-block bg-gradient-to-br ${service.color} p-3 rounded-xl mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                <div className="text-3xl font-bold text-gradient mb-2">{service.price}</div>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://www.instagram.com/rayne.automacoes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-full font-semibold transition-all ${
                    service.highlighted
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:shadow-lg glow'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Solicitar
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
