interface HeroProps {
  onExplore: (sectionId: string) => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header Decker */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-amber-900 font-semibold mb-4">
          <span>Tri thức Văn hóa & Đời sống</span>
          <span aria-hidden="true">·</span>
          <span>Căn cứ Luật Tín ngưỡng, tôn giáo & Bộ luật Hình sự</span>
          <span aria-hidden="true">·</span>
          <span>Khảo cứu chuyên sâu</span>
        </div>

        {/* 2-Column Split: Editorial Manifesto + Hero Photographic Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Headline and Curatorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-[1.2] text-balance">
                Định vị ranh giới giữa nét đẹp tín ngưỡng và bóng tối mê tín dị đoan
              </h1>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl">
                Tín ngưỡng là điểm tựa tâm hồn, kết tinh lòng tri ân nguồn cội và đạo lý{' '}
                <em className="font-serif italic text-stone-900 font-medium">"Uống nước nhớ nguồn"</em>.
                Trái lại, mê tín dị đoan thao túng nỗi sợ hãi và lòng tham, làm xói mòn lý trí, gây kiệt quệ
                kinh tế và hủy hoại hạnh phúc gia đình.
              </p>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                Trang tri thức này cung cấp bộ khung đối chiếu 6 chiều, 12 tình huống thực tế, trích lục pháp lý
                và công cụ nhận diện thông minh — giúp mỗi người xây dựng nhãn quan tâm linh sáng suốt và văn minh.
              </p>
            </div>

            {/* CTAs and Unboxed Metadata Strip */}
            <div className="space-y-6 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onExplore('doi-chieu')}
                  className="px-6 py-3 text-sm font-medium text-white bg-amber-900 rounded-lg hover:bg-amber-800 transition-colors shadow-sm whitespace-nowrap cursor-pointer"
                >
                  Xem Bảng Đối Chiếu 6 Tiêu Chí
                </button>
                <button
                  onClick={() => onExplore('trac-nghiem')}
                  className="px-6 py-3 text-sm font-medium text-stone-800 bg-stone-100 border border-stone-300 rounded-lg hover:bg-stone-200 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Làm Bài Test Nhận Thức
                </button>
              </div>

              {/* Unboxed Metadata (Rule: No pill enclosures, clean text with typographic dots) */}
              <div className="pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-stone-900">Chuẩn mực:</span>
                  <span>UNESCO & Di sản văn hóa dân tộc</span>
                </div>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-stone-900">Pháp lý:</span>
                  <span>Điều 320 BLHS & Nghị định 38/2021</span>
                </div>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-stone-900">Mục tiêu:</span>
                  <span>Phụng sự nếp sống văn minh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Cultural Temple Photo */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 group">
              <img
                src="/src/assets/images/hero_vietnamese_temple_1792495541136.jpg"
                alt="Không gian sân đình làng truyền thống Việt Nam dưới tán đa cổ thụ thanh bình"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs uppercase tracking-widest text-amber-200/90 font-medium">
                  Không gian văn hóa truyền thống
                </span>
                <p className="text-sm font-serif italic text-stone-100 mt-1">
                  Đình làng Phú Gia — biểu tượng của sự che chở cộng đồng và lòng biết ơn tiền nhân
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
