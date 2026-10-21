import { useState, useMemo } from 'react';
import {
  RITUALS_DATA,
  REGIONS_INFO,
  RitualCategory,
  Region,
  RitualStep
} from '../data/ritualsData';
import { Language, TRANSLATIONS } from '../i18n/translations';
import {
  Heart,
  Flame,
  Calendar,
  CheckCircle2,
  Copy,
  Check,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  MapPin,
  Clock,
  BookOpen,
  Scale,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Layers,
  FileText,
  Info
} from 'lucide-react';

interface ScreenRitualsProps {
  initialCategory?: RitualCategory;
  initialRegion?: Region | 'all';
  lang: Language;
  onNavigateToPlanner?: (promptText?: string) => void;
}

export default function ScreenRituals({
  initialCategory = 'cuoi-hoi',
  initialRegion = 'all',
  lang,
  onNavigateToPlanner
}: ScreenRitualsProps) {
  const t = TRANSLATIONS[lang];

  // Active state
  const [activeCategory, setActiveCategory] = useState<RitualCategory>(initialCategory);
  const [activeRegion, setActiveRegion] = useState<Region | 'all'>(initialRegion);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [copiedVow, setCopiedVow] = useState<boolean>(false);

  // Local checklist state for preparations
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Category data
  const currentCategoryData = useMemo(() => {
    return RITUALS_DATA[activeCategory];
  }, [activeCategory]);

  // Steps list
  const steps = currentCategoryData.steps;

  // Active step
  const currentStep: RitualStep = steps[currentStepIndex] || steps[0];

  // Handle switching category
  const handleSelectCategory = (cat: RitualCategory) => {
    setActiveCategory(cat);
    setCurrentStepIndex(0);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Handle step index change
  const handleSelectStep = (idx: number) => {
    setCurrentStepIndex(idx);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  // Copy speech vows to clipboard
  const handleCopyVow = () => {
    const vowText = currentStep.speechVows[lang];
    navigator.clipboard.writeText(vowText);
    setCopiedVow(true);
    setTimeout(() => setCopiedVow(false), 2500);
  };

  // Toggle preparation checklist item
  const togglePrepItem = (itemKey: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  // Category Icon helper
  const getCategoryIcon = (cat: RitualCategory) => {
    switch (cat) {
      case 'cuoi-hoi':
        return <Heart className="w-5 h-5 text-rose-600" />;
      case 'tang-le':
        return <Flame className="w-5 h-5 text-slate-700" />;
      case 'gio-chap':
        return <Calendar className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* 1. Header Title & Intro Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-blue-500/30 text-blue-200 px-3.5 py-1.5 rounded-full border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <span>{t.rituals.title}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
            {currentCategoryData.name[lang]}
          </h1>
          <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-normal">
            {currentCategoryData.overview[lang]}
          </p>
        </div>
      </div>

      {/* 2. Primary Navigation Controls: Category Selector & Regional Branching */}
      <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-4 sm:p-6 space-y-6">
        {/* Category Tabs: Cưới Hỏi | Tang Lễ | Giỗ Chạp */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            {t.rituals.selectRitual}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(['cuoi-hoi', 'tang-le', 'gio-chap'] as RitualCategory[]).map((cat) => {
              const data = RITUALS_DATA[cat];
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleSelectCategory(cat)}
                  className={`flex items-center gap-3.5 p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/70 shadow-xs'
                      : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50/60'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${isSelected ? 'bg-white shadow-xs' : 'bg-slate-100'}`}>
                    {getCategoryIcon(cat)}
                  </div>
                  <div>
                    <div className={`text-base font-bold ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>
                      {data.name[lang]}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {data.steps.length} {lang === 'vi' ? 'bước nghi thức tuần tự' : 'sequential ritual steps'}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Regional Branching Filter: Toàn cảnh 3 miền | Miền Bắc | Miền Trung | Miền Nam */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>{t.rituals.selectRegion}</span>
            </label>
            <span className="text-xs text-slate-500 italic">
              {lang === 'vi' ? 'Dung hòa tập quán vùng miền, xóa bỏ định kiến' : 'Harmonizing regional customs'}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setActiveRegion('all')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer border ${
                activeRegion === 'all'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
              }`}
            >
              🌏 {t.rituals.allRegions}
            </button>

            {(['bac', 'trung', 'nam'] as Region[]).map((reg) => {
              const rInfo = REGIONS_INFO[reg];
              const isSelected = activeRegion === reg;
              return (
                <button
                  key={reg}
                  type="button"
                  onClick={() => setActiveRegion(reg)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
                  }`}
                >
                  📍 {rInfo.name[lang]}
                </button>
              );
            })}
          </div>

          {/* Regional Quick Info Banner */}
          {activeRegion !== 'all' && (
            <div className="mt-4 p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-sm text-blue-900 flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">{REGIONS_INFO[activeRegion].name[lang]}: </span>
                <span className="text-slate-700">{REGIONS_INFO[activeRegion].characteristic[lang]}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Sequential Stepper Navigation (Trình tự từng bước trực quan) */}
      <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-4 sm:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-700" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
              {t.rituals.stepListTitle} ({currentStepIndex + 1} / {steps.length})
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={currentStepIndex === 0}
              className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${
                currentStepIndex === 0
                  ? 'border-slate-200 text-slate-400 cursor-not-allowed bg-slate-50'
                  : 'border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{lang === 'vi' ? 'Bước trước' : 'Previous'}</span>
            </button>
            <button
              type="button"
              onClick={handleNextStep}
              disabled={currentStepIndex === steps.length - 1}
              className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${
                currentStepIndex === steps.length - 1
                  ? 'border-slate-200 text-slate-400 cursor-not-allowed bg-slate-50'
                  : 'border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer'
              }`}
            >
              <span className="hidden sm:inline">{lang === 'vi' ? 'Bước kế tiếp' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stepper Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 pt-2">
          {steps.map((st, idx) => {
            const isActive = idx === currentStepIndex;
            return (
              <button
                key={st.stepNumber}
                type="button"
                onClick={() => handleSelectStep(idx)}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? 'border-blue-600 bg-blue-600 text-white shadow-sm ring-2 ring-blue-300'
                    : 'border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 text-slate-700'
                }`}
              >
                <div className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-blue-100' : 'text-blue-600'}`}>
                  {t.rituals.stepPrefix} {st.stepNumber}
                </div>
                <div className={`text-xs sm:text-sm font-bold line-clamp-2 mt-1 leading-snug ${isActive ? 'text-white' : 'text-slate-900'}`}>
                  {st.title[lang]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Active Step Detail Section: The Comprehensive Ritual Guide */}
      <div className="bg-white rounded-3xl border border-blue-200 shadow-md p-6 sm:p-10 space-y-10">
        {/* Step Banner */}
        <div className="border-b border-slate-100 pb-6 space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
              {currentStep.stepNumber}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-3 py-1 rounded-md">
              {currentCategoryData.name[lang]}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
              <Clock className="w-3.5 h-3.5 text-slate-600" />
              <span>{t.rituals.timeframe} {currentStep.timeframe[lang]}</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            {currentStep.title[lang]}
          </h2>

          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 text-slate-700 text-sm sm:text-base leading-relaxed">
            <strong className="text-blue-900 font-semibold">{t.rituals.significance} </strong>
            {currentStep.significance[lang]}
          </div>
        </div>

        {/* Section A: Preparations & Offerings (Interactive Checklist) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>{t.rituals.preparations}</span>
            </h3>
            <span className="text-xs text-slate-500 hidden sm:inline">
              {lang === 'vi' ? 'Bấm để đánh dấu đồ lễ đã chuẩn bị' : 'Click to check off prepared items'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentStep.preparations[lang].map((prep, i) => {
              const itemKey = `${currentStep.stepNumber}-prep-${i}`;
              const isChecked = !!checkedItems[itemKey];
              return (
                <div
                  key={i}
                  onClick={() => togglePrepItem(itemKey)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isChecked
                      ? 'bg-emerald-50/60 border-emerald-300 text-emerald-900'
                      : 'bg-slate-50/70 border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 text-slate-800'
                  }`}
                >
                  <div className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                    isChecked
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-slate-400 bg-white'
                  }`}>
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <span className={`text-sm leading-relaxed ${isChecked ? 'line-through opacity-80' : ''}`}>
                    {prep}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section B: Detailed Step-by-Step Procedures */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span>{t.rituals.procedures}</span>
          </h3>

          <div className="space-y-3">
            {currentStep.procedures[lang].map((proc, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 text-sm sm:text-base text-slate-800 leading-relaxed"
              >
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>{proc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section C: Model Speech / Ancestral Prayer (Lời thưa gửi & Văn khấn mẫu) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              <span>{t.rituals.speechVows}</span>
            </h3>

            <button
              type="button"
              onClick={handleCopyVow}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 transition-colors cursor-pointer"
            >
              {copiedVow ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedVow ? (lang === 'vi' ? 'Đã sao chép!' : 'Copied!') : (lang === 'vi' ? 'Sao chép văn khấn' : 'Copy speech text')}</span>
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200 text-slate-800 font-serif text-sm sm:text-base leading-relaxed whitespace-pre-line shadow-2xs">
            {currentStep.speechVows[lang]}
          </div>
        </div>

        {/* Section D: Regional Variations Side-by-Side (Bắc - Trung - Nam) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>{t.rituals.regionalDiff}</span>
            </h3>
            {activeRegion !== 'all' && (
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                {lang === 'vi' ? 'Đang lọc theo:' : 'Filtered:'} {REGIONS_INFO[activeRegion].name[lang]}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Miền Bắc */}
            <div
              className={`p-5 rounded-2xl border transition-all ${
                activeRegion === 'bac' || activeRegion === 'all'
                  ? 'bg-blue-50/40 border-blue-200 ring-2 ring-blue-100'
                  : 'bg-slate-50 border-slate-200 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-blue-900">📍 {REGIONS_INFO.bac.name[lang]}</span>
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                  {lang === 'vi' ? 'Khuôn phép' : 'Formal'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentStep.regionalNotes.bac[lang]}
              </p>
            </div>

            {/* Miền Trung */}
            <div
              className={`p-5 rounded-2xl border transition-all ${
                activeRegion === 'trung' || activeRegion === 'all'
                  ? 'bg-emerald-50/40 border-emerald-200 ring-2 ring-emerald-100'
                  : 'bg-slate-50 border-slate-200 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-emerald-900">📍 {REGIONS_INFO.trung.name[lang]}</span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                  {lang === 'vi' ? 'Trầm tĩnh' : 'Solemn'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentStep.regionalNotes.trung[lang]}
              </p>
            </div>

            {/* Miền Nam */}
            <div
              className={`p-5 rounded-2xl border transition-all ${
                activeRegion === 'nam' || activeRegion === 'all'
                  ? 'bg-amber-50/40 border-amber-200 ring-2 ring-amber-100'
                  : 'bg-slate-50 border-slate-200 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-amber-900">📍 {REGIONS_INFO.nam.name[lang]}</span>
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                  {lang === 'vi' ? 'Ấm áp' : 'Warm'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentStep.regionalNotes.nam[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Section E: Neutrality Toward Faiths (Tôn trọng tự do tín ngưỡng) */}
        {currentStep.faithNotes && currentStep.faithNotes.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <span>{lang === 'vi' ? 'Góc Nhìn Trung Lập Với Mọi Tín Ngưỡng' : 'Interfaith Neutrality Perspectives'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentStep.faithNotes.map((fn, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-teal-50/50 border border-teal-200 space-y-1">
                  <div className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                    {fn.perspective}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {fn.note[lang]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section F: Mindful Civil Advice & Taboos (Lưu ý & Kiêng kỵ văn minh) */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            <span>{t.rituals.taboos}</span>
          </h3>

          <div className="p-5 rounded-2xl bg-blue-50/40 border border-blue-200 space-y-2">
            {currentStep.taboosCivilAdvice[lang].map((taboo, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>{taboo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stepper Footer: Previous / Next Buttons & Question Callout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={currentStepIndex === 0}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                currentStepIndex === 0
                  ? 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Bước trước' : 'Previous Step'}</span>
            </button>

            <button
              type="button"
              onClick={handleNextStep}
              disabled={currentStepIndex === steps.length - 1}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                currentStepIndex === steps.length - 1
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xs'
              }`}
            >
              <span>{lang === 'vi' ? 'Bước kế tiếp' : 'Next Step'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {onNavigateToPlanner && (
            <button
              type="button"
              onClick={() => onNavigateToPlanner(`Cần tư vấn thêm về ${currentStep.title[lang]} cho gia đình tôi`)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>{lang === 'vi' ? 'Đặt câu hỏi thực tế về bước này' : 'Ask AI about this step'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
