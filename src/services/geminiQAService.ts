import SITUATIONS_DATA from '../data/tinh_huong_nghi_le_vong_doi.json';

export interface CanCuPhapLy {
  co_lien_quan: boolean;
  ten_van_ban?: string;
  dieu_khoan?: string;
  noi_dung_ap_dung?: string;
  hinh_thuc_xu_ly?: string;
  phan_biet_phap_luat_phong_tuc?: string;
}

export interface RitualQAResult {
  status: 'CONCLUDED' | 'INSUFFICIENT_DATA';
  // Khi không đủ căn cứ
  thong_bao_chinh?: string;
  thong_tin_con_thieu?: string;
  huong_dan_bo_sung?: string[];

  // Khi có kết quả kết luận đối chiếu
  ten_nghi_le?: string;
  giai_doan_vong_doi?: string;
  y_nghia_van_hoa?: string;
  dac_diem_nhan_dien?: string[];
  cac_buoc_thuc_hien?: string[];
  su_khac_biet_vung_mien?: {
    mien_bac?: string;
    mien_trung?: string;
    mien_nam?: string;
    cong_dong?: string;
  };
  can_cu_phap_ly?: CanCuPhapLy;
  ton_trong_da_dang?: string;
  disclaimer?: string;
}

export async function analyzeUserSituationWithGemini(
  userText: string,
  lang: 'vi' | 'en' = 'vi'
): Promise<RitualQAResult> {
  const trimmed = userText.trim();
  if (!trimmed) {
    return {
      status: 'INSUFFICIENT_DATA',
      thong_bao_chinh: 'Chưa đủ căn cứ để kết luận',
      thong_tin_con_thieu: lang === 'en'
        ? 'Please enter your question or situation regarding family life-cycle rituals.'
        : 'Vui lòng nhập mô tả tình huống hoặc thắc mắc của bạn liên quan đến các nghi lễ vòng đời.',
      huong_dan_bo_sung: [
        'Nêu rõ nghi lễ gia đình bạn đang chuẩn bị (Đầy tháng, thôi nôi, cưới hỏi, tang lễ, giỗ chạp...)',
        'Nêu rõ vùng miền (Bắc, Trung, Nam) hoặc yếu tố tôn giáo liên quan nếu có'
      ]
    };
  }

  // 1. Try server-side proxy route /api/analyze (calling Gemini API with dataset grounding)
  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userText: trimmed, lang })
    });

    if (response.ok) {
      const data = await response.json();
      return data as RitualQAResult;
    }
  } catch (err) {
    console.warn('Backend server call failed, evaluating with local 30 situations dataset:', err);
  }

  // 2. High-Fidelity Client-side Grounded Evaluation against 30 Situations
  return evaluateLocallyAgainst30Situations(trimmed, lang);
}

function evaluateLocallyAgainst30Situations(input: string, lang: 'vi' | 'en'): RitualQAResult {
  const lower = input.toLowerCase();

  // If input is too brief or ambiguous -> Strictly return INSUFFICIENT_DATA
  if (lower.length < 15 || lower.split(/\s+/).length < 4) {
    return {
      status: 'INSUFFICIENT_DATA',
      thong_bao_chinh: 'Chưa đủ căn cứ để kết luận',
      thong_tin_con_thieu: lang === 'en'
        ? 'Chưa đủ căn cứ để kết luận. The input is too brief and lacks details regarding the specific ceremony, lifecycle stage, regional background, or family context.'
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
  const matched = (SITUATIONS_DATA as any[]).find((item) => {
    const title = (item.ten_tinh_huong || '').toLowerCase();
    const name = (item.ten_nghi_le || '').toLowerCase();
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
