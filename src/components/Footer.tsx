import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#030919] border-t border-gold-400/20 relative z-10 pt-20 pb-10 lg:pt-32 lg:pb-12">
       <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 lg:mb-24">
             {/* Brand Column */}
             <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-gold-400/30 flex items-center justify-center rotate-45 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
                    <span className="text-gold-400 font-serif text-xl -rotate-45 font-bold">PR</span>
                  </div>
                  <div className="flex flex-col leading-none ml-1">
                    <span className="text-white font-serif text-2xl tracking-[0.1em] uppercase font-light">PRIME</span>
                    <span className="text-gold-400 font-sans text-[7px] tracking-[0.3em] uppercase mt-1 opacity-80 font-medium">Advocacia & Consultoria</span>
                  </div>
                </div>
                <p className="text-white/50 text-xs leading-relaxed font-light mt-2 max-w-xs">
                  Atendimento jurídico de alta performance com foco estratégico, resultados excepcionais e segurança jurídica absoluta para você e sua empresa.
                </p>
                <div className="flex gap-4 mt-2">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group hover:border-gold-400 hover:bg-gold-400 transition-all duration-300">
                    <Instagram className="w-3.5 h-3.5 text-white/60 group-hover:text-[#030919] transition-colors" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group hover:border-gold-400 hover:bg-gold-400 transition-all duration-300">
                    <Linkedin className="w-3.5 h-3.5 text-white/60 group-hover:text-[#030919] transition-colors" />
                  </a>
                </div>
             </div>

             {/* Quick Links Column */}
             <div className="flex flex-col gap-6">
                <h4 className="text-white font-serif text-lg tracking-wide">Navegação</h4>
                <div className="w-8 h-[1px] bg-gold-400/50 mb-2"></div>
                <ul className="flex flex-col gap-4 text-xs font-medium text-white/50">
                   <li><a href="#escritorio" className="hover:text-gold-400 transition-colors inline-block">O Escritório</a></li>
                   <li><a href="#areas" className="hover:text-gold-400 transition-colors inline-block">Áreas de Atuação</a></li>
                   <li><a href="#resultados" className="hover:text-gold-400 transition-colors inline-block">Resultados</a></li>
                   <li><a href="#faq" className="hover:text-gold-400 transition-colors inline-block">Dúvidas Frequentes</a></li>
                </ul>
             </div>

             {/* Practice Areas Column */}
             <div className="flex flex-col gap-6">
                <h4 className="text-white font-serif text-lg tracking-wide">Especialidades</h4>
                <div className="w-8 h-[1px] bg-gold-400/50 mb-2"></div>
                <ul className="flex flex-col gap-4 text-xs font-medium text-white/50">
                   <li><span className="hover:text-gold-400 transition-colors cursor-pointer">Direito Empresarial</span></li>
                   <li><span className="hover:text-gold-400 transition-colors cursor-pointer">Direito Civil</span></li>
                   <li><span className="hover:text-gold-400 transition-colors cursor-pointer">Direito Trabalhista</span></li>
                   <li><span className="hover:text-gold-400 transition-colors cursor-pointer">Direito Tributário</span></li>
                   <li><span className="hover:text-gold-400 transition-colors cursor-pointer">Direito Imobiliário</span></li>
                </ul>
             </div>

             {/* Contact Column */}
             <div className="flex flex-col gap-6">
                <h4 className="text-white font-serif text-lg tracking-wide">Contato</h4>
                <div className="w-8 h-[1px] bg-gold-400/50 mb-2"></div>
                <ul className="flex flex-col gap-5 text-sm font-light text-white/50">
                   <li className="flex items-start gap-4">
                     <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                     <span className="leading-relaxed text-xs">Av. Eng. Luís Carlos Berrini, 1500<br/>10º Andar - Brooklin<br/>São Paulo - SP, 04571-000</span>
                   </li>
                   <li className="flex items-center gap-4 group cursor-pointer">
                     <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                     <span className="text-xs group-hover:text-gold-400 transition-colors font-medium">+55 (11) 99999 9999</span>
                   </li>
                   <li className="flex items-center gap-4 group cursor-pointer">
                     <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                     <span className="text-xs group-hover:text-gold-400 transition-colors font-medium">contato@primeadvocacia.com.br</span>
                   </li>
                </ul>
             </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
             <p className="text-[10px] text-white/30 uppercase tracking-widest font-medium text-center md:text-left">
               &copy; {new Date().getFullYear()} Prime Advocacia & Consultoria Jurídica. Todos os direitos reservados.
             </p>
             <div className="flex gap-8 text-[10px] text-white/30 uppercase tracking-widest font-medium flex-wrap justify-center md:justify-end">
                <span className="hover:text-gold-400 transition-colors cursor-pointer">Termos de Uso</span>
                <span className="hover:text-gold-400 transition-colors cursor-pointer">Política de Privacidade</span>
                <span className="hover:text-gold-400 transition-colors cursor-pointer">Compliance</span>
             </div>
          </div>
       </div>
    </footer>
  );
};
