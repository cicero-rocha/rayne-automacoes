import { Instagram, Mail, ArrowUp, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Rayne <span className="text-gradient">Automações</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformamos negócios através de automação inteligente. Soluções personalizadas para levar sua empresa ao próximo nível.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rayne.automacoes/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:cicerorayne.automacoes@gmail.com"
                className="bg-slate-800 p-3 rounded-full hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-600 transition-all"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Home', 'Serviços', 'Como Funciona', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:cicerorayne.automacoes@gmail.com"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  cicerorayne.automacoes@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rayne.automacoes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  @rayne.automacoes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Rayne Automações. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com tecnologia e inteligência</p>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-blue-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-all glow z-40"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}
    </footer>
  );
}
