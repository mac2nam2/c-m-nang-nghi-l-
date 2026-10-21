import { useState } from 'react';
import { RITUALS_DATA, REGIONS_INFO, RitualCategory, Region } from '../data/ritualsData';
import SITUATIONS_DATA from '../data/tinh_huong_nghi_le_vong_doi.json';
import { Language, TRANSLATIONS } from '../i18n/translations';
import {
  Search,
  ArrowRight,
  Heart,
  Flame,
  Calendar,
  Sparkles,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
  Layers,
  ChevronRight,
  Scale,
  Compass,
  GraduationCap,
  Baby,
  Briefcase
} from 'lucide-react';

interface ScreenHomeProps {
  lang: Language;
  onSelectRitual: (category: RitualCategory, region?: Region | 'all') => void;
  onNavigateScreen: (screen: 'rituals' | 'planner' | 'about' | 'references') => void;
  onSearchQuery?: (query: string) => void;
}

export default function ScreenHome({
  lang,
  onSelectRitual,
  onNavigateScreen,
  onSearchQuery
}: ScreenHomeProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHomeStage, setSelectedHomeStage] = useState<string>('all');
  const t = TRANSLATIONS[lang];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchTerm.trim().toLowerCase();
    if (!query) return;

    if (query.includes('cưới') || query.includes('hỏi') || query.includes('tráp') || query.includes('dâu') || query.includes('hôn')) {
      onSelectRitual('cuoi-hoi');
    } else if (query.includes('tang') || query.includes('mất') || query.includes('liệm') || query.includes('hỏa táng') || query.includes('viếng')) {
      onSelectRitual('tang-le');
    } else if (query.includes('giỗ') || query.includes('tiên thường') || query.includes('thờ') || query.includes('cúng')) {
      onSelectRitual('gio-chap');
    } else {
      if (onSearchQuery) {
        onSearchQuery(query);
      } else {
        onNavigateScreen('planner');
      }
    }
  };

  const quickTags = [
    { label: lang === 'vi' ? 'Lễ dạm ngõ miền Bắc' : 'Northern Proposal', cat: 'cuoi-hoi' as RitualCategory, reg: 'bac' as Region },
    { label: lang === 'vi' ? 'Nến tơ hồng miền Trung' : 'Central Red Candle Rite', cat: 'cuoi-hoi' as RitualCategory, reg: 'trung' as Region },
    { label: lang === 'vi' ? 'Mâm tráp miền Nam' : 'Southern Gift Trays', cat: 'cuoi-hoi' as RitualCategory, reg: 'nam' as Region },
    { label: lang === 'vi' ? 'Khâm liệm & Phát tang' : 'Encoffining & Mourning', cat: 'tang-le' as RitualCategory, reg: 'all' as const },
    { label: lang === 'vi' ? 'Mâm cỗ cúng Giỗ đầu' : 'First Anniversary Feast', cat: 'gio-chap' as RitualCategory, reg: 'all' as const },
    { label: lang === 'vi' ? 'Lễ tang Công giáo & Phật giáo' : 'Interfaith Bereavement', cat: 'tang-le' as RitualCategory, reg: 'all' as const }
  ];

  // Stage categories for 30 situations
  const stages = [
    { id: 'all', label: 'Tất cả 30 tình huống' },
    { id: 'Sinh nở & Đầu đời', label: 'Sinh nở & Đầy tháng (3)' },
    { id: 'Trưởng thành & Lập nghiệp', label: 'Trưởng thành & Khởi nghiệp (5)' },
    { id: 'Hôn nhân & Gia đình', label: 'Cưới hỏi 3 miền (8)' },
    { id: 'Hậu sự & Tang chế', label: 'Hậu sự & Tang lễ (7)' },
    { id: 'Tế tự & Tưởng nhớ cội nguồn', label: 'Tế tự & Giỗ chạp (6)' },
    { id: 'Đạo hiếu & Tôn vinh', label: 'Mừng thọ (1)' }
  ];

  const filteredSituations = SITUATIONS_DATA.filter((s) => {
    return selectedHomeStage === 'all' || s.giai_doan_vong_doi === selectedHomeStage;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero Overview & Prominent Search Section */}
      <section className="relative pt-10 pb-16 sm:pb-20 border-b border-blue-100 bg-gradient-to-b from-blue-50/80 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Header Decker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold uppercase tracking-widest border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.home.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              {t.home.title}
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {t.home.lead}
            </p>

            {/* Prominent Search Form */}
            <form onSubmit={handleSearchSubmit} className="pt-2 max-w-2xl mx-auto">
              <div className="relative flex items-center shadow-lg rounded-2xl bg-white border-2 border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
                <Search className="w-6 h-6 text-blue-600 absolute left-4 shrink-0 pointer-events-none" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t.home.searchPlaceholder}
                  className="w-full pl-13 pr-32 py-4 text-base sm:text-lg text-slate-900 placeholder:text-slate-400 bg-transparent rounded-2xl focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  {t.home.searchBtn}
                </button>
              </div>

              {/* Quick Search Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-slate-600">
                <span className="font-semibold text-slate-500">{t.home.quickSearch}</span>
                {quickTags.map((tag, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onSelectRitual(tag.cat, tag.reg)}
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition-colors cursor-pointer font-medium"
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. 3 Pillars of Life-Cycle: Cưới Hỏi, Tang Lễ, Giỗ Chạp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            {lang === 'vi' ? 'Ba Biến Cố Trọng Đại Của Đời Người' : 'Three Sacred Life Milestones'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            {t.home.coreFeaturesTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t.home.coreFeaturesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Cưới Hỏi */}
          <div
            onClick={() => onSelectRitual('cuoi-hoi')}
            className="group bg-white rounded-3xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Heart className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                  {lang === 'vi' ? 'Hôn Lễ Trăm Năm' : 'Wedding Rites'}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {t.home.boxWeddingTitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t.home.boxWeddingDesc}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-blue-600 group-hover:text-blue-700">
              <span>{lang === 'vi' ? 'Xem 4 bước nghi lễ chi tiết' : 'View 4 steps in detail'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Tang Lễ */}
          <div
            onClick={() => onSelectRitual('tang-le')}
            className="group bg-white rounded-3xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 border border-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Flame className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                  {lang === 'vi' ? 'Chữ Hiếu Vẹn Toàn' : 'Bereavement Rites'}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {t.home.boxFuneralTitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t.home.boxFuneralDesc}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-blue-600 group-hover:text-blue-700">
              <span>{lang === 'vi' ? 'Xem 5 bước hậu sự chu đáo' : 'View 5 steps in detail'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Giỗ Chạp */}
          <div
            onClick={() => onSelectRitual('gio-chap')}
            className="group bg-white rounded-3xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Calendar className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  {lang === 'vi' ? 'Uống Nước Nhớ Nguồn' : 'Memorial Rites'}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {t.home.boxMemorialTitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t.home.boxMemorialDesc}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-blue-600 group-hover:text-blue-700">
              <span>{lang === 'vi' ? 'Xem 4 bước cúng giỗ chuẩn mực' : 'View 4 steps in detail'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW & PROMINENT: 30 Life-Cycle Ritual Situations Library Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-blue-700 font-bold bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
              📁 Thư Viện Dữ Liệu Nghi Lễ Chuẩn
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              30 Tình Huống Nghi Lễ Vòng Đời Mẫu
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl">
              Tuyển tập 30 tình huống thực tế xuyên suốt đời người: Sinh nở, thôi nôi, trưởng thành, học tập, lập nghiệp, cưới hỏi, hậu sự và giỗ chạp tưởng nhớ.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigateScreen('planner')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs cursor-pointer transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <Sparkles className="w-4 h-4" />
            <span>Mở Trợ Lý Hỏi Đáp Với 30 Tình Huống →</span>
          </button>
        </div>

        {/* Stage Filter Buttons */}
        <div className="flex flex-wrap gap-2 pt-2 border-b border-slate-200 pb-4">
          {stages.map((st) => (
            <button
              key={st.id}
              type="button"
              onClick={() => setSelectedHomeStage(st.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                selectedHomeStage === st.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>

        {/* Grid of Situation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSituations.slice(0, 9).map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (onSearchQuery) onSearchQuery(item.mo_ta_tinh_huong);
                else onNavigateScreen('planner');
              }}
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-bold">
                    {item.id}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {item.giai_doan_vong_doi}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-700 text-base line-clamp-1 transition-colors">
                  {item.ten_tinh_huong}
                </h3>
                <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                  {item.mo_ta_tinh_huong}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                <span>Tra cứu & Phân tích Gemini</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {filteredSituations.length > 9 && (
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => onNavigateScreen('planner')}
              className="px-6 py-2.5 rounded-xl border border-blue-300 bg-blue-50 text-blue-800 text-xs font-bold hover:bg-blue-100 transition-colors cursor-pointer"
            >
              Xem toàn bộ 30 tình huống mẫu tại trang Hỏi Đáp →
            </button>
          </div>
        )}
      </section>

      {/* 4. Regional Branching Showcase: Miền Bắc, Miền Trung, Miền Nam */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-bold bg-blue-100 px-3 py-1 rounded-full">
              {lang === 'vi' ? 'Bản Sắc Văn Hóa Địa Lý' : 'Geographical Cultural Identity'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              {t.home.regionsSectionTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {t.home.regionsSectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Miền Bắc */}
            <div className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-blue-900 flex items-center gap-1.5">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  {REGIONS_INFO.bac.name[lang]}
                </span>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  {lang === 'vi' ? 'Khuôn phép' : 'Rigorous'}
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {REGIONS_INFO.bac.characteristic[lang]}
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5">
                <div className="font-semibold text-blue-900">{lang === 'vi' ? 'Đặc trưng tiêu biểu:' : 'Key features:'}</div>
                <div>• {lang === 'vi' ? 'Tráp ăn hỏi số lẻ (5, 7, 9 tráp), sính lễ bên trong số chẵn' : 'Odd tray counts (5, 7, 9) with even items'}</div>
                <div>• {lang === 'vi' ? 'Mâm cỗ truyền thống 4 bát 6 đĩa chỉn chu' : 'Traditional 4-bowl 6-plate feasts'}</div>
                <div>• {lang === 'vi' ? 'Coi trọng thứ bậc gia tộc và tính quy củ dòng họ' : 'Hierarchical lineage respect'}</div>
              </div>
              <button
                type="button"
                onClick={() => onSelectRitual('cuoi-hoi', 'bac')}
                className="w-full mt-2 py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-colors cursor-pointer text-center block"
              >
                {lang === 'vi' ? 'Khảo cứu tập quán Miền Bắc →' : 'Explore Northern customs →'}
              </button>
            </div>

            {/* Miền Trung */}
            <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-emerald-900 flex items-center gap-1.5">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  {REGIONS_INFO.trung.name[lang]}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {lang === 'vi' ? 'Trầm tĩnh' : 'Solemn'}
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {REGIONS_INFO.trung.characteristic[lang]}
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5">
                <div className="font-semibold text-emerald-900">{lang === 'vi' ? 'Đặc trưng tiêu biểu:' : 'Key features:'}</div>
                <div>• {lang === 'vi' ? 'Số tráp thường là số chẵn (4, 6 tráp), lễ vật mộc mạc' : 'Even tray counts (4, 6) with sincere modesty'}</div>
                <div>• {lang === 'vi' ? 'Nghi thức dâng nến tơ hồng se duyên thiêng liêng' : 'Sacred red candle thread binding ceremony'}</div>
                <div>• {lang === 'vi' ? 'Ẩm thực cung đình Huế & hương hoả trang nghiêm' : 'Imperial Hue heritage & quiet remembrance'}</div>
              </div>
              <button
                type="button"
                onClick={() => onSelectRitual('cuoi-hoi', 'trung')}
                className="w-full mt-2 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition-colors cursor-pointer text-center block"
              >
                {lang === 'vi' ? 'Khảo cứu tập quán Miền Trung →' : 'Explore Central customs →'}
              </button>
            </div>

            {/* Miền Nam */}
            <div className="bg-white rounded-2xl p-6 border border-amber-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-amber-900 flex items-center gap-1.5">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  {REGIONS_INFO.nam.name[lang]}
                </span>
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  {lang === 'vi' ? 'Phóng khoáng' : 'Warm'}
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {REGIONS_INFO.nam.characteristic[lang]}
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5">
                <div className="font-semibold text-amber-900">{lang === 'vi' ? 'Đặc trưng tiêu biểu:' : 'Key features:'}</div>
                <div>• {lang === 'vi' ? 'Chuộng 6 hoặc 8 tráp (Lộc - Phát), cặp đèn cầy Long Phụng' : 'Favors 6 or 8 trays, Dragon-Phoenix candles'}</div>
                <div>• {lang === 'vi' ? 'Mâm cỗ ấm áp: Canh khổ qua dồn thịt, thịt kho hột vịt' : 'Bitter melon soup and caramelized braised pork'}</div>
                <div>• {lang === 'vi' ? 'Tinh thần cởi mở, vui tươi sum vầy, trọng tình nghĩa' : 'Open-hearted community celebration'}</div>
              </div>
              <button
                type="button"
                onClick={() => onSelectRitual('cuoi-hoi', 'nam')}
                className="w-full mt-2 py-2 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-bold transition-colors cursor-pointer text-center block"
              >
                {lang === 'vi' ? 'Khảo cứu tập quán Miền Nam →' : 'Explore Southern customs →'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Three Core Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-800/60 px-3 py-1 rounded-full border border-blue-700">
              {t.home.stepByStepKicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {t.home.stepByStepTitle}
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              {t.home.stepByStepDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-blue-800/80">
            {/* Principle 1 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-white">
                {lang === 'vi' ? 'Phân Nhánh Vùng Miền Chuẩn Xác' : 'Precise Regional Custom Branching'}
              </h4>
              <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                {lang === 'vi'
                  ? 'Tôn trọng sự đa dạng, không áp đặt phong tục miền này lên miền khác, giúp các cuộc hôn nhân liên vùng êm ấm hòa hợp.'
                  : 'Respects cultural diversity without imposing one region’s practices on another, supporting harmonious inter-regional marriages.'}
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-white">
                {lang === 'vi' ? 'Trình Tự Từng Bước Tường Minh' : 'Clear Step-by-Step Sequences'}
              </h4>
              <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                {lang === 'vi'
                  ? 'Mỗi nghi lễ được hệ thống hóa chi tiết: Thời điểm, Lễ vật cần sắm, Thứ tự hành lễ, Lời thưa gửi và Điều kiêng kỵ văn minh.'
                  : 'Every rite is systematized with precise timing, required offerings checklist, procedural order, speeches, and civil advice.'}
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-white">
                {t.home.neutralityBadge}
              </h4>
              <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                {t.home.neutralityDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call To Action to Explore or Ask Question */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
          {lang === 'vi' ? 'Gia Đình Bạn Đang Chuẩn Bị Cho Dịp Đại Sự Nào?' : 'Which Milestone Is Your Family Preparing For?'}
        </h3>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          {lang === 'vi'
            ? 'Khám phá ngay trình tự nghi thức chuẩn mực hoặc đặt câu hỏi để nhận lời tư vấn phù hợp nhất với tập quán gia đình bạn.'
            : 'Explore standardized ritual workflows or submit your question for tailored advice respecting your family heritage.'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => onNavigateScreen('rituals')}
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>{t.nav.rituals}</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigateScreen('planner')}
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 transition-all cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>{t.nav.planner}</span>
          </button>
        </div>
      </section>
    </div>
  );
}
