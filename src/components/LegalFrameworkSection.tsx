import { useState } from 'react';
import { LEGAL_ARTICLES } from '../data/legalReferences';
import { Scale, ShieldCheck, AlertCircle, PhoneCall } from 'lucide-react';

export default function LegalFrameworkSection() {
  const [selectedArticle, setSelectedArticle] = useState(LEGAL_ARTICLES[0]);

  return (
    <section id="phap-ly" className="py-16 lg:py-24 border-b border-stone-200 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-semibold mb-2">
            <Scale className="w-4 h-4 text-amber-800" />
            <span>Hành Lang Pháp Lý Nước CHXHCN Việt Nam</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Pháp luật bảo hộ niềm tin lành mạnh, nghiêm trị kẻ trục lợi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Pháp luật Việt Nam tôn trọng tự do tín ngưỡng của mọi người dân, đồng thời thiết lập chế tài
            hình sự nghiêm khắc lên đến 10 năm tù giam đối với các hành vi buôn thần bán thánh, lừa đảo mê tín dị đoan.
          </p>
        </div>

        {/* 2-Column Split: Law Selector + Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Law Tabs */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-2">
              Các Văn Bản Quy Phạm Nổi Bật:
            </span>
            {LEGAL_ARTICLES.map((article) => {
              const isSelected = selectedArticle.code === article.code;
              return (
                <button
                  key={article.code}
                  onClick={() => setSelectedArticle(article)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-950 text-white border-amber-950 shadow-sm'
                      : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={isSelected ? 'text-amber-300 font-mono' : 'text-amber-900 font-mono'}>
                      {article.article}
                    </span>
                    <span className={isSelected ? 'text-stone-300' : 'text-stone-500'}>
                      {article.code}
                    </span>
                  </div>
                  <div className="font-semibold text-sm">{article.title}</div>
                  <div className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                    {article.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Full Statutory Extract */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-stone-200 shadow-xs p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="text-xs text-amber-900 font-mono uppercase tracking-wider">
                {selectedArticle.name}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
                {selectedArticle.article}: {selectedArticle.title}
              </h3>
            </div>

            {/* Exact Quote */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                Trích văn bản pháp luật nguyên văn:
              </span>
              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-800 leading-relaxed font-serif whitespace-pre-line italic">
                "{selectedArticle.quote}"
              </div>
            </div>

            {/* Penalty & Real Application */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-rose-50/60 border border-rose-200 space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-900 block">
                  Chế tài xử phạt:
                </span>
                <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
                  {selectedArticle.penalty}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-emerald-50/60 border border-emerald-200 space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900 block">
                  Ý nghĩa áp dụng thực tiễn:
                </span>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  {selectedArticle.application}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Advisory Callout: What to do if being scammed */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-stone-200 shadow-xs">
          <div className="flex items-center gap-2 text-rose-900 font-semibold text-sm mb-3">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            <span>Cần làm gì nếu bạn hoặc người thân đang bị đối tượng tâm linh thao túng, tống tiền?</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-600">
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <strong className="text-stone-900 block mb-1">1. Thu thập chứng cứ:</strong>
              Ghi âm cuộc gọi, chụp màn hình tin nhắn dọa nạt, lưu biên lai chuyển khoản ngân hàng hoặc giấy tờ giao nhận tiền.
            </div>
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <strong className="text-stone-900 block mb-1">2. Trình báo cơ quan chức năng:</strong>
              Liên hệ ngay Công an phường/xã sở tại hoặc gửi đơn tố giác tội phạm theo Điều 320 và Điều 174 BLHS.
            </div>
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <strong className="text-stone-900 block mb-1">3. Cách ly tâm lý:</strong>
              Đưa người thân rời xa khỏi tầm ảnh hưởng của đối tượng, tham vấn bác sĩ tâm lý hoặc người có uy tín để giải tỏa nỗi sợ.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
