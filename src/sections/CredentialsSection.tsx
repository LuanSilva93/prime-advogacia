import { motion } from 'motion/react';
import { Gavel, CheckCircle, BaseGlobe, Handshake, Shield, Users } from 'lucide-react';
import officeImg from '../assets/images/regenerated_image_1780246060669.jpg';

interface CredentialsSectionProps {}

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.";

export const CredentialsSection = ({}: CredentialsSectionProps) => {
  return (
    <section id="escritorio" className="py-20 lg:py-60 bg-[#020817] relative">
       <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
             <div className="relative group perspective-1000 max-w-md mx-auto lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-[4/5] overflow-hidden border border-white/10 shadow-2xl relative bg-[#030919]"
                >
                   <img 
                    src={officeImg} 
                    alt="Escritório Prime Advocacia" 
                    className="w-full h-full object-cover brightness-[0.8] contrast-[1.1] group-hover:scale-105 transition-transform duration-[3s] ease-out object-center"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/90 via-[#020817]/20 to-transparent pointer-events-none" />
                </motion.div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 lg:-bottom-12 lg:-right-12 w-full h-full border border-gold-400/20 translate-x-1 translate-y-1 sm:translate-x-4 sm:translate-y-4 pointer-events-none -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-1000 rounded-sm" />
             </div>

             <div className="flex flex-col gap-10 lg:gap-12 text-center lg:text-left">
                <div>
                   <span className="text-gold-400 text-[9px] lg:text-[10px] tracking-[0.4em] lg:tracking-[0.5em] uppercase font-black mb-6 sm:mb-8 block opacity-80 italic">O Escritório</span>
                   <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white mb-8 sm:mb-10 leading-[1.1] tracking-tighter">
                     Excelência, <br className="hidden lg:block"/><span className="italic text-gold-400">Ética e Resultados.</span>
                   </h2>
                   <p className="text-white/60 text-base lg:text-lg leading-relaxed font-light mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0">
                     A Prime Advocacia & Consultoria Jurídica consolida anos de expertise na prestação de serviços jurídicos de alta performance. Nosso compromisso é entregar soluções ágeis, inteligentes e totalmente alinhadas aos objetivos de nossos clientes.
                   </p>
                </div>

                <div className="space-y-6 sm:space-y-8 max-w-xl mx-auto lg:mx-0 text-left">
                   {[
                     { icon: <Handshake className="text-gold-400 w-4 h-4 lg:w-5 lg:h-5" />, text: "Atendimento Humanizado e Estratégico" },
                     { icon: <Shield className="text-gold-400 w-4 h-4 lg:w-5 lg:h-5" />, text: "Transparência Absoluta e Segurança Jurídica" },
                     { icon: <Users className="text-gold-400 w-4 h-4 lg:w-5 lg:h-5" />, text: "Equipe Multidisciplinar Altamente Especializada" }
                   ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-5 sm:gap-6 border-b border-white/5 pb-6 lg:pb-8 group last:border-0"
                      >
                         <div className="transform group-hover:scale-125 transition-transform duration-500 bg-white/5 p-3 rounded-md">{item.icon}</div>
                         <span className="text-white/80 text-xs lg:text-sm tracking-wide font-medium group-hover:text-gold-400 transition-colors">{item.text}</span>
                      </motion.div>
                   ))}
                </div>

                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center lg:self-start inline-block px-12 py-5 lg:py-6 bg-gold-400 text-[#020817] text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] hover:bg-gold-300 transition-all duration-500 shadow-[0_0_30px_rgba(197,160,89,0.15)] mt-4 rounded-sm text-center"
                >
                  Falar com Advogado
                </a>
             </div>
          </div>
       </div>
    </section>
  );
};
