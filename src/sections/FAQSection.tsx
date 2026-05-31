import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona a primeira consulta?",
    answer: "A primeira consulta é um diagnóstico aprofundado do seu caso. Nossos especialistas analisam documentos, identificam riscos e propõem a melhor estratégia jurídica de forma transparente."
  },
  {
    question: "Qual o diferencial da Prime Advocacia?",
    answer: "Trabalhamos com o modelo full-service especializado. Isso significa que você possui atendimento em diversas áreas do direito, mas sempre sendo atendido por um advogado especialista no assunto."
  },
  {
    question: "O escritório atende empresas de quais portes?",
    answer: "Atendemos desde startups até grandes corporações, adaptando nosso escopo de serviços de estruturação contratual e compliance de acordo com a necessidade de cada cliente."
  },
  {
    question: "Vocês atendem em todo o Brasil?",
    answer: "Sim. Nossos processos digitais avançados nos permitem atuar de forma ágil e segura em litígios e negociações em todo o território nacional."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-40 bg-[#020817] relative border-y border-white/5">
       <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto">
             <div className="text-center mb-16 lg:mb-24">
                <span className="text-gold-400 text-[9px] lg:text-[10px] tracking-[0.5em] uppercase font-black opacity-80 mb-6 block italic">Dúvidas Frequentes</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tighter">Perguntas <span className="italic text-gold-400">Comuns</span></h2>
             </div>

             <div className="flex flex-col border-t border-white/10">
                {faqs.map((faq, i) => {
                   const isOpen = openIndex === i;
                   return (
                      <div key={i} className="border-b border-white/10">
                         <button 
                           onClick={() => setOpenIndex(isOpen ? null : i)}
                           className="w-full py-8 flex items-center justify-between text-left group gap-8"
                         >
                            <span className="text-lg lg:text-xl font-medium text-white/90 group-hover:text-white transition-colors">{faq.question}</span>
                            <div className="flex-shrink-0 text-gold-400">
                               {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                            </div>
                         </button>
                         <AnimatePresence>
                            {isOpen && (
                               <motion.div
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{ height: "auto", opacity: 1 }}
                                 exit={{ height: 0, opacity: 0 }}
                                 className="overflow-hidden"
                               >
                                  <p className="pb-8 text-white/60 font-light leading-relaxed">
                                     {faq.answer}
                                  </p>
                               </motion.div>
                            )}
                         </AnimatePresence>
                      </div>
                   )
                })}
             </div>
          </div>
       </div>
    </section>
  );
};
