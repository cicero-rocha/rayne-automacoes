import { useState } from 'react';
import { FileText, Send, Building, MessageCircle, Check } from 'lucide-react';

interface QuoteForm {
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
}

export default function Quote() {
  const [form, setForm] = useState<QuoteForm>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    currentSolution: '',
    objectives: [],
    monthlyVolume: '',
    budget: '',
    timeline: '',
    additionalInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const businessTypes = [
    'E-commerce',
    'Prestação de Serviços',
    'Varejo/Loja Física',
    'Consultoria',
    'Saúde/Clínicas',
    'Educação',
    'Imobiliária',
    'Restaurante/Food Service',
    'Indústria',
    'Agência/Marketing',
    'Outros'
  ];

  const objectiveOptions = [
    'Automatizar atendimento ao cliente',
    'Aumentar vendas online',
    'Reduzir tempo de resposta',
    'Melhorar experiência do cliente',
    'Capturar leads',
    'Agendar compromissos',
    'Integrar com sistemas existentes',
    'Criar funil de vendas',
    'Suporte pós-venda',
    'Recuperar carrinho abandonado'
  ];

  const volumeOptions = [
    'Até 500 mensagens/mês',
    '500 - 2.000 mensagens/mês',
    '2.000 - 5.000 mensagens/mês',
    '5.000 - 10.000 mensagens/mês',
    '10.000+ mensagens/mês'
  ];

  const budgetRanges = [
    'Até R$ 500',
    'R$ 500 - R$ 1.000',
    'R$ 1.000 - R$ 2.000',
    'R$ 2.000 - R$ 5.000',
    'Acima de R$ 5.000'
  ];

  const timelineOptions = [
    'Urgente (até 1 semana)',
    'Rápido (1-2 semanas)',
    'Normal (3-4 semanas)',
    'Flexível (1-2 meses)',
    'Sem pressa'
  ];

  const handleObjectiveChange = (objective: string) => {
    setForm(prev => ({
      ...prev,
      objectives: prev.objectives.includes(objective)
        ? prev.objectives.filter(obj => obj !== objective)
        : [...prev.objectives, objective]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
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

💰 *Orçamento previsto:* ${form.budget}
⏱️ *Prazo desejado:* ${form.timeline}

📝 *Informações adicionais:*
${form.additionalInfo || 'Não informado'}

---
Solicito um orçamento detalhado para esta automação!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5515991134942?text=${encodedMessage}`, '_blank');
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="orcamento" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-emerald-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-emerald-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Orçamento Enviado!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Sua solicitação foi enviada via WhatsApp. Nossa equipe entrará em contato em até 1 hora útil.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Fazer Nova Solicitação
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="orcamento" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Orçamento <span className="text-gradient">Personalizado</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conte-nos sobre seu negócio e receba uma proposta sob medida para suas necessidades
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center mb-8">
              <FileText className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Dados para Orçamento</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Dados da Empresa */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white flex items-center">
                  <Building className="w-5 h-5 mr-2 text-blue-400" />
                  Dados da Empresa
                </h4>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.companyName}
                    onChange={(e) => setForm(prev => ({ ...prev, companyName: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Sua empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome do Responsável *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.contactName}
                    onChange={(e) => setForm(prev => ({ ...prev, contactName: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tipo de Negócio *
                  </label>
                  <select
                    required
                    value={form.businessType}
                    onChange={(e) => setForm(prev => ({ ...prev, businessType: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="">Selecione...</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Requisitos do Projeto */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-green-400" />
                  Requisitos do Projeto
                </h4>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Objetivos com a Automação *
                  </label>
                  <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
                    {objectiveOptions.map((objective) => (
                      <label
                        key={objective}
                        className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                          form.objectives.includes(objective)
                            ? 'border-purple-500 bg-purple-500/10 text-purple-400'
                            : 'border-slate-600 bg-slate-800/50 text-gray-300 hover:border-slate-500'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={form.objectives.includes(objective)}
                          onChange={() => handleObjectiveChange(objective)}
                          className="sr-only"
                        />
                        <div className="text-sm">{objective}</div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Volume de Mensagens Esperado *
                  </label>
                  <select
                    required
                    value={form.monthlyVolume}
                    onChange={(e) => setForm(prev => ({ ...prev, monthlyVolume: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="">Selecione...</option>
                    {volumeOptions.map((volume) => (
                      <option key={volume} value={volume}>{volume}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Orçamento Previsto
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm(prev => ({ ...prev, budget: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="">Selecione (opcional)...</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Prazo Desejado
                  </label>
                  <select
                    value={form.timeline}
                    onChange={(e) => setForm(prev => ({ ...prev, timeline: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="">Selecione...</option>
                    {timelineOptions.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Campos que ocupam toda a largura */}
            <div className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Solução Atual (se houver)
                </label>
                <input
                  type="text"
                  value={form.currentSolution}
                  onChange={(e) => setForm(prev => ({ ...prev, currentSolution: e.target.value }))}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  placeholder="Ex: Atendimento manual, outro chatbot, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Informações Adicionais
                </label>
                <textarea
                  rows={4}
                  value={form.additionalInfo}
                  onChange={(e) => setForm(prev => ({ ...prev, additionalInfo: e.target.value }))}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
                  placeholder="Descreva detalhes específicos, integrações necessárias, funcionalidades especiais..."
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center mx-auto glow"
              >
                <Send className="w-6 h-6 mr-2" />
                Enviar Solicitação via WhatsApp
              </button>
              <p className="text-sm text-gray-400 mt-4">
                📱 Você será redirecionado para o WhatsApp com sua solicitação preenchida
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}