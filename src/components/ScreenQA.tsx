import { useState } from 'react';
import { analyzeUserSituationWithGemini, RitualQAResult } from '../services/geminiQAService';
import SITUATIONS_DATA from '../data/tinh_huong_nghi_le_vong_doi.json';
import { Language, TRANSLATIONS } from '../i18n/translations';
import {
  Sparkles,
  Send,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  MapPin,
  Scale,
  HeartHandshake,
  Layers,
  ChevronDown,
  ChevronUp,
  FileText,
  Search,
  AlertTriangle
} from 'lucide-react';

interface ScreenQAProps {
  lang: Language;
  prefilledPrompt?: string;
}

export default function ScreenQA({ lang, prefilledPrompt = '' }: ScreenQAProps) {
  const t = TRANSLATIONS[lang];
  const [inputText, setInputText] = useState(prefilledPrompt);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RitualQAResult | null>(null);

  // 30 situations browser drawer state (OPEN by default for high visibility)
  const [showCatalog, setShowCatalog] = useState(true);
  const [catalogSearch, setCatalogSearch] = useState('');
  const [selectedStageFilter, setSelectedStageFilter] = useState<string>('all');

  const sampleQuickPrompts = [
    {
      title: 'Đám cưới thông gia Bắc - Nam chọn tráp chẵn hay lẻ?',
      text: 'Gia đình tôi ở Hà Nội (miền Bắc), con trai chuẩn bị cưới vợ người Cần Thơ (miền Nam). Nhà trai muốn làm 7 tráp ăn hỏi theo phong tục miền Bắc nhưng nhà gái miền Nam lại chuộng số chẵn (6 tráp) và yêu cầu có cặp đèn cầy Long Phụng. Xin hướng dẫn cách chuẩn bị sính lễ dung hòa và thủ tục đúng phong tục.'
    },
    {
      title: 'Hậu sự người mất theo đạo Công giáo kết hợp bàn thờ tổ tiên',
      text: 'Người thân trong gia đình tôi vừa qua đời, người mất theo đạo Công giáo nhưng dòng họ xưa nay theo phong tục thờ cúng tổ tiên truyền thống. Xin hướng dẫn tổ chức lễ tang vừa đúng giáo luật Nhà thờ vừa trọn vẹn đạo hiếu thắp hương trước di ảnh tại tư gia.'
    },
    {
      title: 'Lễ Thôi nôi tròn 1 tuổi và tục bốc đồ dự đoán nghề nghiệp',
      text: 'Bé nhà tôi sắp tròn 1 tuổi, gia đình muốn tổ chức lễ thôi nôi. Cần chuẩn bị mâm cúng Mụ thế nào và thủ tục cho bé bốc đồ dự đoán tương lai diễn ra ra sao? Liệu tục bốc đồ này có bị xem là mê tín dị đoan không?'
    },
    {
      title: 'Tình huống chưa đủ dữ kiện (Thử nghiệm thông báo chuẩn)',
      text: 'Gia đình tôi sắp có việc lớn ở quê.'
    }
  ];

  const handleAnalyze = async (customText?: string) => {
    const textToAnalyze = (customText || inputText).trim();
    if (!textToAnalyze) return;

    if (customText) {
      setInputText(customText);
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await analyzeUserSituationWithGemini(textToAnalyze, lang);
      setResult(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Filter 30 situations catalog
  const filteredCatalog = SITUATIONS_DATA.filter((s) => {
    const matchStage = selectedStageFilter === 'all' || s.giai_doan_vong_doi === selectedStageFilter;
    const q = catalogSearch.toLowerCase().trim();
    const matchSearch =
      !q ||
      s.ten_tinh_huong.toLowerCase().includes(q) ||
      s.ten_nghi_le.toLowerCase().includes(q) ||
      s.mo_ta_tinh_huong.toLowerCase().includes(q);
    return matchStage && matchSearch;
  });

  const stagesList = Array.from(new Set(SITUATIONS_DATA.map((s) => s.giai_doan_vong_doi)));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-blue-700 font-bold bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
          {lang === 'vi' ? 'Trợ Lý Hỏi Đáp & Đối Chiếu Nghi Lễ Vòng Đời' : 'Life Cycle Ritual Consultation'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
          {t.planner.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          {lang === 'vi'
            ? 'Phân tích tình huống thực tế, đối chiếu tệp dữ liệu 30 nghi lễ chuẩn và các quy định pháp luật liên quan; giữ thái độ trung lập và tôn trọng sự đa dạng văn hóa.'
            : 'Analyze real-life scenarios against 30 standardized life-cycle ritual records and legal frameworks with complete neutrality.'}
        </p>
      </div>

      {/* 2. Interactive Input Panel */}
      <div className="bg-white rounded-3xl border border-blue-200 shadow-md p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-800">
            {t.planner.inputLabel}
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={4}
            placeholder={lang === 'vi'
              ? 'Ví dụ: "Gia đình tôi ở miền Bắc chuẩn bị cưới con gái cho chú rể miền Nam, băn khoăn về mâm tráp ăn hỏi và lễ lên đèn..." hoặc "Nghi lễ cúng giỗ đầu tại nhà cần sắm những gì?"...'
              : 'E.g., "Our Northern family is holding a wedding with a Southern bridegroom, how should we balance betrothal trays and ancestral candle rites?"...'}
            className="w-full p-4 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-100 text-slate-900 text-sm sm:text-base leading-relaxed transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Action Button & Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 italic max-w-md">
            {lang === 'vi'
              ? 'Hệ thống đối chiếu với tệp 30 tình huống mẫu. Nếu không đủ dữ kiện, hệ thống sẽ thông báo "Chưa đủ căn cứ để kết luận", không tự suy đoán.'
              : 'Grounded in 30 life-cycle ritual datasets. If context is insufficient, it strictly returns "Chưa đủ căn cứ để kết luận" without speculation.'}
          </div>

          <button
            type="button"
            onClick={() => handleAnalyze()}
            disabled={loading || !inputText.trim()}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
              loading || !inputText.trim()
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200'
            }`}
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{t.planner.analyzingBtn}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>{t.planner.analyzeBtn}</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Sample Scenarios */}
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t.planner.sampleLabel}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {sampleQuickPrompts.map((sample, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleAnalyze(sample.text)}
                className="text-left p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-xs font-semibold text-slate-800 flex items-start gap-2 cursor-pointer group"
              >
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="line-clamp-2 leading-snug">{sample.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Toggle 30 Standardized Life-Cycle Situations Browser */}
        <div className="pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setShowCatalog(!showCatalog)}
            className="flex items-center justify-between w-full p-3 bg-slate-50 hover:bg-blue-50/60 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>
                {lang === 'vi'
                  ? `Khám phá thư viện 30 tình huống nghi lễ vòng đời chuẩn (${SITUATIONS_DATA.length} hồ sơ mẫu)`
                  : `Browse Library of 30 Life-Cycle Ritual Situations (${SITUATIONS_DATA.length} cases)`}
              </span>
            </div>
            {showCatalog ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showCatalog && (
            <div className="mt-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-4">
              {/* Filter controls */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={catalogSearch}
                    onChange={(e) => setCatalogSearch(e.target.value)}
                    placeholder="Tìm trong 30 tình huống mẫu (đầy tháng, ăn hỏi, di quan, giỗ đầu...)"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 bg-white"
                  />
                </div>

                <select
                  value={selectedStageFilter}
                  onChange={(e) => setSelectedStageFilter(e.target.value)}
                  className="px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white font-medium text-slate-700"
                >
                  <option value="all">Tất cả giai đoạn ({SITUATIONS_DATA.length})</option>
                  {stagesList.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Items List */}
              <div className="max-h-72 overflow-y-auto space-y-2 pr-1">
                {filteredCatalog.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleAnalyze(item.mo_ta_tinh_huong)}
                    className="p-3 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-left cursor-pointer transition-all space-y-1"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-blue-900">{item.ten_tinh_huong}</span>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {item.giai_doan_vong_doi}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-1">
                      {item.mo_ta_tinh_huong}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Analysis & Guidance Result Display */}
      {result && (
        <div className="space-y-6 animate-fadeIn">
          {/* Status Condition: INSUFFICIENT_DATA */}
          {result.status === 'INSUFFICIENT_DATA' ? (
            <div className="bg-white rounded-3xl border-2 border-amber-300 shadow-md p-6 sm:p-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Trạng thái thông báo chính thức</span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-amber-900">
                    {result.thong_bao_chinh || 'Chưa đủ căn cứ để kết luận'}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                    {result.thong_tin_con_thieu}
                  </p>
                </div>
              </div>

              {/* Required Supplementary Questions */}
              {result.huong_dan_bo_sung && result.huong_dan_bo_sung.length > 0 && (
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-amber-700" />
                    <span>Hướng dẫn người dùng bổ sung thông tin cần thiết:</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-800">
                    {result.huong_dan_bo_sung.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Zero-Hallucination Commitment Notice */}
              <div className="text-xs text-slate-500 italic p-3 rounded-xl bg-slate-50 border border-slate-200">
                {result.disclaimer ||
                  'Nguyên tắc hệ thống: Tuyệt đối không tự suy đoán, bịa đặt phong tục, ý nghĩa nghi lễ, nguồn tham khảo, căn cứ pháp lý hoặc mức xử phạt khi chưa đủ dữ liệu xác minh.'}
              </div>
            </div>
          ) : (
            /* Status Condition: CONCLUDED (Đầy đủ 7 nội dung cốt lõi) */
            <div className="bg-white rounded-3xl border border-blue-200 shadow-xl p-6 sm:p-10 space-y-8">
              {/* Header: Tên nghi lễ & Giai đoạn vòng đời */}
              <div className="border-b border-slate-100 pb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-md">
                      {result.giai_doan_vong_doi || 'Nghi lễ vòng đời'}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Đã đối chiếu cẩm nang
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                    {result.ten_nghi_le}
                  </h2>
                </div>
              </div>

              {/* 1. Ý nghĩa văn hóa */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-rose-600" />
                  <span>1. Ý nghĩa văn hóa & giá trị nhân văn</span>
                </h3>
                <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100 text-slate-800 text-sm sm:text-base leading-relaxed">
                  {result.y_nghia_van_hoa}
                </div>
              </div>

              {/* 2. Đặc điểm nhận diện */}
              {result.dac_diem_nhan_dien && result.dac_diem_nhan_dien.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-600" />
                    <span>2. Đặc điểm nhận diện</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {result.dac_diem_nhan_dien.map((trait, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                        <span>{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Các bước thực hiện theo phong tục được ghi nhận */}
              {result.cac_buoc_thuc_hien && result.cac_buoc_thuc_hien.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span>3. Trình tự các bước thực hiện theo phong tục được ghi nhận</span>
                  </h3>
                  <div className="space-y-2.5">
                    {result.cac_buoc_thuc_hien.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-blue-50/40 border border-blue-100 text-sm text-slate-800 flex items-start gap-3.5 leading-relaxed"
                      >
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div>{step}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Sự khác biệt giữa các vùng miền hoặc cộng đồng */}
              {result.su_khac_biet_vung_mien && (
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>4. Sự khác biệt giữa các vùng miền & cộng đồng</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {result.su_khac_biet_vung_mien.mien_bac && (
                      <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-1">
                        <span className="text-xs font-bold text-blue-900 block">📍 Miền Bắc</span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {result.su_khac_biet_vung_mien.mien_bac}
                        </p>
                      </div>
                    )}
                    {result.su_khac_biet_vung_mien.mien_trung && (
                      <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-1">
                        <span className="text-xs font-bold text-emerald-900 block">📍 Miền Trung</span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {result.su_khac_biet_vung_mien.mien_trung}
                        </p>
                      </div>
                    )}
                    {result.su_khac_biet_vung_mien.mien_nam && (
                      <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1">
                        <span className="text-xs font-bold text-amber-900 block">📍 Miền Nam</span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {result.su_khac_biet_vung_mien.mien_nam}
                        </p>
                      </div>
                    )}
                  </div>
                  {result.su_khac_biet_vung_mien.cong_dong && (
                    <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs sm:text-sm text-teal-900">
                      <strong>Cộng đồng tôn giáo / Nếp sống mới: </strong>
                      {result.su_khac_biet_vung_mien.cong_dong}
                    </div>
                  )}
                </div>
              )}

              {/* 5. Căn cứ pháp lý phù hợp nếu có liên quan */}
              {result.can_cu_phap_ly && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-blue-600" />
                    <span>5. Căn cứ pháp lý phù hợp & Phân định pháp luật vs Phong tục</span>
                  </h3>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    {result.can_cu_phap_ly.co_lien_quan ? (
                      <>
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                            {result.can_cu_phap_ly.ten_van_ban}
                          </span>
                          {result.can_cu_phap_ly.dieu_khoan && (
                            <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200">
                              {result.can_cu_phap_ly.dieu_khoan}
                            </span>
                          )}
                        </div>

                        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <strong>Nội dung áp dụng: </strong>
                          {result.can_cu_phap_ly.noi_dung_ap_dung}
                        </div>

                        {result.can_cu_phap_ly.hinh_thuc_xu_ly && (
                          <div className="text-xs text-blue-900 bg-blue-50 p-2.5 rounded-lg border border-blue-200">
                            <strong>Chế tài / Lưu ý xử lý: </strong>
                            {result.can_cu_phap_ly.hinh_thuc_xu_ly}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-xs sm:text-sm text-slate-700">
                        <strong>Phạm vi pháp luật: </strong>
                        Không có chế tài xử phạt; đây là quyền tự do phong tục tập quán lành mạnh, tự nguyện và thỏa thuận giữa các bên gia đình.
                      </div>
                    )}

                    {result.can_cu_phap_ly.phan_biet_phap_luat_phong_tuc && (
                      <div className="text-xs text-slate-600 italic pt-1 border-t border-slate-200">
                        {result.can_cu_phap_ly.phan_biet_phap_luat_phong_tuc}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 6. Tôn trọng sự đa dạng văn hóa */}
              <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200 flex items-start gap-3 text-xs sm:text-sm text-teal-900">
                <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-teal-950 font-semibold mb-0.5">
                    Tôn trọng sự đa dạng văn hóa, vùng miền và quan điểm cá nhân:
                  </strong>
                  {result.ton_trong_da_dang ||
                    'Hệ thống không mặc định nghi lễ là bắt buộc đối với tất cả mọi người. Mọi thực hành cần dựa trên sự tự nguyện, hòa hợp của gia đình và điều kiện kinh tế thực tế.'}
                </div>
              </div>

              {/* 7. Disclaimer */}
              <div className="text-xs text-slate-500 italic pt-2 border-t border-slate-100">
                {result.disclaimer ||
                  'Lưu ý: Thông tin phong tục mang tính tham khảo văn hóa, phân biệt rõ với quy định pháp luật chính thức của Nhà nước.'}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
