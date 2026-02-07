
import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-[#facd0f] selection:text-black">
      {/* Navigation */}
      <Header />

      <main>
        {/* Dynamic Hero Carousel - Now the first thing on the screen */}
        <Carousel />

        {/* Final Conversion CTA */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
