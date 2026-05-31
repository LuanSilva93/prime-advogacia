import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, Mail } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface ContactCTAProps {}

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.";

export const ContactCTA = ({}: ContactCTAProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="py-24 lg:py-48 bg-[#020817] relative overflow-hidden flex items-center justify-center min-h-[80vh]">
       <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            style={{ y: isDesktop ? y : 0 }}
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=60&w=1200" 
            className="w-full h-[120%] object-cover grayscale opacity-10 brightness-50 contrast-[1.2]"
            referrerPolicy="no-referrer"
            alt="Law Background"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/80 to-[#020817]" />
       </div>

       <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
             <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-serif text-white leading-[1] lg:leading-[0.8] mb-12 sm:mb-16 tracking-tighter">
                Estratégia<span className="italic text-gold-400">.</span> <br className="sm:hidden"/>
                Segurança<span className="italic text-gold-400">.</span>
             </h2>
             <p className="text-white/60 text-base sm:text-lg lg:text-2xl font-light mb-16 lg:mb-24 max-w-2xl mx-auto leading-relaxed italic font-serif">
                A estruturação e defesa do seu patrimônio ou negócio não admitem decisões impulsivas. Fale conosco para uma orientação de alto nível.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-10 lg:gap-16">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-block px-12 lg:px-16 py-6 lg:py-8 bg-gold-400 text-[#020817] font-black text-[10px] lg:text-xs tracking-[0.5em] uppercase hover:bg-gold-300 transition-all duration-700 shadow-[0_0_60px_rgba(197,160,89,0.2)] rounded-sm"
                >
                  Agendar Agora
                </a>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group cursor-pointer py-4"
                >
                   <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400/10 transition-all duration-500">
                      <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-gold-400" />
                   </div>
                   <div className="text-left">
                      <p className="text-white/40 text-[8px] lg:text-[9px] uppercase tracking-widest font-bold mb-1">Contato Direto</p>
                      <p className="text-white font-display text-xl lg:text-2xl tracking-tighter font-bold group-hover:text-gold-400 transition-colors">+55 (11) 99999 9999</p>
                   </div>
                </a>
             </div>
          </motion.div>
       </div>
    </section>
  );
};
