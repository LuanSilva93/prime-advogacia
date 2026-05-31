import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {}

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.";

const NAV_ITEMS = [
  { label: 'O Escritório', id: 'escritorio' },
  { label: 'Áreas de Atuação', id: 'areas' },
  { label: 'Resultados', id: 'resultados' },
  { label: 'FAQ', id: 'faq' }
];

export const Navbar = memo(({}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-700 py-8 px-6 lg:px-16 pointer-events-none",
        isScrolled ? "bg-[#020817]/90 backdrop-blur-xl py-5 border-b border-white/5 shadow-2xl" : "bg-transparent"
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-11 h-11 border border-gold-400/50 flex items-center justify-center rotate-45 group-hover:bg-gold-400 group-hover:border-gold-400 transition-all duration-500 shadow-[0_0_15px_rgba(197,160,89,0.1)] group-hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]">
            <span className="text-gold font-serif text-2xl -rotate-45 font-bold group-hover:text-[#020817] transition-colors">PR</span>
          </div>
          <div className="flex flex-col leading-none ml-2 text-left">
            <span className="text-white font-serif text-2xl tracking-[0.2em] uppercase font-light">PRIME</span>
            <span className="text-gold-400 font-sans text-[7px] tracking-[0.5em] uppercase mt-1.5 opacity-80 font-medium">Advocacia & Consultoria</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-14">
          {NAV_ITEMS.map((item, idx) => (
            <motion.a 
              key={item.label} 
              href={`#${item.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="group relative text-[10.5px] tracking-[0.3em] uppercase font-medium text-white/60 hover:text-white transition-all duration-300"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gold-400 text-[#020817] text-[10.5px] font-bold uppercase tracking-[0.3em] hover:bg-gold-300 transition-all duration-500 rounded-sm"
          >
            Agendar Consulta
          </motion.a>
        </div>
      </div>
    </nav>
  );
});
