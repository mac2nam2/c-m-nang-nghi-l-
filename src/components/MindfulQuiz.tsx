import { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quiz';
import { CheckCircle2, RotateCcw, Award, ChevronRight, HelpCircle } from 'lucide-react';

export default function MindfulQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: { optId: string; score: number } }>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];
  const userSelection = selectedAnswers[currentQ.id];

  const handleSelectOption = (optId: string, score: number) => {
    if (showFeedback) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: { optId, score }
    }));
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowFeedback(false);
    setIsFinished(false);
  };

  const totalScore = Object.values(selectedAnswers).reduce((acc, curr) => acc + curr.score, 0);

  const getResultAssessment = () => {
    if (totalScore >= 10) {
      return {
        title: 'Nhãn quan tâm linh sáng suốt & văn minh',
        desc: 'Bạn có nhận thức rất vững vàng, hiểu rõ cội nguồn nhân văn của tín ngưỡng truyền thống và hoàn toàn miễn nhiễm trước các chiêu trò thao túng mê tín dị đoan.',
        color: 'text-emerald-900',
        bg: 'bg-emerald-50 border-emerald-200'
      };
    } else if (totalScore >= 6) {
      return {
        title: 'Tâm hướng thiện nhưng còn đôi chút băn khoăn',
        desc: 'Bạn trân trọng đạo lý nhưng đôi khi vẫn bị tác động bởi thói quen số đông hoặc tâm lý "kiêng cho lành". Hãy tiếp tục củng cố kiến thức khoa học và pháp lý để tự tin hơn.',
        color: 'text-amber-900',
        bg: 'bg-amber-50 border-amber-200'
      };
    } else {
      return {
        title: 'Nguy cơ cao bị kẻ xấu lợi dụng tâm linh',
        desc: 'Bạn đang mang nhiều nỗi sợ hãi mơ hồ và dễ tin vào những phán đoán phi khoa học. Điều này rất dễ dẫn đến việc bị kẻ buôn thần bán thánh trục lợi tiền bạc.',
        color: 'text-rose-900',
        bg: 'bg-rose-50 border-rose-200'
      };
    }
  };

  return (
    <section id="trac-nghiem" className="py-16 lg:py-24 border-b border-stone-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-semibold mb-2">
            <HelpCircle className="w-4 h-4 text-amber-800" />
            <span>Trắc Nghiệm Nhận Thức Tương Tác</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Thử thách nhận thức: Bạn hiểu tín ngưỡng tới đâu?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            6 câu hỏi tình huống thực tế giúp bạn tự kiểm tra góc nhìn tâm linh và trang bị màng lọc lý trí
            trước những cạm bẫy mê tín dị đoan.
          </p>
        </div>

        {!isFinished ? (
          <div className="bg-[#FAF8F5] rounded-xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
            {/* Progress indicator */}
            <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-200/80 pb-3">
              <span className="font-semibold text-stone-900 uppercase tracking-wider">
                Câu hỏi {currentIdx + 1} / {QUIZ_QUESTIONS.length}
              </span>
              <span className="font-mono">Điểm hiện tại: {totalScore}</span>
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <span className="text-xs text-amber-900 font-medium block">
                Bối cảnh: {currentQ.context}
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-stone-900 leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt) => {
                const isChosen = userSelection?.optId === opt.id;
                let optionStyle =
                  'bg-white border-stone-200 text-stone-800 hover:border-amber-900/50 hover:bg-stone-50';

                if (showFeedback) {
                  if (opt.score === 2) {
                    optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-medium';
                  } else if (isChosen && opt.score < 2) {
                    optionStyle = 'bg-rose-50 border-rose-300 text-rose-950';
                  } else {
                    optionStyle = 'bg-white border-stone-200 text-stone-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id, opt.score)}
                    disabled={showFeedback}
                    className={`w-full text-left p-4 rounded-lg border text-sm transition-all cursor-pointer ${optionStyle} ${
                      isChosen && !showFeedback ? 'ring-2 ring-amber-900' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-mono mt-0.5">
                        {opt.id.slice(-1).toUpperCase()}
                      </span>
                      <span className="leading-relaxed">{opt.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Immediate Educational Feedback */}
            {showFeedback && (
              <div className="mt-4 p-4 rounded-lg bg-stone-100 border border-stone-300 text-stone-800 text-sm space-y-2 animate-fadeIn">
                <div className="font-semibold text-xs uppercase tracking-wider text-stone-900">
                  Giải thích của chuyên gia:
                </div>
                <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">
                  {currentQ.options.find((o) => o.id === userSelection?.optId)?.feedback}
                </p>
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-5 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-800 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Quiz Results View */
          <div className="bg-[#FAF8F5] rounded-xl border border-stone-200 shadow-sm p-6 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-900 mx-auto flex items-center justify-center">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-stone-500">
                Tổng điểm đánh giá nhận thức:
              </span>
              <div className="text-4xl font-serif font-bold text-stone-900">
                {totalScore} / 12 điểm
              </div>
            </div>

            <div className={`p-6 rounded-xl border max-w-lg mx-auto ${getResultAssessment().bg}`}>
              <h4 className={`text-lg font-serif font-bold mb-2 ${getResultAssessment().color}`}>
                {getResultAssessment().title}
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                {getResultAssessment().desc}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={handleRestart}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Làm lại bài kiểm tra</span>
              </button>
              <a
                href="#doi-chieu"
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-amber-900 rounded-lg hover:bg-amber-800 transition-colors"
              >
                Ôn lại bảng đối chiếu 6 chiều
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
