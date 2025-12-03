import React, { useState, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { Language } from './types';

// Lazy load below-the-fold components
const ProfileSection = React.lazy(() => import('./components/ProfileSection'));
const Services = React.lazy(() => import('./components/Services'));
const ReviewsSection = React.lazy(() => import('./components/ReviewsSection'));
const ContactForm = React.lazy(() => import('./components/ContactForm'));
const Footer = React.lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="w-full py-24 flex justify-center items-center bg-stone-50">
    <div className="w-8 h-8 border-4 border-olive-200 border-t-olive-600 rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'cn' : 'en');
  };

  React.useEffect(() => {
    document.title = language === 'en' 
      ? 'Relive Relationship Counselling' 
      : 'Relive 关系辅导';
  }, [language]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-olive-200 selection:text-olive-900">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main>
        <Hero language={language} />
        <Suspense fallback={<LoadingFallback />}>
          <ProfileSection language={language} />
          <Services language={language} />
          <ReviewsSection language={language} />
          <ContactForm language={language} />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer language={language} />
      </Suspense>
    </div>
  );
};

export default App;