import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    home: language === 'en' ? 'Home' : '首页',
    about: language === 'en' ? 'About' : '关于',
    services: language === 'en' ? 'Services' : '服务',
    reviews: language === 'en' ? 'Reviews' : '评价',
    book: language === 'en' ? 'Book Now' : '立即预约',
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 text-olive-800' : 'bg-transparent py-6 text-olive-800 lg:text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex flex-col">
           <span className="text-3xl font-serif font-bold tracking-tight leading-none">Relive</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className={`text-sm font-bold uppercase tracking-widest hover:text-accent-orange transition-colors ${scrolled ? 'text-olive-700' : 'text-olive-800 lg:text-white/90'}`}>{t.home}</a>
          <a href="#about" className={`text-sm font-bold uppercase tracking-widest hover:text-accent-orange transition-colors ${scrolled ? 'text-olive-700' : 'text-olive-800 lg:text-white/90'}`}>{t.about}</a>
          <a href="#services" className={`text-sm font-bold uppercase tracking-widest hover:text-accent-orange transition-colors ${scrolled ? 'text-olive-700' : 'text-olive-800 lg:text-white/90'}`}>{t.services}</a>
          <a href="#reviews" className={`text-sm font-bold uppercase tracking-widest hover:text-accent-orange transition-colors ${scrolled ? 'text-olive-700' : 'text-olive-800 lg:text-white/90'}`}>{t.reviews}</a>
          
          <button 
            onClick={toggleLanguage}
            className={`text-sm font-bold uppercase tracking-widest hover:text-accent-orange transition-colors flex items-center gap-1 ${scrolled ? 'text-olive-700' : 'text-olive-800 lg:text-white/90'}`}
          >
            {language === 'en' ? '中文' : 'EN'}
          </button>

          <a href="#contact" className={`px-6 py-2 border rounded-sm text-xs font-bold uppercase tracking-widest transition-colors ${scrolled ? 'border-olive-600 text-olive-700 hover:bg-olive-600 hover:text-white' : 'border-olive-800 text-olive-800 lg:border-white lg:text-white hover:bg-white hover:text-olive-700'}`}>
            {t.book}
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleLanguage} className={`${scrolled ? 'text-olive-800' : 'text-olive-800 lg:text-white'} font-bold`}>
            {language === 'en' ? '中文' : 'EN'}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${scrolled ? 'text-olive-800' : 'text-olive-800 lg:text-white'}`}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-olive-100 shadow-xl py-8 px-6 flex flex-col gap-6 animate-fade-in-down">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest text-olive-800 hover:text-accent-orange transition-colors text-center">{t.home}</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest text-olive-800 hover:text-accent-orange transition-colors text-center">{t.about}</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest text-olive-800 hover:text-accent-orange transition-colors text-center">{t.services}</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest text-olive-800 hover:text-accent-orange transition-colors text-center">{t.reviews}</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 border border-olive-800 rounded-sm text-sm font-bold uppercase tracking-widest text-olive-800 hover:bg-olive-800 hover:text-white transition-colors text-center w-full max-w-xs mx-auto">
            {t.book}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;