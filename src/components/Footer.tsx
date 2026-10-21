import { Language, TRANSLATIONS } from '../i18n/translations';

interface FooterProps {
  currentScreen: 'home' | 'rituals' | 'planner' | 'about' | 'references';
  onNavigateScreen: (screen: 'home' | 'rituals' | 'planner' | 'about' | 'references') => void;
  lang: Language;
}

export default function Footer({ onNavigateScreen, lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              {t.brand}
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
            <div className="text-xs text-slate-500 font-medium">
              {lang === 'vi'
                ? 'Tham chiếu: Luật Tín ngưỡng, tôn giáo 2016 · Quyết định 308/2005/QĐ-TTg · Nghiên cứu văn hóa dân gian 3 miền.'
                : 'References: 2016 Law on Belief and Religion · Decision 308/2005/QD-TTg · Folkloric Studies across 3 Regions.'}
            </div>
          </div>

          {/* Quick Nav 5 screens */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
              {lang === 'vi' ? 'Các Màn Hình Chính' : 'Main Screens'}
            </span>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateScreen('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-300 transition-colors cursor-pointer text-left"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateScreen('rituals');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-300 transition-colors cursor-pointer text-left"
                >
                  {t.nav.rituals}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateScreen('planner');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-300 transition-colors cursor-pointer text-left"
                >
                  {t.nav.planner}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateScreen('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-300 transition-colors cursor-pointer text-left"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigateScreen('references');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-300 transition-colors cursor-pointer text-left"
                >
                  {t.nav.references}
                </button>
              </li>
            </ul>
          </div>

          {/* Core Principle Quote */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
              {lang === 'vi' ? 'Thông Điệp Cốt Lõi' : 'Guiding Maxim'}
            </span>
            <blockquote className="text-sm text-slate-400 italic leading-relaxed border-l-2 border-blue-500 pl-3">
              {t.footer.quote}
            </blockquote>
          </div>
        </div>

        {/* Legal Disclaimer Line */}
        <div className="pt-6 border-t border-slate-800 text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-400">Lưu ý quan trọng: </strong>
          Toàn bộ thông tin, quy trình và nghi thức trên hệ thống chỉ mang tính chất tham khảo phong tục tập quán văn hóa dân tộc và xây dựng đời sống văn minh; không thay thế văn bản quy phạm pháp luật chính thức hoặc phán quyết của cơ quan nhà nước có thẩm quyền.
        </div>

        {/* Bottom Credits */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            {t.footer.copyright}
          </div>
          <div className="flex items-center gap-3">
            <span>{lang === 'vi' ? 'Phân nhánh vùng miền' : 'Regional Branching'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'vi' ? 'Trình tự từng bước' : 'Step-by-step'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'vi' ? 'Trung lập tín ngưỡng' : 'Interfaith Neutrality'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
