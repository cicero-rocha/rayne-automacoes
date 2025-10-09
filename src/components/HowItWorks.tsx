import { Search, Wrench, TestTube, LineChart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Análise',
      description: 'Estudamos seu negócio, necessidades e oportunidades de automação para criar a solução perfeita.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Wrench,
      title: 'Criação',
      description: 'Desenvolvemos sua automação personalizada com tecnologia de ponta e inteligência artificial.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: TestTube,
      title: 'Testes',
      description: 'Testamos exaustivamente cada funcionalidade para garantir performance e qualidade impecáveis.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: LineChart,
      title: 'Acompanhamento',
      description: 'Monitoramos resultados, oferecemos suporte contínuo e otimizamos sua automação constantemente.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Um processo simples e eficiente em 4 etapas
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all hover:scale-105 h-full">
                    <div className="flex items-center justify-center mb-6">
                      <div className={`relative bg-gradient-to-br ${step.color} p-4 rounded-2xl`}>
                        <Icon className="w-10 h-10 text-white" />
                        <div className="absolute -top-3 -right-3 bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-slate-700">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 text-center">
                      {step.title}
                    </h3>

                    <p className="text-gray-300 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.instagram.com/rayne.automacoes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all glow"
          >
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
}
