import { useState } from 'react';
import { Menu, X, BookOpen, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface HeaderProps {
  currentScreen: 'home' | 'rituals' | 'planner' | 'about' | 'references';
  onNavigateScreen: (screen: 'home' | 'rituals' | 'planner' | 'about' | 'references') => void;
  lang: Language;
  onToggleLang: (newLang: Language) => void;
}

export default function Header({ currentScreen, onNavigateScreen, lang, onToggleLang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleNav = (screen: 'home' | 'rituals' | 'planner' | 'about' | 'references') => {
    onNavigateScreen(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Zone 1: Brand Wordmark (Single text element, large & legible) */}
          <button
            onClick={() => handleNav('home')}
            className="text-left flex flex-col justify-center whitespace-nowrap shrink-0 group cursor-pointer focus:outline-none"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-blue-900 group-hover:text-blue-700 transition-colors">
              {t.brand}
            </span>
            <span className="text-[11px] font-medium text-slate-500 hidden sm:block">
              {t.brandSub}
            </span>
          </button>

          {/* Zone 2: 5 Concise Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleNav('home')}
              className={`py-2 px-1 transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
                currentScreen === 'home'
                  ? 'text-blue-700 border-blue-600 font-bold'
                  : 'text-slate-600 hover:text-blue-700 border-transparent'
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNav('rituals')}
              className={`py-2 px-1 transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
                currentScreen === 'rituals'
                  ? 'text-blue-700 border-blue-600 font-bold'
                  : 'text-slate-600 hover:text-blue-700 border-transparent'
              }`}
            >
              {t.nav.rituals}
            </button>
            <button
              onClick={() => handleNav('planner')}
              className={`py-2 px-1 transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
                currentScreen === 'planner'
                  ? 'text-blue-700 border-blue-600 font-bold'
                  : 'text-slate-600 hover:text-blue-700 border-transparent'
              }`}
            >
              {t.nav.planner}
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`py-2 px-1 transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
                currentScreen === 'about'
                  ? 'text-blue-700 border-blue-600 font-bold'
                  : 'text-slate-600 hover:text-blue-700 border-transparent'
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNav('references')}
              className={`py-2 px-1 transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
                currentScreen === 'references'
                  ? 'text-blue-700 border-blue-600 font-bold'
                  : 'text-slate-600 hover:text-blue-700 border-transparent'
              }`}
            >
              {t.nav.references}
            </button>
          </nav>

          {/* Zone 3: Language Switcher & Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher Button */}
            <div className="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => onToggleLang('vi')}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  lang === 'vi'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tiếng Việt"
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNav('rituals')}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-xs"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t.nav.cta}</span>
            </button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-blue-100 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <button
            onClick={() => handleNav('home')}
            className={`w-full text-left py-3 px-3 rounded-lg text-base font-semibold transition-colors ${
              currentScreen === 'home' ? 'bg-blue-50 text-blue-800' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => handleNav('rituals')}
            className={`w-full text-left py-3 px-3 rounded-lg text-base font-semibold transition-colors ${
              currentScreen === 'rituals' ? 'bg-blue-50 text-blue-800' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t.nav.rituals}
          </button>
          <button
            onClick={() => handleNav('planner')}
            className={`w-full text-left py-3 px-3 rounded-lg text-base font-semibold transition-colors ${
              currentScreen === 'planner' ? 'bg-blue-50 text-blue-800' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t.nav.planner}
          </button>
          <button
            onClick={() => handleNav('about')}
            className={`w-full text-left py-3 px-3 rounded-lg text-base font-semibold transition-colors ${
              currentScreen === 'about' ? 'bg-blue-50 text-blue-800' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => handleNav('references')}
            className={`w-full text-left py-3 px-3 rounded-lg text-base font-semibold transition-colors ${
              currentScreen === 'references' ? 'bg-blue-50 text-blue-800' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t.nav.references}
          </button>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => handleNav('rituals')}
              className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-white bg-blue-700 rounded-lg shadow-xs"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
