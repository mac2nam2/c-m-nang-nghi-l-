import { useState } from 'react';
import { analyzePhenomenon, AnalysisOutput } from '../services/aiAnalyzer';
import { Sparkles, Send, CheckCircle2, AlertTriangle, AlertOctagon, Scale, ShieldAlert, HeartHandshake, RefreshCw } from 'lucide-react';

export default function InteractiveAnalyzer() {
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisOutput | null>(null);

  const sampleQueries = [
    'Thầy bói phán tôi bị duyên âm phải chi 15 triệu làm lễ cắt',
    'Nhà tôi rằm tháng 7 đốt 3 biệt thự và siêu xe giấy',
    'Đi lễ đền Bà Chúa Kho vay vốn làm ăn đầu năm',
    'Người thân bị bệnh nặng nhưng đòi uống nước tàn nhang trừ tà',
    'Thắp hương giỗ tổ tiên và làm mâm cơm ấm cúng gia đình'
  ];

  const handleAnalyze = async (queryToAnalyze?: string) => {
    const text = (queryToAnalyze || inputQuery).trim();
    if (!text) return;

    if (queryToAnalyze) {
      setInputQuery(queryToAnalyze);
    }

    setLoading(true);
    setResult(null);

    try {
      const output = await analyzePhenomenon(text);
      setResult(output);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (classification: AnalysisOutput['classification']) => {
    switch (classification) {
      case 'belief':
        return (
          <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Tín ngưỡng truyền thống lành mạnh</span>
          </div>
        );
      case 'borderline':
        return (
          <div className="flex items-center gap-2 text-amber-800 font-semibold text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Ranh giới nhạy cảm — Cần cảnh giác biến tướng</span>
          </div>
        );
      case 'superstition':
        return (
          <div className="flex items-center gap-2 text-rose-800 font-semibold text-sm">
            <AlertOctagon className="w-4 h-4 text-rose-600" />
            <span>Mê tín dị đoan — Tiềm ẩn nguy hại & Trục lợi</span>
          </div>
        );
    }
  };

  return (
    <section id="phan-tich-ai" className="py-16 lg:py-24 border-b border-stone-200 bg-stone-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-semibold mb-2">
            <Sparkles className="w-4 h-4 text-amber-800" />
            <span>Công Cụ Khảo Nghiệm Trực Quan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Nhận diện hiện tượng tâm linh của bạn
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Bạn đang băn khoăn về một lời dặn của thầy bói, một hủ tục trong gia đình, hay một nghi thức bạn sắp tham gia?
            Hãy nhập vào đây để nhận phân tích khách quan, nhân văn và căn cứ pháp luật.
          </p>
        </div>

        {/* Interactive Query Box */}
        <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="phenomenon-input" className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
              Nhập hiện tượng, câu chuyện hoặc băn khoăn của bạn:
            </label>
            <div className="relative">
              <textarea
                id="phenomenon-input"
                rows={3}
                placeholder="Ví dụ: 'Thầy bói bảo năm nay tôi bị tam tai phải đưa 10 triệu dâng sao giải hạn mới tránh được tai nạn, có nên đưa không?'"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                className="w-full p-4 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-900 focus:border-amber-900 leading-relaxed"
              />
            </div>
          </div>

          {/* Quick Preset Buttons for Beginners */}
          <div className="space-y-2">
            <span className="text-xs text-stone-500 block">Hoặc bấm chọn một trường hợp người mới hay thắc mắc:</span>
            <div className="flex flex-wrap gap-2">
              {sampleQueries.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnalyze(sample)}
                  className="text-left text-xs text-stone-600 bg-stone-100 hover:bg-amber-50 hover:text-amber-900 hover:border-amber-200 border border-stone-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  "{sample}"
                </button>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-stone-400">
              * Dữ liệu được đối chiếu với Luật Tín ngưỡng tôn giáo & Điều 320 BLHS
            </span>
            <button
              onClick={() => handleAnalyze()}
              disabled={loading || !inputQuery.trim()}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-amber-900 hover:bg-amber-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Đang phân tích...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Phân Tích Ngay</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Analysis Output Section */}
        {result && (
          <div className="mt-8 bg-white rounded-xl border border-stone-200 shadow-md p-6 sm:p-8 space-y-6">
            {/* Classification Header */}
            <div className="border-b border-stone-200 pb-4">
              <div className="text-xs uppercase tracking-wider text-stone-500 mb-1">
                Kết quả khảo sát hiện tượng
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  {result.classificationLabel}
                </h3>
                {getStatusBadge(result.classification)}
              </div>
              <p className="mt-3 text-sm text-stone-700 leading-relaxed font-medium bg-stone-50 p-3 rounded-lg border border-stone-200">
                {result.summary}
              </p>
            </div>

            {/* 4 Analytical Quadrants */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box 1: Tâm lý đằng sau */}
              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                  1. Tâm lý & Động cơ sâu xa:
                </span>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {result.psychologicalMotive}
                </p>
              </div>

              {/* Box 2: Rủi ro thực tế */}
              <div className="p-4 rounded-lg bg-rose-50/50 border border-rose-200 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
                  2. Cảnh báo rủi ro thực tế:
                </span>
                <ul className="text-xs sm:text-sm text-rose-950 space-y-1 list-disc pl-4">
                  {result.riskEvaluation.map((risk, i) => (
                    <li key={i}>{risk}</li>
                  ))}
                </ul>
              </div>

              {/* Box 3: Lời khuyên văn minh */}
              <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-200 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  3. Lời khuyên hành động sáng suốt:
                </span>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  {result.civilRecommendation}
                </p>
              </div>

              {/* Box 4: Ứng xử khéo léo với gia đình */}
              <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-amber-700" />
                  4. Cách nói chuyện khéo léo với người thân:
                </span>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  {result.familyAdvice}
                </p>
              </div>
            </div>

            {/* Legal Basis Footer */}
            <div className="pt-4 border-t border-stone-200 text-xs text-stone-600 flex items-start gap-2 bg-stone-50 p-3 rounded-lg border border-stone-200">
              <Scale className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900">Căn cứ Pháp luật Việt Nam: </strong>
                {result.legalBasis}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
