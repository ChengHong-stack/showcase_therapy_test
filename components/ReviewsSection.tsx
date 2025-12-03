import React, { useEffect } from 'react';
import { Language } from '../types';

interface ReviewsSectionProps {
  language: Language;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  useEffect(() => {
    const scriptId = "SociableKitScript";
    if (!document.getElementById(scriptId)) {
       const script = document.createElement("script");
       script.id = scriptId;
       script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
       script.async = true;
       script.defer = true;
       document.head.appendChild(script);
    }
  }, []);

  const t = {
    title: language === 'en' ? 'Patient Stories' : '来访者故事',
    subtitle: language === 'en' 
      ? 'Hear from those who have walked this path and found their way back to connection.'
      : '倾听那些走过这段旅程并找回情感连接的人们的心声。',
  };

  return (
    <section id="reviews" className="py-24 bg-stone-50 border-t border-olive-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif text-olive-900 mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-olive-300 mx-auto rounded-full"></div>
          <p className="mt-4 text-stone-600 text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="sk-ww-google-reviews" data-embed-id="25629147"></div>
      </div>
    </section>
  );
};

export default ReviewsSection;