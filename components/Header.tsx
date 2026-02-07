
import React, { useState, useEffect } from 'react';
import { IMAGES, CONTACT } from '../constants';
import { MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-zinc-950/95 backdrop-blur-md h-20 md:h-24 border-b border-zinc-900 shadow-2xl' 
        : 'bg-transparent h-24 md:h-32'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        {/* Logo Redimensionada para não ocupar a tela toda */}
        <div className="flex-shrink-0 flex items-center">
          <img 
            src={IMAGES.logo} 
            alt="Lava-Jato Avenida Logo" 
            className={`transition-all duration-500 object-contain ${
              scrolled ? 'h-14 md:h-20' : 'h-20 md:h-28'
            } hover:scale-105`}
          />
        </div>

        {/* Desktop CTA mais elegante */}
        <div className="hidden md:block">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#facd0f] text-black font-black py-3 px-8 rounded-xl uppercase tracking-widest text-sm transition-all hover:scale-110 active:scale-95 shadow-[0_0_30px_rgba(250,205,15,0.3)] hover:shadow-[#facd0f]/50"
          >
            Agendar Agora
          </a>
        </div>

        {/* Mobile WhatsApp Icon */}
        <div className="md:hidden">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#facd0f] p-3 rounded-xl text-black shadow-lg flex items-center justify-center active:scale-90 transition-transform"
          >
            <MessageCircle size={24} fill="currentColor" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
