import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Khi gặp trắc trở lớn trong công việc hoặc kinh doanh, cách hành xử nào phản ánh tín ngưỡng văn minh?',
    context: 'Cuộc sống không tránh khỏi những lúc thăng trầm, thử thách.',
    options: [
      {
        id: '1a',
        text: 'Thắp nén hương trước bàn thờ gia tiên để tĩnh tâm, nhìn lại sai sót trong kế hoạch và nỗ lực khắc phục',
        score: 2,
        feedback: 'Rất chính xác! Tín ngưỡng là điểm tựa tinh thần để ta an định và kiên trì, không phải chiếc đũa thần làm thay ta.'
      },
      {
        id: '1b',
        text: 'Chi 20 triệu đồng thuê thầy cúng làm lễ dâng sao giải hạn, tin rằng vận xui sẽ biến mất ngay',
        score: 0,
        feedback: 'Đây là biểu hiện mê tín dị đoan. Thầy cúng không thể thay bạn giải quyết sai lầm trong kinh doanh hay quản lý.'
      },
      {
        id: '1c',
        text: 'Xin một quẻ thẻ ở đền chùa xem thử nhưng vẫn tập trung làm việc thực tế',
        score: 1,
        feedback: 'Tương đối ổn nếu chỉ xem như một chiêm nghiệm tinh thần giải trí, nhưng tránh để quẻ bói chi phối quyết định quan trọng.'
      }
    ]
  },
  {
    id: 2,
    question: 'Quan niệm về việc đốt vàng mã trong đời sống hiện đại nên được nhìn nhận thế nào?',
    context: 'Hàng năm có hàng nghìn tấn vàng mã được thiêu hủy gây nhiều tranh cãi.',
    options: [
      {
        id: '2a',
        text: 'Phải đốt thật nhiều nhà lầu, siêu xe, tiền giấy thì tổ tiên dưới âm mới phù hộ cho giàu sang',
        score: 0,
        feedback: 'Sai lầm và lãng phí. Đây là biến tướng trần tục hóa cõi thiêng, gây ô nhiễm khói bụi và nguy cơ hỏa hoạn nghiêm trọng.'
      },
      {
        id: '2b',
        text: 'Không đốt hoặc chỉ mang tính tượng trưng tối thiểu, dành tiền đó làm việc thiện hồi hướng cho tiền nhân',
        score: 2,
        feedback: 'Rất thấu suốt! Giáo lý nhà Phật và các nhà văn hóa đều khuyến khích giảm tối đa vàng mã, đem lòng từ bi chia sẻ với người nghèo.'
      },
      {
        id: '2c',
        text: 'Đốt theo thói quen gia đình vì sợ người khác dị nghị mình bất hiếu',
        score: 1,
        feedback: 'Tâm lý nể nang là dễ hiểu, nhưng lòng hiếu thảo đo bằng cách đối đãi khi cha mẹ còn sống và nếp sống gia phong, không đo bằng giấy vụn.'
      }
    ]
  },
  {
    id: 3,
    question: 'Khi đi lễ đền chùa đầu xuân, điều gì mang lại giá trị chân thực nhất cho tâm hồn bạn?',
    context: 'Lễ hội mùa xuân là nét đẹp truyền thống của người Việt.',
    options: [
      {
        id: '3a',
        text: 'Phải chen lấn đặt được mâm lễ to lên ban thờ chính và nhét tiền vào tay tượng',
        score: 0,
        feedback: 'Hành vi phản cảm, vấy bẩn sự tôn nghiêm nơi thờ tự và hoàn toàn sai lệch với tinh thần thanh tịnh của chốn thiền môn.'
      },
      {
        id: '3b',
        text: 'Thắp một nén tâm hương, vãn cảnh thanh tịnh, cầu nguyện quốc thái dân an và học theo đức hạnh từ bi',
        score: 2,
        feedback: 'Chuẩn mực cao đẹp! "Một nén tâm hương thấu chín tầng trời" - sự tĩnh lặng và hướng thiện chính là phước lành lớn nhất.'
      },
      {
        id: '3c',
        text: 'Chỉ đi chụp ảnh kỷ niệm mà không cần biết nơi đó thờ phụng ai hay mang ý nghĩa lịch sử gì',
        score: 1,
        feedback: 'Vãn cảnh là quyền cá nhân, nhưng nếu tìm hiểu thêm về nhân vật lịch sử, công đức tiền nhân thì chuyến đi sẽ ý nghĩa hơn nhiều.'
      }
    ]
  },
  {
    id: 4,
    question: 'Một người tự xưng "thầy phong thủy / pháp sư" phán bạn bị "duyên âm theo" và yêu cầu đưa 30 triệu để làm lễ cắt duyên. Bạn nên làm gì?',
    context: 'Chiêu trò tâm linh thường nhắm vào người đang trắc trở tình cảm.',
    options: [
      {
        id: '4a',
        text: 'Vay mượn tiền nộp ngay kẻo ế suốt đời hoặc gặp tai nạn',
        score: 0,
        feedback: 'Mắc bẫy lừa đảo! Đây là thủ đoạn thao túng tâm lý bằng nỗi sợ hãi để trục lợi tài sản, cấu thành tội phạm theo pháp luật.'
      },
      {
        id: '4b',
        text: 'Từ chối dứt khoát, cảnh báo người thân và có thể trình báo cơ quan chức năng nếu đối tượng đe dọa, tống tiền',
        score: 2,
        feedback: 'Bản lĩnh và sáng suốt! Duyên do tính cách, lối sống và sự sẻ chia. Tuyệt đối không để kẻ buôn thần bán thánh dắt mũi.'
      },
      {
        id: '4c',
        text: 'Mặc cả hạ giá xuống vài triệu để làm lễ cho an tâm',
        score: 0,
        feedback: 'Vẫn là biểu hiện mê tín và nuôi dưỡng hành vi lừa đảo của đối tượng. Không có cơ sở nào cho việc "cắt duyên bằng tiền".'
      }
    ]
  },
  {
    id: 5,
    question: 'Nghi lễ Lên đồng (Hầu đồng) là di sản UNESCO, nhưng khi nào nó bị coi là mê tín dị đoan vi phạm pháp luật?',
    context: 'Thực hành Tín ngưỡng Thờ Mẫu Tam phủ của người Việt là di sản văn hóa quý báu.',
    options: [
      {
        id: '5a',
        text: 'Khi diễn xướng ca hát chầu văn tái hiện công trạng các vị anh hùng lịch sử',
        score: 2,
        feedback: 'Chính xác! Khi giữ đúng tính chất nghệ thuật diễn xướng dân gian tri ân công đức, đó là di sản văn hóa được tôn vinh.'
      },
      {
        id: '5b',
        text: 'Khi người lên đồng phán truyền nhảm nhí, dọa ma dọa quỷ, đòi tiền mở phủ hàng trăm triệu và phát tán bùa phép độc hại',
        score: 2,
        feedback: 'Chính xác! Khi bị thương mại hóa, biến thành công cụ bói toán, đe dọa trục lợi tiền bạc thì đã biến thành mê tín dị đoan vi phạm pháp luật.'
      },
      {
        id: '5c',
        text: 'Cứ ai thực hành lên đồng đều là mê tín dị đoan cần cấm tiệt',
        score: 0,
        feedback: 'Cách nhìn quy chụp thiếu hiểu biết văn hóa. Cần phân định giữa di sản diễn xướng văn hóa phi vật thể với hành vi lợi dụng di sản để trục lợi.'
      }
    ]
  },
  {
    id: 6,
    question: 'Câu tục ngữ dân gian "Có thờ có thiêng, có kiêng có lành" nên được hiểu đúng đắn theo tinh thần nào?',
    context: 'Tục ngữ phản ánh kinh nghiệm sống nhưng thường bị kẻ mê tín bóp méo.',
    options: [
      {
        id: '6a',
        text: 'Kiêng cữ khoa học, giữ gìn đạo đức chuẩn mực, tôn trọng quy luật tự nhiên và chuẩn mực xã hội',
        score: 2,
        feedback: 'Rất thấu triệt! "Thờ" là nhớ ơn cội nguồn; "Kiêng" là kiêng điều ác, kiêng rượu chè phóng túng, kiêng phạm pháp để thân tâm được an lành.'
      },
      {
        id: '6b',
        text: 'Kiêng tất cả mọi thứ: bước chân trái, gặp phụ nữ buổi sáng, quét nhà ngày mùng 1, không ăn trứng trước khi thi',
        score: 0,
        feedback: 'Đây là sự kiêng khem mù quáng máy móc, làm giảm sự tự tin và cản trở cuộc sống bình thường.'
      },
      {
        id: '6c',
        text: 'Cứ làm điều xằng bậy ngoài đời rồi về nhà cúng bái thật to là được tha thứ',
        score: 0,
        feedback: 'Trái ngược hoàn toàn với đạo lý! "Thiêng" hay không ở tấm lòng và hành động thực tế, không thần thánh nào che chở cho kẻ gian dối.'
      }
    ]
  }
];
