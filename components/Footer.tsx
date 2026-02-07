
import React from 'react';
import { IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          {/* Logo in the Footer */}
          <img 
            src={IMAGES.logo} 
            alt="Lava-Jato Avenida Logo" 
            className="h-20 w-auto object-contain mx-auto md:mx-0 mb-4 opacity-80 hover:opacity-100 transition-opacity"
          />
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Lava-Jato Avenida. Todos os direitos reservados.
          </p>
        </div>
        
        <div className="flex gap-8 text-zinc-600 text-xs md:text-sm uppercase font-bold tracking-widest">
          <a href="#" className="hover:text-[#facd0f] transition-colors">Início</a>
          <a href="#" className="hover:text-[#facd0f] transition-colors">Serviços</a>
          <a href="#" className="hover:text-[#facd0f] transition-colors">Localização</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
