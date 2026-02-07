
import React from 'react';
import { CONTACT } from '../constants';
import { MessageCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#facd0f]/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-6xl font-black italic uppercase text-white mb-6 leading-tight">
          Deixe seu carro pronto pro <span className="text-[#facd0f]">final de semana</span>
        </h2>
        <p className="text-zinc-400 text-base md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Trabalhamos com horário marcado para dar a atenção que seu veículo merece. Qualidade de cidade grande com a confiança de quem você já conhece.
        </p>
        
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#facd0f] text-black font-black text-lg md:text-2xl px-8 py-5 md:py-6 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_15px_40px_-10px_rgba(250,205,15,0.4)] uppercase w-full sm:w-auto justify-center"
        >
          <MessageCircle size={32} fill="currentColor" />
          <span>Mandar um Zap Agora</span>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
