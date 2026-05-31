import { motion } from 'motion/react';
import { Scale, Users, FileText, Briefcase, ShoppingCart, Home, Landmark, ShieldCheck, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = "5579999999999";

export const ServicesSection = () => {
  const services = [
    {
      idx: "01",
      title: "Direito Empresarial",
      desc: "Assessoria jurídica completa para empresas, contratos, societário e compliance.",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      idx: "02",
      title: "Direito Trabalhista",
      desc: "Defesa estratégica contenciosa e consultiva para corporações e executivos.",
      icon: <Users className="w-8 h-8" />
    },
    {
      idx: "03",
      title: "Direito Civil",
      desc: "Atuação em contratos, responsabilidade civil, família e sucessões com excelência.",
      icon: <Scale className="w-8 h-8" />
    },
    {
      idx: "04",
      title: "Direito Tributário",
      desc: "Planejamento fiscal, recuperação de créditos e defesas em execuções fiscais.",
      icon: <Landmark className="w-8 h-8" />
    },
    {
      idx: "05",
      title: "Direito Imobiliário",
      desc: "Segurança na compra, venda, locação e regularização de imóveis urbana e rural.",
      icon: <Home className="w-8 h-8" />
    },
    {
      idx: "06",
      title: "Direito Previdenciário",
      desc: "Aposentadorias, planejamento previdenciário e revisão de benefícios.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      idx: "07",
      title: "Direito do Consumidor",
      desc: "Prevenção de litígios e atuação contenciosa em relações de consumo.",
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      idx: "08",
      title: "Consultoria Jurídica",
      desc: "Assessoria preventiva para antecipar riscos e garantir segurança nas decisões.",
      icon: <ShieldCheck className="w-8 h-8" />
    }
  ];

  return (
    <section id="areas" className="py-20 lg:py-40 bg-[#020817] relative overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-end mb-20 lg:mb-32 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl lg:max-w-2xl mx-auto lg:mx-0"
          >
            <span className="text-gold-400 text-[9px] lg:text-[10px] tracking-[0.4em] lg:tracking-[0.5em] uppercase font-black mb-6 sm:mb-8 block opacity-80 italic">Especialidades</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-serif leading-[1] lg:leading-[0.9] text-white tracking-tighter">
              Soluções Jurídicas <br/> <span className="italic text-gold-400">Integrais.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-base lg:text-lg leading-relaxed font-light max-w-sm mx-auto lg:mx-0"
          >
            Oferecemos uma advocacia full-service com profissionais altamente qualificados para cada área de atuação.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#030919] p-8 sm:p-12 flex flex-col group relative overflow-hidden hover:bg-[#060f26] transition-all duration-700"
            >
              <div className="text-gold-400 font-serif italic text-xl lg:text-2xl mb-8 opacity-30 group-hover:opacity-100 transition-opacity">{s.idx}</div>
              <div className="text-gold-400 mb-6 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">{s.icon}</div>
              <h3 className="text-xl lg:text-2xl font-serif text-white mb-4 tracking-tight">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed lg:leading-[1.6] font-light mb-8 group-hover:text-white/70 transition-colors">{s.desc}</p>
              
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá, gostaria de mais informações sobre serviços de ${s.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-gold-400 cursor-pointer overflow-hidden group"
              >
                 <span className="relative group-hover:translate-x-2 transition-transform duration-500">Detalhes</span>
                 <ArrowRight className="w-3.5 h-3.5 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
