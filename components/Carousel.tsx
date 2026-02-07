
import React, { useState, useEffect, useCallback } from 'react';
import { IMAGES, CONTACT } from '../constants';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === IMAGES.carousel.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? IMAGES.carousel.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative min-h-[90vh] pt-32 md:pt-44 pb-16 px-4 bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Brilho de fundo decorativo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-[#facd0f]/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Texto de Cabeçalho */}
      <div className="max-w-7xl mx-auto w-full relative z-20 text-center mb-10 md:mb-14 px-2">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black italic uppercase leading-none text-white mb-6 tracking-tighter">
          O BRILHO QUE <span className="text-[#facd0f]">IMPRESSIONA</span>
        </h1>
        <p className="text-zinc-400 text-xs md:text-base font-bold max-w-2xl mx-auto uppercase tracking-[0.3em] leading-relaxed">
          Estetica automotiva premium com confiança e qualidade
        </p>
      </div>

      {/* Container do Carrossel */}
      <div className="relative w-full max-w-5xl mx-auto min-h-[450px] md:min-h-[550px] flex items-center justify-center z-10">
        {IMAGES.carousel.map((item, index) => {
          const isActive = index === currentIndex;
          
          if (!isActive) return null;

          return (
            <div
              key={index}
              className="animate-in fade-in zoom-in duration-500 w-full rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl flex flex-col md:flex-row shadow-[#facd0f]/5"
            >
              {/* Imagem */}
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden relative">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent md:bg-gradient-to-r to-transparent"></div>
              </div>
              
              {/* Conteúdo do Card */}
              <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-zinc-900">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-6 bg-[#facd0f]"></span>
                  <span className="text-[#facd0f] font-bold text-[10px] uppercase tracking-[0.4em]">{item.title}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black italic uppercase text-white mb-8 leading-[1.1]">
                  {item.description}
                </h3>
                <a 
                  href={CONTACT.whatsapp}
                  target="_blank"
                  className="inline-flex items-center gap-3 text-white bg-zinc-800 hover:bg-[#facd0f] hover:text-black px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all w-fit group/btn"
                >
                  Agendar serviço
                  <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          );
        })}

        {/* Setas Laterais - Desktop (Fora do card) */}
        <button
          onClick={prevSlide}
          className="hidden xl:flex absolute -left-24 top-1/2 -translate-y-1/2 z-40 text-zinc-700 hover:text-[#facd0f] transition-all p-4 active:scale-90"
        >
          <ChevronLeft size={56} strokeWidth={1} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden xl:flex absolute -right-24 top-1/2 -translate-y-1/2 z-40 text-zinc-700 hover:text-[#facd0f] transition-all p-4 active:scale-90"
        >
          <ChevronRight size={56} strokeWidth={1} />
        </button>
      </div>

      {/* Navegação Mobile e Dots */}
      <div className="relative z-40 flex items-center gap-6 mt-12">
        <button
          onClick={prevSlide}
          className="xl:hidden bg-zinc-800 text-white p-3 rounded-full active:scale-90"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2.5">
          {IMAGES.carousel.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'w-10 bg-[#facd0f]' : 'w-2 bg-zinc-800'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="xl:hidden bg-zinc-800 text-white p-3 rounded-full active:scale-90"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
