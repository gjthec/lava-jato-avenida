
import React from 'react';
import { IMAGES, CONTACT } from '../constants';
import { MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-32 md:h-56">
        {/* Massive Logo for Lava-Jato Avenida */}
        <div className="flex-shrink-0 flex items-center">
          <img 
            src={IMAGES.logo} 
            alt="Lava-Jato Avenida Logo" 
            className="h-28 w-auto object-contain md:h-52 lg:h-64 transition-transform hover:scale-105 duration-500"
          />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#facd0f] text-black font-black py-6 px-12 rounded-full uppercase tracking-widest text-lg transition-all hover:scale-110 active:scale-95 shadow-[0_0_50px_rgba(250,205,15,0.5)]"
          >
            Chamar no Zap
          </a>
        </div>

        {/* Mobile WhatsApp Icon */}
        <div className="md:hidden">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#facd0f] p-6 rounded-full text-black shadow-lg flex items-center justify-center"
          >
            <MessageCircle size={32} fill="currentColor" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
