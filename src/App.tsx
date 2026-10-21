import { useState, useEffect } from 'react';
import Header from './components/Header';
import ScreenHome from './components/ScreenHome';
import ScreenRituals from './components/ScreenRituals';
import ScreenQA from './components/ScreenQA';
import ScreenAbout from './components/ScreenAbout';
import ScreenReferences from './components/ScreenReferences';
import Footer from './components/Footer';
import { Language } from './i18n/translations';
import { RitualCategory, Region } from './data/ritualsData';

type ScreenType = 'home' | 'rituals' | 'planner' | 'about' | 'references';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedCategory, setSelectedCategory] = useState<RitualCategory>('cuoi-hoi');
  const [selectedRegion, setSelectedRegion] = useState<Region | 'all'>('all');
  const [prefilledQA, setPrefilledQA] = useState<string>('');
  const [lang, setLang] = useState<Language>('vi');

  // Sync URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'rituals', 'planner', 'about', 'references'].includes(hash)) {
        setCurrentScreen(hash as ScreenType);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateScreen = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.location.hash = screen;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRitual = (category: RitualCategory, region: Region | 'all' = 'all') => {
    setSelectedCategory(category);
    setSelectedRegion(region);
    setCurrentScreen('rituals');
    window.location.hash = 'rituals';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchToPlanner = (query: string) => {
    setPrefilledQA(query);
    setCurrentScreen('planner');
    window.location.hash = 'planner';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Blue & White Header with Language Switcher */}
      <Header
        currentScreen={currentScreen}
        onNavigateScreen={handleNavigateScreen}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <ScreenHome
            lang={lang}
            onSelectRitual={handleSelectRitual}
            onNavigateScreen={handleNavigateScreen}
            onSearchQuery={handleSearchToPlanner}
          />
        )}

        {currentScreen === 'rituals' && (
          <ScreenRituals
            initialCategory={selectedCategory}
            initialRegion={selectedRegion}
            lang={lang}
            onNavigateToPlanner={(prompt) => {
              if (prompt) setPrefilledQA(prompt);
              handleNavigateScreen('planner');
            }}
          />
        )}

        {currentScreen === 'planner' && (
          <ScreenQA
            lang={lang}
            prefilledPrompt={prefilledQA}
          />
        )}

        {currentScreen === 'about' && (
          <ScreenAbout lang={lang} />
        )}

        {currentScreen === 'references' && (
          <ScreenReferences lang={lang} />
        )}
      </main>

      {/* Clean Footer */}
      <Footer
        currentScreen={currentScreen}
        onNavigateScreen={handleNavigateScreen}
        lang={lang}
      />
    </div>
  );
}
