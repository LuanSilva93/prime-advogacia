import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section id="resultados" className="py-20 lg:py-40 bg-[#020817] relative">
       <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="text-center mb-20 lg:mb-32">
             <span className="text-gold-400 text-[9px] lg:text-[10px] tracking-[0.5em] uppercase font-black opacity-80 mb-6 block italic">Experiências Reais</span>
             <h2 className="text-4xl sm:text-5xl lg:text-[70px] font-serif text-white tracking-tighter leading-tight">O Que Nossos Clientes <br/> <span className="italic text-gold-400">Dizem</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
             {[
               {
                 name: "Roberto Almeida",
                 position: "Diretor Executivo",
                 text: "A assessoria empresarial da Prime Advocacia foi um divisor de águas para nossa empresa. Prevenimos riscos significativos e otimizamos nossos processos contratuais com uma segurança ímpar."
               },
               {
                 name: "Mariana Costa",
                 position: "Cliente de Direito Cívil",
                 text: "O acolhimento e a transparência em cada etapa do meu processo demonstraram um nível de profissionalismo raro no mercado. Confio plenamente na capacidade técnica da equipe."
               }
             ].map((r, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="bg-[#030919] p-10 sm:p-16 lg:p-20 flex flex-col gap-8 lg:gap-10 hover:bg-[#060f26] transition-colors group relative overflow-hidden"
                >
                   <Quote className="absolute top-10 right-10 w-24 h-24 text-white/5 -rotate-12 group-hover:-rotate-0 transition-transform duration-700" />
                   <div className="text-white/80 font-serif text-xl lg:text-3xl italic leading-relaxed sm:leading-[1.5] font-light group-hover:text-white transition-colors relative z-10">
                      &quot;{r.text}&quot;
                   </div>
                   <div className="flex items-center gap-6 mt-auto relative z-10 border-t border-white/10 pt-8">
                      <div className="w-8 lg:w-12 h-[1px] bg-gold-400 lg:group-hover:w-16 transition-all duration-500" />
                      <div>
                         <p className="text-white text-[10px] lg:text-xs font-black uppercase tracking-widest mb-1">{r.name}</p>
                         <p className="text-gold-400 text-[8px] lg:text-[9px] uppercase tracking-widest opacity-80">{r.position}</p>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
};
