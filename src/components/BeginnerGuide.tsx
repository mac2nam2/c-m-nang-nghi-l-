import { useState } from 'react';
import { HelpCircle, Sparkles, AlertTriangle, ShieldCheck, ArrowRight, Lightbulb } from 'lucide-react';

interface BeginnerGuideProps {
  onExploreMore: (sectionId: string) => void;
}

export default function BeginnerGuide({ onExploreMore }: BeginnerGuideProps) {
  const [activeTab, setActiveTab] = useState<'30s' | 'questions' | 'myths'>('30s');

  const myths = [
    {
      myth: 'Cứ thắp hương, đi lễ chùa là mê tín dị đoan?',
      truth: 'Hoàn toàn sai. Thắp hương tưởng nhớ tổ tiên hay đi chùa chiêm bái là nét đẹp văn hóa tín ngưỡng được bảo hộ. Nó chỉ trở thành mê tín khi bạn chen lấn, nhét tiền vào tay tượng, hoặc đi xin số đề, cầu thăng quan bất chính.',
      tag: 'Ngộ nhận về đi lễ'
    },
    {
      myth: 'Đốt càng nhiều nhà lầu xe hơi vàng mã thì tổ tiên càng phù hộ?',
      truth: 'Sai lầm. Giáo lý Phật giáo và các nhà văn hóa đều khẳng định: Người đã khuất không tiêu thụ giấy vụn. Giá trị thật sự là tấm lòng hiếu thảo lúc cha mẹ còn sống và việc làm việc thiện hồi hướng công đức.',
      tag: 'Ngộ nhận về vàng mã'
    },
    {
      myth: '"Có thờ có thiêng, có kiêng có lành" nghĩa là kiêng càng nhiều thứ càng tốt?',
      truth: 'Hiểu sai tục ngữ. "Thờ" là nhớ ơn tổ tiên; "Kiêng" là kiêng điều ác, kiêng bia rượu cờ bạc, kiêng làm điều trái đạo lý. Kiêng bước chân trái, kiêng gặp phụ nữ... chỉ là tâm lý lo sợ mù quáng.',
      tag: 'Ngộ nhận về kiêng kỵ'
    },
    {
      myth: 'Lận đận tình duyên chắc chắn là do "có người cõi âm theo phá"?',
      truth: 'Thêu dệt phi lý. Tình cảm phụ thuộc vào sự tương thích tính cách, kỹ năng giao tiếp và hoàn cảnh sống. Thầy bói lợi dụng nỗi cô đơn để dọa nạt và thu tiền làm lễ "cắt duyên âm".',
      tag: 'Ngộ nhận về tình duyên'
    }
  ];

  return (
    <section className="py-14 lg:py-20 border-b border-stone-200 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-semibold mb-2">
            <Lightbulb className="w-4 h-4 text-amber-800" />
            <span>Góc Nhập Môn Cho Người Mới Tìm Hiểu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Chưa biết gì về tâm linh? Bắt đầu từ đây
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Nếu bạn đang phân vân không biết điều mình hoặc người thân đang làm là nét đẹp truyền thống
            hay là mê tín dị đoan, 3 công cụ nhập môn dưới đây sẽ giúp bạn hiểu rõ chỉ sau vài phút.
          </p>

          {/* Tab buttons */}
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('30s')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === '30s'
                  ? 'bg-amber-950 text-white'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
              }`}
            >
              1. Hiểu trong 30 giây
            </button>
            <button
              onClick={() => setActiveTab('questions')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'questions'
                  ? 'bg-amber-950 text-white'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
              }`}
            >
              2. Bộ 3 Câu Hỏi Tự Vấn Nhanh
            </button>
            <button
              onClick={() => setActiveTab('myths')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'myths'
                  ? 'bg-amber-950 text-white'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
              }`}
            >
              3. Giải Mã 4 Ngộ Nhận Hay Gặp
            </button>
          </div>
        </div>

        {/* Tab 1: Understand in 30 Seconds */}
        {activeTab === '30s' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Box Tín ngưỡng */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-emerald-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-emerald-800 uppercase tracking-wider">Định Nghĩa Chuẩn</span>
                  <span>Được khuyến khích & bảo vệ</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                  Tín Ngưỡng Là Gì?
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed mb-4">
                  Là <strong>niềm tin và sự tôn kính</strong> của con người đối với tổ tiên, tiền nhân có công với đất nước,
                  hoặc các lực lượng tự nhiên — thông qua các lễ nghi gắn với phong tục tập quán để mang lại
                  <strong> sự bình an tinh thần, hướng thiện và gắn kết gia đình, làng xã</strong>.
                </p>
                <div className="p-3 bg-emerald-50/60 rounded-lg text-xs text-emerald-950 space-y-1">
                  <div><strong>Từ khóa cốt lõi:</strong> Biết ơn, Tự nguyện, Tiết kiệm, Hướng thiện, Bình an.</div>
                  <div><strong>Ví dụ đơn giản:</strong> Thắp hương giỗ ông bà, đi vãn cảnh chùa đầu xuân, giỗ tổ Hùng Vương.</div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-xs text-emerald-800 font-medium">
                → Mục đích: Nuôi dưỡng tâm hồn trong sáng
              </div>
            </div>

            {/* Box Mê tín dị đoan */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-rose-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-rose-800 uppercase tracking-wider">Cảnh Báo Nguy Hại</span>
                  <span>Bị pháp luật nghiêm cấm</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                  Mê Tín Dị Đoan Là Gì?
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed mb-4">
                  Là <strong>sự tin tưởng mù quáng</strong> vào những điều nhảm nhí, hoang đường, phản khoa học (ma quỷ ám,
                  trùng tang, bùa ngải hại người); dẫn đến <strong>sợ hãi, tốn kém tiền bạc, hại sức khỏe và tan nát gia đình</strong>.
                  Thường bị kẻ xấu lợi dụng để "buôn thần bán thánh".
                </p>
                <div className="p-3 bg-rose-50/60 rounded-lg text-xs text-rose-950 space-y-1">
                  <div><strong>Từ khóa cốt lõi:</strong> Sợ hãi, Mù quáng, Đòi tiền cúng bái, Bỏ điều trị y tế, Trục lợi.</div>
                  <div><strong>Ví dụ đơn giản:</strong> Nộp 30 triệu cắt duyên âm, uống nước tàn hương trị ung thư, dâng sao giải hạn.</div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-xs text-rose-800 font-medium">
                → Hậu quả: Tiền mất, tật mang, hoảng loạn tinh thần
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 3 Self-check Questions */}
        {activeTab === 'questions' && (
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs">
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
              Nguyên Tắc "3 Câu Hỏi Tự Vấn" Cho Mọi Tình Huống Đời Thường
            </h3>
            <p className="text-sm text-stone-600 mb-6">
              Mỗi khi đứng trước một lời khuyên tâm linh, lời phán của thầy bói hay một nghi lễ, hãy tự hỏi bản thân 3 câu sau:
            </p>

            <div className="space-y-5">
              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-amber-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">
                    "Hành động này có bắt nguồn từ tình yêu thương, sự biết ơn và hướng thiện không?"
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Nếu có (ví dụ: nhớ ơn cha mẹ, làm từ thiện, mong ước gia đạo hòa thuận), đó là <strong>Tín ngưỡng tốt đẹp</strong>.
                    Nếu bắt đầu bằng sự sợ hãi bị trừng phạt, hoặc lòng tham muốn trúng số không cần làm việc, đó là dấu hiệu của <strong>Mê tín</strong>.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-amber-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">
                    "Có ai đang đòi tiền, dọa nạt hoặc định giá sự cứu rỗi của bạn không?"
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Tín ngưỡng chân chính không bao giờ ra giá "5 triệu giải được sao này", "20 triệu cắt được duyên kia".
                    Bất cứ ai đòi tiền để "giải nạn" đều là <strong>buôn thần bán thánh và lừa đảo</strong>.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-amber-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">
                    "Hành vi này có trái khoa học, có hại sức khỏe hoặc làm khổ người thân không?"
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Nếu bảo bỏ uống thuốc Tây để uống nước bùa, bắt chia tay người yêu vì thầy bói phán, bắt đập phá bàn thờ...
                    thì đó là <strong>mê tín dị đoan nguy hại</strong> cần dứt khoát từ chối ngay.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                Hãy ghi nhớ: Tâm thành thì một nén nhang cũng đủ; kẻ xấu mới cần vơ vét tiền bạc của bạn.
              </span>
              <button
                onClick={() => onExploreMore('phan-tich-ai')}
                className="text-xs font-semibold text-amber-900 hover:underline flex items-center gap-1 cursor-pointer"
              >
                Nhập tình huống của bạn để kiểm tra ngay <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Busting 4 Common Myths */}
        {activeTab === 'myths' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myths.map((item, index) => (
              <div key={index} className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3">
                <div className="text-[11px] font-semibold text-amber-900 uppercase tracking-wider">
                  {item.tag}
                </div>
                <div className="text-sm font-semibold text-rose-900">
                  ❌ Ngộ nhận: "{item.myth}"
                </div>
                <div className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200">
                  <strong className="text-emerald-900 block mb-1">✓ Sự thật văn hóa & khoa học:</strong>
                  {item.truth}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
