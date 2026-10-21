import { LegalArticle } from '../types';

export const LEGAL_ARTICLES: LegalArticle[] = [
  {
    code: 'BLHS-320',
    name: 'Bộ luật Hình sự năm 2015 (Sửa đổi, bổ sung 2017)',
    article: 'Điều 320',
    title: 'Tội hành nghề mê tín, dị đoan',
    quote: '1. Người nào dùng bói toán, đồng bóng hoặc các hình thức mê tín, dị đoan khác đã bị xử phạt vi phạm hành chính về hành vi này hoặc đã bị kết án về tội này, chưa được xóa án tích mà còn vi phạm, thì bị phạt tiền từ 10.000.000 đồng đến 100.000.000 đồng, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm.\n2. Phạm tội thuộc một trong các trường hợp sau đây, thì bị phạt tù từ 03 năm đến 10 năm: Làm chết người; Thu lợi bất chính 200.000.000 đồng trở lên; Gây ảnh hưởng xấu đến an ninh, trật tự, an toàn xã hội.',
    penalty: 'Phạt tiền từ 10 - 100 triệu VNĐ, cải tạo không giam giữ hoặc phạt tù từ 06 tháng đến 10 năm tù giam.',
    application: 'Áp dụng cho các đối tượng hành nghề bói toán, gọi hồn lừa đảo, truyền bá chữa bệnh mê tín làm chết người hoặc trục lợi tiền bạc lớn.'
  },
  {
    code: 'LTNTG-5',
    name: 'Luật Tín ngưỡng, tôn giáo năm 2016',
    article: 'Điều 5',
    title: 'Các hành vi bị nghiêm cấm',
    quote: 'Nghiêm cấm các hành vi: Hoạt động tín ngưỡng, tôn giáo xâm phạm quốc phòng, an ninh, chủ quyền quốc gia, trật tự, an toàn xã hội, môi trường; Xâm hại đạo đức xã hội; Xâm phạm thân thể, sức khỏe, tính mạng, tài sản; Xúc phạm danh dự, nhân phẩm của người khác; Cản trở việc thực hiện quyền và nghĩa vụ công dân; Trục lợi.',
    penalty: 'Tùy theo tính chất và mức độ vi phạm mà bị xử lý kỷ luật, xử phạt vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự; nếu gây thiệt hại thì phải bồi thường.',
    application: 'Ranh giới pháp lý xác định mọi hoạt động núp bóng tín ngưỡng để xâm hại tài sản, sức khỏe hay trục lợi đều là phạm pháp.'
  },
  {
    code: 'ND38-14',
    name: 'Nghị định số 38/2021/NĐ-CP của Chính phủ',
    article: 'Điều 14 & Điều 15',
    title: 'Xử phạt vi phạm quy định về tổ chức lễ hội và nếp sống văn hóa',
    quote: 'Phạt tiền từ 3.000.000 đồng đến 5.000.000 đồng đối với hành vi lợi dụng hoạt động lên đồng, xem bói, gọi hồn, xin xăm, xóc thẻ, yểm bùa, phù chú để trục lợi. Phạt tiền từ 200.000 đồng đến 500.000 đồng đối với hành vi thắp hương hoặc đốt vàng mã không đúng nơi quy định tại nơi tổ chức lễ hội, di tích lịch sử - văn hóa.',
    penalty: 'Phạt tiền từ 3 - 5 triệu đồng (và buộc nộp lại số lợi bất hợp pháp có được do thực hiện hành vi).',
    application: 'Xử lý các hành vi chèo kéo xem bói, xóc thẻ xin xăm lấy tiền, đốt vàng mã bừa bãi tại các lễ hội, đền chùa.'
  },
  {
    code: 'HP-24',
    name: 'Hiến pháp nước Cộng hòa Xã hội Chủ nghĩa Việt Nam (2013)',
    article: 'Điều 24',
    title: 'Quyền tự do tín ngưỡng, tôn giáo',
    quote: '1. Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào. Các tôn giáo bình đẳng trước pháp luật.\n2. Nhà nước tôn trọng và hộ hộ quyền tự do tín ngưỡng, tôn giáo.\n3. Không ai được xâm phạm tự do tín ngưỡng, tôn giáo hoặc lợi dụng tín ngưỡng, tôn giáo để vi phạm pháp luật.',
    penalty: 'Quyền hiến định tối cao đồng thời khẳng định nguyên tắc không được lợi dụng tín ngưỡng để làm trái pháp luật.',
    application: 'Đảm bảo tự do sinh hoạt tâm linh lành mạnh của nhân dân, đồng thời thiết lập lằn ranh đỏ chống lạm dụng.'
  }
];

export const CIVIL_PRINCIPLES = [
  {
    num: '01',
    title: 'Tâm thành hơn mâm cao cỗ đầy',
    desc: 'Lòng thành kính đo bằng phẩm hạnh, sự hiếu đễ và cách sống tử tế mỗi ngày, không đo bằng mâm sơn hào hải vị hay xấp tiền rải đầy ban thờ.'
  },
  {
    num: '02',
    title: 'Tự lực cánh sinh, hướng nội tự sửa',
    desc: 'Họa phúc đời người bắt nguồn từ suy nghĩ và hành động của chính mình. Thay vì cầu xin thần linh ban phát đặc quyền, hãy tự trau dồi tri thức và đạo đức.'
  },
  {
    num: '03',
    title: 'Văn minh môi trường: Giảm thiểu vàng mã',
    desc: 'Bảo vệ nguồn khí quyển, phòng chống hỏa hoạn và tiết kiệm tiền bạc bằng cách không đốt hoặc tối giản vàng mã. Dành nguồn lực đó tương trợ đồng bào hoạn nạn.'
  },
  {
    num: '04',
    title: 'Tôn trọng chốn tôn nghiêm & di tích',
    desc: 'Trang phục trang nhã, đi nhẹ nói khẽ, không chen lấn cướp lộc, không nhét tiền lẻ vấy bẩn tượng thờ. Gìn giữ không gian thanh tịnh cho toàn thể cộng đồng.'
  },
  {
    num: '05',
    title: 'Tỉnh táo lý trí, từ chối trục lợi tâm linh',
    desc: 'Cảnh giác trước mọi chiêu trò thao túng bằng nỗi sợ hãi (cắt duyên, dâng sao, trừ tà). Nhận diện rõ hành vi buôn thần bán thánh và kiên quyết tẩy chay.'
  }
];
