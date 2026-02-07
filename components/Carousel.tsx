
import React, { useState, useEffect, useCallback } from 'react';
import { IMAGES, CONTACT } from '../constants';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

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
      className="relative min-h-screen pt-40 md:pt-72 pb-16 px-4 bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#facd0f]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 text-center mb-8 md:mb-12 px-2">
        <h1 className="text-3xl md:text-7xl font-black italic uppercase leading-tight text-white mb-4">
          Seu carro <span className="text-[#facd0f]">brilhando</span> como novo
        </h1>
        <p className="text-zinc-400 text-base md:text-xl font-medium max-w-xl mx-auto">
          O cuidado que seu veículo merece, feito com capricho pela equipe do Avenida. Arraste pro lado e confira!
        </p>
      </div>

      {/* Card Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto group h-[500px] md:h-[650px] flex items-center justify-center">
        {IMAGES.carousel.map((item, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex === 0 ? IMAGES.carousel.length - 1 : currentIndex - 1);
          const isNext = index === (currentIndex === IMAGES.carousel.length - 1 ? 0 : currentIndex + 1);

          let positionClasses = "opacity-0 scale-75 absolute pointer-events-none";
          if (isActive) positionClasses = "opacity-100 scale-100 z-30 relative shadow-[0_20px_60px_-15px_rgba(250,205,15,0.3)]";
          if (isPrev) positionClasses = "opacity-20 scale-90 -translate-x-full absolute z-20 hidden lg:block grayscale";
          if (isNext) positionClasses = "opacity-20 scale-90 translate-x-full absolute z-20 hidden lg:block grayscale";

          return (
            <div
              key={index}
              className={`transition-all duration-700 ease-out w-full max-w-[90vw] md:max-w-2xl rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-2 border-[#facd0f]/30 bg-zinc-900 cursor-pointer ${positionClasses}`}
              onClick={() => {
                if (!isActive) setCurrentIndex(index);
              }}
            >
              <div className="aspect-[16/11] overflow-hidden relative">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 md:p-12 text-left">
                <div className="flex items-center gap-2 mb-2 md:mb-4">
                  <span className="h-[2px] w-6 md:w-8 bg-[#facd0f]"></span>
                  <span className="text-[#facd0f] font-bold text-xs md:text-sm uppercase tracking-widest">{item.title}</span>
                </div>
                <h3 className="text-xl md:text-4xl font-black italic uppercase text-white mb-4 leading-tight">
                  {item.description}
                </h3>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-[#facd0f] font-bold text-sm uppercase group/btn mt-2"
                >
                  Falar com o Avenida <ChevronRight size={18} className="transition-transform group-hover/btn:translate-x-2" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons and Dots */}
      <div className="flex flex-col items-center gap-6 mt-8 md:mt-12 w-full">
        <div className="flex items-center gap-6">
          <button
            onClick={prevSlide}
            className="bg-zinc-800 text-white p-3 md:p-4 rounded-full hover:bg-[#facd0f] hover:text-black transition-all shadow-xl active:scale-90"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} strokeWidth={3} />
          </button>

          <div className="flex gap-2">
            {IMAGES.carousel.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex ? 'w-8 md:w-12 bg-[#facd0f]' : 'w-2 bg-zinc-700'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-zinc-800 text-white p-3 md:p-4 rounded-full hover:bg-[#facd0f] hover:text-black transition-all shadow-xl active:scale-90"
            aria-label="Próximo"
          >
            <ChevronRight size={24} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
