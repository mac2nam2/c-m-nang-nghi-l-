import { Language, TRANSLATIONS } from '../i18n/translations';
import { BookOpen, Scale, Landmark, ShieldCheck, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

interface ScreenReferencesProps {
  lang: Language;
}

export default function ScreenReferences({ lang }: ScreenReferencesProps) {
  const t = TRANSLATIONS[lang];

  // Classic Folkloric & Cultural Research Books
  const culturalBooks = [
    {
      title: 'Phong tục Việt Nam - Nếp cũ (Bộ sách kinh điển khảo cứu)',
      author: 'Học giả Toan Ánh',
      year: '1968 - 1974 (Tái bản nhiều lần)',
      scope: 'Khảo cứu công phu về việc cưới, việc tang, việc cúng tế tổ tiên, các tiết lễ trong năm và phong tục gia tộc Việt Nam.',
      quote: 'Việc cưới là nguồn gốc của nhân luân, việc tang là tận cùng của đạo hiếu, việc giỗ là giữ gìn truyền thống uống nước nhớ nguồn.'
    },
    {
      title: 'Việt Nam phong tục',
      author: 'Cử nhân Hán học Phan Kế Bính',
      year: '1915',
      scope: 'Tác phẩm nghiên cứu xã hội học và phong tục học đầu tiên bằng chữ quốc ngữ về nghi thức gia tộc, làng xã và xã hội Việt Nam.',
      quote: 'Xét phong tục là để phân biệt điều hay nên giữ, điều dở nên bỏ, cốt ở lòng thành kính và thuận theo lẽ phải thời đại.'
    },
    {
      title: 'Đất lề quê thói (Phong tục tập quán Việt Nam)',
      author: 'Nhất Thanh (Vũ Văn Khiếu)',
      year: '1970',
      scope: 'Bách khoa thư về nếp sống, lề thói cổ truyền, phân tích cặn kẽ các nghi thức dạm ngõ, ăn hỏi, tơ hồng, phục hồn, khâm liệm, cát kỵ 3 miền.',
      quote: 'Lễ nghi sinh ra là vì con người. Lễ cốt trang nghiêm, tiết kiệm, thể hiện nghĩa tình giữa người đang sống với người đã khuất.'
    },
    {
      title: 'Cơ sở văn hóa Việt Nam',
      author: 'GS. Trần Quốc Vượng (Chủ biên)',
      year: '1998',
      scope: 'Giáo trình đại học chuẩn mực về bản sắc văn hóa vùng miền (Bắc Bộ, Trung Bộ, Nam Bộ) và sự giao lưu tiếp biến văn hóa trong nghi lễ gia đình.',
      quote: 'Mỗi vùng miền có điều kiện sinh thái và lịch sử riêng, tạo nên sự đa dạng phong phú mà thống nhất trong tâm thức văn hóa Việt.'
    },
    {
      title: 'Việt Nam văn hóa sử cương',
      author: 'GS. Đào Duy Anh',
      year: '1938',
      scope: 'Công trình đặt nền móng cho nghiên cứu văn hóa hiện đại Việt Nam, chương về Gia tộc và Lễ nghi vòng đời.',
      quote: 'Tổ chức gia tộc dựa trên đạo Hiếu và thờ cúng tổ tiên, là rường cột vững chắc duy trì tinh thần dân tộc qua các thăng trầm.'
    }
  ];

  // Statutory Legal Documents and Civilized Living Regulations
  const legalDocs = [
    {
      code: 'HP-2013-D24',
      name: 'Hiến pháp nước Cộng hòa Xã hội Chủ nghĩa Việt Nam (2013)',
      article: 'Điều 24',
      scope: 'Quyền tự do tín ngưỡng, tôn giáo',
      quote: '1. Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào. Các tôn giáo bình đẳng trước pháp luật. 2. Nhà nước tôn trọng và bảo hộ quyền tự do tín ngưỡng, tôn giáo. 3. Không ai được xâm phạm tự do tín ngưỡng, tôn giáo hoặc lợi dụng tín ngưỡng, tôn giáo để vi phạm pháp luật.'
    },
    {
      code: 'LTNTG-2016',
      name: 'Luật Tín ngưỡng, tôn giáo năm 2016 (Luật số 02/2016/QH14)',
      article: 'Điều 3, 4, 5, 11',
      scope: 'Quyền tự do hoạt động tín ngưỡng, bảo tồn bản sắc và các hành vi bị cấm',
      quote: 'Bảo hộ các hoạt động tín ngưỡng truyền thống lành mạnh (thờ cúng tổ tiên, tôn vinh người có công); nghiêm cấm lợi dụng hoạt động tín ngưỡng, tôn giáo để trục lợi, ép buộc hoặc xâm phạm trật tự an toàn xã hội.'
    },
    {
      code: 'QD-308-2005-TTg',
      name: 'Quyết định số 308/2005/QĐ-TTg của Thủ tướng Chính phủ',
      article: 'Quy chế nếp sống văn minh',
      scope: 'Ban hành Quy chế thực hiện nếp sống văn minh trong việc cưới, việc tang và lễ hội',
      quote: 'Khuyến khích tổ chức tiệc cưới tiết kiệm, trang trọng; việc tang trang nghiêm, chu đáo, không rải vàng mã, tiền polyme trên đường giao thông, vận động hỏa táng văn minh bảo vệ môi trường.'
    },
    {
      code: 'TT-04-2011-BVHTTDL',
      name: 'Thông tư số 04/2011/TT-BVHTTDL của Bộ Văn hóa, Thể thao và Du lịch',
      article: 'Toàn văn thông tư',
      scope: 'Quy định chi tiết việc thực hiện nếp sống văn minh trong việc cưới, việc tang',
      quote: 'Quy định các tiêu chí nếp sống văn minh: không mở nhạc tang quá 22h đêm và trước 6h sáng, hạn chế tối đa đốt vàng mã phô trương tốn kém, thực hành tang lễ và cưới xin lành mạnh, tôn trọng cộng đồng láng giềng.'
    },
    {
      code: 'ND-38-2021-CP',
      name: 'Nghị định số 38/2021/NĐ-CP của Chính phủ',
      article: 'Điều 14, 15',
      scope: 'Xử phạt vi phạm hành chính trong lĩnh vực văn hóa và nếp sống văn minh',
      quote: 'Quy định mức xử phạt đối với các hành vi vi phạm nếp sống văn minh, lợi dụng lễ nghi để hoạt động mê tín dị đoan hoặc gây mất trật tự nơi công cộng.'
    },
    {
      code: 'BLHS-2015-D320',
      name: 'Bộ luật Hình sự năm 2015 (Sửa đổi, bổ sung 2017)',
      article: 'Điều 320',
      scope: 'Tội hành nghề mê tín, dị đoan',
      quote: 'Xử lý nghiêm minh đối với các đối tượng dùng thủ đoạn bói toán, dọa dẫm thần quyền ma quỷ để trục lợi bất chính trong các biến cố sinh tử của gia đình người dân.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-blue-700 font-bold bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-200">
          {lang === 'vi' ? 'Thư Mục Văn Hóa & Pháp Lý' : 'Cultural & Legal Bibliography'}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
          {t.references.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          {t.references.subtitle}
        </p>
      </div>

      {/* Official Mandatory Legal Disclaimer Notice */}
      <div className="rounded-2xl border-2 border-blue-600 bg-blue-50/60 p-6 shadow-sm flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
        <div className="space-y-1 text-sm text-slate-800 leading-relaxed">
          <strong className="text-blue-900 font-bold text-base block">
            {lang === 'vi' ? 'Lưu Ý Quan Trọng Về Giá Trị Tham Khảo' : 'Important Advisory & Reference Disclaimer'}
          </strong>
          <p>
            {lang === 'vi'
              ? 'Toàn bộ nội dung trong "Cẩm nang nghi lễ vòng đời" được biên soạn nhằm mục đích bảo tồn văn hóa, hướng dẫn thực hành phong tục tập quán truyền thống của 3 miền Bắc - Trung - Nam và xây dựng nếp sống văn minh. Thông tin chỉ mang tính chất tham khảo phong tục, không thay thế văn bản quy phạm pháp luật chính thức của Nhà nước hoặc giáo luật/hướng dẫn mục vụ của các tổ chức tôn giáo được công nhận.'
              : 'All content in the "Life Cycle Rituals Handbook" is curated for cultural education, preservation of Vietnamese traditions across Northern, Central, and Southern regions, and promoting civilized communal living. The guidance is for cultural reference only and does not substitute official legal statutes, government administrative decisions, or church canon law.'}
          </p>
        </div>
      </div>

      {/* Part 1: Classic Cultural Books */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 pb-3 border-b border-blue-100">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            {t.references.academicTitle}
          </h2>
        </div>

        <div className="space-y-4">
          {culturalBooks.map((book, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3 hover:border-blue-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-lg font-bold text-blue-950 font-serif">
                  {book.title}
                </h3>
                <span className="text-xs font-semibold text-slate-500 font-mono">
                  {book.year}
                </span>
              </div>

              <div className="text-xs sm:text-sm font-semibold text-blue-800">
                Tác giả: {book.author}
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {book.scope}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs italic text-slate-700 font-serif">
                "{book.quote}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part 2: Legal Statutes & Civil Regulations */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 pb-3 border-b border-blue-100">
          <Scale className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            {t.references.legalDocsTitle}
          </h2>
        </div>

        <div className="space-y-4">
          {legalDocs.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3 hover:border-blue-300 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-1 rounded font-mono">
                  {doc.code}
                </span>
                <span className="text-xs font-semibold text-slate-600">
                  {doc.article}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {doc.name}
              </h3>

              <div className="text-xs sm:text-sm font-semibold text-blue-700">
                Phạm vi áp dụng: {doc.scope}
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                "{doc.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Part 3: Statement of Interfaith Neutrality */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-teal-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-teal-800 font-bold text-lg">
          <ShieldCheck className="w-6 h-6 text-teal-600" />
          <span>{t.references.religiousTitle}</span>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed">
          {lang === 'vi'
            ? 'Cẩm nang tuân thủ nguyên tắc tôn trọng bình đẳng và tự do tôn giáo. Đối với đồng bào theo đạo Công giáo, các nghi thức tôn kính tổ tiên (thắp nhang, cúi đầu trước bàn thờ gia tiên, cúng giỗ) được tham chiếu theo "Huấn thị về sự tôn kính tổ tiên" của Bộ Loan báo Tin Mừng cho các Dân tộc (1939) và Thông cáo của Hội đồng Giám mục Việt Nam tại Nha Trang (1965). Đối với đồng bào theo đạo Phật, các nghi lễ khuyến khích tinh thần từ bi, tụng kinh hồi hướng và phóng sinh văn minh.'
            : 'The handbook strictly observes the principle of interfaith neutrality. For Vietnamese Catholics, ancestor veneration practices (incense offering, deep bows before family portraits, death anniversary feasts) are grounded in the Instruction on the Cult of Ancestors by Propaganda Fide (1939) and the Bishop Conference of Vietnam declarations (1965). For Buddhists, practices emphasize filial devotion, merit dedication, and humane compassion.'}
        </p>

        <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-2 rounded-xl border border-teal-200">
          <CheckCircle2 className="w-4 h-4 text-teal-600" />
          <span>{lang === 'vi' ? 'Giữ gìn bản sắc dân tộc đi liền với văn minh tiến bộ' : 'Preserving cultural heritage hand in hand with civil progress'}</span>
        </div>
      </div>
    </div>
  );
}
