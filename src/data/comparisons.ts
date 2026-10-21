import { ComparisonCriterion } from '../types';

export const COMPARISON_CRITERIA: ComparisonCriterion[] = [
  {
    id: 'origin-nature',
    order: '01',
    dimension: 'Nguồn gốc & Bản chất',
    title: 'Cội nguồn nhân văn vs. Nỗi sợ hãi hoang đường',
    belief: {
      title: 'Tín ngưỡng: Giá trị đạo lý và tri ân',
      description: 'Xuất phát từ tình cảm biết ơn, lòng thành kính đối với tổ tiên, người có công với cộng đồng, và niềm khao khát hòa hợp với thiên nhiên.',
      characteristics: [
        'Nuôi dưỡng lòng hiếu thảo, đạo lý "Uống nước nhớ nguồn"',
        'Gắn liền với lịch sử đấu tranh, sinh tồn của dân tộc',
        'Hình tượng được tôn kính là người thật việc thật có công hoặc biểu tượng hướng thiện (Mẫu, Thành hoàng, Tiền nhân)'
      ],
      example: 'Giỗ tổ Hùng Vương, ngày giỗ gia tiên, tưởng niệm anh hùng liệt sĩ, lễ cúng Thành hoàng làng bảo hộ xóm thôn.'
    },
    superstition: {
      title: 'Mê tín dị đoan: Nỗi sợ và ảo tưởng phi lý',
      description: 'Xuất phát từ sự dốt nát, sợ hãi trước những hiện tượng tự nhiên - xã hội chưa hiểu rõ, hoặc tâm lý muốn hưởng thụ mà không cần bỏ sức lao động.',
      characteristics: [
        'Khai thác triệt để nỗi lo sợ chết chóc, tai ương, vận hạn',
        'Tin vào những thế lực ma quái, tà thuật không có thật',
        'Cắt nghĩa cuộc đời bằng các suy diễn vô căn cứ, hoang tưởng'
      ],
      example: 'Tin rằng năm tuổi phải dâng sao tiền triệu mới sống sót, tin có "trùng tang" bắt người, tin ma nhập đòi tiền.'
    },
    keyTakeaway: 'Tín ngưỡng bắt nguồn từ TÌNH YÊU THƯƠNG và LÒNG BIẾT ƠN; Mê tín dị đoan sinh ra từ NỖI SỢ HÃI và SỰ MÊ MUỘI.'
  },
  {
    id: 'motive-mindset',
    order: '02',
    dimension: 'Động cơ & Tâm thế',
    title: 'Tâm thành hướng thiện vs. Vụ lợi & Hoảng loạn',
    belief: {
      title: 'Tín ngưỡng: Hướng nội & Thanh thản tinh thần',
      description: 'Người thực hành đến với tín ngưỡng để tìm sự bình an nội tâm, nhắc nhở bản thân sống tử tế, có trách nhiệm với gia đình và xã hội.',
      characteristics: [
        'Tâm thế an nhiên, thanh tịnh, tôn trọng lẽ tự nhiên',
        'Không đòi hỏi đổi chác hay mặc cả với thần linh',
        'Xem lễ bái là dịp soi xét lại tâm tính và tu dưỡng đạo đức'
      ],
      example: 'Thắp nén nhang tưởng nhớ ông bà ngày Tết, tâm nguyện năm mới sống chan hòa, siêng năng lao động.'
    },
    superstition: {
      title: 'Mê tín dị đoan: Mặc cả, trục vớt may rủi',
      description: 'Tiếp cận thần thánh như một cuộc trao đổi buôn bán: dâng lễ to để đòi hỏi đặc quyền, cầu xin chức quyền, trúng số mà không cần nỗ lực.',
      characteristics: [
        'Tâm thế hoang mang, bất an, luôn nơm nớp lo bị phạt',
        'Mặc cả với siêu nhiên: "con cúng 1 đồng xin lộc 10 đồng"',
        'Muốn hóa giải mọi sai lầm đời thực bằng vài lá bùa'
      ],
      example: 'Rải tiền lẻ khắp đền chùa cầu thăng quan tiến chức nhanh, thuê thầy "làm bùa ngải" hại đối thủ kinh doanh.'
    },
    keyTakeaway: 'Người có tín ngưỡng nỗ lực sống tốt hơn; người mê tín dựa dẫm vào thế lực vô hình để né tránh trách nhiệm bản thân.'
  },
  {
    id: 'rituals-behavior',
    order: '03',
    dimension: 'Nghi thức & Hành vi',
    title: 'Trang nghiêm, chừng mực vs. Quái đản, phung phí',
    belief: {
      title: 'Tín ngưỡng: Tiết kiệm, hòa nhập cộng đồng',
      description: 'Nghi lễ mang tính biểu trưng cao, gắn liền với thuần phong mỹ tục, không phô trương lãng phí và bảo vệ cảnh quan chung.',
      characteristics: [
        'Nghi thức chuẩn mực, trang nghiêm, tôn trọng trật tự',
        'Đề cao "tâm thành lễ mọn", một nén tâm hương',
        'Bảo vệ di tích lịch sử, gìn giữ môi trường thanh tịnh'
      ],
      example: 'Dâng đĩa hoa sen, nén hương thơm thanh khiết lên bàn thờ; trẩy hội làng cùng xóm giềng trong không khí vui tươi, gắn kết.'
    },
    superstition: {
      title: 'Mê tín dị đoan: Dị hợm, cực đoan, lãng phí',
      description: 'Nghi thức kỳ quái, ép buộc các hành vi quái đản, hành xác hoặc phung phí tiền của đốt hàng núi vàng mã gây ô nhiễm, hỏa hoạn.',
      characteristics: [
        'Đốt vàng mã ngút trời (nhà lầu, siêu xe, hộ chiếu giấy)',
        'Hành vi kỳ dị: uống nước tàn tro, đánh đập trừ tà, rạch lưỡi',
        'Chen lấn, cướp lộc, xô đẩy làm vấy bẩn nơi tôn nghiêm'
      ],
      example: 'Đốt tiền triệu tiền vàng mã che lấp cả đường đi; để "thầy pháp" dùng roi dâu đánh vào người thân vì nghi bị ma ám.'
    },
    keyTakeaway: 'Nghi thức tín ngưỡng làm đẹp không gian và lòng người; mê tín dị đoan tạo ra sự ô uế, lãng phí và phản cảm.'
  },
  {
    id: 'economic-impact',
    order: '04',
    dimension: 'Tác động kinh tế',
    title: 'Tự nguyện, hợp lý vs. Trục lợi thương mại tâm linh',
    belief: {
      title: 'Tín ngưỡng: Phi vụ lợi & Đóng góp cộng đồng',
      description: 'Không có sự ép buộc về tiền bạc. Tiền công đức nếu có đều minh bạch để tu bổ di tích, nuôi dưỡng người già neo đơn, làm việc thiện.',
      characteristics: [
        'Hoàn toàn tự nguyện theo khả năng kinh tế gia đình',
        'Không có "bảng giá cứu rỗi" hay "định giá phước đức"',
        'Góp phần bảo tồn vốn di sản văn hóa vật thể và phi vật thể'
      ],
      example: 'Bỏ vài ngàn đồng vào hòm công đức xây dựng mái đình quê hương, không ai đòi hỏi cũng không ai phân biệt đối xử.'
    },
    superstition: {
      title: 'Mê tín dị đoan: "Buôn thần bán thánh", bóc lột',
      description: 'Tâm linh bị biến thành công cụ kinh doanh siêu lợi nhuận. Kẻ hành nghề mê tín đặt ra các khoản phí khổng lồ để trục lợi trên sự nhẹ dạ.',
      characteristics: [
        'Định giá dịch vụ tâm linh: giải hạn vài triệu đến hàng trăm triệu',
        'Dọa nạt nếu không nộp tiền sẽ gặp tai ương, phá sản',
        'Làm giàu bất chính cho các "thầy bói", "cô đồng rởm"'
      ],
      example: 'Chi 50 triệu làm lễ "cắt tiền duyên", nộp hàng trăm triệu để "chuộc vong", "mua đất cõi âm" dẫn đến khánh kiệt tài sản.'
    },
    keyTakeaway: 'Tín ngưỡng không đòi hỏi của bạn một đồng để được an lạc; mê tín dị đoan sẽ tìm mọi cách moi kiệt tài sản của bạn.'
  },
  {
    id: 'health-society',
    order: '05',
    dimension: 'Sức khỏe & Đời sống',
    title: 'Gắn kết gia đình vs. Hủy hoại thể chất & Hạnh phúc',
    belief: {
      title: 'Tín ngưỡng: Củng cố gia tộc & Tinh thần vững vàng',
      description: 'Là chất keo gắn kết các thế hệ, giúp con cháu nhớ ơn cha mẹ, vợ chồng hòa thuận, xóm giềng tương trợ lẫn nhau.',
      characteristics: [
        'Khi bệnh tật vẫn tuân thủ y học hiện đại, cầu nguyện để thêm nghị lực',
        'Khuyến khích lối sống lành mạnh, ăn ở có nhân có đức',
        'Tôn trọng pháp luật và các chuẩn mực đạo đức xã hội'
      ],
      example: 'Con cháu tụ họp sum vầy ngày giỗ cụ, cùng chia sẻ chuyện làm ăn, động viên nhau vượt qua thử thách.'
    },
    superstition: {
      title: 'Mê tín dị đoan: Tiền mất tật mang, tan nát gia đình',
      description: 'Gây ra những bi kịch đau lòng: từ bỏ điều trị y khoa để uống nước bùa, nghi kỵ vợ chồng do bói toán, từ mặt con cái vì khắc tuổi.',
      characteristics: [
        'Tẩy chay y tế khoa học, chữa bệnh hiểm nghèo bằng "phép thuật"',
        'Gây nghi kỵ, chia rẽ dòng tộc: nghi ngờ người thân là "ma quỷ"',
        'Gây hoang tưởng tâm thần, khủng hoảng tinh thần kéo dài'
      ],
      example: 'Bệnh nhân ung thư bỏ hóa trị theo lời "thầy lang bùa chú" dẫn đến tử vong; nghe lời thầy bói ép con cái phá thai hoặc ly hôn.'
    },
    keyTakeaway: 'Tín ngưỡng bảo vệ gia đình và tiếp thêm sức mạnh nội tâm; mê tín dị đoan làm tan vỡ tổ ấm và tước đoạt sinh mạng.'
  },
  {
    id: 'legal-standing',
    order: '06',
    dimension: 'Địa vị Pháp lý tại Việt Nam',
    title: 'Được Nhà nước bảo hộ vs. Bị Pháp luật nghiêm cấm',
    belief: {
      title: 'Tín ngưỡng: Quyền hiến định được tôn trọng',
      description: 'Hiến pháp năm 2013 và Luật Tín ngưỡng, tôn giáo năm 2016 bảo hộ quyền tự do tín ngưỡng của mọi công dân Việt Nam.',
      characteristics: [
        'Nhà nước bảo vệ cơ sở tín ngưỡng, lễ hội truyền thống lành mạnh',
        'Tôn vinh và vinh danh nghệ nhân, di sản văn hóa phi vật thể',
        'Tạo điều kiện cho nhân dân sinh hoạt tín ngưỡng đúng pháp luật'
      ],
      example: 'Nghi lễ thờ Mẫu Tam phủ được ghi danh Di sản phi vật thể đại diện của nhân loại; các đình, đền, chùa được xếp hạng di tích quốc gia.'
    },
    superstition: {
      title: 'Mê tín dị đoan: Hành vi vi phạm pháp luật',
      description: 'Bị nghiêm cấm tuyệt đối theo Luật Tín ngưỡng, tôn giáo. Xử phạt hành chính hoặc truy cứu trách nhiệm hình sự (Điều 320 Bộ luật Hình sự).',
      characteristics: [
        'Xử phạt hành chính lên tới hàng chục triệu đồng với hành vi bói toán trục lợi',
        'Phạt tù từ 6 tháng đến 10 năm nếu gây hậu quả nghiêm trọng',
        'Bị cộng đồng xã hội lên án và pháp luật xử lý nghiêm minh'
      ],
      example: 'Tòa án tuyên phạt các đối tượng lập đền giả, truyền bá vong báo oán lừa đảo hàng tỷ đồng; phạt hành chính hành vi đốt vàng mã bừa bãi.'
    },
    keyTakeaway: 'Tín ngưỡng chân chính có sự đồng hành của Pháp luật; mê tín dị đoan là con đường dẫn thẳng đến cánh cửa nhà tù.'
  }
];
