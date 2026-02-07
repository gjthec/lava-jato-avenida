
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
      className="relative min-h-screen pt-32 md:pt-40 pb-20 px-4 bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Brilho de fundo decorativo reduzido para não ofuscar */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-[#facd0f]/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Texto de Cabeçalho - Mais compacto */}
      <div className="max-w-7xl mx-auto w-full relative z-20 text-center mb-10 md:mb-12 px-2">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black italic uppercase leading-none text-white mb-4">
          O BRILHO QUE <span className="text-[#facd0f]">IMPRESSIONA</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-lg font-medium max-w-2xl mx-auto uppercase tracking-widest">
          Estética Automotiva Premium com a confiança do Avenida
        </p>
      </div>

      {/* Container do Carrossel - Layout otimizado para evitar cortes */}
      <div className="relative w-full max-w-6xl mx-auto min-h-[500px] md:min-h-[650px] flex items-center justify-center z-10">
        {IMAGES.carousel.map((item, index) => {
          const isActive = index === currentIndex;
          
          if (!isActive) return null;

          return (
            <div
              key={index}
              className="animate-in fade-in zoom-in duration-700 w-full max-w-[95vw] md:max-w-4xl rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl flex flex-col md:flex-row h-full"
            >
              {/* Imagem - Ocupa metade no desktop */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-square overflow-hidden relative">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 md:from-transparent to-transparent"></div>
              </div>
              
              {/* Conteúdo do Card - Sempre visível */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-zinc-900">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-8 bg-[#facd0f]"></span>
                  <span className="text-[#facd0f] font-bold text-xs uppercase tracking-widest">{item.title}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black italic uppercase text-white mb-6 leading-tight">
                  {item.description}
                </h3>
                <a 
                  href={CONTACT.whatsapp}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-[#facd0f] font-black text-sm uppercase tracking-widest group/btn hover:translate-x-2 transition-transform"
                >
                  Agendar este serviço
                  <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          );
        })}

        {/* Setas Laterais - Desktop (Ficam fora do card para não atrapalhar) */}
        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute -left-20 top-1/2 -translate-y-1/2 z-40 text-zinc-600 hover:text-[#facd0f] transition-colors p-4"
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden lg:flex absolute -right-20 top-1/2 -translate-y-1/2 z-40 text-zinc-600 hover:text-[#facd0f] transition-colors p-4"
        >
          <ChevronRight size={48} strokeWidth={1} />
        </button>
      </div>

      {/* Controles Mobile e Dots */}
      <div className="relative z-40 flex items-center gap-6 mt-10">
        <button
          onClick={prevSlide}
          className="lg:hidden bg-zinc-800 text-white p-3 rounded-full active:scale-90"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-2">
          {IMAGES.carousel.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'w-12 bg-[#facd0f]' : 'w-2 bg-zinc-800'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="lg:hidden bg-zinc-800 text-white p-3 rounded-full active:scale-90"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
