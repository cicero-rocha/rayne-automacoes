import { Mail, Instagram, MessageCircle, MapPin } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Fale conosco agora',
      link: 'https://wa.me/5511999999999',
      linkText: 'Iniciar conversa',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: '@rayne.automacoes',
      link: 'https://www.instagram.com/rayne.automacoes/',
      linkText: 'Seguir perfil',
      color: 'from-pink-500 to-purple-600',
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'Suporte profissional',
      link: 'mailto:cicerorayne.automacoes@gmail.com',
      linkText: 'cicerorayne.automacoes@gmail.com',
      color: 'from-blue-500 to-cyan-600',
    },
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full filter blur-[200px] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para transformar seu negócio. Escolha o canal de sua preferência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all hover:scale-105 text-center"
              >
                <div className={`inline-block bg-gradient-to-br ${method.color} p-4 rounded-2xl mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 mb-6">{method.description}</p>

                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all text-sm`}
                >
                  {method.linkText}
                </a>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700 max-w-4xl mx-auto text-center">
          <MapPin className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">Pronto para começar?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Solicite sua automação gratuita e descubra como podemos revolucionar seu negócio
          </p>
          <a
            href="https://www.instagram.com/rayne.automacoes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all glow"
          >
            Peça sua Automação Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
