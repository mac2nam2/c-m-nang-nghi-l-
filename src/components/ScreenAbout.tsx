import { Language, TRANSLATIONS } from '../i18n/translations';
import { Target, Compass, HeartHandshake, Award, GraduationCap, Building2, User, Users, ShieldCheck, MapPin, Layers } from 'lucide-react';

interface ScreenAboutProps {
  lang: Language;
}

export default function ScreenAbout({ lang }: ScreenAboutProps) {
  const t = TRANSLATIONS[lang];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-blue-700 font-bold bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-200">
          {lang === 'vi' ? 'Hồ Sơ Dự Án Văn Hóa & Phong Tục' : 'Cultural Heritage Project Profile'}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
          {t.about.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          {t.about.subtitle}
        </p>
      </div>

      {/* Prominent Internship Student Certification Banner (Theo yêu cầu đề bài) */}
      <div className="rounded-3xl border-2 border-blue-600 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-200/80 w-fit px-3 py-1 rounded-md">
          <GraduationCap className="w-4 h-4" />
          <span>{lang === 'vi' ? 'Thông Tin Thực Tập Sinh & Đơn Vị Đào Tạo' : 'Internship & Trainee Information'}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Sinh viên thực hiện */}
          <div className="space-y-3 bg-white p-5 rounded-2xl border border-blue-200 shadow-2xs">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {lang === 'vi' ? 'Sinh viên thực hiện đề tài' : 'Author & Student Trainee'}
            </div>
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 font-bold">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Mạc Văn Nam</h3>
                <div className="text-sm font-semibold text-blue-700 font-mono mt-0.5">
                  Mã sinh viên: PH61940
                </div>
                <div className="text-xs text-slate-600 flex items-center gap-1.5 mt-1">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>Phân công: <strong>Nhóm 1</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Chương trình thực tập */}
          <div className="space-y-3 bg-white p-5 rounded-2xl border border-blue-200 shadow-2xs">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {lang === 'vi' ? 'Chương trình & Cơ sở tiếp nhận thực tập' : 'Internship Program & Organizations'}
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">
                    {lang === 'vi' ? 'Chương trình Thực tập sinh Đợt 15' : 'Internship Batch 15'}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    <strong>FPT Polytechnic</strong> phối hợp cùng <strong>IMTA TECH</strong>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                <Award className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? 'Dự án cẩm nang văn hóa số hóa thực hành' : 'Digitized cultural practice project'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of About Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section 1: Mục đích & Sứ mệnh */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            {t.about.missionTitle}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {t.about.missionP1}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            {t.about.missionP2}
          </p>
        </div>

        {/* Section 2: Đối tượng phục vụ */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            {t.about.targetTitle}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {t.about.targetP}
          </p>
          <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>{lang === 'vi' ? 'Các cặp đôi chuẩn bị kết hôn và gia đình hai họ' : 'Couples and families preparing for wedding'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>{lang === 'vi' ? 'Gia đình lo việc hiếu sự, tang lễ chu toàn' : 'Families organizing funerals with filial devotion'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>{lang === 'vi' ? 'Con cháu tề tựu cúng giỗ, gìn giữ nếp nhà' : 'Lineage members gathering for death anniversaries'}</span>
            </div>
          </div>
        </div>

        {/* Section 3: Ba nguyên tắc cốt lõi */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 md:col-span-2">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            {t.about.methodTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{lang === 'vi' ? '1. Phân Nhánh Vùng Miền' : '1. Regional Branching'}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.about.method1}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>{lang === 'vi' ? '2. Trình Tự Từng Bước' : '2. Step-by-Step Order'}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.about.method2}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
                <HeartHandshake className="w-4 h-4 text-blue-600" />
                <span>{lang === 'vi' ? '3. Trung Lập Tín Ngưỡng' : '3. Interfaith Neutrality'}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.about.method3}
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Tôn chỉ hoạt động phi lợi nhuận */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 md:col-span-2">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            {t.about.commitmentTitle}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {t.about.commitmentP}
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 italic">
            {lang === 'vi'
              ? '* Toàn bộ thông tin trong cẩm nang được tổng hợp, đối chiếu kỹ lưỡng từ các công trình nghiên cứu dân tộc học, văn hóa dân gian Việt Nam uy tín và các quy định của Nhà nước về thực hiện nếp sống văn minh.'
              : '* All information in this handbook is thoroughly referenced against authoritative folkloric studies, ethnographic compendia, and state regulations on civilized living.'}
          </div>
        </div>
      </div>
    </div>
  );
}
