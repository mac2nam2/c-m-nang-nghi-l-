import { GoogleGenAI } from '@google/genai';

export interface AnalysisOutput {
  classification: 'belief' | 'borderline' | 'superstition';
  classificationLabel: string;
  summary: string;
  psychologicalMotive: string;
  riskEvaluation: string[];
  civilRecommendation: string;
  familyAdvice: string;
  legalBasis: string;
}

// Built-in expert knowledge bank for instant evaluation & fallback
const KNOWLEDGE_PATTERNS: {
  keywords: string[];
  output: AnalysisOutput;
}[] = [
  {
    keywords: ['cắt duyên âm', 'duyên âm', 'lận đận tình duyên', 'thầy bói phán', 'ế', 'chia tay'],
    output: {
      classification: 'superstition',
      classificationLabel: 'Mê tín dị đoan trục lợi',
      summary: 'Quan niệm "duyên âm theo phá" và yêu cầu làm lễ cắt duyên thu tiền là chiêu trò thao túng tâm lý điển hình, hoàn toàn phi khoa học.',
      psychologicalMotive: 'Lợi dụng tâm lý lo âu, tự ti, cô đơn của người đang trắc trở tình cảm để gieo rắc nỗi sợ và thu tiền bất chính.',
      riskEvaluation: [
        'Hao tốn tiền bạc từ vài triệu đến hàng chục triệu đồng cho đồ mã và tiền cúng',
        'Gây hoảng sợ, ám ảnh tâm lý tiêu cực, nghi ngờ bản thân',
        'Không giải quyết được gốc rễ vấn đề (giao tiếp, tính cách, tiêu chí tìm bạn đời)'
      ],
      civilRecommendation: 'Dừng ngay việc tìm đến thầy bói. Tình cảm phụ thuộc vào sự đồng điệu, cách ứng xử và sự nỗ lực chân thành giữa hai con người.',
      familyAdvice: 'Nếu gia đình hối thúc, hãy kiên nhẫn giải thích với cha mẹ rằng hôn nhân hạnh phúc cần sự thấu hiểu thực tế, không thầy bói nào có thể sống hộ cuộc đời mình.',
      legalBasis: 'Điều 320 Bộ luật Hình sự: Tội hành nghề mê tín, dị đoan (phạt tiền đến 100 triệu hoặc phạt tù đến 10 năm).'
    }
  },
  {
    keywords: ['vàng mã', 'đốt vàng mã', 'tiền vàng', 'nhà lầu giấy', 'xe hơi giấy', 'đốt nhiều'],
    output: {
      classification: 'borderline',
      classificationLabel: 'Tập tục có nguy cơ biến tướng cao',
      summary: 'Đốt vàng mã là tập tục dân gian du nhập, không thuộc cốt lõi tín ngưỡng bản địa hay Phật giáo nguyên thủy. Càng đốt nhiều càng biến tướng.',
      psychologicalMotive: 'Tâm lý muốn "mua chuộc" cõi âm, phô trương sự giàu sang hoặc tâm lý nể nang "trần sao âm vậy".',
      riskEvaluation: [
        'Lãng phí hàng nghìn tỷ đồng tài sản xã hội vào tro bụi',
        'Nguy cơ cháy nổ nhà ở, khu dân cư và các khu di tích lịch sử',
        'Khói độc hại gây ô nhiễm môi trường và bệnh lý đường hô hấp'
      ],
      civilRecommendation: 'Hạn chế tối đa hoặc tiến tới xóa bỏ. Nếu gia đình có thói quen thì chỉ đốt vài lá mang tính tượng trưng tối thiểu.',
      familyAdvice: 'Khuyên cha mẹ lấy số tiền định mua vàng mã quyên góp vào quỹ khuyến học dòng họ hoặc giúp đỡ người nghèo để tạo công đức thật sự.',
      legalBasis: 'Điều 14 Nghị định 38/2021/NĐ-CP: Phạt tiền đối với hành vi đốt vàng mã không đúng nơi quy định tại lễ hội, di tích.'
    }
  },
  {
    keywords: ['dâng sao', 'giải hạn', 'sao kế đô', 'sao thái bạch', 'sao la hầu', 'tam tai', 'năm tuổi'],
    output: {
      classification: 'superstition',
      classificationLabel: 'Mê tín dị đoan thương mại hóa',
      summary: 'Dâng sao giải hạn thu phí hàng triệu đồng là hoạt động trục lợi đánh vào nỗi sợ hãi về vận rủi trong năm.',
      psychologicalMotive: 'Con người luôn bất an trước tương lai không đoán định được, muốn tìm một giải pháp tâm lý "mua bảo hiểm siêu nhiên".',
      riskEvaluation: [
        'Biến nơi thờ tự thanh tịnh thành "chợ dịch vụ tâm linh"',
        'Gây tâm lý ỷ lại: cúng xong thì chủ quan, lơ là trong công việc và cuộc sống',
        'Tốn kém tiền của mà không đem lại bất kỳ sự an toàn thực tế nào'
      ],
      civilRecommendation: 'Giáo hội Phật giáo Việt Nam đã khẳng định không có tục dâng sao giải hạn trong giáo lý. Hãy sống cẩn trọng, làm nhiều việc thiện để tâm an.',
      familyAdvice: 'Nhắc nhở người thân giữ sức khỏe, tuân thủ an toàn giao thông và làm ăn minh bạch - đó mới là cách giải hạn tốt nhất.',
      legalBasis: 'Nghiêm cấm các cơ sở thờ tự tổ chức dâng sao giải hạn có tính chất thu tiền, trục lợi bất chính.'
    }
  },
  {
    keywords: ['chữa bệnh', 'uống nước bùa', 'trừ tà', 'ma ám', 'ung thư', 'tro nhang', 'thầy lang'],
    output: {
      classification: 'superstition',
      classificationLabel: 'Mê tín dị đoan đặc biệt nguy hiểm',
      summary: 'Chữa bệnh nan y bằng bùa chú, nước tàn nhang hay đánh đập trừ tà là hành vi phản khoa học, đe dọa trực tiếp tính mạng con người.',
      psychologicalMotive: 'Tâm lý tuyệt vọng của người bệnh và người nhà khi đối mặt với bệnh hiểm nghèo, dễ bị kẻ xấu lừa gạt.',
      riskEvaluation: [
        'Bỏ lỡ "thời gian vàng" điều trị tại bệnh viện chuyên khoa dẫn đến tử vong',
        'Nhiễm độc kim loại nặng và hóa chất từ tàn nhang, tro giấy',
        'Tổn thương thể xác và tinh thần nghiêm trọng'
      ],
      civilRecommendation: 'Đưa bệnh nhân đến ngay các bệnh viện tuyến đầu để được bác sĩ chuyên khoa chẩn đoán và điều trị theo y học chứng cứ.',
      familyAdvice: 'Kiên quyết ngăn cản và cách ly bệnh nhân khỏi các "thầy pháp", đồng thời báo cho công an địa phương xử lý kẻ hành nghề mê tín.',
      legalBasis: 'Khoản 2 Điều 320 BLHS: Hành nghề mê tín dị đoan làm chết người bị phạt tù từ 03 năm đến 10 năm.'
    }
  },
  {
    keywords: ['thờ cúng tổ tiên', 'ngày giỗ', 'thắp hương', 'bàn thờ', 'mâm cơm gia đình', 'hiếu thảo'],
    output: {
      classification: 'belief',
      classificationLabel: 'Tín ngưỡng truyền thống cao đẹp',
      summary: 'Thờ cúng tổ tiên là truyền thống văn hóa đạo hiếu thiêng liêng của dân tộc Việt Nam, thể hiện lòng tri ân cội nguồn.',
      psychologicalMotive: 'Lòng hiếu thảo, tình cảm gắn kết gia đình huyết thống và ý thức trách nhiệm gìn giữ gia phong.',
      riskEvaluation: [
        'Không có rủi ro nếu giữ lòng thành và sự chừng mực',
        'Chỉ cần lưu ý an toàn phòng cháy chữa cháy khi thắp hương và không phô trương mâm cỗ lãng phí'
      ],
      civilRecommendation: 'Phát huy và giữ gìn. Dạy con cháu nhớ ngày giỗ cụ kỵ, biết ơn đấng sinh thành và đoàn kết anh em họ hàng.',
      familyAdvice: 'Tổ chức ngày giỗ giản dị, đầm ấm, biến ngày giỗ thành dịp sum họp yêu thương của cả gia đình.',
      legalBasis: 'Được Nhà nước Việt Nam bảo hộ và tôn vinh theo Hiến pháp và Luật Tín ngưỡng, tôn giáo 2016.'
    }
  }
];

