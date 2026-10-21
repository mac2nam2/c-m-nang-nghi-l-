import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Load 30 Life-Cycle Ritual Situations Dataset for Grounding
let situationsData: any[] = [];
try {
  const dataPath = path.join(__dirname, 'src', 'data', 'tinh_huong_nghi_le_vong_doi.json');
  if (fs.existsSync(dataPath)) {
    situationsData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  }
} catch (err) {
  console.warn('Could not load tinh_huong_nghi_le_vong_doi.json:', err);
}

// API endpoint for Ritual Consultation using Gemini (Server-side ONLY; API key never sent to browser)
app.post('/api/analyze', async (req: Request, res: Response) => {
  try {
    const { userText, lang } = req.body;
    const trimmed = (userText || '').trim();

    if (!trimmed) {
      return res.status(400).json({
        status: 'INSUFFICIENT_DATA',
        thong_bao_chinh: 'Chưa đủ căn cứ để kết luận',
        thong_tin_con_thieu: lang === 'en'
          ? 'Please provide a description of your family life-cycle ritual situation or question.'
          : 'Vui lòng nhập mô tả tình huống hoặc thắc mắc của bạn liên quan đến nghi lễ vòng đời.',
        huong_dan_bo_sung: [
          lang === 'en' ? 'State the specific family ceremony' : 'Nêu rõ loại nghi lễ cụ thể gia đình bạn đang chuẩn bị',
          lang === 'en' ? 'Mention regions or traditions involved' : 'Nêu rõ vùng miền (Bắc, Trung, Nam) hoặc tôn giáo liên quan'
        ]
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });

        const systemPrompt = `Bạn là Chuyên gia Cố vấn Văn hóa & Phong tục Nghi lễ Vòng Đời Việt Nam thuộc nền tảng "Cẩm nang nghi lễ vòng đời".
Nhiệm vụ của bạn là phân tích mô tả tình huống hoặc thắc mắc của người dùng, ĐỐI CHIẾU VỚI TỆP DỮ LIỆU GỒM 30 TÌNH HUỐNG CHUẨN VÀ PHONG TỤC 3 MIỀN (Sinh nở, đặt tên, thôi nôi, trưởng thành, học tập, lập nghiệp, cưới hỏi, tang lễ, tế tự giỗ chạp).

DỮ LIỆU THAM CHIẾU 30 TÌNH HUỐNG MẪU:
${JSON.stringify(situationsData.map(s => ({
  id: s.id,
  ten_nghi_le: s.ten_nghi_le,
  giai_doan: s.giai_doan_vong_doi,
  mo_ta: s.mo_ta_tinh_huong,
  y_nghia: s.y_nghia_van_hoa,
  can_cu: s.can_cu_phap_ly?.ten_van_ban
})))}

QUY TẮC CỐT TỬ CỦA HỆ THỐNG:
1. NẾU KHÔNG TÌM THẤY THÔNG TIN PHÙ HỢP TRONG TỆP DỮ LIỆU HOẶC THÔNG TIN NGƯỜI DÙNG CUNG CẤP CHƯA ĐỦ ĐỂ ĐƯA RA CÂU TRẢ LỜI ĐÁNG TIN CẬY (quá ngắn, chung chung như "nhà tôi sắp có việc", hoặc tình huống mơ hồ):
   - BẮT BUỘC trả về status: "INSUFFICIENT_DATA".
   - BẮT BUỘC thông báo cụm từ chính xác: "Chưa đủ căn cứ để kết luận".
   - Nêu rõ thông tin còn thiếu (thong_tin_con_thieu).
   - Hướng dẫn cụ thể người dùng cần bổ sung những dữ kiện gì (huong_dan_bo_sung).
   - TUYỆT ĐỐI KHÔNG tự suy đoán, bịa đặt phong tục, ý nghĩa nghi lễ, nguồn tham khảo, căn cứ pháp lý hoặc mức xử phạt.

2. NẾU ĐỦ CĂN CỨ VÀ ĐỐI CHIẾU ĐƯỢC:
   - Trả về status: "CONCLUDED".
   - Trả về đầy đủ 7 trường thông tin:
     + ten_nghi_le: Tên hoặc loại nghi lễ phù hợp.
     + giai_doan_vong_doi: Giai đoạn vòng đời liên quan (Sinh nở & Đầu đời, Trưởng thành & Lập nghiệp, Hôn nhân & Gia đình, Hậu sự & Tang chế, Tế tự & Tưởng nhớ cội nguồn, Đạo hiếu & Tôn vinh).
     + y_nghia_van_hoa: Ý nghĩa văn hóa, nhân văn, tri ân và gắn kết.
     + dac_diem_nhan_dien: Mảng các đặc điểm nhận diện, biểu hiện đặc trưng.
     + cac_buoc_thuc_hien: Mảng các bước thực hiện theo phong tục được ghi nhận (tuần tự từng bước cụ thể: "Bước 1: ...", "Bước 2: ...").
     + su_khac_biet_vung_mien: Phân tích sự khác biệt giữa Miền Bắc, Miền Trung, Miền Nam hoặc cộng đồng tôn giáo (Phật giáo, Công giáo, nếp sống mới).
     + can_cu_phap_ly: Căn cứ pháp lý phù hợp nếu có liên quan:
       * co_lien_quan: boolean.
       * ten_van_ban: Tên văn bản (Luật Hôn nhân gia đình 2014, Luật Tín ngưỡng tôn giáo 2016, Bộ luật Dân sự 2015, QĐ 308/2005/QĐ-TTg, Thông tư 04/2011/TT-BVHTTDL, Nghị định 38/2021/NĐ-CP...).
       * dieu_khoan: Điều khoản cụ thể.
       * noi_dung_ap_dung: Nội dung quy định.
       * hinh_thuc_xu_ly: Xử phạt nếu vi phạm (chỉ ghi khi có quy định đáng tin cậy) hoặc ghi rõ: "Không có chế tài xử phạt; đây là quyền tự do phong tục tập quán lành mạnh, tự nguyện và bình đẳng".
       * phan_biet_phap_luat_phong_tuc: Phân biệt rõ quy định pháp luật chính thức với phong tục mang tính tham khảo.

3. TÔN TRỌNG SỰ ĐA DẠNG:
   - Tôn trọng sự đa dạng văn hóa, dân tộc, vùng miền và quan điểm cá nhân; KHÔNG MẶC ĐỊNH MỘT NGHI LỄ LÀ BẮT BUỘC ĐỐI VỚI TẤT CẢ MỌI NGƯỜI.
   - Luôn kèm ghi chú tôn trọng đa dạng và tuyên bố miễn trừ: Thông tin chỉ mang tính tham khảo phong tục, không thay thế văn bản quy phạm pháp luật chính thức.

Định dạng JSON trả về DUY NHẤT (không kèm markdown ngoài JSON):
{
  "status": "CONCLUDED" | "INSUFFICIENT_DATA",
  "thong_bao_chinh": "Chưa đủ căn cứ để kết luận" (nếu INSUFFICIENT_DATA),
  "thong_tin_con_thieu": "Chuỗi nêu rõ thông tin còn thiếu...",
  "huong_dan_bo_sung": ["Gợi ý 1...", "Gợi ý 2..."],
  "ten_nghi_le": "Tên nghi lễ",
  "giai_doan_vong_doi": "Giai đoạn vòng đời",
  "y_nghia_van_hoa": "Ý nghĩa văn hóa",
  "dac_diem_nhan_dien": ["Đặc điểm 1", "Đặc điểm 2"],
  "cac_buoc_thuc_hien": ["Bước 1: ...", "Bước 2: ..."],
  "su_khac_biet_vung_mien": {
    "mien_bac": "Nét đặc trưng miền Bắc",
    "mien_trung": "Nét đặc trưng miền Trung",
    "mien_nam": "Nét đặc trưng miền Nam",
    "cong_dong": "Nét đặc thù cộng đồng tôn giáo / nếp sống mới (nếu có)"
  },
  "can_cu_phap_ly": {
    "co_lien_quan": true | false,
    "ten_van_ban": "Tên văn bản luật",
    "dieu_khoan": "Điều khoản",
    "noi_dung_ap_dung": "Nội dung",
    "hinh_thuc_xu_ly": "Chế tài hoặc ghi rõ không áp dụng",
    "phan_biet_phap_luat_phong_tuc": "Phân biệt pháp luật vs phong tục"
  },
  "ton_trong_da_dang": "Nghi lễ dựa trên sự tự nguyện của gia đình, không bắt buộc với tất cả mọi người, tôn trọng quyền tự do tín ngưỡng.",
  "disclaimer": "Lưu ý quan trọng: Thông tin cẩm nang mang tính chất tham khảo phong tục tập quán, không thay thế văn bản quy phạm pháp luật chính thức."
}`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            {
              role: 'user',
              parts: [{ text: `${systemPrompt}\n\nTÌNH HUỐNG / THẮC MẮC CỦA NGƯỜI DÙNG:\n"${trimmed}"\nNgôn ngữ ưu tiên: ${lang === 'en' ? 'English' : 'Tiếng Việt'}` }]
            }
          ]
        });

        const text = response.text?.trim() || '';
        const cleanJson = text.replace(/^```json/i, '').replace(/```$/i, '').trim();
        const parsed = JSON.parse(cleanJson);
        return res.json(parsed);
      } catch (geminiErr) {
        console.warn('Gemini API call failed, falling back to local grounded 30 situations dataset:', geminiErr);
      }
    }

    // High-Fidelity Local Grounded Fallback matching against the 30 situations dataset
    const localResult = evaluateAgainst30Situations(trimmed, situationsData, lang);
    return res.json(localResult);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

