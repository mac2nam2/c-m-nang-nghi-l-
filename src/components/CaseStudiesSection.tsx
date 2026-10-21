import { useState, useMemo } from 'react';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudy, CategoryType } from '../types';
import { Search, X, CheckCircle2, AlertTriangle, AlertOctagon, Scale } from 'lucide-react';

export default function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filteredCases = useMemo(() => {
    return CASE_STUDIES.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.civilRecommendation.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const getClassificationBadge = (classification: CaseStudy['classification']) => {
    switch (classification) {
      case 'belief':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Tín ngưỡng lành mạnh
          </span>
        );
      case 'borderline':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            Ranh giới dễ biến tướng
          </span>
        );
      case 'superstition':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-800">
            <AlertOctagon className="w-3.5 h-3.5 text-rose-600" />
            Mê tín dị đoan vi phạm
          </span>
        );
    }
  };

  return (
    <section id="tinh-huong" className="py-16 lg:py-24 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold mb-2">
              Khảo Cứu Thực Tiễn Đời Sống
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              12 Tình huống điển hình trong đời sống người Việt
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-2xl">
              Từ việc cúng lễ gia tiên, dâng sao giải hạn, xem bói tình duyên đến chữa bệnh bằng bùa chú —
              hãy xem xét bản chất và nguy cơ biến tướng của từng hành vi.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Tìm tình huống, từ khóa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-900 focus:border-amber-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters (interactive segmented tabs) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'all', label: 'Tất cả (12)' },
            { id: 'family', label: 'Gia đình & Lễ Tết' },
            { id: 'temple', label: 'Cúng tế & Đền chùa' },
            { id: 'divination', label: 'Bói toán & Cầu tài' },
            { id: 'healing', label: 'Sức khỏe & Chữa bệnh' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryType)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-950 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className="p-5 rounded-xl border border-stone-200 bg-[#FAF8F5] hover:bg-white hover:border-amber-900/40 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Unboxed Status Header */}
                <div className="flex items-center justify-between gap-2 border-b border-stone-200/80 pb-2">
                  {getClassificationBadge(item.classification)}
                  {item.isPopular && (
                    <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">
                      Phổ biến
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-stone-900 group-hover:text-amber-950 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Card Footer: Civil Advice Kicker */}
              <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs">
                <span className="text-amber-900 font-medium group-hover:underline">
                  Xem phân tích chi tiết & lời khuyên →
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-12 text-stone-500 text-sm">
            Không tìm thấy tình huống nào phù hợp với từ khóa "{searchQuery}".
          </div>
        )}
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl border border-stone-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <div className="mb-1.5">{getClassificationBadge(selectedCase.classification)}</div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  {selectedCase.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Structured Analysis */}
            <div className="space-y-4 text-sm text-stone-700">
              <div>
                <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider mb-1">
                  1. Hiện tượng & Biểu hiện thực tế:
                </h4>
                <p className="leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200">
                  {selectedCase.manifestation}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider mb-1">
                  2. Giá trị văn hóa / Bản chất:
                </h4>
                <p className="leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200">
                  {selectedCase.culturalValue}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-rose-950 text-xs uppercase tracking-wider mb-1">
                  3. Nguy cơ biến tướng & Tác hại:
                </h4>
                <p className="leading-relaxed bg-rose-50/60 p-3 rounded-lg border border-rose-200 text-rose-900">
                  {selectedCase.deviationRisk}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-950 text-xs uppercase tracking-wider mb-1">
                  4. Lời khuyên văn minh & Hành động đúng:
                </h4>
                <p className="leading-relaxed bg-emerald-50/60 p-3 rounded-lg border border-emerald-200 text-emerald-900">
                  {selectedCase.civilRecommendation}
                </p>
              </div>

              {selectedCase.legalBasis && (
                <div className="pt-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-900 uppercase tracking-wider mb-1">
                    <Scale className="w-3.5 h-3.5 text-amber-900" />
                    5. Căn cứ Pháp luật Việt Nam:
                  </div>
                  <p className="text-xs text-stone-600 bg-amber-50/50 p-3 rounded-lg border border-amber-200 leading-relaxed font-mono">
                    {selectedCase.legalBasis}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-stone-200 pt-4 flex justify-end">
              <button
                onClick={() => setSelectedCase(null)}
                className="px-5 py-2 text-xs font-medium bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
