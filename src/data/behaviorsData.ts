export type BehaviorGroup =
  | 'tho-cung-to-tien'
  | 'tin-nguong-dan-gian'
  | 'xem-boi'
  | 'goi-hon'
  | 'cung-giai-han'
  | 'me-tin-thuong-gap';

export interface BilingualText {
  vi: string;
  en: string;
}

export interface BilingualArray {
  vi: string[];
  en: string[];
}

export interface BehaviorItem {
  id: string;
  name: BilingualText;
  group: BehaviorGroup;
  groupLabel: BilingualText;
  shortDesc: BilingualText;
  description: BilingualText;
  identificationMarks: BilingualArray;
  classification: 'belief' | 'borderline' | 'superstition';
  classificationLabel: BilingualText;
  classificationAnalysis: BilingualText;
  culturalRoot: BilingualText;
  riskWarning?: BilingualText;
  civilAdvice: BilingualText;
  legalBasis?: {
    law: BilingualText;
    article: BilingualText;
    content: BilingualText;
    penalty?: BilingualText;
  };
}

export const BEHAVIOR_GROUPS: {
  id: BehaviorGroup;
  title: BilingualText;
  description: BilingualText;
  badgeCount: number;
}[] = [
  {
    id: 'tho-cung-to-tien',
    title: {
      vi: 'Tín ngưỡng thờ cúng tổ tiên',
      en: 'Ancestral Worship Traditions'
    },
    description: {
      vi: 'Nền tảng đạo hiếu, lòng tri ân cội nguồn huyết thống và sự gắn kết gia đình Việt Nam.',
      en: 'The foundation of filial piety, bloodline gratitude, and Vietnamese familial cohesion.'
    },
    badgeCount: 3
  },
  {
    id: 'tin-nguong-dan-gian',
    title: {
      vi: 'Tín ngưỡng dân gian',
      en: 'Folk Beliefs & Community Festivals'
    },
    description: {
      vi: 'Tôn vinh các nhân vật lịch sử, Thành hoàng làng, Mẫu Tam phủ và các lễ hội truyền thống.',
      en: 'Honoring historical heroes, village tutelary deities, Mother Goddesses, and festivals.'
    },
    badgeCount: 4
  },
  {
    id: 'xem-boi',
    title: {
      vi: 'Xem bói & Dự đoán số mệnh',
      en: 'Divination & Fortune Telling'
    },
    description: {
      vi: 'Ranh giới giữa chiêm nghiệm giải trí đầu xuân và cạm bẫy thao túng tâm lý thu tiền.',
      en: 'The boundary between light seasonal cultural reflection and manipulative fraud.'
    },
    badgeCount: 3
  },
  {
    id: 'goi-hon',
    title: {
      vi: 'Gọi hồn & Áp vong',
      en: 'Spirit Mediumship & Necromancy'
    },
    description: {
      vi: 'Hiện tượng mạo danh người đã khuất để phán truyền, thao túng nỗi đau và chiếm đoạt tài sản.',
      en: 'Impersonating deceased relatives to manipulate grief and extort family finances.'
    },
    badgeCount: 3
  },
  {
    id: 'cung-giai-han',
    title: {
      vi: 'Cúng giải hạn & Cầu tài lộc',
      en: 'Star Exorcisms & Fortune Rituals'
    },
    description: {
      vi: 'Thực trạng biến tướng tâm linh, dâng sao thu phí tiền triệu và tâm lý cầu may ỷ lại.',
      en: 'Commercialized star rituals, high fees, and passive psychological dependence.'
    },
    badgeCount: 3
  },
  {
    id: 'me-tin-thuong-gap',
    title: {
      vi: 'Hành vi mê tín dị đoan thường gặp',
      en: 'Harmful Superstitions in Daily Life'
    },
    description: {
      vi: 'Các hủ tục nguy hại như chữa bệnh bằng bùa chú, bùa ngải ngoại lai, trừ tà đánh đập.',
      en: 'Dangerous malpractice including talisman healing, foreign occult items, and violent exorcisms.'
    },
    badgeCount: 3
  }
];

