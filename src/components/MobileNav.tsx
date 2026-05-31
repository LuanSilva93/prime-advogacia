import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface MobileNavProps {}

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.";

const NAV_ITEMS = [
  { label: 'O Escritório', id: 'escritorio' },
  { label: 'Áreas', id: 'areas' },
  { label: 'Resultados', id: 'resultados' },
  { label: 'FAQ', id: 'faq' }
];

export const MobileNav = memo(({}: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Fixed Toggle Button - High Z-Index to stay above everything */}
      <div className="md:hidden fixed top-6 right-6 z-[2000] pointer-events-auto">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-black/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-2xl active:scale-95 transition-transform"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-gold-400 origin-center"
            />
            <motion.div 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[1.5px] bg-gold-400"
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-gold-400 origin-center"
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="md:hidden">
            {/* Full Screen Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[2100]"
            />

            {/* Centered Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-[2200] flex items-center justify-center p-6 pointer-events-none"
            >
              <div className="w-full max-w-[340px] bg-[#020817]/98 border border-white/10 p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] pointer-events-auto relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                
                <div className="flex flex-col items-center gap-6 w-full mb-10">
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.a 
                      key={item.label} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      href={`#${item.id}`}
                      className="text-white font-serif text-3xl italic hover:text-gold-400 transition-all duration-300 w-full text-center py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                <div className="w-full flex flex-col items-center gap-8 pt-8 border-t border-white/5">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full block text-center py-5 bg-gold-400 text-[#020817] font-black uppercase tracking-[0.4em] text-[10px] shadow-[0_0_30px_rgba(197,160,89,0.2)] rounded-sm"
                  >
                    Agendar Consulta
                  </a>
                  
                  <div className="flex gap-8 text-white/30">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5 hover:text-gold-400 transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Direct Close Button in the Modal */}
                <button 
                   onClick={() => setIsOpen(false)}
                   className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]"
                >
                  <X className="w-4 h-4" />
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
});
