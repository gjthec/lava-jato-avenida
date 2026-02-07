
import React, { useState, useEffect, useCallback } from 'react';
import { IMAGES, CONTACT } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      className="relative min-h-screen pt-40 md:pt-72 pb-20 px-4 bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Brilho de fundo decorativo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#facd0f]/10 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Texto de Cabeçalho da Seção */}
      <div className="max-w-7xl mx-auto w-full relative z-20 text-center mb-12 md:mb-16 px-2">
        <h1 className="text-4xl md:text-7xl font-black italic uppercase leading-tight text-white mb-4">
          Seu carro <span className="text-[#facd0f]">brilhando</span> como novo
        </h1>
        <p className="text-zinc-400 text-base md:text-xl font-medium max-w-xl mx-auto">
          O cuidado que seu veículo merece, feito com capricho pela equipe do Avenida. Arraste pro lado e confira!
        </p>
      </div>

      {/* Container do Carrossel - Aumentada a altura mínima para evitar sobreposição */}
      <div className="relative w-full max-w-6xl mx-auto group min-h-[550px] md:min-h-[750px] flex items-center justify-center z-10">
        {IMAGES.carousel.map((item, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex === 0 ? IMAGES.carousel.length - 1 : currentIndex - 1);
          const isNext = index === (currentIndex === IMAGES.carousel.length - 1 ? 0 : currentIndex + 1);

          let positionClasses = "opacity-0 scale-75 absolute pointer-events-none";
          if (isActive) positionClasses = "opacity-100 scale-100 z-30 relative shadow-[0_20px_80px_-15px_rgba(250,205,15,0.4)]";
          if (isPrev) positionClasses = "opacity-20 scale-90 -translate-x-full absolute z-20 hidden lg:block grayscale blur-sm";
          if (isNext) positionClasses = "opacity-20 scale-90 translate-x-full absolute z-20 hidden lg:block grayscale blur-sm";

          return (
            <div
              key={index}
              className={`transition-all duration-700 ease-out w-full max-w-[92vw] md:max-w-2xl rounded-[2.5rem] overflow-hidden border-2 border-[#facd0f]/40 bg-zinc-900 cursor-pointer ${positionClasses}`}
              onClick={() => {
                if (!isActive) setCurrentIndex(index);
              }}
            >
              {/* Imagem com Overlay */}
              <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden relative">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Conteúdo do Card */}
              <div className="p-8 md:p-12 text-left bg-zinc-900">
                <div className="flex items-center gap-3 mb-3 md:mb-5">
                  <span className="h-[2px] w-8 bg-[#facd0f]"></span>
                  <span className="text-[#facd0f] font-bold text-xs md:text-sm uppercase tracking-[0.2em]">{item.title}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black italic uppercase text-white mb-6 leading-tight">
                  {item.description}
                </h3>
                <div className="inline-flex items-center gap-2 text-[#facd0f] font-black text-sm uppercase tracking-wider group/btn">
                  Falar com o Avenida 
                  <ChevronRight size={20} className="transition-transform group-hover/btn:translate-x-2" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controles de Navegação - Garantido que fiquem por cima com z-40 */}
      <div className="relative z-40 flex flex-col items-center gap-8 mt-12 md:mt-16 w-full">
        <div className="flex items-center gap-8">
          <button
            onClick={prevSlide}
            className="bg-zinc-800/80 backdrop-blur-md text-white p-4 md:p-5 rounded-full hover:bg-[#facd0f] hover:text-black transition-all shadow-2xl active:scale-90 border border-zinc-700"
            aria-label="Anterior"
          >
            <ChevronLeft size={28} strokeWidth={3} />
          </button>

          {/* Dots de Navegação */}
          <div className="flex gap-3">
            {IMAGES.carousel.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  index === currentIndex ? 'w-10 md:w-16 bg-[#facd0f]' : 'w-2.5 bg-zinc-700'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-zinc-800/80 backdrop-blur-md text-white p-4 md:p-5 rounded-full hover:bg-[#facd0f] hover:text-black transition-all shadow-2xl active:scale-90 border border-zinc-700"
            aria-label="Próximo"
          >
            <ChevronRight size={28} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
