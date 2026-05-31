import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {}

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.";

export const Hero = ({}: HeroProps) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative flex flex-col lg:flex-row overflow-hidden bg-[#020817] text-[#F8FAFC] min-h-screen lg:min-h-[clamp(650px,85vh,850px)] h-auto">
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
      </div>

      <div className="w-full lg:w-[50%] lg:border-r border-white/5 flex flex-col justify-center px-6 pt-32 pb-16 sm:p-12 lg:p-20 z-20 relative order-1">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="text-center lg:text-left lg:max-w-xl mx-auto lg:mx-0 flex flex-col justify-center h-full"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[1px] bg-gold-400 mb-8 mx-auto lg:mx-0 hidden lg:block" 
          />
          <div className="text-[10px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] uppercase text-gold-400 mb-6 font-black opacity-80">
            Consultoria e Advocacia de Elite
          </div>
          
          <h1 className="text-[44px] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[85px] font-serif lg:leading-[0.95] mb-8 tracking-tighter">
            Prime<br className="hidden lg:block"/>
            <span className="italic font-normal opacity-90 text-gold-400 lg:ml-0">Advocacia.</span>
          </h1>

          <p className="text-white/60 text-[15px] sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-light mb-10 px-2 sm:px-0">
            Atendimento jurídico especializado para pessoas físicas e empresas, com foco em resultados, transparência e segurança.
            <span className="text-white/90 font-medium mt-4 block">Defendendo Direitos com Excelência, Estratégia e Confiança.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-16 lg:mb-0">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 lg:py-4 bg-gold-400 text-[#020817] text-[10.5px] font-bold uppercase tracking-[0.3em] hover:bg-gold-300 transition-all duration-500 rounded-sm w-full sm:w-auto text-center"
            >
              Agendar Consulta
            </a>
            <button 
              onClick={() => document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center justify-center gap-4 text-[10.5px] font-bold uppercase tracking-[0.3em] text-white hover:text-gold-400 transition-colors py-4 sm:py-0 w-full sm:w-auto"
            >
              Áreas de Atuação
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold-400 group-hover:border-gold-400 group-hover:text-black transition-all duration-500">
                <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          <div className="mt-8 lg:mt-16 flex flex-col md:flex-row justify-center lg:justify-start gap-12 sm:gap-12 lg:border-t border-white/5 lg:pt-8 w-full">
             <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
               <span className="text-white font-serif text-[40px] sm:text-3xl italic mb-2 leading-none">+10</span>
               <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold mt-2">Anos de Experiência</span>
             </div>
             <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
               <span className="text-white font-serif text-[40px] sm:text-3xl italic mb-2 leading-none">95%</span>
               <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold mt-2">Satisfação</span>
             </div>
             <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
               <span className="text-white font-serif text-[40px] sm:text-3xl italic mb-2 leading-none">500+</span>
               <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold mt-2">Clientes</span>
             </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full lg:w-[50%] order-2 relative bg-[#020817] z-[5] lg:min-h-0 flex flex-col">
        <div className="relative w-full aspect-[4/3] sm:aspect-video lg:h-full lg:absolute lg:inset-0 bg-[#020817] flex items-center justify-center">
          <motion.div 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
              alt="Prime Advocacia Office" 
              className="w-full h-full object-cover lg:object-cover brightness-[0.7] contrast-[1.2] object-center"
              referrerPolicy="no-referrer"
              fetchPriority="high"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-transparent to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/40 to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-[#020817]/10 mix-blend-multiply" />
        </div>
        
        <div className="relative lg:absolute lg:bottom-16 lg:left-16 z-20 w-full lg:max-w-sm px-6 py-12 lg:px-0 lg:py-0 mt-8 mb-12 lg:mt-0 lg:mb-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="max-w-sm mx-auto lg:mx-0 bg-[#020817]/90 lg:backdrop-blur-3xl p-10 lg:p-10 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 text-center lg:text-left rounded-sm">
              <div className="absolute top-0 left-0 w-full lg:w-1 h-1 lg:h-full bg-gold-400 opacity-50 lg:group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              <h3 className="text-xl lg:text-xl font-serif italic text-white mb-6 leading-[1.3] tracking-tight">&quot;A excelência no atendimento é a base da nossa confiança.&quot;</h3>
              <p className="text-gold-400 text-[9px] tracking-[0.4em] uppercase font-black opacity-80 lg:group-hover:opacity-100 transition-opacity">Compromisso Prime</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 hidden lg:flex flex-col items-center gap-6"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] text-white/30 font-bold">Descobrir</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-gold-400 via-gold-400/50 to-transparent" />
      </motion.div>
    </section>
  );
};
