import { CIVIL_PRINCIPLES } from '../data/legalReferences';
import { HeartHandshake } from 'lucide-react';

export default function MindfulGuidance() {
  return (
    <section className="py-16 lg:py-24 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Community Cultural Festival Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 group">
              <img
                src="/src/assets/images/cultural_heritage_festival_1792495541402.jpg"
                alt="Không gian lễ hội đình làng truyền thống Việt Nam vui tươi đoàn kết"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="p-4 bg-stone-50 border-t border-stone-200 text-xs text-stone-600">
                <span className="font-semibold text-stone-900">Lễ hội dân gian Việt Nam: </span>
                Sự hòa quyện giữa lòng tôn kính tiền nhân và tình đoàn kết cộng đồng làng xóm thanh bình.
              </div>
            </div>
          </div>

          {/* Right Column: 5 Golden Principles */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-semibold mb-2">
                <HeartHandshake className="w-4 h-4 text-amber-800" />
                <span>Cẩm Nang Ứng Xử Đời Thường</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                5 Nguyên tắc vàng thực hành tín ngưỡng văn minh
              </h2>
              <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                Giữ gìn bản sắc cội nguồn mà không rơi vào cạm bẫy mê muội bằng lối sống tỉnh thức và trách nhiệm.
              </p>
            </div>

            <div className="space-y-4">
              {CIVIL_PRINCIPLES.map((principle) => (
                <div
                  key={principle.num}
                  className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200/80 hover:bg-stone-100/60 transition-colors"
                >
                  <span className="text-base font-serif font-bold text-amber-900 font-mono shrink-0 mt-0.5">
                    {principle.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900">
                      {principle.title}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