export async function analyzePhenomenon(userInput: string): Promise<AnalysisOutput> {
  const normalizedInput = userInput.toLowerCase();

  // Try calling Gemini API if key is available in runtime
  const apiKey =
    (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) ||
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_GEMINI_API_KEY) ||
    '';

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Bạn là một chuyên gia văn hóa học và pháp luật Việt Nam. Hãy phân tích hiện tượng/câu hỏi tâm linh sau đây của người dùng:
"${userInput}"

Hãy phân tích theo cấu trúc JSON chuẩn xác, khách quan, thấu tình đạt lý, tôn trọng tín ngưỡng chân chính nhưng kiên quyết phê phán mê tín dị đoan, viện dẫn Luật Tín ngưỡng tôn giáo 2016 hoặc Điều 320 Bộ luật Hình sự Việt Nam.

Trả về duy nhất định dạng JSON thuần không bọc trong markdown tick:
{
  "classification": "belief" hoặc "borderline" hoặc "superstition",
  "classificationLabel": "Tín ngưỡng lành mạnh" hoặc "Ranh giới dễ biến tướng" hoặc "Mê tín dị đoan nguy hại",
  "summary": "Tóm tắt ngắn gọn 1-2 câu về bản chất của hiện tượng",
  "psychologicalMotive": "Phân tích tâm lý/động cơ sâu xa của hành vi",
  "riskEvaluation": ["Rủi ro 1", "Rủi ro 2", "Rủi ro 3"],
  "civilRecommendation": "Lời khuyên thực hành văn minh",
  "familyAdvice": "Cách trao đổi khéo léo với người thân trong gia đình",
  "legalBasis": "Căn cứ pháp luật Việt Nam cụ thể"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });

      const responseText = response.text?.trim() || '';
      // Remove any markdown ```json if present
      const cleanedJson = responseText.replace(/^```json/i, '').replace(/```$/i, '').trim();
      const parsed = JSON.parse(cleanedJson);
      if (parsed.classification && parsed.summary) {
        return parsed as AnalysisOutput;
      }
    } catch (err) {
      console.warn('Gemini API call skipped or errored, falling back to expert knowledge bank:', err);
    }
  }

  // Fallback to Knowledge Base matching
  for (const pattern of KNOWLEDGE_PATTERNS) {
    if (pattern.keywords.some((kw) => normalizedInput.includes(kw))) {
      return pattern.output;
    }
  }

  // Smart General Synthesizer based on sentiment keywords
  const isDangerous = ['chết', 'bùa', 'ngải', 'nhập hồn', 'tống tiền', 'mất tiền', 'tai nạn'].some((k) =>
    normalizedInput.includes(k)
  );

  const isPositive = ['nhớ ơn', 'tưởng nhớ', 'an lạc', 'chùa', 'tổ tiên', 'truyền thống', 'lễ hội'].some((k) =>
    normalizedInput.includes(k)
  );

  if (isPositive && !isDangerous) {
    return {
      classification: 'belief',
      classificationLabel: 'Tín ngưỡng hướng thiện',
      summary: 'Hiện tượng này cơ bản bắt nguồn từ nhu cầu tâm linh lành mạnh và văn hóa truyền thống tốt đẹp của người Việt.',
      psychologicalMotive: 'Khao khát bình an, tôn kính tổ tiên và duy trì sự hòa thuận trong cuộc sống gia đình, xã hội.',
      riskEvaluation: [
        'Cần tránh để lòng thành bị kẻ xấu lợi dụng biến thành các khoản đóng góp bất hợp lý',
        'Giữ gìn không gian thanh tịnh và ứng xử văn minh nơi thờ tự'
      ],
      civilRecommendation: 'Thực hành với tâm thế bình an, đề cao "tâm thành lễ mọn", không cần phô trương tốn kém.',
      familyAdvice: 'Cùng người thân chia sẻ ý nghĩa nhân văn của phong tục thay vì chỉ làm theo thói quen máy móc.',
      legalBasis: 'Được bảo hộ quyền tự do tín ngưỡng theo Điều 24 Hiến pháp 2013 và Luật Tín ngưỡng, tôn giáo 2016.'
    };
  }

  return {
    classification: isDangerous ? 'superstition' : 'borderline',
    classificationLabel: isDangerous ? 'Mê tín dị đoan cần cảnh giác' : 'Ranh giới nhạy cảm cần cân nhắc',
    summary: 'Hiện tượng này phản ánh sự lo lắng trước vận rủi hoặc mong muốn giải quyết khó khăn bằng các biện pháp siêu nhiên.',
    psychologicalMotive: 'Tâm lý bất an, sợ hãi hoặc tìm kiếm sự an tâm nhanh chóng mà không cần đối mặt với thực tế.',
    riskEvaluation: [
      'Nguy cơ bị các đối tượng "buôn thần bán thánh" thao túng tài chính',
      'Gây xáo trộn tâm lý, sinh ra thái độ thụ động và thiếu quyết đoán trong đời sống thực tế',
      'Có thể dẫn đến tranh cãi, rạn nứt trong các mối quan hệ người thân'
    ],
    civilRecommendation: 'Giữ lý trí sáng suốt. Mọi khó khăn trong đời thực cần được giải quyết bằng tri thức, sự kiên nhẫn và hành động đúng đắn.',
    familyAdvice: 'Lắng nghe nỗi lo của người thân nhưng nhẹ nhàng chỉ ra các bằng chứng thực tế, tuyệt đối không vội vàng chi tiền cúng bái vô ích.',
    legalBasis: 'Điều 320 Bộ luật Hình sự nghiêm cấm hành vi lợi dụng mê tín dị đoan để trục lợi hoặc gây mất trật tự xã hội.'
  };
}