export const BEHAVIOR_ITEMS: BehaviorItem[] = [
  // --- NHÓM 1: THỜ CÚNG TỔ TIÊN ---
  {
    id: 'tho-cung-gia-tien',
    name: {
      vi: 'Thờ cúng tổ tiên & thắp nén nhang ngày giỗ, Tết',
      en: 'Ancestral veneration and offering incense on anniversaries and Tet'
    },
    group: 'tho-cung-to-tien',
    groupLabel: {
      vi: 'Tín ngưỡng thờ cúng tổ tiên',
      en: 'Ancestral Worship Traditions'
    },
    shortDesc: {
      vi: 'Con cháu dọn dẹp bàn thờ, dâng hoa quả thắp nén nhang tri ân công ơn sinh thành dưỡng dục.',
      en: 'Family members clean the ancestral altar and offer fresh fruit and incense in gratitude.'
    },
    description: {
      vi: 'Con cháu lau dọn bàn thờ sạch sẽ, dâng nén hương thơm, chén nước trong, hoa quả tươi hoặc mâm cơm gia đình ấm cúng để tưởng nhớ người đã khuất trong ngày giỗ hoặc dịp Tết Nguyên đán.',
      en: 'Family members meticulously tidy the altar, offering fragrant incense, clear water, fresh flowers, fruit, or a traditional home meal on death anniversaries and the Lunar New Year.'
    },
    identificationMarks: {
      vi: [
        'Không khí trang nghiêm, ấm cúng và tôn kính trong phạm vi gia đình',
        'Lễ vật giản dị, thanh tịnh, tùy tâm và khả năng kinh tế của gia đình',
        'Không có sự ép buộc, không vụ lợi, không đòi hỏi đổi chác siêu nhiên',
        'Gắn liền với việc sum họp các thế hệ con cháu và giáo dục truyền thống hiếu đạo'
      ],
      en: [
        'Dignified, warm, and reverent atmosphere within the family circle',
        'Simple, modest offerings proportionate to family means',
        'No coercion, commercial pricing, or transactional demands with supernatural forces',
        'Fosters multi-generational reunions and instills moral filial piety'
      ]
    },
    classification: 'belief',
    classificationLabel: {
      vi: 'Tín ngưỡng truyền thống lành mạnh',
      en: 'Healthy Cultural Folk Belief'
    },
    classificationAnalysis: {
      vi: 'Hành vi này hoàn toàn thuộc về Tín ngưỡng truyền thống cao đẹp của dân tộc Việt Nam. Bản chất là thể hiện đạo lý "Uống nước nhớ nguồn", giúp con cháu duy trì mối dây liên kết thiêng liêng với tổ tiên và rèn luyện đạo đức làm người.',
      en: 'This practice embodies authentic Vietnamese folk belief. Its essence lies in remembering moral roots, strengthening kinship bonds, and nurturing filial piety across generations.'
    },
    culturalRoot: {
      vi: 'Tín ngưỡng bản địa ngàn đời của người Việt, được khẳng định là hòn đá tảng nâng đỡ đời sống tinh thần gia đình Việt Nam.',
      en: 'Millennia-old indigenous tradition serving as the ethical cornerstone of Vietnamese family life.'
    },
    civilAdvice: {
      vi: 'Nên duy trì đều đặn. Thắp từ 1 đến 3 nén nhang là đủ; giữ không gian thông thoáng để phòng ngừa cháy nổ; chú trọng lòng hiếu thảo chăm sóc cha mẹ khi còn sống hơn là cỗ bàn linh đình sau khi mất.',
      en: 'Encouraged to preserve. Burning 1 to 3 incense sticks is sufficient; maintain ventilation for fire safety; cherish parents while living rather than lavish feasts after passing.'
    },
    legalBasis: {
      law: {
        vi: 'Luật Tín ngưỡng, tôn giáo năm 2016',
        en: '2016 Law on Belief and Religion of Vietnam'
      },
      article: {
        vi: 'Điều 3 & Điều 24 Hiến pháp 2013',
        en: 'Article 3 & 2013 Constitution Article 24'
      },
      content: {
        vi: 'Nhà nước tôn trọng và bảo hộ quyền tự do tín ngưỡng, bảo đảm các nghi thức thờ cúng tổ tiên truyền thống phù hợp thuần phong mỹ tục.',
        en: 'The State respects and protects the freedom of belief, safeguarding traditional ancestral rituals consistent with fine customs.'
      }
    }
  },
  {
    id: 'hop-dong-toc-pha-he',
    name: {
      vi: 'Biên soạn gia phả & họp mặt dòng họ đầu xuân',
      en: 'Genealogical records & Clan gatherings in spring'
    },
    group: 'tho-cung-to-tien',
    groupLabel: {
      vi: 'Tín ngưỡng thờ cúng tổ tiên',
      en: 'Ancestral Worship Traditions'
    },
    shortDesc: {
      vi: 'Ghi chép công đức tiền nhân, khuyến học con cháu và tương trợ người khó khăn trong dòng tộc.',
      en: 'Documenting clan history, encouraging academic pursuits, and aiding disadvantaged clan members.'
    },
    description: {
      vi: 'Các chi phái trong dòng họ họp mặt tại nhà thờ họ đầu xuân để thắp hương tri ân tổ tiên khai sáng dòng họ, phát thưởng khuyến học cho con cháu và gây quỹ tương trợ.',
      en: 'Clan branches gather at ancestral lineage halls in early spring to honor founding forefathers, award study scholarships to youth, and organize mutual support funds.'
    },
    identificationMarks: {
      vi: [
        'Mang tính chất xã hội - văn hóa dòng họ lành mạnh',
        'Đề cao việc học hành, giữ gìn danh dự dòng tộc, sống tuân thủ pháp luật',
        'Minh bạch tài chính quỹ họ, hoàn toàn tự nguyện đóng góp'
      ],
      en: [
        'Wholesome cultural and social kinship institution',
        'Emphasizes education, clan honor, and civic compliance',
        'Transparent mutual-aid finances based on voluntary contributions'
      ]
    },
    classification: 'belief',
    classificationLabel: {
      vi: 'Tín ngưỡng truyền thống lành mạnh',
      en: 'Healthy Cultural Folk Belief'
    },
    classificationAnalysis: {
      vi: 'Đây là nét đẹp tín ngưỡng gia tộc kết hợp với giá trị giáo dục cộng đồng. Không chứa đựng bất kỳ yếu tố hoang đường hay mê muội nào, ngược lại giúp củng cố tinh thần tương thân tương ái.',
      en: 'A constructive synthesis of lineage veneration and community education, free from superstition and fostering mutual solidarity.'
    },
    culturalRoot: {
      vi: 'Truyền thống liên kết cộng đồng huyết thống của người Việt, coi trọng gia phong và nề nếp gia đình.',
      en: 'Traditional Vietnamese kinship cohesion prioritizing family ethics and moral discipline.'
    },
    civilAdvice: {
      vi: 'Khuyến khích duy trì, gắn kết các thế hệ trẻ với nguồn cội thông qua các hoạt động khuyến học và thiện nguyện.',
      en: 'Encouraged to maintain, engaging youth with their heritage through scholarships and community service.'
    },
    legalBasis: {
      law: {
        vi: 'Luật Di sản văn hóa & Luật Tín ngưỡng, tôn giáo',
        en: 'Law on Cultural Heritage & Law on Belief and Religion'
      },
      article: {
        vi: 'Chính sách bảo tồn văn hóa dòng họ',
        en: 'Clan Cultural Preservation Policies'
      },
      content: {
        vi: 'Khuyến khích giữ gìn và phát huy các phong tục dòng họ tiến bộ, văn minh.',
        en: 'Encourages the preservation and promotion of progressive, civilized lineage customs.'
      }
    }
  },
  {
    id: 'dot-vang-ma-qua-muc',
    name: {
      vi: 'Đốt hàng tạ vàng mã, biệt thự, siêu xe, thẻ tín dụng',
      en: 'Burning excessive joss paper (villas, luxury cars, paper currency)'
    },
    group: 'tho-cung-to-tien',
    groupLabel: {
      vi: 'Tín ngưỡng thờ cúng tổ tiên',
      en: 'Ancestral Worship Traditions'
    },
    shortDesc: {
      vi: 'Thiêu hủy hàng triệu đồng tiền giấy và đồ mã khổng lồ với quan niệm "trần sao âm vậy".',
      en: 'Incinerating substantial monetary wealth into paper replicas on the naive notion of worldly replication.'
    },
    description: {
      vi: 'Nhiều gia đình chi tiền triệu đến hàng chục triệu đồng mua vàng mã hình nhà lầu nhiều tầng, siêu xe, người giúp việc giấy, thẻ tín dụng để đốt với niềm tin người âm sẽ nhận được và phù hộ làm ăn giàu có.',
      en: 'Families spend thousands of dollars purchasing massive paper mansions, paper luxury cars, paper domestic staff, and credit cards to burn, believing spirits receive them and confer fortune.'
    },
    identificationMarks: {
      vi: [
        'Khói bụi mù mịt, tàn tro bay khắp khu dân cư gây ngột ngạt và nguy cơ cháy nổ',
        'Quan niệm vật chất hóa cõi âm một cách thô thiển ("trần sao âm vậy")',
        'Tâm lý ganh đua, khoe khoang sự giàu sang của người sống qua đống tro tàn',
        'Lãng phí tài chính thật vào những thứ vô giá trị'
      ],
      en: [
        'Choking smoke and ash scattered across neighborhoods creating severe fire hazards',
        'Crude commercialization of the spiritual realm ("as in life, so in death")',
        'Ostentatious consumerist competition among living relatives via burning ash',
        'Squandering hard-earned economic resources on worthless paper combustion'
      ]
    },
    classification: 'superstition',
    classificationLabel: {
      vi: 'Mê tín dị đoan biến tướng & lãng phí',
      en: 'Wasteful & Distorted Superstition'
    },
    classificationAnalysis: {
      vi: 'Hành vi này có dấu hiệu rõ rệt của sự mê tín dị đoan và suy đồi văn hóa. Tập tục đốt vàng mã vốn du nhập từ phong kiến Trung Hoa, hoàn toàn không có trong tín ngưỡng nguyên thủy của người Việt và bị Phật giáo chính thống lên án mạnh mẽ.',
      en: 'Clear indication of harmful superstition and distorted folk practice. Incinerating joss paper was imported historically, is foreign to indigenous Vietnamese roots, and is explicitly rejected by canonical Buddhism.'
    },
    culturalRoot: {
      vi: 'Tâm lý muốn "hối lộ" cõi âm để cầu tài lộc chớp nhoáng, cộng với thói phô trương của xã hội tiêu dùng.',
      en: 'Attempting to bribe the supernatural for quick riches, exacerbated by consumerist vanity.'
    },
    riskWarning: {
      vi: 'Gây lãng phí hàng nghìn tỷ đồng mỗi năm; ô nhiễm không khí nặng nề; trực tiếp gây ra nhiều vụ hỏa hoạn thiêu rụi nhà cửa và gây chết người.',
      en: 'Squanders billions of VND annually; heavily pollutes air quality; directly causes deadly residential fires.'
    },
    civilAdvice: {
      vi: 'Kiên quyết hạn chế hoặc xóa bỏ. Dùng số tiền mua đồ mã để làm từ thiện, giúp đỡ người nghèo hoặc xây dựng quỹ khuyến học.',
      en: 'Decisively minimize or abandon. Direct funds into charitable causes, aiding impoverished families or education funds.'
    },
    legalBasis: {
      law: {
        vi: 'Nghị định số 38/2021/NĐ-CP của Chính phủ',
        en: 'Government Decree No. 38/2021/ND-CP'
      },
      article: {
        vi: 'Điều 14 & Điều 15',
        en: 'Articles 14 & 15'
      },
      content: {
        vi: 'Phạt tiền từ 200.000 đến 500.000 đồng đối với hành vi đốt vàng mã không đúng nơi quy định tại lễ hội, di tích; xử lý nghiêm nếu vi phạm PCCC.',
        en: 'Fines for unauthorized burning of votive paper at heritage sites; strict civil and criminal liability for fire code violations.'
      },
      penalty: {
        vi: 'Xử phạt hành chính và bồi thường thiệt hại nếu để xảy ra hỏa hoạn.',
        en: 'Administrative fines and full damage restitution upon fire outbreak.'
      }
    }
  },

  // --- NHÓM 2: TÍN NGƯỠNG DÂN GIAN ---
  {
    id: 'len-dong-hau-dong',
    name: {
      vi: 'Nghi lễ Lên đồng (Hầu đồng) trong Tín ngưỡng Thờ Mẫu',
      en: 'Mediumship Rituals (Hau Dong) in Mother Goddess Worship'
    },
    group: 'tin-nguong-dan-gian',
    groupLabel: {
      vi: 'Tín ngưỡng dân gian',
      en: 'Folk Beliefs & Community Festivals'
    },
    shortDesc: {
      vi: 'Diễn xướng dân gian tôn vinh các vị anh hùng lịch sử và Thánh Mẫu bảo hộ đất nước.',
      en: 'Folk theatrical performance honoring historical defenders and sacred Mother deities.'
    },
    description: {
      vi: 'Nghi lễ tâm linh kết hợp nghệ thuật diễn xướng dân gian, hát văn, vũ đạo cổ truyền để tái hiện hình tượng các vị Quan lớn, Chầu bà, Ông hoàng, Cô, Cậu có công đánh giặc cứu nước và khai phá bờ cõi.',
      en: 'A liturgical performance blending traditional Chau Van singing, classical dance, and sacred costuming to embody national historical figures and deities.'
    },
    identificationMarks: {
      vi: [
        'Trang phục cổ truyền lộng lẫy, âm nhạc chầu văn điêu luyện',
        'Nội dung ca ngợi tinh thần thượng võ, lòng yêu nước và che chở nhân dân',
        'Di sản phi vật thể đại diện của nhân loại được UNESCO ghi danh năm 2016',
        'Tuy nhiên rất dễ bị kẻ xấu biến tướng thành dịch vụ trục lợi'
      ],
      en: [
        'Exquisite traditional attire and virtuosic folk musical performances',
        'Lyrics praising patriotism, martial valor, and benevolent protection',
        'Inscribed by UNESCO as Intangible Cultural Heritage of Humanity in 2016',
        'Vulnerable to exploitative distortion by deceptive commercial charlatans'
      ]
    },
    classification: 'borderline',
    classificationLabel: {
      vi: 'Tín ngưỡng di sản — Ranh giới dễ bị trục lợi',
      en: 'Heritage Belief — Borderline Vulnerable to Exploitation'
    },
    classificationAnalysis: {
      vi: 'Bản chất hầu đồng là Di sản văn hóa phi vật thể quý báu của dân tộc. Tuy nhiên, ranh giới giữa bảo tồn di sản và mê tín dị đoan rất mỏng manh: nếu chỉ diễn xướng tri ân thì là tín ngưỡng; nhưng nếu lợi dụng để phán truyền nhảm nhí, dọa ma dọa quỷ, đòi tiền mở phủ hàng trăm triệu thì đã biến tướng thành mê tín dị đoan phạm pháp.',
      en: 'At its core, Hau Dong is a UNESCO-inscribed cultural treasure. However, the boundary is delicate: honoring history is genuine belief; but inventing ghost threats and demanding hundreds of millions for initiation ceremonies is criminal superstition.'
    },
    culturalRoot: {
      vi: 'Tín ngưỡng Thờ Mẫu Tam phủ - Tứ phủ đặc sắc của người Việt, tôn vinh người Mẹ thiên nhiên và các anh hùng dân tộc.',
      en: 'Mother Goddess worship venerating natural forces and legendary historical figures.'
    },
    riskWarning: {
      vi: 'Bị kẻ xấu thao túng tâm lý: phán "có căn số" bắt phải mở phủ tốn kém hàng trăm triệu, tung tiền bạc hỗn loạn, cúng bái mù quáng.',
      en: 'Psychological manipulation claiming "cursed spiritual calling" to extort exorbitant initiation fees.'
    },
    civilAdvice: {
      vi: 'Thưởng thức diễn xướng với tâm thế trân trọng di sản văn hóa dân gian. Tuyệt đối không tin theo những lời phán về tương lai hay đòi tiền cúng bái của các "đồng rởm".',
      en: 'Appreciate performances as cultural folklore. Never heed fortune prophecies or financial demands from unverified mediums.'
    },
    legalBasis: {
      law: {
        vi: 'Nghị định số 38/2021/NĐ-CP & Luật Di sản văn hóa',
        en: 'Decree No. 38/2021/ND-CP & Law on Cultural Heritage'
      },
      article: {
        vi: 'Điều 14 Nghị định 38',
        en: 'Article 14 Decree 38'
      },
      content: {
        vi: 'Nghiêm cấm lợi dụng hoạt động lên đồng để bói toán, gọi hồn, truyền bá mê tín dị đoan hoặc trục lợi tài sản.',
        en: 'Strictly forbids exploiting mediumship for fortune-telling, necromancy, or financial fraud.'
      },
      penalty: {
        vi: 'Phạt tiền từ 3.000.000 đến 5.000.000 đồng và buộc nộp lại số tiền bất chính.',
        en: 'Fines from 3,000,000 to 5,000,000 VND and confiscation of illicit profits.'
      }
    }
  },
  {
    id: 'cung-thanh-hoang-lang',
    name: {
      vi: 'Cúng Thành hoàng làng & Lễ hội làng quê truyền thống',
      en: 'Village tutelary deity veneration & Traditional village festivals'
    },
    group: 'tin-nguong-dan-gian',
    groupLabel: {
      vi: 'Tín ngưỡng dân gian',
      en: 'Folk Beliefs & Community Festivals'
    },
    shortDesc: {
      vi: 'Tri ân nhân vật có công lập làng, mở đất và bảo vệ cuộc sống bình yên của cộng đồng.',
      en: 'Honoring historical village founders and communal protectors.'
    },
    description: {
      vi: 'Người dân làng tề tựu tại đình làng trong ngày hội xuân, rước kiệu, tế lễ Thành hoàng làng để cầu cho mưa thuận gió hòa, mùa màng bội thu và dân làng đoàn kết ấm no.',
      en: 'Villagers gather at communal houses during spring festivals, carrying palanquins and offering sacrifices to pray for favorable weather and prosperity.'
    },
    identificationMarks: {
      vi: [
        'Gắn chặt với thiết chế đình làng và cộng đồng dân cư địa phương',
        'Các nghi thức tế lễ cổ truyền trang trọng, công khai và minh bạch',
        'Kết hợp các trò chơi dân gian (kéo co, cờ người, đấu vật, bơi chải)'
      ],
      en: [
        'Tied to communal village halls and local civic tradition',
        'Dignified, open, transparent classical rituals',
        'Integrated with traditional folk games (tug-of-war, wrestling, boat racing)'
      ]
    },
    classification: 'belief',
    classificationLabel: {
      vi: 'Tín ngưỡng truyền thống lành mạnh',
      en: 'Healthy Cultural Folk Belief'
    },
    classificationAnalysis: {
      vi: 'Thuộc diện tín ngưỡng dân gian chính thống, có giá trị cố kết cộng đồng sâu sắc, bồi đắp tình yêu quê hương đất nước và lòng biết ơn các bậc tiền nhân có công khai hoang lập ấp.',
      en: 'Authentic folk tradition fostering communal solidarity, patriotism, and respect for pioneers who settled the land.'
    },
    culturalRoot: {
      vi: 'Văn hóa làng xã lúa nước truyền thống của người Việt.',
      en: 'Traditional wet-rice agrarian village culture of Vietnam.'
    },
    civilAdvice: {
      vi: 'Khuyến khích cộng đồng gìn giữ, tổ chức nếp sống văn minh, không chen lấn xô đẩy hay tổ chức cờ bạc trá hình tại lễ hội.',
      en: 'Encouraged to preserve, upholding orderly conduct and rejecting disguised gambling at festivals.'
    },
    legalBasis: {
      law: {
        vi: 'Luật Di sản văn hóa & Luật Tín ngưỡng, tôn giáo',
        en: 'Law on Cultural Heritage & Law on Belief and Religion'
      },
      article: {
        vi: 'Bảo hộ lễ hội văn hóa dân gian',
        en: 'Protection of Folk Cultural Festivals'
      },
      content: {
        vi: 'Nhà nước tạo điều kiện và bảo vệ các lễ hội đình làng phù hợp truyền thống văn hóa dân tộc.',
        en: 'The State facilitates and protects traditional communal festivals consistent with heritage.'
      }
    }
  },
  {
    id: 'di-chua-van-canh',
    name: {
      vi: 'Đi chùa vãn cảnh, lễ Phật đầu xuân cầu bình an',
      en: 'Visiting Buddhist pagodas for peaceful contemplation in spring'
    },
    group: 'tin-nguong-dan-gian',
    groupLabel: {
      vi: 'Tín ngưỡng dân gian',
      en: 'Folk Beliefs & Community Festivals'
    },
    shortDesc: {
      vi: 'Vãn cảnh chốn thiền môn thanh tịnh, gột rửa ưu phiền và cầu chúc an lạc cho gia đình.',
      en: 'Contemplating tranquil temple gardens, purifying worldly worries, and praying for serenity.'
    },
    description: {
      vi: 'Đầu năm mới, người dân đến chùa thắp nén nhang, chiêm bái đức Phật, nghe chuông chùa và ngắm cảnh non nước thanh tịnh để tâm hồn được thư thái, hướng thiện.',
      en: 'At the start of the year, citizens visit pagodas to offer modest incense, venerate the Buddha, listen to temple bells, and nurture peaceful compassion.'
    },
    identificationMarks: {
      vi: [
        'Trang phục kín đáo, phong thái đi nhẹ nói khẽ nơi tôn nghiêm',
        'Đề cao sự thanh tịnh nội tâm và lòng từ bi hỷ xả',
        'Không đòi hỏi đổi chác, không nhét tiền lẻ vào tay tượng'
      ],
      en: [
        'Modest attire, quiet demeanor in sacred shrines',
        'Prioritizes inner clarity, compassion, and joy',
        'No transactional bargaining, no thrusting currency into statues'
      ]
    },
    classification: 'belief',
    classificationLabel: {
      vi: 'Tín ngưỡng & Tôn giáo văn minh',
      en: 'Civilized Religious Practice'
    },
    classificationAnalysis: {
      vi: 'Đây là sinh hoạt văn hóa tín ngưỡng - tôn giáo lành mạnh bậc nhất. Giúp con người tạm gác lại những lo toan trần thế để tìm về sự tĩnh lặng nội tâm và nuôi dưỡng đức tính hiền thiện.',
      en: 'A healthy cultural and spiritual practice helping individuals find tranquility and cultivate benevolence.'
    },
    culturalRoot: {
      vi: 'Phật giáo hòa quyện với tâm thức người Việt suốt hơn hai ngàn năm lịch sử.',
      en: 'Buddhism woven into Vietnamese national psyche over two millennia.'
    },
    civilAdvice: {
      vi: 'Chỉ cần một tấm lòng thành kính; tiền công đức nếu có hãy bỏ kín đáo vào hòm công đức; không xoa tiền lên tượng Phật hay giẫm đạp hái lộc bẻ cành cây.',
      en: 'Only sincerity is needed; place donations quietly into designated boxes; do not rub currency on statues or break tree branches.'
    },
    legalBasis: {
      law: {
        vi: 'Luật Tín ngưỡng, tôn giáo năm 2016',
        en: '2016 Law on Belief and Religion'
      },
      article: {
        vi: 'Điều 3 & Hiến pháp Điều 24',
        en: 'Article 3 & Constitution Article 24'
      },
      content: {
        vi: 'Bảo đảm quyền tự do tín ngưỡng, tôn giáo của mọi công dân tại các cơ sở hợp pháp.',
        en: 'Guarantees freedom of belief and religious practice at lawful venues.'
      }
    }
  },

  // --- NHÓM 3: XEM BÓI ---
  {
    id: 'cat-duyen-am-ep-hon',
    name: {
      vi: 'Xem bói phán "phải cắt duyên âm" hoặc bắt hủy hôn lễ',
      en: 'Fortune tellers alleging "phantom curses" demanding paid exorcisms'
    },
    group: 'xem-boi',
    groupLabel: {
      vi: 'Xem bói & Dự đoán số mệnh',
      en: 'Divination & Fortune Telling'
    },
    shortDesc: {
      vi: 'Bị thầy bói dọa có ma cõi âm theo phá, bắt chi chục triệu làm lễ cắt duyên.',
      en: 'Coerced into spending millions to sever non-existent spiritual ties.'
    },
    description: {
      vi: 'Người trẻ lận đận trong tình cảm bị thầy bói phán có "tiền duyên", "người âm theo cản trở", nếu không cắt lễ sẽ bị cô độc suốt đời hoặc gặp tai nạn; đòi nộp hàng chục triệu đồng để làm hình nhân thế mạng.',
      en: 'Young adults facing dating difficulties are frightened by charlatans alleging invisible spiritual interference, demanding substantial fees for mock effigy rituals.'
    },
    identificationMarks: {
      vi: [
        'Khai thác triệt để nỗi cô đơn, mặc cảm và sợ hãi của người đang gặp trục trặc tình duyên',
        'Định giá dịch vụ: đòi từ 10 - 50 triệu đồng cho một khóa lễ',
        'Đe dọa tai họa kinh hoàng nếu không chịu làm lễ',
        'Yêu cầu các hành vi quái đản như cắt tóc, đốt hình nhân ma quái'
      ],
      en: [
        'Exploits loneliness, vulnerability, and romantic anxieties',
        'Explicit pricing: demanding $500–$2,000 for ceremonies',
        'Threatens dire accidents if the victim refuses',
        'Bizarre rituals involving hair cutting and burning effigies'
      ]
    },
    classification: 'superstition',
    classificationLabel: {
      vi: 'Mê tín dị đoan lừa đảo trục lợi',
      en: 'Deceptive & Exploitative Superstition'
    },
    classificationAnalysis: {
      vi: 'Hành vi này 100% là mê tín dị đoan nguy hại và có dấu hiệu tội phạm. "Duyên âm" là khái niệm hoàn toàn phi khoa học do kẻ buôn thần bán thánh dựng lên để bóc lột tài chính của những người yếu lòng.',
      en: 'Blatant criminal superstition. "Ghost marriages/curses" are unscientific fabrications invented by fraudulent operators to exploit vulnerable individuals.'
    },
    culturalRoot: {
      vi: 'Không có cơ sở trong văn hóa truyền thống lành mạnh; là biến tướng trục lợi tâm lý.',
      en: 'No basis in wholesome heritage; predatory commercial psychological extortion.'
    },
    riskWarning: {
      vi: 'Mất số tiền lớn tích cóp; khủng hoảng tâm thần, hoang tưởng lo sợ; làm tan vỡ tình cảm lứa đôi chân thành do mê tín.',
      en: 'Severe financial losses, paranoia, and ruined relationships due to baseless manipulation.'
    },
    civilAdvice: {
      vi: 'Tuyệt đối không đưa tiền. Trục trặc tình cảm hãy tìm hiểu nguyên nhân từ cách giao tiếp, sự tôn trọng và tính cách của hai bên.',
      en: 'Refuse payment. Address romantic hurdles through communication, emotional maturity, and mutual respect.'
    },
    legalBasis: {
      law: {
        vi: 'Bộ luật Hình sự năm 2015 (Sửa đổi 2017)',
        en: 'Vietnamese Penal Code (2015/2017)'
      },
      article: {
        vi: 'Điều 320: Tội hành nghề mê tín, dị đoan',
        en: 'Article 320: Practicing Superstition Offense'
      },
      content: {
        vi: 'Phạt tiền từ 10 - 100 triệu VNĐ hoặc phạt tù từ 6 tháng đến 10 năm tù đối với hành vi bói toán trục lợi, gây hậu quả nghiêm trọng.',
        en: 'Fines from 10 to 100 million VND or prison sentences from 6 months up to 10 years for fraudulent superstition.'
      },
      penalty: {
        vi: 'Truy cứu trách nhiệm hình sự phạt tù đến 10 năm.',
        en: 'Criminal imprisonment up to 10 years.'
      }
    }
  },

  // --- NHÓM 4: GỌI HỒN ---
  {
    id: 'goi-hon-nhap-xac-doi-tien',
    name: {
      vi: 'Gọi hồn, nhập xác phán chuyện nhà & đòi tiền cúng bái',
      en: 'Séance mediumship impersonating the deceased to extort money'
    },
    group: 'goi-hon',
    groupLabel: {
      vi: 'Gọi hồn & Áp vong',
      en: 'Spirit Mediumship & Necromancy'
    },
    shortDesc: {
      vi: 'Đối tượng giả vờ bị vong nhập, khóc lóc dọa nạt bắt gia đình chi tiền làm lễ.',
      en: 'Charlatans pretending to channel deceased relatives to demand costly rituals.'
    },
    description: {
      vi: 'Thầy bói hoặc cô đồng nhắm mắt, giả giọng run rẩy, xưng là ông bà, tổ tiên của người đến xem, kể lể nỗi khổ cõi âm và đòi gia đình phải đưa hàng chục triệu làm lễ "chuộc vong", "mua đất cõi âm" hoặc đào mồ mả.',
      en: 'Operators fake trembling voices, claiming to channel late grandparents to allege torment in the afterlife, demanding thousands of dollars for redemption ceremonies.'
    },
    identificationMarks: {
      vi: [
        'Khai thác nỗi đau thương tiếc người thân vừa qua đời',
        'Các câu nói chung chung, hoặc dùng thủ đoạn điều tra trước thông tin gia cảnh',
        'Phán truyền những điều gây chia rẽ dòng họ (đổ lỗi người này người kia bất hiếu)',
        'Đòi hỏi chi phí cúng bái cực kỳ lớn'
      ],
      en: [
        'Preys upon acute grief of bereaved family members',
        'Uses generic cold-reading statements or leaked family intel',
        'Stirs family division by accusing certain relatives of impiety',
        'Demands exorbitant cash fees for rituals'
      ]
    },
    classification: 'superstition',
    classificationLabel: {
      vi: 'Mê tín dị đoan lừa đảo đặc biệt nghiêm trọng',
      en: 'Severe Deceptive Superstition Offense'
    },
    classificationAnalysis: {
      vi: 'Hành vi gọi hồn nhập xác hoàn toàn là trò lừa đảo thao túng tâm lý. Các nhà khoa học tâm lý và pháp y đã chứng minh đây là sự dàn dựng hoặc chứng hoang tưởng tâm thần phân liệt, bị kẻ gian trục lợi.',
      en: 'Pure psychological deception. Psychological and forensic science confirms this to be staged fraud exploiting emotional vulnerability.'
    },
    culturalRoot: {
      vi: 'Hủ tục hoang đường du nhập, không có nguồn gốc từ văn hóa chính thống.',
      en: 'Imported superstition foreign to enlightened indigenous Vietnamese ethics.'
    },
    riskWarning: {
      vi: 'Làm kiệt quệ tài chính gia đình; đào xới mồ mả gây ô uế di cốt; gây thù hằn chia rẽ anh em ruột thịt.',
      en: 'Financial devastation, desecration of graves, and bitter domestic strife.'
    },
    civilAdvice: {
      vi: 'Tuyệt đối không tham gia các tụ điểm gọi hồn. Hãy nhớ rằng không người cha người mẹ nào đã khuất lại muốn đòi tiền bạc hay làm khổ con cháu còn sống.',
      en: 'Avoid séances entirely. Loving deceased parents would never demand extortionate sums or bring misery upon descendants.'
    },
    legalBasis: {
      law: {
        vi: 'Bộ luật Hình sự & Nghị định 38/2021/NĐ-CP',
        en: 'Penal Code & Decree No. 38/2021/ND-CP'
      },
      article: {
        vi: 'Điều 320 (Hành nghề mê tín) & Điều 174 (Lừa đảo chiếm đoạt tài sản)',
        en: 'Article 320 (Superstition) & Article 174 (Fraudulent Appropriation)'
      },
      content: {
        vi: 'Xử phạt hành chính và truy cứu trách nhiệm hình sự từ 3 năm đến chung thân tùy số tiền lừa đảo.',
        en: 'Administrative sanctions and criminal prison sentences from 3 years up to life imprisonment based on stolen amounts.'
      },
      penalty: {
        vi: 'Khung hình phạt tù giam rất nghiêm khắc.',
        en: 'Severe criminal imprisonment penalties.'
      }
    }
  },

  // --- NHÓM 5: CÚNG GIẢI HẠN ---
  {
    id: 'dang-sao-giai-han-thu-tien',
    name: {
      vi: 'Dâng sao giải hạn thu phí hàng triệu đồng tại đền chùa',
      en: 'Paying costly fees for planetary star exorcisms at shrines'
    },
    group: 'cung-giai-han',
    groupLabel: {
      vi: 'Cúng giải hạn & Cầu tài lộc',
      en: 'Star Exorcisms & Fortune Rituals'
    },
    shortDesc: {
      vi: 'Tin vào sao Kế Đô, La Hầu chiếu mệnh phải bỏ tiền triệu làm lễ mới sống yên.',
      en: 'Believing bad astrological stars cause calamity unless costly rituals are bought.'
    },
    description: {
      vi: 'Nhiều người dân xếp hàng thâu đêm, nộp tiền từ vài trăm ngàn đến hàng chục triệu đồng tại các cơ sở tâm linh để ghi tên vào danh sách làm lễ dâng sao giải hạn sao xấu trong năm.',
      en: 'Crowds register and pay significant amounts to spiritual venues for collective or private astrological star-warding ceremonies.'
    },
    identificationMarks: {
      vi: [
        'Thương mại hóa tâm linh: có bảng giá cúng sao cụ thể theo đầu người',
        'Đám đông chen chúc, tràn ra lòng đường vỉa hè gây ùn tắc giao thông',
        'Gieo rắc nỗi sợ về "sao La Hầu, Thái Bạch, Kế Đô"'
      ],
      en: [
        'Commercialized spirituality with per-person rate cards',
        'Overcrowded streets blocking public traffic',
        'Promoting dread surrounding astrological star names'
      ]
    },
    classification: 'superstition',
    classificationLabel: {
      vi: 'Mê tín dị đoan thương mại hóa',
      en: 'Commercialized Superstition'
    },
    classificationAnalysis: {
      vi: 'Giáo hội Phật giáo Việt Nam đã nhiều lần khẳng định: Trong giáo lý Phật giáo hoàn toàn không có việc dâng sao giải hạn. Phúc họa là do chính hành vi con người tạo nên. Việc các cơ sở thu tiền dâng sao là biến tướng trục lợi tâm linh.',
      en: 'The Vietnam Buddhist Sangha has repeatedly affirmed that star exorcisms exist nowhere in Buddhist doctrine. Calamity and blessing result from karma and moral conduct; charging for star ceremonies is a commercial perversion.'
    },
    culturalRoot: {
      vi: 'Tập tục sao hạn có nguồn gốc từ Đạo giáo phong kiến ngoại lai du nhập.',
      en: 'Taoist astrological beliefs imported during feudal eras.'
    },
    riskWarning: {
      vi: 'Mất tiền bạc vô ích; nuôi dưỡng tâm lý ỷ lại, cúng xong lại chủ quan làm liều dẫn đến tai nạn thực tế.',
      en: 'Pointless monetary waste and false complacency leading to reckless real-life actions.'
    },
    civilAdvice: {
      vi: 'Giáo hội Phật giáo Việt Nam đã yêu cầu các chùa dừng tổ chức cúng sao thu tiền. Hãy tập trung làm lành lánh dữ thay vì chi tiền cầu sao.',
      en: 'The Buddhist Sangha instructs temples to cease commercial star services. Focus on ethical conduct rather than paying for stars.'
    },
    legalBasis: {
      law: {
        vi: 'Chỉ đạo của Giáo hội Phật giáo Việt Nam & Nghị định 38/2021',
        en: 'Vietnam Buddhist Sangha Directive & Decree 38/2021'
      },
      article: {
        vi: 'Quy chế nếp sống văn minh tại di tích',
        en: 'Civilized Conduct Regulations at Heritage Sites'
      },
      content: {
        vi: 'Nghiêm cấm biến nơi thờ tự thành điểm kinh doanh trục lợi dịch vụ tâm linh.',
        en: 'Prohibits converting shrines into commercial spiritual businesses.'
      }
    }
  },

  // --- NHÓM 6: MÊ TÍN DỊ ĐOAN THƯỜNG GẶP ---
  {
    id: 'chua-benh-bua-chu',
    name: {
      vi: 'Uống nước tàn hương, phù phép chữa bệnh nan y',
      en: 'Consuming ash or talismans to treat cancer and serious illnesses'
    },
    group: 'me-tin-thuong-gap',
    groupLabel: {
      vi: 'Hành vi mê tín dị đoan thường gặp',
      en: 'Harmful Superstitions in Daily Life'
    },
    shortDesc: {
      vi: 'Bệnh nhân bỏ bệnh viện, nghe theo thầy lang uống than tro để trừ "ma bệnh".',
      en: 'Rejecting hospitals to drink toxic incense ash and paper talismans.'
    },
    description: {
      vi: 'Khi mắc các bệnh hiểm nghèo như ung thư, tiểu đường, nhiều người nghe lời đồn thổi tìm đến "thầy pháp", "thầy bùa" để cúng trừ tà, uống nước hòa tàn nhang, ăn giấy bùa đốt thành tro.',
      en: 'When diagnosed with critical conditions like cancer, victims abandon medical treatments to ingest chemical-laced incense ash and burnt paper talismans prescribed by fake faith healers.'
    },
    identificationMarks: {
      vi: [
        'Phủ nhận hoàn toàn y học hiện đại và các phương pháp chẩn đoán khoa học',
        'Sử dụng các chất độc hại: tàn nhang tẩm hóa chất cuốn tàn, tro giấy in mực độc',
        'Người bệnh ngày càng suy kiệt, đau đớn nhưng bị cấm không cho đến bệnh viện'
      ],
      en: [
        'Outright rejection of modern evidence-based clinical diagnostics',
        'Ingestion of toxins: chemical incense ash and toxic paper inks',
        'Victims deteriorate while barred from clinical healthcare'
      ]
    },
    classification: 'superstition',
    classificationLabel: {
      vi: 'Mê tín dị đoan phản khoa học đặc biệt nguy hiểm',
      en: 'Extremely Lethal Anti-Scientific Superstition'
    },
    classificationAnalysis: {
      vi: 'Hành vi này hoàn toàn đi ngược lại lương tri, phản khoa học và tước đoạt mạng sống con người. Tàn nhang hiện nay chứa hóa chất và kim loại nặng, uống vào sẽ gây thủng dạ dày, suy gan thận cấp tính.',
      en: 'Directly violates conscience and science, costing human lives. Modern incense contains heavy metals that induce gastric perforations and acute organ failure.'
    },
    culturalRoot: {
      vi: 'Hủ tục mông muội thời trung cổ.',
      en: 'Medieval pseudo-medical malpractice.'
    },
    riskWarning: {
      vi: 'Mất "thời gian vàng" điều trị tại bệnh viện; ngộ độc cấp tính dẫn đến tử vong nhanh chóng.',
      en: 'Forfeits the critical treatment window; causes acute chemical poisoning and rapid death.'
    },
    civilAdvice: {
      vi: 'Có bệnh phải đến ngay bệnh viện và cơ sở y tế uy tín. Tín ngưỡng chỉ nên dùng để giữ tinh thần lạc quan, tuyệt đối không thay thế thuốc chữa bệnh.',
      en: 'Seek immediate care at accredited hospitals. Spiritual faith should only bolster mental resilience, never substitute medicine.'
    },
    legalBasis: {
      law: {
        vi: 'Bộ luật Hình sự năm 2015',
        en: 'Vietnamese Penal Code (2015)'
      },
      article: {
        vi: 'Khoản 2 Điều 320: Tội hành nghề mê tín, dị đoan',
        en: 'Clause 2, Article 320: Practicing Superstition Offense'
      },
      content: {
        vi: 'Hành nghề mê tín dị đoan làm chết người bị phạt tù từ 03 năm đến 10 năm tù giam.',
        en: 'Practicing superstition resulting in death carries mandatory prison sentences from 3 to 10 years.'
      },
      penalty: {
        vi: 'Phạt tù từ 3 đến 10 năm tù giam.',
        en: 'Imprisonment from 3 to 10 years.'
      }
    }
  }
];