function evaluateAgainst30Situations(input: string, dataset: any[], lang: 'vi' | 'en') {
  const lower = input.toLowerCase();

  // If input is too brief or ambiguous -> Strictly return INSUFFICIENT_DATA
  if (lower.length < 15 || lower.split(/\s+/).length < 4) {
    return {
      status: 'INSUFFICIENT_DATA',
      thong_bao_chinh: 'Chưa đủ căn cứ để kết luận',
      thong_tin_con_thieu: lang === 'en'
        ? 'Insufficient information to formulate a reliable conclusion. The input is too brief and lacks details regarding the specific ceremony, lifecycle stage, regional background, or family context.'
        : 'Chưa đủ căn cứ để kết luận. Thông tin bạn cung cấp còn quá ngắn, chưa đủ các tình tiết về nghi lễ cụ thể đang chuẩn bị, giai đoạn vòng đời, xuất xứ vùng miền hoặc bối cảnh của gia đình.',
      huong_dan_bo_sung: lang === 'en'
        ? [
            'What specific ceremony is your family planning (Birth, Naming, One-year, Coming-of-Age, Wedding, Funeral, Memorial)?',
            'Which regional customs are involved (Northern, Central, Southern)?',
            'Are there specific faith traditions or community guidelines to consider?'
          ]
        : [
            'Gia đình bạn đang chuẩn bị cho sự kiện cụ thể nào (Đầy tháng, Thôi nôi, Trưởng thành, Khởi nghiệp, Cưới hỏi, Tang lễ, hay Giỗ chạp)?',
            'Hai bên gia đình hoặc dòng họ xuất xứ từ vùng miền nào (Bắc, Trung, Nam)?',
            'Có phong tục dòng họ hoặc đức tin tôn giáo cụ thể nào cần kết hợp không (Phật giáo, Công giáo, nếp sống mới)?'
          ],
      disclaimer: 'Lưu ý: Hệ thống đối chiếu nghiêm ngặt với cẩm nang dữ liệu, tuyệt đối không tự suy đoán hoặc bịa đặt phong tục.'
    };
  }

  // Find best match in 30 situations dataset
  const matched = dataset.find((item) => {
    const title = (item.ten_tinh_huong || '').toLowerCase();
    const name = (item.ten_nghi_le || '').toLowerCase();
    const stage = (item.giai_doan_vong_doi || '').toLowerCase();
    const desc = (item.mo_ta_tinh_huong || '').toLowerCase();

    return (
      lower.includes(name) ||
      lower.includes(title) ||
      (lower.includes('cưới') && (name.includes('cưới') || name.includes('hôn') || name.includes('dâu') || name.includes('tráp') || name.includes('dạm ngõ'))) ||
      (lower.includes('tang') && (name.includes('tang') || name.includes('khâm liệm') || name.includes('lâm chung') || name.includes('di quan') || name.includes('hạ huyệt'))) ||
      (lower.includes('giỗ') && (name.includes('giỗ') || name.includes('tốt khốc') || name.includes('tiểu tường') || name.includes('đại tường') || name.includes('cát kỵ'))) ||
      (lower.includes('thôi nôi') && name.includes('thôi nôi')) ||
      (lower.includes('đầy tháng') && name.includes('đầy tháng')) ||
      (lower.includes('đặt tên') && name.includes('đặt tên')) ||
      (lower.includes('trưởng thành') && name.includes('trưởng thành')) ||
      (lower.includes('khởi nghiệp') && name.includes('khai trương')) ||
      (lower.includes('mừng thọ') && name.includes('mừng thọ')) ||
      (lower.includes('cải táng') && name.includes('cải táng')) ||
      desc.split(/\s+/).filter((w: string) => w.length > 4 && lower.includes(w)).length >= 3
    );
  });

  if (matched) {
    return {
      status: 'CONCLUDED',
      ten_nghi_le: matched.ten_nghi_le,
      giai_doan_vong_doi: matched.giai_doan_vong_doi,
      y_nghia_van_hoa: matched.y_nghia_van_hoa,
      dac_diem_nhan_dien: matched.dac_diem_nhan_dien,
      cac_buoc_thuc_hien: matched.cac_buoc_thuc_hien,
      su_khac_biet_vung_mien: matched.su_khac_biet_vung_mien,
      can_cu_phap_ly: matched.can_cu_phap_ly,
      ton_trong_da_dang: matched.ton_trong_da_dang,
      disclaimer: 'Lưu ý quan trọng: Thông tin cẩm nang mang tính chất tham khảo phong tục tập quán, tôn trọng tự nguyện và sự đồng thuận của gia đình, không thay thế văn bản quy phạm pháp luật chính thức.'
    };
  }

  // If no match found in grounded dataset -> return INSUFFICIENT_DATA strictly
  return {
    status: 'INSUFFICIENT_DATA',
    thong_bao_chinh: 'Chưa đủ căn cứ để kết luận',
    thong_tin_con_thieu: lang === 'en'
      ? 'Chưa đủ căn cứ để kết luận. The inquiry does not match verifiable records in the 30 standardized life-cycle ritual datasets, or lacks sufficient context to determine the precise customary framework without speculation.'
      : 'Chưa đủ căn cứ để kết luận. Tình huống bạn mô tả không tìm thấy đối chiếu phù hợp trong tệp dữ liệu 30 nghi lễ vòng đời chuẩn, hoặc còn thiếu bối cảnh cụ thể để đưa ra nhận định tin cậy mà không tự suy đoán.',
    huong_dan_bo_sung: [
      'Nêu rõ sự kiện gia đình bạn thuộc giai đoạn nào: Sinh nở, Khởi nghiệp, Cưới hỏi, Tang lễ hay Giỗ chạp?',
      'Gia đình đang cần hướng dẫn về mâm lễ, lời thưa, trình tự các bước hay sự dung hòa giữa các vùng miền?',
      'Có yếu tố tôn giáo (Phật giáo, Công giáo) hay quy định nếp sống văn minh nào cần lưu ý không?'
    ],
    disclaimer: 'Lưu ý: Hệ thống tuân thủ nguyên tắc không tự suy đoán, bịa đặt phong tục hoặc căn cứ pháp lý.'
  };
}

// Setup Vite middleware in dev or static files in prod
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
}

startServer();
