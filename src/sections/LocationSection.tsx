import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 lg:py-40 bg-[#020817] relative overflow-hidden text-center lg:text-left">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-gold-400 text-[9px] lg:text-[10px] tracking-[0.5em] uppercase font-black mb-6 lg:mb-8 block opacity-80 italic">Sede de Operações</span>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white mb-8 lg:mb-10 leading-tight tracking-tighter">
              Estrutura <br/> <span className="italic text-gold-400">Premium.</span>
            </h2>
            <div className="flex items-start gap-4 mb-10 max-w-md mx-auto lg:mx-0 text-left">
              <div className="w-12 h-12 rounded-full border border-gold-400/20 flex items-center justify-center shrink-0">
                <MapPin className="text-gold-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-white text-lg font-medium mb-2">Edifício São Paulo Prime</p>
                <p className="text-white/50 leading-relaxed font-light">
                  Av. Eng. Luís Carlos Berrini, 1500 - 10º Andar<br/>
                  Brooklin, São Paulo - SP, 04571-000
                </p>
              </div>
            </div>
            <p className="text-white/40 text-sm italic font-serif">
              Espaço reservado para reuniões estratégicas com total privacidade e conforto para nossos clientes. Atendimento mediante agendamento prévio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-square sm:aspect-video lg:aspect-[4/3] overflow-hidden border border-white/5 shadow-2xl brightness-75 hover:brightness-100 transition-all duration-1000 group rounded-sm"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.096894819777!2d-46.6970894236894!3d-23.60090886304561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574e179bc2e1%3A0xe104279ab8a8e1cb!2sAv.%20Eng.%20Lu%C3%ADs%20Carlos%20Berrini%2C%201500%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004571-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125"
            />
            <div className="absolute inset-0 pointer-events-none mix-blend-color bg-[#020817]/40" />
            <div className="absolute inset-0 pointer-events-none border-[12px] border-[#020817] rounded-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
