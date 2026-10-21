import { useState } from 'react';
import { COMPARISON_CRITERIA } from '../data/comparisons';
import { ComparisonCriterion } from '../types';
import { CheckCircle2, AlertOctagon, HelpCircle, ArrowRight } from 'lucide-react';

export default function ComparisonMatrix() {
  const [selectedCriterion, setSelectedCriterion] = useState<ComparisonCriterion>(COMPARISON_CRITERIA[0]);
  const [activeView, setActiveView] = useState<'matrix' | 'deepDive'>('matrix');

  return (
    <section id="doi-chieu" className="py-16 lg:py-24 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold mb-2">
            Bộ Khung Đối Chiếu 6 Chiều Chuẩn Mực
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Lằn ranh bản chất giữa Tín ngưỡng và Mê tín dị đoan
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Ranh giới giữa sự thành kính tâm linh và sự u mê thực chất rất rõ ràng khi soi chiếu qua 6 thước đo:
            nguồn gốc, động cơ, nghi thức, kinh tế, xã hội và pháp luật.
          </p>

          {/* View Mode Segmented Controls (functional interactive tab buttons) */}
          <div className="mt-6 inline-flex p-1 bg-stone-100 rounded-lg border border-stone-200">
            <button
              onClick={() => setActiveView('matrix')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeView === 'matrix'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Toàn Cảnh Bảng Đối Chiếu
            </button>
            <button
              onClick={() => setActiveView('deepDive')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeView === 'deepDive'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Khảo Cứu Từng Chiều Sâu
            </button>
          </div>
        </div>

        {activeView === 'matrix' ? (
          /* Matrix Table View */
          <div className="space-y-6">
            <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-900">
                    <th className="py-4 px-5 text-xs font-semibold uppercase tracking-wider w-1/5">
                      Thước Đo Đối Chiếu
                    </th>
                    <th className="py-4 px-5 text-xs font-semibold uppercase tracking-wider text-emerald-900 bg-emerald-50/50 w-2/5 border-l border-stone-200">
                      Tín Ngưỡng Lành Mạnh
                    </th>
                    <th className="py-4 px-5 text-xs font-semibold uppercase tracking-wider text-rose-900 bg-rose-50/50 w-2/5 border-l border-stone-200">
                      Mê Tín Dị Đoan Biến Tướng
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-sm">
                  {COMPARISON_CRITERIA.map((criterion) => (
                    <tr
                      key={criterion.id}
                      className="hover:bg-stone-50/60 transition-colors cursor-pointer"
                      onClick={() => {
                        setSelectedCriterion(criterion);
                        setActiveView('deepDive');
                      }}
                    >
                      <td className="py-4 px-5 font-medium text-stone-900 align-top">
                        <div className="text-xs text-amber-900/80 mb-1 font-mono">
                          {criterion.order} / 06
                        </div>
                        <div className="font-semibold">{criterion.dimension}</div>
                        <div className="text-xs text-stone-500 mt-1">{criterion.title}</div>
                      </td>
                      <td className="py-4 px-5 bg-emerald-50/20 text-stone-800 align-top border-l border-stone-200">
                        <div className="font-medium text-emerald-950 mb-1">
                          {criterion.belief.title}
                        </div>
                        <p className="text-stone-600 mb-2 leading-relaxed">
                          {criterion.belief.description}
                        </p>
                        <div className="text-xs text-stone-500 italic">
                          <strong className="text-stone-700 not-italic">Ví dụ: </strong>
                          {criterion.belief.example}
                        </div>
                      </td>
                      <td className="py-4 px-5 bg-rose-50/20 text-stone-800 align-top border-l border-stone-200">
                        <div className="font-medium text-rose-950 mb-1">
                          {criterion.superstition.title}
                        </div>
                        <p className="text-stone-600 mb-2 leading-relaxed">
                          {criterion.superstition.description}
                        </p>
                        <div className="text-xs text-stone-500 italic">
                          <strong className="text-stone-700 not-italic">Ví dụ: </strong>
                          {criterion.superstition.example}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
              <span>* Nhấp vào bất kỳ hàng nào để xem phân tích chi tiết và đối chiếu trực quan.</span>
              <button
                onClick={() => setActiveView('deepDive')}
                className="text-amber-900 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                Khám phá chuyên sâu <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Deep Dive Tabbed View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Rail: Criteria Selector */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-3">
                Chọn Thước Đo Khảo Cứu:
              </span>
              {COMPARISON_CRITERIA.map((criterion) => {
                const isSelected = selectedCriterion.id === criterion.id;
                return (
                  <button
                    key={criterion.id}
                    onClick={() => setSelectedCriterion(criterion)}
                    className={`w-full text-left p-3.5 rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-950 text-white border-amber-950 shadow-sm'
                        : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className={isSelected ? 'text-amber-300' : 'text-amber-900 font-mono'}>
                        {criterion.order}
                      </span>
                      <span className={isSelected ? 'text-amber-200' : 'text-stone-500'}>
                        {criterion.dimension}
                      </span>
                    </div>
                    <div className="font-medium text-sm line-clamp-1">{criterion.title}</div>
                  </button>
                );
              })}
            </div>

            {/* Right Pane: Side-by-Side Deep Analysis Card */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-6 sm:p-8 rounded-xl border border-stone-200 bg-stone-50/70 shadow-xs">
                {/* Header of selected criterion */}
                <div className="border-b border-stone-200 pb-4 mb-6">
                  <div className="text-xs font-mono uppercase text-amber-900 mb-1">
                    Thước Đo {selectedCriterion.order} · {selectedCriterion.dimension}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                    {selectedCriterion.title}
                  </h3>
                </div>

                {/* 2 Cards side-by-side: Belief vs Superstition */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Belief Card */}
                  <div className="p-5 rounded-lg bg-white border border-emerald-200 shadow-xs space-y-4">
                    <div className="flex items-center gap-2 text-emerald-800 font-semibold text-base">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{selectedCriterion.belief.title}</span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {selectedCriterion.belief.description}
                    </p>
                    <div className="space-y-2 pt-2 border-t border-emerald-100">
                      <span className="text-xs font-semibold text-stone-700 block">Đặc trưng nhận diện:</span>
                      <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4">
                        {selectedCriterion.belief.characteristics.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-emerald-50/60 rounded text-xs text-emerald-950">
                      <strong className="font-semibold">Thực tế: </strong>
                      {selectedCriterion.belief.example}
                    </div>
                  </div>

                  {/* Superstition Card */}
                  <div className="p-5 rounded-lg bg-white border border-rose-200 shadow-xs space-y-4">
                    <div className="flex items-center gap-2 text-rose-800 font-semibold text-base">
                      <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0" />
                      <span>{selectedCriterion.superstition.title}</span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {selectedCriterion.superstition.description}
                    </p>
                    <div className="space-y-2 pt-2 border-t border-rose-100">
                      <span className="text-xs font-semibold text-stone-700 block">Dấu hiệu cảnh báo:</span>
                      <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4">
                        {selectedCriterion.superstition.characteristics.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-rose-50/60 rounded text-xs text-rose-950">
                      <strong className="font-semibold">Thực tế: </strong>
                      {selectedCriterion.superstition.example}
                    </div>
                  </div>
                </div>

                {/* Key Takeaway Note */}
                <div className="mt-6 p-4 rounded-lg bg-amber-50/80 border border-amber-200 text-stone-800 text-sm flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-amber-900 block text-xs uppercase tracking-wider mb-1">
                      Kết Luận Cốt Lõi:
                    </span>
                    <p className="font-medium text-stone-800">
                      {selectedCriterion.keyTakeaway}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
