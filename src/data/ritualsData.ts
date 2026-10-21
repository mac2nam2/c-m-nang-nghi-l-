export type RitualCategory = 'cuoi-hoi' | 'tang-le' | 'gio-chap';
export type Region = 'bac' | 'trung' | 'nam';
export type FaithPerspective = 'dan-gian' | 'phat-giao' | 'cong-giao' | 'the-tuc-van-minh';

export interface RitualStep {
  stepNumber: number;
  title: {
    vi: string;
    en: string;
  };
  timeframe: {
    vi: string;
    en: string;
  };
  significance: {
    vi: string;
    en: string;
  };
  preparations: {
    vi: string[];
    en: string[];
  };
  procedures: {
    vi: string[];
    en: string[];
  };
  speechVows: {
    vi: string;
    en: string;
  };
  regionalNotes: {
    bac: { vi: string; en: string };
    trung: { vi: string; en: string };
    nam: { vi: string; en: string };
  };
  faithNotes?: {
    perspective: string;
    note: { vi: string; en: string };
  }[];
  taboosCivilAdvice: {
    vi: string[];
    en: string[];
  };
}

export interface RitualCategoryData {
  id: RitualCategory;
  name: {
    vi: string;
    en: string;
  };
  shortDesc: {
    vi: string;
    en: string;
  };
  overview: {
    vi: string;
    en: string;
  };
  regionalTraditions: {
    bac: {
      name: { vi: string; en: string };
      highlight: { vi: string; en: string };
      offeringsRules: { vi: string; en: string };
      etiquette: { vi: string; en: string };
    };
    trung: {
      name: { vi: string; en: string };
      highlight: { vi: string; en: string };
      offeringsRules: { vi: string; en: string };
      etiquette: { vi: string; en: string };
    };
    nam: {
      name: { vi: string; en: string };
      highlight: { vi: string; en: string };
      offeringsRules: { vi: string; en: string };
      etiquette: { vi: string; en: string };
    };
  };
  steps: RitualStep[];
  civilPrinciples: {
    vi: string[];
    en: string[];
  };
}

export const REGIONS_INFO = {
  bac: {
    id: 'bac',
    name: { vi: 'Miền Bắc', en: 'Northern Region' },
    characteristic: {
      vi: 'Khuôn phép, chuẩn mực gia phong, coi trọng lễ nghi cổ truyền và tính thứ bậc dòng họ.',
      en: 'Rigorous customary etiquette, ancestral decorum, and strict hierarchical order.'
    },
    color: 'blue'
  },
  trung: {
    id: 'trung',
    name: { vi: 'Miền Trung', en: 'Central Region' },
    characteristic: {
      vi: 'Trầm tĩnh, gắn với văn hóa cung đình và làng xã cố đô, đề cao chữ Lễ và lòng thành kính mộc mạc.',
      en: 'Subdued, solemn, deeply rooted in imperial traditions and heartfelt sincerity.'
    },
    color: 'emerald'
  },
  nam: {
    id: 'nam',
    name: { vi: 'Miền Nam', en: 'Southern Region' },
    characteristic: {
      vi: 'Phóng khoáng, cởi mở, thực tế, chú trọng tinh thần sum vầy vui tươi và hòa hợp gia đình.',
      en: 'Open-hearted, practical, warm, focusing on family celebration and harmony.'
    },
    color: 'amber'
  }
};

export const RITUALS_DATA: Record<RitualCategory, RitualCategoryData> = {
  'cuoi-hoi': {
    id: 'cuoi-hoi',
    name: {
      vi: 'Nghi Lễ Cưới Hỏi (Hôn Lễ)',
      en: 'Wedding & Marriage Ceremonies'
    },
    shortDesc: {
      vi: 'Hướng dẫn đầy đủ các bước từ dạm ngõ, ăn hỏi, lễ gia tiên đến rước dâu và lại mặt theo phong tục 3 miền.',
      en: 'Complete step-by-step guide from proposal, betrothal, ancestral vows, wedding reception, to homecoming.'
    },
    overview: {
      vi: 'Hôn nhân là sự kiện trọng đại khởi đầu cho một gia đình mới, kết nối hai dòng họ. Người Việt xem cưới hỏi là việc "trăm năm", trải qua các nghi thức trang trọng nhằm thông báo với tổ tiên và họ hàng, khẳng định sự gắn kết bền vững của đôi tân lang - tân nương.',
      en: 'Marriage is a sacred milestone binding not only bride and groom for a lifetime, but weaving two families into enduring kinship through ancestral notification and community witnessing.'
    },
    regionalTraditions: {
      bac: {
        name: { vi: 'Nét Cưới Hỏi Miền Bắc', en: 'Northern Wedding Traditions' },
        highlight: {
          vi: 'Quy củ, giữ trọn nếp xưa. Số lượng tráp hỏi thường là SỐ LẺ (5, 7, 9, 11 tráp), nhưng sính lễ bên trong tráp là SỐ CHẴN (ví dụ: 100 chiếc bánh cốm, 100 quả cau) tượng trưng cho vợ chồng có đôi có lứa.',
          en: 'Strict adherence to decorum. Odd number of gift trays (5, 7, 9, 11) with even counts of items inside (100 green rice cakes, 100 areca nuts) symbolizing marital pairs.'
        },
        offeringsRules: {
          vi: 'Tráp gồm: Trầu cau, chè Thái Nguyên, bánh cốm Hàng Than, bánh phu thê, rượu thuốc, hoa quả kết rồng phượng, heo quay hoặc xôi gấc.',
          en: 'Gift trays feature betel nuts, Thai Nguyen green tea, green rice cakes, conjugate husband-wife cakes, wines, dragon-phoenix fruit crafts, and roasted pig.'
        },
        etiquette: {
          vi: 'Đoàn đón dâu có cụ trưởng đoàn nói lời thưa gửi trịnh trọng, thắp hương bàn thờ gia tiên nhà gái trước khi rước dâu về nhà trai.',
          en: 'The groom delegation is led by a respected elder who presents formal speech before ancestral altar veneration.'
        }
      },
      trung: {
        name: { vi: 'Nét Cưới Hỏi Miền Trung', en: 'Central Wedding Traditions' },
        highlight: {
          vi: 'Chuộng sự mộc mạc, thanh lịch, coi trọng chữ Tình và lòng thành hơn sự xa hoa. Số lượng mâm tráp thường là SỐ CHẴN (4, 6 tráp), tượng trưng cho sự gắn kết lứa đôi song toàn.',
          en: 'Valuing understated elegance and emotional depth over luxury. Even number of gift trays (4, 6) symbolizing harmonious pairs.'
        },
        offeringsRules: {
          vi: 'Tráp gồm: Mâm trầu cau (bắt buộc), cặp rượu và trà ngon, nến tơ hồng, nem chả tré Huế, bánh kem hoặc bánh su sê truyền thống.',
          en: 'Betel and areca (essential), fine tea and spirits, red silk-threaded candles, Hue fermented pork/beef, and traditional bridal cakes.'
        },
        etiquette: {
          vi: 'Nghi thức dâng nến tơ hồng lên bàn thờ gia tiên do đại diện hai họ thực hiện là dấu mốc thiêng liêng se duyên trọn đời.',
          en: 'Lighting the symbolic red silk candles on the ancestral altar by elder representatives seals the sacred lifelong union.'
        }
      },
      nam: {
        name: { vi: 'Nét Cưới Hỏi Miền Nam', en: 'Southern Wedding Traditions' },
        highlight: {
          vi: 'Phóng khoáng, ấm áp, chuộng SỐ CHẴN (thường là 6 hoặc 8 tráp - tượng trưng cho Lộc và Phát). Bắt buộc phải có cặp nến (đèn cầy) khắc hình Long Phụng màu đỏ thắp sáng bàn thờ.',
          en: 'Warm, hospitable, favoring 6 or 8 trays (symbolizing Fortune and Prosperity), with mandatory red Dragon-Phoenix carved ceremonial candles.'
        },
        offeringsRules: {
          vi: 'Tráp gồm: Mâm trầu cau tiêm cánh phượng, cặp nến Long Phụng số 2 hoặc số 4, mâm ngũ quả mãng cầu - sung - dừa - đu đủ - xoài ("cầu sung vừa đủ xài"), bánh su sê, heo quay, trang sức cưới cho cô dâu.',
          en: 'Artfully folded phoenix betel chews, Dragon-Phoenix candles, 5-fruit tray (soursop, fig, coconut, papaya, mango), bridal jewelry, and suckling pig.'
        },
        etiquette: {
          vi: 'Lễ dâng đèn cầy lên bàn thờ gia tiên do chú rể và cô dâu thực hiện với sự hỗ trợ của bậc cao niên; ngọn nến cháy đều tượng trưng cho cuộc sống sung túc, êm ấm.',
          en: 'The couple officially lights the ceremonial candles with elderly guidance; steady flames symbolize matrimonial warmth and prosperity.'
        }
      }
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          vi: 'Lễ Dạm Ngõ (Chạm Ngõ / Xem Mặt)',
          en: 'First Formal Meeting (Le Dam Ngo)'
        },
        timeframe: {
          vi: 'Trước ngày cưới khoảng 2 - 3 tháng',
          en: '2 to 3 months prior to wedding'
        },
        significance: {
          vi: 'Buổi gặp gỡ chính thức đầu tiên giữa hai gia đình để người lớn quen biết nhau, bàn bạc dự kiến ngày giờ và phong tục cho đám hỏi, đám cưới.',
          en: 'The initial official gathering where parents and elders formalize acquaintance and discuss auspicious dates for upcoming ceremonies.'
        },
        preparations: {
          vi: [
            'Nhà trai chuẩn bị: 1 cơi trầu têm cánh phượng, chai rượu, chè ngon và gói bánh/hoa quả.',
            'Nhà gái chuẩn bị: Dọn dẹp nhà cửa, bàn thờ gia tiên sạch sẽ; chuẩn bị trà nước, bánh kẹo và mâm cơm thân mật chiêu đãi.'
          ],
          en: [
            'Groom family: 1 tray of betel and areca, a bottle of fine wine, premium tea, and fruit/cakes.',
            'Bride family: Tidy home and ancestral altar; prepare welcoming tea, refreshments, and a warm family meal.'
          ]
        },
        procedures: {
          vi: [
            'Đoàn nhà trai (gồm cha mẹ, cô chú ruột và chú rể) đến nhà gái đúng giờ hẹn.',
            'Trưởng đoàn nhà trai chào hỏi, giới thiệu thành phần và thưa chuyện xin phép cho đôi trẻ chính thức tìm hiểu tiến tới hôn nhân.',
            'Đại diện nhà gái phát biểu đáp từ, đồng thuận và đặt sính lễ lên bàn thờ thắp hương kính cáo gia tiên.',
            'Hai bên gia đình cùng trao đổi về ngày lành tháng tốt tổ chức đám hỏi và tiệc cưới.'
          ],
          en: [
            'Groom delegation arrives promptly at agreed hour.',
            'Groom elder presents greetings and formally seeks permission for the couple to pursue marriage.',
            'Bride elder accepts warmly, placing gifts on the altar to notify ancestors.',
            'Both families converse regarding dates and arrangements for engagement and wedding.'
          ]
        },
        speechVows: {
          vi: 'Lời thưa mẫu nhà trai: "Kính thưa hai bác và họ hàng nội ngoại, hôm nay ngày lành tháng tốt, nhà trai chúng tôi có cơi trầu, chén rượu xin phép được thưa chuyện trăm năm cho hai cháu. Kính mong hai bác tác thành để hai cháu nên duyên vợ chồng."',
          en: 'Groom Elder Statement: "Respected hosts and relatives, on this auspicious day, our family respectfully presents traditional betel and wine to request your blessing for our young couple to unite in marriage."'
        },
        regionalNotes: {
          bac: {
            vi: 'Miền Bắc giữ gìn sự kín kẽ, lễ vật đơn giản nhưng phải chỉn chu, người lớn nói lời mực thước.',
            en: 'Northern custom emphasizes modesty, immaculate packaging, and dignified speech.'
          },
          trung: {
            vi: 'Miền Trung gọi là lễ Đi nói, sính lễ giản dị với chai rượu và trầu cau, coi trọng lời hứa chân thành giữa hai họ.',
            en: 'Central region refers to this as "Le Di Noi", centered on betel, wine, and sincere mutual commitment.'
          },
          nam: {
            vi: 'Miền Nam xem đây là dịp gia đình gặp gỡ thân tình, trò chuyện cởi mở về hoàn cảnh và phong cách sống của hai bên.',
            en: 'Southern custom treats this as an affectionate family mixer with lively, open-hearted conversations.'
          }
        },
        taboosCivilAdvice: {
          vi: [
            'Tránh đi quá đông người (chỉ nên từ 5 - 7 người thân ruột thịt).',
            'Tránh đến trễ giờ đã hẹn trước.',
            'Không nên đặt nặng áp lực vật chất hay đòi hỏi sính lễ nặng nề.'
          ],
          en: [
            'Keep delegation compact (5-7 close relatives).',
            'Punctuality is essential.',
            'Avoid commercializing demands or imposing excessive expectations.'
          ]
        }
      },
      {
        stepNumber: 2,
        title: {
          vi: 'Lễ Ăn Hỏi (Đính Hôn)',
          en: 'Betrothal / Engagement Ceremony (Le An Hoi)'
        },
        timeframe: {
          vi: 'Trước ngày cưới từ 1 tuần đến 1 tháng (hoặc kết hợp cùng ngày đón dâu ở thời hiện đại)',
          en: '1 week to 1 month prior to wedding (or combined on wedding day in modern schedules)'
        },
        significance: {
          vi: 'Nghi thức công bố chính thức cô gái đã nhận lời làm dâu nhà trai, hai họ chính thức công nhận quan hệ sui gia bền vững.',
          en: 'The formal public announcement of betrothal, cementing the official in-law bond between the two clans.'
        },
        preparations: {
          vi: [
            'Nhà trai: Chuẩn bị đội bê tráp nam thanh lịch, trang phục chỉnh tề; sính lễ xếp trong mâm quả phủ khăn đỏ.',
            'Nhà gái: Chuẩn bị đội đón tráp nữ tương ứng, trang trí bàn thờ gia tiên, chuẩn bị tiệc ăn hỏi mời quan khách.'
          ],
          en: [
            'Groom family: Groom gift-bearers (unmarried young men) in clean traditional attire; red-cloth covered trays.',
            'Bride family: Equal number of female tray-receivers, decorated altar, and reception catering.'
          ]
        },
        procedures: {
          vi: [
            'Đoàn nhà trai mang các mâm tráp đến nhà gái, đội nam trao mâm quả cho đội nữ nhà gái tại cửa.',
            'Đoàn vào nhà, trưởng đoàn nhà trai trịnh trọng mở khăn đỏ giới thiệu từng tráp sính lễ.',
            'Mẹ cô dâu hoặc đại diện nhà gái dâng một phần lễ vật lên bàn thờ tổ tiên.',
            'Chú rể lên phòng đón cô dâu xuống chào hai họ, hai bạn trẻ cùng thắp hương bái tạ tổ tiên.',
            'Cô dâu chú rể rót trà kính mời cha mẹ và quan viên hai họ.',
            'Nhà gái chia lại một phần lễ vật (Lễ Lại quả) gửi lại cho nhà trai mang về (lưu ý xé cau bằng tay, không dùng dao cắt).'
          ],
          en: [
            'Gift-bearers exchange trays at the doorstep.',
            'Groom elder uncovers the red silk cloths, presenting each ceremonial gift.',
            'Mother of the bride places portions of offerings onto the ancestral altar.',
            'Groom escorts the bride downstairs; both bow and light incense to ancestors.',
            'The couple serves tea to parents and honored elders.',
            'The bride family returns a portion of gifts ("Lai Qua") to the groom family (splitting areca nuts by hand without blades).'
          ]
        },
        speechVows: {
          vi: 'Lời thưa: "Kính thưa họ hàng hai bên, hôm nay nhà trai chúng tôi dâng lên các mâm trầu cau, trà rượu xin làm lễ đính hôn cho hai cháu. Xin kính mời cha mẹ và hai họ chứng kiến và chúc phúc cho đôi trẻ."',
          en: 'Elder Vow: "Honored relatives, today our family presents traditional betrothal trays to solemnize the engagement of our children. We pray for your witness and heartfelt blessings."'
        },
        regionalNotes: {
          bac: {
            vi: 'Số lượng tráp lẻ (5, 7, 9 tráp). Tháp bánh cốm và chè xếp cao hình chóp nón rất đẹp mắt.',
            en: 'Odd tray counts (5, 7, 9). High conical arrangements of green rice cakes and tea boxes.'
          },
          trung: {
            vi: 'Số lượng tráp chẵn (4, 6 tráp). Không thể thiếu mâm bánh ít lá gai và tráp nem chả Huế đặc trưng.',
            en: 'Even tray counts (4, 6), with distinctive ramie leaf sticky cakes and Hue cured meats.'
          },
          nam: {
            vi: 'Thường là 6 hoặc 8 mâm quả. Luôn có tráp cặp nến Long Phụng và heo quay vàng ươm.',
            en: 'Usually 6 or 8 trays, including Dragon-Phoenix candles and golden roast suckling pig.'
          }
        },
        taboosCivilAdvice: {
          vi: [
            'Khi lại quả, nắp mâm tráp phải lật ngửa, không đậy kín.',
            'Tuyệt đối không dùng dao cắt cau trong mâm lại quả mà phải dùng tay xé để giữ duyên lành.',
            'Tránh để rơi vỡ chén đĩa, gương lược trong ngày ăn hỏi.'
          ],
          en: [
            'When returning reciprocal gift trays, place lids face-up rather than tightly sealed.',
            'Never use knives to cut areca nuts; split them gently by hand to preserve harmony.',
            'Avoid breaking cups, mirrors, or plates during the ceremony.'
          ]
        }
      },
      {
        stepNumber: 3,
        title: {
          vi: 'Lễ Rước Dâu & Lễ Thành Hôn',
          en: 'Bridal Procession & Nuptial Ceremony (Le Ruoc Dau)'
        },
        timeframe: {
          vi: 'Ngày chính thức tổ chức đám cưới (Giờ hoàng đạo)',
          en: 'Official Wedding Day (Auspicious hours)'
        },
        significance: {
          vi: 'Giây phút thiêng liêng đưa cô dâu về với tổ ấm mới, chính thức trở thành người con, người vợ trong gia đình nhà chồng.',
          en: 'The supreme sacred moment welcoming the bride into her new home as beloved daughter-in-law and wife.'
        },
        preparations: {
          vi: [
            'Nhà trai: Xe hoa, hoa cầm tay cô dâu, lễ xin dâu (cơi trầu nhỏ và chai rượu), trang phục cưới lộng lẫy.',
            'Nhà gái: Trang hoàng bàn thờ tổ tiên với hoa tươi quả ngọt, chuẩn bị phòng chờ cô dâu và lời dặn dò của mẹ trước khi xuất giá.'
          ],
          en: [
            'Groom family: Floral bridal car, bridal bouquet, pre-entry betel tray, groom suit/ao dai.',
            'Bride family: Altar decorated with fresh flowers, private bridal chamber, mother blessing.'
          ]
        },
        procedures: {
          vi: [
            'Lễ Xin dâu: Đại diện nhà trai (thường là mẹ chú rể hoặc bậc nữ cao niên) vào trước với khay trầu rượu xin phép cho đoàn vào đón dâu.',
            'Đoàn nhà trai vào nhà gái, thưa chuyện và làm lễ gia tiên tại nhà gái: cô dâu chú rể lạy tạ bàn thờ tổ tiên và tạ ơn công sinh thành của cha mẹ vợ.',
            'Cha mẹ nhà gái trao của hồi môn, dặn dò con gái sống thảo hiền, hòa thuận.',
            'Rước dâu về nhà trai: Khi đến nhà trai, cô dâu chú rể cùng bước vào làm lễ gia tiên tại bàn thờ họ nhà trai.',
            'Mẹ chồng dắt tay cô dâu vào phòng tân hôn (phòng cưới) làm nghi thức trải chiếu/nhập phòng.',
            'Hai họ cùng bước ra hội trường tiệc cưới để tổ chức tiệc mừng chung vui cùng bạn bè, đồng nghiệp.'
          ],
          en: [
            'Preliminary permission ritual: Groom elder lady enters first with small betel tray requesting entry.',
            'Groom enters, vows before the bride ancestral altar, honoring the bride parents.',
            'Bride parents bestow dowry and heartfelt guidance for domestic harmony.',
            'Procession to groom residence: the couple performs ancestral veneration before the groom altar.',
            'Mother-in-law guides bride into the nuptial chamber.',
            'Both families host the celebration banquet with friends and colleagues.'
          ]
        },
        speechVows: {
          vi: 'Văn khấn gia tiên ngày cưới: "Kính lạy chư vị tổ tiên nội ngoại, hôm nay ngày lành tháng tốt, con cháu tổ chức hôn lễ cho đôi tân lang tân nương. Cúi xin tổ tiên chứng giám lòng thành, phù hộ cho đôi trẻ trăm năm hòa hợp, đầu bạc răng long, gia đạo hưng thịnh."',
          en: 'Ancestral Nuptial Prayer: "Reverent ancestors of both lineages, on this blessed day we unite our children in holy matrimony. We pray for your blessing upon their lifelong harmony, mutual devotion, and thriving household."'
        },
        regionalNotes: {
          bac: {
            vi: 'Nghi thức diễn ra chuẩn mực, đúng giờ. Khi đón dâu về, mẹ chồng thường lánh mặt tạm thời vài phút theo tục cổ rồi mới ra đón con dâu.',
            en: 'Exact timing is emphasized. Traditionally, the mother-in-law stepped aside briefly before stepping forward to welcome the bride.'
          },
          trung: {
            vi: 'Rước dâu đi qua cầu hay ngã ba thường rải tiền lẻ hoặc cánh hoa để xua đuổi điều không may, giữ tâm thế an bình.',
            en: 'Processions crossing bridges or crossroads lightly scatter petals or small change to welcome peace.'
          },
          nam: {
            vi: 'Nghi thức dâng nến Long Phụng trên bàn thờ gia tiên là điểm nhấn thiêng liêng nhất; cô dâu thường được mẹ chồng trao chuỗi ngọc hoặc đôi bông tai vàng ngay tại lễ gia tiên.',
            en: 'Lighting Dragon-Phoenix candles is the focal point; gold earrings and necklaces are bestowed by the mother-in-law.'
          }
        },
        taboosCivilAdvice: {
          vi: [
            'Đón dâu cần tuân thủ an toàn giao thông, không nổ pháo hay lạng lách trên đường.',
            'Tránh để người đang có tang chế đi trong đoàn rước dâu.',
            'Giữ tinh thần vui tươi, tránh tranh cãi bất hòa trong ngày đại hỷ.'
          ],
          en: [
            'Ensure vehicle traffic safety; strictly avoid loud crackers or dangerous driving.',
            'Relatives in deep active mourning traditionally refrain from joining the leading bridal train.',
            'Maintain joyful serenity, preventing disputes on this auspicious day.'
          ]
        }
      },
      {
        stepNumber: 4,
        title: {
          vi: 'Lễ Lại Mặt (Nhị Hỷ)',
          en: 'Post-Wedding Homecoming (Le Lai Mat / Nhi Hy)'
        },
        timeframe: {
          vi: 'Sau ngày cưới từ 1 đến 3 ngày',
          en: '1 to 3 days after the wedding'
        },
        significance: {
          vi: 'Đôi vợ chồng mới cưới cùng nhau về thăm lại nhà cha mẹ đẻ cô dâu, thể hiện lòng hiếu thảo của con rể và sự gắn kết yêu thương giữa hai gia đình.',
          en: 'The newlywed couple visits the bride parents, demonstrating filial devotion of the son-in-law and continuing familial affection.'
        },
        preparations: {
          vi: [
            'Nhà trai chuẩn bị: Gà luộc, xôi gấc, rượu trà hoặc giỏ hoa quả tươi ngon.',
            'Nhà gái: Chuẩn bị bữa cơm gia đình ấm cúng để đón con rể và con gái.'
          ],
          en: [
            'Couple brings: Boiled chicken, red sticky rice, fine tea or fresh fruit basket.',
            'Bride family: Prepares an intimate family meal to welcome their new son-in-law.'
          ]
        },
        procedures: {
          vi: [
            'Chú rể cùng cô dâu mang lễ vật về nhà ngoại vào buổi sáng.',
            'Chú rể thắp hương bàn thờ gia tiên nhà vợ, thăm hỏi sức khỏe cha mẹ và người thân.',
            'Cả gia đình quây quần bên mâm cơm ấm cúng, chuyện trò về cuộc sống mới của đôi trẻ.'
          ],
          en: [
            'The couple visits the bride parents in the morning with pleasant gifts.',
            'Groom lights incense at the bride ancestral altar and inquires after parents’ health.',
            'The family enjoys a heartfelt meal, sharing joy regarding their new marital life.'
          ]
        },
        speechVows: {
          vi: 'Lời con rể: "Thưa ba mẹ, hôm nay hai con về thăm lại gia đình, cảm tạ công ơn dưỡng dục của ba mẹ. Con xin hứa sẽ luôn yêu thương, chăm sóc cho vợ con và chu toàn đạo hiếu với hai bên gia đình."',
          en: 'Son-in-law Vow: "Beloved parents, we return today in deep gratitude for your devotion. I promise to love and cherish my wife and faithfully fulfill our filial duties to both families."'
        },
        regionalNotes: {
          bac: {
            vi: 'Miền Bắc thường tổ chức vào ngày thứ hai sau cưới, chuộng mâm xôi gà gấc màu đỏ may mắn.',
            en: 'Northern families prefer visiting on day 2, carrying red momordica sticky rice and chicken.'
          },
          trung: {
            vi: 'Miền Trung rất coi trọng bữa cơm này, xem đây là dịp con rể thắt chặt tình cảm với gia đình vợ.',
            en: 'Central families treasure this reunion as the official integration of the son-in-law.'
          },
          nam: {
            vi: 'Miền Nam gọi là phản bái, không khí vui vẻ rộn ràng, có thể rủ thêm bạn bè thân thiết cùng ăn uống.',
            en: 'Southern custom calls this "Phan Bai", celebrating in a lively, informal atmosphere.'
          }
        },
        taboosCivilAdvice: {
          vi: [
            'Không nên để quá 3 ngày mới về lại mặt.',
            'Không đi tay không về nhà ngoại, dù lễ vật giản dị nhưng cần trang nhã.',
            'Ăn uống chừng mực, giữ gìn sức khỏe cho đôi vợ chồng trẻ.'
          ],
          en: [
            'Do not postpone beyond 3 days.',
            'Never visit empty-handed; modest yet thoughtful gifts reflect respect.',
            'Practice moderation in alcohol consumption.'
          ]
        }
      }
    ],
    civilPrinciples: {
      vi: [
        'Tôn trọng tự nguyện: Cốt lõi của hôn nhân là tình yêu chân thành và sự tôn trọng lẫn nhau.',
        'Tiết kiệm văn minh: Tổ chức tiệc cưới phù hợp với điều kiện kinh tế gia đình, tránh phô trương nợ nần.',
        'Hài hòa phong tục: Khi hai gia đình khác vùng miền, nên cởi mở đối thoại và dung hòa tập quán đôi bên.',
        'Tuân thủ pháp luật: Đăng ký kết hôn tại UBND phường/xã trước khi tổ chức nghi lễ tiệc mừng.'
      ],
      en: [
        'Voluntary consent: Genuine affection and mutual respect are the bedrock of marriage.',
        'Civilized modesty: Celebrate within economic means, avoiding ostentatious debt.',
        'Regional harmony: Reconcile inter-regional customs through affectionate dialogue.',
        'Legal registration: Secure civil marriage certification at local civil registry prior to wedding banquets.'
      ]
    }
  },

  'tang-le': {
    id: 'tang-le',
    name: {
      vi: 'Nghi Lễ Tang Lễ (Hậu Sự & Hiếu Sự)',
      en: 'Funeral & Bereavement Rites'
    },
    shortDesc: {
      vi: 'Trình tự chu toàn từ lúc lâm chung, khâm liệm, phát tang, lễ viếng, di quan đến an táng hoặc hỏa táng theo 3 miền.',
      en: 'Step-by-step guidance from final moments, encoffining, mourning attire, visitation, funeral procession, to burial or cremation.'
    },
    overview: {
      vi: '"Nghĩa tử là nghĩa tận" — Tang lễ của người Việt là dịp con cháu bày tỏ lòng hiếu thảo, sự tiếc thương và trân trọng cuối cùng đối với người đã khuất. Nghi lễ cần giữ sự trang nghiêm, chu đáo, ấm cúng và tiết kiệm văn minh.',
      en: 'Bereavement rites represent the final supreme duty of filial piety, honoring the departed with solemn reverence, compassionate care, and hygienic environmental mindfulness.'
    },
    regionalTraditions: {
      bac: {
        name: { vi: 'Nét Tang Lễ Miền Bắc', en: 'Northern Bereavement Traditions' },
        highlight: {
          vi: 'Không khí trang nghiêm, trầm buồn sâu sắc. Sử dụng phường bát âm hoặc nhạc tang truyền thống; con cháu mặc áo xô trắng đội khăn tang; coi trọng giờ nhập quan và giờ hạ huyệt.',
          en: 'Deeply somber and reverent atmosphere. Traditional eight-instrument folk ensemble, white cotton mourning attire, precise timing for encoffining and interment.'
        },
        offeringsRules: {
          vi: 'Bàn thờ tang có nến trắng, bát cơm quả trứng (cơm lồng úp, trứng gà luộc, đôi đũa bông), hương thơm, hoa cúc trắng/vàng.',
          en: 'Mourning altar features white candles, an overturned bowl of cooked rice with boiled egg and bamboo-feathered chopsticks, incense, and white/yellow chrysanthemums.'
        },
        etiquette: {
          vi: 'Người đến viếng thắp nhang và cúi lạy người quá cố (người quá cố chưa chôn lạy 2 lạy; sau khi chôn lạy 4 lạy); con cháu tạ lễ túc trực bên linh cữu.',
          en: 'Visitors offer incense and prostrations (2 bows before burial, 4 bows after burial); mourning children bow in gratitude alongside the casket.'
        }
      },
      trung: {
        name: { vi: 'Nét Tang Lễ Miền Trung', en: 'Central Bereavement Traditions' },
        highlight: {
          vi: 'Gắn liền với nghi thức tế lễ cổ truyền cố đô, trang nghiêm, điềm đạm. Coi trọng lễ Phục hồn, lễ Triêu tịch điện (dâng cơm sáng chiều) và các nghi thức của tộc họ.',
          en: 'Steeped in classical imperial rites. Meticulous ritual offerings of daily morning and evening meals ("Trieu Tich Dien") and lineage recognition.'
        },
        offeringsRules: {
          vi: 'Bàn thờ thiết trí tôn nghiêm, dùng hoa trắng thanh nhã, mâm cơm chay hoặc mặn thanh khiết theo tín ngưỡng gia đình.',
          en: 'Dignified minimalist shrine with white blooms and pure vegetarian or modest traditional meal offerings according to family faith.'
        },
        etiquette: {
          vi: 'Đoàn đưa tang đi trong sự tĩnh lặng, trầm mặc; con cháu tạ ơn bà con lối xóm đã chia sẻ hoạn nạn.',
          en: 'Funeral procession proceeds with serene silence, emphasizing profound communal empathy and neighborly solidarity.'
        }
      },
      nam: {
        name: { vi: 'Nét Tang Lễ Miền Nam', en: 'Southern Bereavement Traditions' },
        highlight: {
          vi: 'Tâm lý cởi mở, bớt u sầu bi lụy. Xem cái chết là sự giải thoát thanh thản sau một đời người; kèn đồng, kèn tây hoặc đàn ca tài tử nhẹ nhàng tiễn biệt; sau khi chôn có tục "Lễ mở cửa mả" vào ngày thứ ba.',
          en: 'More peaceful and consoling outlook, viewing death as natural rest after a full life. Brass bands or gentle acoustic music accompany the farewell; day-3 "Opening of the Tomb" ceremony is common.'
        },
        offeringsRules: {
          vi: 'Bàn thờ trang hoàng hoa tươi trang nhã; chuộng hình thức hỏa táng sạch sẽ, văn minh và gửi tro cốt vào chùa hoặc nhà thờ.',
          en: 'Adorned with elegant fresh blooms; cremation is widely embraced for hygiene and urban convenience, enshrining ashes at temples or columbariums.'
        },
        etiquette: {
          vi: 'Người đến viếng được gia đình tiếp đãi ân cần; không khí chia buồn ấm áp, nhắc nhớ những kỷ niệm vui đẹp của người đã mất khi còn sống.',
          en: 'Visitors are welcomed with warm hospitality; memories celebrate the deceased’s virtuous life rather than prolonged wailing.'
        }
      }
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          vi: 'Lúc Lâm Chung & Chuẩn Bị Hậu Sự',
          en: 'Passing Moments & Preparation (So Chung)'
        },
        timeframe: {
          vi: 'Khi người thân trút hơi thở cuối cùng',
          en: 'At the moment of expiration'
        },
        significance: {
          vi: 'Giúp người quá cố ra đi thanh thản, giữ không gian yên tĩnh và chuẩn bị chu đáo thi hài trước khi nhập quan.',
          en: 'Facilitating a serene passing, ensuring quiet solace and compassionate bodily preparation before encoffining.'
        },
        preparations: {
          vi: [
            'Đặt người thân nằm nơi thoáng mát, sạch sẽ, đầu hướng về hướng tốt.',
            'Chuẩn bị nước ngũ vị hương (hoặc nước ấm pha rượu gừng) lau rửa thi hài (Lễ mộc dục).',
            'Thay trang phục sạch sẽ, tề chỉnh cho người quá cố.',
            'Chuẩn bị di ảnh, sổ tang, thông báo cho gia tộc và chính quyền địa phương để khai tử.'
          ],
          en: [
            'Lay the person in a serene, clean space.',
            'Prepare warm water infused with ginger or aromatics for gentle bathing ("Le Moc Duc").',
            'Dress the deceased in clean, dignified attire.',
            'Prepare framed portrait, condolence register, notify clan relatives and local civil registrar for death registration.'
          ]
        },
        procedures: {
          vi: [
            'Con cháu có mặt đông đủ, giữ sự tĩnh lặng, tránh khóc lóc quá lớn làm người sắp mất hoảng sợ.',
            'Nếu theo Phật giáo: Người nhà niệm danh hiệu Phật A Di Đà để trợ niệm.',
            'Nếu theo Công giáo: Mời Linh mục xức dầu Thánh và đọc kinh phó dâng linh hồn.',
            'Lập bàn thờ tạm, đặt di ảnh và thắp nén nhang đầu tiên.'
          ],
          en: [
            'Family gathers quietly, avoiding frantic wailing to ensure peace of mind.',
            'Buddhist practice: Relatives chant Amitabha Buddha name for peaceful transition.',
            'Catholic practice: Call Priest for the Anointing of the Sick and final prayers.',
            'Erect a temporary shrine with portrait and continuous incense.'
          ]
        },
        speechVows: {
          vi: 'Lời vĩnh biệt con cháu: "Kính thưa cha/mẹ, cả cuộc đời cha/mẹ đã vất vả vì chúng con. Nay số trời đã định, xin cha/mẹ thanh thản ra đi về cõi vĩnh hằng, chúng con xin hứa sẽ đùm bọc, yêu thương nhau và giữ gìn gia phong."',
          en: 'Farewell Vow: "Beloved parent, you dedicated your life to our wellbeing. Now rest peacefully in eternity; we promise to love, protect one another, and uphold our family honor."'
        },
        regionalNotes: {
          bac: {
            vi: 'Miền Bắc rất coi trọng giờ mất (ghi chép chính xác giờ, phút) để tính toán khâm liệm.',
            en: 'Northern tradition meticulously logs the exact minute of passing.'
          },
          trung: {
            vi: 'Miền Trung kiêng kỵ để người mất nằm chơ vơ, luôn có con cháu túc trực bên cạnh.',
            en: 'Central families ensure vigilant bedside accompaniment at all moments.'
          },
          nam: {
            vi: 'Miền Nam chuẩn bị trà thơm lót dưới nệm để giữ không gian thơm tho thanh sạch.',
            en: 'Southern tradition often cushions the bedding with fragrant dried tea leaves.'
          }
        },
        taboosCivilAdvice: {
          vi: [
            'Tránh để chó mèo lại gần thi hài.',
            'Không để nước mắt rơi vào thi thể người mất.',
            'Báo ngay cho chính quyền địa phương để làm thủ tục chứng tử theo pháp luật.'
          ],
          en: [
            'Keep domestic pets away from the body.',
            'Avoid shedding tears directly onto the body during bathing.',
            'Promptly notify local civil administration for legal death registration.'
          ]
        }
      },
      {
        stepNumber: 2,
        title: {
          vi: 'Lễ Khâm Liệm & Nhập Quan',
          en: 'Encoffining Ritual (Nhap Quan)'
        },
        timeframe: {
          vi: 'Vài giờ sau khi mất (chọn giờ trang trọng)',
          en: 'Several hours post-mortem'
        },
        significance: {
          vi: 'Nghi thức đưa thi hài người quá cố vào quan tài (áo quan) an nghỉ vĩnh hằng.',
          en: 'Solemn ritual placing the deceased into the casket for eternal slumber.'
        },
        preparations: {
          vi: [
            'Quan tài sạch sẽ, bên trong lót chè khô, hoa hồi hoặc vải trắng.',
            'Chuẩn bị vải liệm, đai vải và các vật dụng kỷ niệm của người mất.',
            'Gia quyến chuẩn bị khăn tang, áo tang theo thứ bậc gia tộc.'
          ],
          en: [
            'Casket prepared with dry tea leaves and clean white fabrics.',
            'Shrouding linens and symbolic personal belongings.',
            'Mourning garments and headbands allocated according to family hierarchy.'
          ]
        },
        procedures: {
          vi: [
            'Thắp hương xin phép thần linh thổ địa và gia tiên cho phép nhập quan.',
            'Người thân nâng thi hài nhẹ nhàng đặt vào trong quan tài.',
            'Chèn kín trà thơm hoặc giấy bản xung quanh để thi hài cố định ngay ngắn.',
            'Đóng nắp quan tài (đính nắp quan), thiết lập linh cữu chính thức.',
            'Lễ Phát tang: Trưởng nam và con cháu quỳ nhận khăn tang theo thứ bậc tôn ti.'
          ],
          en: [
            'Incense offered asking permission of ancestral guardians.',
            'Family gently transfers the body into the casket.',
            'Fragrant herbs placed securely around the body.',
            'Casket lid sealed securely.',
            'Distribution of mourning headbands to offspring according to seniority.'
          ]
        },
        speechVows: {
          vi: 'Lời khấn nhập quan: "Cúi xin hương linh cha/mẹ an nghỉ trong lòng đất ấm, chứng giám lòng hiếu thảo của con cháu. Kể từ nay con cháu mang tang phục báo hiếu ân đức cù lao."',
          en: 'Prayer: "We pray our beloved elder rests serenely in sacred peace. From this hour, we don mourning attire to honor your boundless parental sacrifices."'
        },
        regionalNotes: {
          bac: {
            vi: 'Miền Bắc dùng bát cơm quả trứng đặt lên đầu quan tài, thắp ngọn đèn dầu nhỏ dưới chân.',
            en: 'Northern custom sets a bowl of rice with boiled egg atop the casket with an oil lamp below.'
          },
          trung: {
            vi: 'Miền Trung thắp hương trầm thơm ngát, đọc sớ triệu hồn trang trọng.',
            en: 'Central custom burns refined agarwood, reciting classical ancestral eulogies.'
          },
          nam: {
            vi: 'Miền Nam mở nhạc kèn trang nghiêm, bà con xóm giềng cùng phụ giúp khiêng nâng chu đáo.',
            en: 'Southern custom involves neighbors warmly assisting the encoffining ceremony.'
          }
        },
        taboosCivilAdvice: {
          vi: [
            'Quan tài phải kín khít đảm bảo vệ sinh môi trường phòng dịch.',
            'Người thân mang thai hoặc người ốm nặng nên tránh đứng sát mép quan tài lúc đóng nắp.',
            'Tránh để vàng bạc đá quý quá nhiều vào áo quan để phòng kẻ gian đào trộm.'
          ],
          en: [
            'Casket must be hermetically sealed for public sanitary standards.',
            'Pregnant relatives or ailing elders may step back during lid sealing.',
            'Do not bury expensive jewelry or large sums of cash to prevent grave desecration.'
          ]
        }
      },
      {
        stepNumber: 3,
        title: {
          vi: 'Lễ Phúng Viếng & Tế Lễ',
          en: 'Condolence Visitation & Memorial Tributes (Phung Vieng)'
        },
        timeframe: {
          vi: 'Suốt thời gian quàn thi hài (thường từ 1 - 2 ngày)',
          en: 'During the wake period (typically 1 to 2 days)'
        },
        significance: {
          vi: 'Thời gian để họ hàng nội ngoại, bà con lối xóm, bạn bè đến dâng hương, chia buồn cùng gia quyến và tiễn biệt người quá cố.',
          en: 'The designated window for relatives, friends, and community members to offer condolences and pay final homage.'
        },
        preparations: {
          vi: [
            'Bàn ghi sổ tang và thùng nhận phúng điếu (nếu gia đình nhận).',
            'Chuẩn bị hương hoa, trà nước tiếp khách viếng chu đáo.',
            'Sắp xếp chỗ ngồi cho khách và bàn tiếp lễ trang trọng.'
          ],
          en: [
            'Condolence desk with guest register.',
            'Incense, fresh tea, and hospitality for visiting delegations.',
            'Respectful reception seating.'
          ]
        },
        procedures: {
          vi: [
            'Các đoàn khách viếng lần lượt vào thắp hương, cúi chào trước linh cữu.',
            'Đại diện gia đình (trưởng nam hoặc con cháu) đứng đáp lễ (khách lạy mấy lạy thì đáp lễ tương ứng).',
            'Khách ghi sổ tang lưu lại lời chia buồn và thăm hỏi gia quyến.',
            'Định kỳ dâng cơm cúng bữa sáng, trưa, tối (Lễ Triêu tịch điện).'
          ],
          en: [
            'Visiting groups step forward, lighting incense and bowing before the casket.',
            'Family representatives bow in return to acknowledge respect.',
            'Visitors pen condolence messages in the memorial book.',
            'Daily symbolic meal offerings presented morning and evening.'
          ]
        },
        speechVows: {
          vi: 'Lời đáp lễ của gia đình: "Gia đình chúng tôi xin chân thành cảm tạ quý ông/bà, cô/bác đã bớt chút thời gian quý báu đến dâng hương tiễn biệt người thân của chúng tôi và chia sẻ nỗi đau buồn này."',
          en: 'Family Gratitude: "Our family deeply thanks you for traveling here to honor our beloved relative and comfort our grieving hearts."'
        },
        regionalNotes: {
          bac: {
            vi: 'Miền Bắc giữ lệ con cháu túc trực ngày đêm bên quan tài, tiếng kèn trống trầm mặc bi thương.',
            en: 'Northern custom keeps day-and-night vigil beside the casket with traditional elegies.'
          },
          trung: {
            vi: 'Miền Trung coi trọng các tuần cúng cơm dâng lên hương linh rất tinh tế, đúng giờ.',
            en: 'Central custom emphasizes exact, dignified punctuality for memorial meal rites.'
          },
          nam: {
            vi: 'Miền Nam nhiều gia đình ghi rõ "Xin miễn chấp điếu" (không nhận phong bì phúng viếng), tập trung vào sự ấm cúng nghĩa tình.',
            en: 'Southern wakes frequently mark "No Cash Offerings Accepted", prioritizing warm empathy.'
          }
        },
        taboosCivilAdvice: {
          vi: [
            'Không mở nhạc đám tang quá công suất sau 22h đêm làm phiền khu dân cư lân cận.',
            'Nghiêm cấm lợi dụng đám tang để tổ chức cờ bạc, xóc đĩa sát phạt nhau.',
            'Hạn chế đốt quá nhiều vàng mã gây khói bụi ngột ngạt và nguy cơ cháy.'
          ],
          en: [
            'Lower sound levels after 10:00 PM respecting neighborhood rest.',
            'Strictly prohibit gambling or card games during wake nights.',
            'Minimize paper incineration to maintain clean air and prevent fire.'
          ]
        }
      },
      {
        stepNumber: 4,
        title: {
          vi: 'Lễ Di Quan & An Táng (Hạ Huyệt) / Hỏa Táng',
          en: 'Funeral Procession & Interment / Cremation (Di Quan & Ha Huyet)'
        },
        timeframe: {
          vi: 'Buổi sáng ngày cuối cùng của tang lễ',
          en: 'Morning of the final funeral day'
        },
        significance: {
          vi: 'Giây phút tiễn đưa người thân rời khỏi mái ấm gia đình để về nơi an nghỉ vĩnh viễn trong lòng đất mẹ hoặc an vị tro cốt thiêng liêng.',
          en: 'The momentous farewell escorting the departed to their final resting resting place in the earth or peaceful columbarium.'
        },
        preparations: {
          vi: [
            'Đội khiêng đòn (đội đạo lộ / dịch vụ mai táng), xe tang, xe chở gia quyến.',
            'Huyệt mộ đã được đào sâu, xây gọn tại nghĩa trang (hoặc đăng ký giờ tại đài hỏa táng).',
            'Chuẩn bị hoa cúc, nắm đất thơm để con cháu rắc xuống huyệt.'
          ],
          en: [
            'Pallbearers, hearse, and family transportation.',
            'Grave excavated at approved cemetery (or appointment at cremation center).',
            'Fresh flower petals and handfuls of earth for family farewell.'
          ]
        },
        procedures: {
          vi: [
            'Lễ Khiển điện (Cúng cơm tiễn biệt trước giờ động quan).',
            'Động quan: Quan tài được nhấc lên, đưa ra khỏi nhà; đầu quan tài hướng về phía trước.',
            'Đoàn xe tang di chuyển trật tự về phía nghĩa trang hoặc đài hỏa táng.',
            'Hạ huyệt / Đưa vào buồng hỏa táng: Quan tài được hạ xuống huyệt mộ từ từ, ngay ngắn.',
            'Con cháu và họ hàng đi vòng quanh huyệt mộ, mỗi người thả một nắm đất và một bông hoa tiễn biệt.',
            'Đắp mộ hoàn chỉnh, thắp hương và tạ ơn người hỗ trợ mai táng.'
          ],
          en: [
            'Final farewell meal ritual before casket movement.',
            'Casket lifted and carried outward, head facing forward.',
            'Orderly motorcade travels to cemetery or cremation facility.',
            'Interment: Casket lowered gently into the grave (or into cremation chamber).',
            'Offspring and friends circle the grave, dropping a handful of earth and flower blossoms.',
            'Mound completed, incense lighted, and gratitude expressed to assistants.'
          ]
        },
        speechVows: {
          vi: 'Lời tiễn biệt: "Xin vĩnh biệt cha/mẹ kính yêu! Cầu mong linh hồn người được siêu sinh tịnh độ, ngậm cười nơi chín suối. Con cháu xin khắc ghi công ơn trời biển này muôn đời muôn kiếp."',
          en: 'Committal Farewell: "Farewell, beloved parent! May your soul find eternal rest and transcendence. Your boundless love remains engraved in our hearts for all generations."'
        },
        regionalNotes: {
          bac: {
            vi: 'Miền Bắc con trai trưởng đi giật lùi trước quan tài tiễn cha mẹ (phong tục xưa biểu thị lòng không nỡ rời xa).',
            en: 'Northern custom historically had the eldest son walk backward facing the casket in reluctance to part.'
          },
          trung: {
            vi: 'Miền Trung lễ hạ huyệt diễn ra rất trang nghiêm, người thân tạ lễ chu đáo tại mộ phần.',
            en: 'Central interments proceed with deep solemnity and complete respectful quietude.'
          },
          nam: {
            vi: 'Miền Nam có ngày thứ ba làm "Lễ mở cửa mả" (mang gà, cây mía, làm lễ dẫn đường cho linh hồn siêu thoát). Hiện nay đa số gia đình chọn hình thức hỏa táng sạch sẽ.',
            en: 'Southern folk custom includes a day-3 "Opening of the Tomb" rite. Cremation is now the preferred modern choice.'
          }
        },
        taboosCivilAdvice: {
          vi: [
            'Tuyệt đối tuân thủ quy hoạch nghĩa trang của địa phương, không chôn cất trong đất vườn nhà ở gây ô nhiễm nguồn nước ngầm.',
            'Khuyến khích lựa chọn hình thức hỏa táng văn minh, sạch sẽ, bảo vệ tài nguyên đất đai.',
            'Không rải tiền thật, vàng mã xuống đường gây mất an toàn giao thông.'
          ],
          en: [
            'Bury exclusively in legally zoned cemeteries; never inter in residential yards to protect groundwater.',
            'Cremation is highly recommended for urban sanitation and land stewardship.',
            'Do not throw real cash or excessive paper confetti onto roadways endangering traffic.'
          ]
        }
      }
    ],
    civilPrinciples: {
      vi: [
        'Vệ sinh môi trường: Quan tài kín, xử lý thi hài đúng quy chuẩn y tế, khuyến khích hỏa táng.',
        'Trật tự văn minh: Không mở loa nhạc quá khuya, không tổ chức cờ bạc đỏ đen trong tang lễ.',
        'Tiết kiệm nghĩa tình: Tránh bày vẽ mâm cao cỗ đầy linh đình biến đám tang thành gánh nặng nợ nần cho con cháu.',
        'Tôn trọng tín ngưỡng: Tôn trọng nguyện vọng của người đã khuất dù theo đạo Phật, Công giáo hay thế tục.'
      ],
      en: [
        'Sanitary standards: Hermetic casket sealing, compliance with health regulations, cremation favored.',
        'Public order: Respect quiet hours after 10 PM; strictly bar gambling activities.',
        'Financial modesty: Avoid lavish expenditures turning grief into debt burden.',
        'Religious neutrality: Fully respect the personal faith of the deceased (Buddhist, Christian, Secular).'
      ]
    }
  },

  'gio-chap': {
    id: 'gio-chap',
    name: {
      vi: 'Nghi Lễ Giỗ Chạp (Tế Tự & Kỷ Niệm)',
      en: 'Ancestral Death Anniversaries (Gio Chap)'
    },
    shortDesc: {
      vi: 'Ý nghĩa các ngày giỗ Đầu, giỗ Hết, giỗ Thường; cách sắm mâm cỗ cúng gia tiên và văn khấn chuẩn mực 3 miền.',
      en: 'Understanding First Anniversary, End of Mourning, and Annual Ancestral Rites with regional culinary spreads.'
    },
    overview: {
      vi: 'Ngày giỗ là ngày kỷ niệm ngày mất của người thân, tổ tiên, là dịp để các thế hệ con cháu tề tựu đông đủ, cùng nhau thắp nén nhang tưởng nhớ công ơn sinh thành và gắn kết tình cảm ruột thịt dòng họ. Ngày giỗ là nét đẹp tiêu biểu của đạo hiếu Việt Nam.',
      en: 'The death anniversary is an intimate family communion where descendants gather annually to light incense, recount ancestor virtues, and reinforce filial bonds.'
    },
    regionalTraditions: {
      bac: {
        name: { vi: 'Mâm Cỗ Giỗ Miền Bắc', en: 'Northern Memorial Feasts' },
        highlight: {
          vi: 'Nề nếp gia phong, trọng sự chu tất. Mâm cỗ giỗ truyền thống chuẩn mực phải có "4 bát 6 đĩa" đầy đặn và đẹp mắt.',
          en: 'Traditional culinary balance with the classical "4 soup bowls and 6 savory plates".'
        },
        offeringsRules: {
          vi: 'Các món tiêu biểu: Gà luộc lá chanh, giò lụa, chả quế, nem rán, xôi gấc/xôi đỗ xanh, bát canh măng ninh sườn, canh bóng bì lợn, nộm đu đủ tai heo.',
          en: 'Steamed chicken with lime leaf, Vietnamese ham, spring rolls, red sticky rice, bamboo shoot rib soup, pork skin dried soup, and fresh papaya salad.'
        },
        etiquette: {
          vi: 'Thắp hương cúng trước 12h trưa. Trưởng nam hoặc người lớn tuổi nhất thắp hương, đọc văn khấn; sau khi tàn tuần hương mới hạ lễ mời cả nhà cùng ăn.',
          en: 'Incense offered before noon by the senior family head; feast commences only after incense burns out and blessings are received.'
        }
      },
      trung: {
        name: { vi: 'Mâm Cỗ Giỗ Miền Trung', en: 'Central Memorial Feasts' },
        highlight: {
          vi: 'Mang đậm phong vị mộc mạc và tinh tế của dải đất miền Trung; coi trọng lòng thành kính sâu sắc hơn sự phô trương.',
          en: 'Deeply expressive flavors balancing sea and hill produce, emphasizing devotion over ostentation.'
        },
        offeringsRules: {
          vi: 'Các món tiêu biểu: Thịt heo luộc chấm tôm chua, nem chả tré, canh chua cá lóc, cá kho tộ, gà bóp rau răm, bánh ít lá gai, bánh đậu xanh trái cây.',
          en: 'Boiled pork with sour shrimp paste, fermented beef rolls, sour tamarind fish soup, shredded chicken with Vietnamese coriander, ramie cakes.'
        },
        etiquette: {
          vi: 'Có lễ cúng Tiên thường vào chiều hôm trước ngày giỗ chính để mời ông bà tổ tiên về ngự.',
          en: 'An eve ceremony ("Tien Thuong") invites ancestral souls home prior to the main anniversary morning.'
        }
      },
      nam: {
        name: { vi: 'Mâm Cỗ Giỗ Miền Nam', en: 'Southern Memorial Feasts' },
        highlight: {
          vi: 'Rộng rãi, ấm cúng, chuộng mâm cỗ 4 nhóm món truyền thống: Hầm, Xào, Luộc, Canh ("Kho - Xào - Luộc - Canh").',
          en: 'Abundant and heartwarming, based on the classical fourfold culinary formula: Braised, Stir-fried, Boiled, and Soup.'
        },
        offeringsRules: {
          vi: 'Các món tiêu biểu: Thịt kho hột vịt nước dừa (món hầm), canh khổ qua dồn thịt (với ước mong "nỗi khổ đi qua"), thịt ba rọi luộc cuốn bánh tráng rau sống, tôm/mực xào bông cải.',
          en: 'Braised pork belly with duck eggs in coconut broth, bitter melon soup stuffed with meat ("leaving bitterness behind"), boiled pork spring rolls, stir-fried seafood.'
        },
        etiquette: {
          vi: 'Con cháu tụ họp đông đủ rôm rả, ngồi cùng bàn thưởng thức các món ăn gia truyền của người đã khuất khi sinh thời thích ăn.',
          en: 'Generations gather around lively tables, specifically cooking favorite dishes loved by the deceased in life.'
        }
      }
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          vi: 'Chuẩn Bị Trước Ngày Giỗ & Lễ Tiên Thường',
          en: 'Preparation & Eve Ceremony (Le Tien Thuong)'
        },
        timeframe: {
          vi: 'Chiều hôm trước ngày chính giỗ',
          en: 'Afternoon preceding the anniversary day'
        },
        significance: {
          vi: 'Lau dọn bàn thờ sạch sẽ, chuẩn bị nguyên liệu nấu nướng và làm lễ thắp hương cáo yết mời tiền nhân về dự ngày giỗ.',
          en: 'Cleaning the altar, prepping culinary ingredients, and offering preliminary incense to invite ancestors home.'
        },
        preparations: {
          vi: [
            'Lau dọn bàn thờ sạch sẽ, thay nước mát và cắm hoa tươi mới.',
            'Lên thực đơn và phân công con cháu cùng đi chợ, chuẩn bị thực phẩm tươi ngon.',
            'Chuẩn bị mâm lễ chiều gồm hoa quả, đĩa xôi chè nhỏ hoặc mâm cơm giản dị.'
          ],
          en: [
            'Cleanse altar, refresh water and arrange fresh seasonal flowers.',
            'Plan menu and coordinate marketing and food prep among family.',
            'Prepare afternoon offerings: fresh fruit, sweet soup, or modest family dinner.'
          ]
        },
        procedures: {
          vi: [
            'Khoảng 16h - 17h chiều, gia chủ thắp nhang bàn thờ gia tiên làm lễ Tiên thường.',
            'Đọc lời khấn mời vong linh người được giỗ và các bậc tiền nhân cùng về dự.',
            'Cả nhà cùng nhau nấu nướng chuẩn bị cho mâm cỗ lớn sáng hôm sau.'
          ],
          en: [
            'Around 4:00 - 5:00 PM, family head lights incense for the Eve rite ("Tien Thuong").',
            'Recite prayers inviting the commemorated relative and ancestral spirits.',
            'Family collaborates in evening prep for the grand morning feast.'
          ]
        },
        speechVows: {
          vi: 'Lời khấn Tiên thường: "Kính lạy tổ tiên, ngày mai là ngày chính kỵ của... Hôm nay chúng con xin dâng nén hương thơm chén nước trong, kính mời hương linh người về ngự trước linh tọa chứng giám lòng hiếu kính của con cháu."',
          en: 'Eve Prayer: "Reverent ancestors, tomorrow is the commemorative anniversary of... Today we offer sweet incense and clear water, inviting your spirit to grace our home and witness our filial love."'
        },
        regionalNotes: {
          bac: {
            vi: 'Miền Bắc thường tổ chức lễ Tiên thường trang trọng ở các gia đình con trưởng họ.',
            en: 'Northern lineages hold formal Eve ceremonies, particularly in the eldest son home.'
          },
          trung: {
            vi: 'Miền Trung rất coi trọng lễ Tiên thường, coi đây là dịp con cháu ở xa về chào hỏi ông bà.',
            en: 'Central families consider the Eve ceremony essential for out-of-town kin arriving home.'
          },
          nam: {
            vi: 'Miền Nam xem chiều Tiên thường là lúc quây quần làm bánh, gói nem đầm ấm rộn rã.',
            en: 'Southern families enjoy the eve rolling spring rolls and preparing traditional savory treats.'
          }
        },
        taboosCivilAdvice: {
          vi: [
            'Tránh nếm thử thức ăn trong khi đang múc đồ lên mâm cúng bàn thờ.',
            'Không cúng các món sống, tanh hoặc thịt kiêng kỵ (thịt chó, mèo, rắn...).',
            'Giữ không gian nhà cửa ngăn nắp, trang nghiêm.'
          ],
          en: [
            'Do not taste or sample dishes while plating offerings for the altar.',
            'Avoid raw, pungent, or culturally inappropriate meats.',
            'Maintain tidy order and tranquility in the home.'
          ]
        }
      },
      {
        stepNumber: 2,
        title: {
          vi: 'Lễ Chính Giỗ & Dâng Hương Khấn Cáo',
          en: 'Main Anniversary Ritual & Invocations (Chinh Gio)'
        },
        timeframe: {
          vi: 'Sáng ngày chính giỗ (thường từ 9h30 - 11h30 trưa)',
          en: 'Morning of the anniversary day (9:30 AM - 11:30 AM)'
        },
        significance: {
          vi: 'Nghi thức dâng cúng trang trọng nhất trong năm, kết nối linh thiêng giữa các thế hệ người sống và người đã khuất.',
          en: 'The paramount memorial offering of the year, reaffirming the sacred continuum between living descendants and honored ancestors.'
        },
        preparations: {
          vi: [
            'Bày biện mâm cỗ cúng đầy đặn, đẹp mắt lên bàn thờ chính.',
            'Rót nước, rót rượu vào chén cúng; thắp đèn nến sáng trưng.',
            'Gia quyến trang phục chỉnh tề, tề tựu trước bàn thờ.'
          ],
          en: [
            'Arrange the complete culinary feast gracefully on the altar.',
            'Pour fresh water and wine into ceremonial cups; light candles.',
            'Family members dress neatly and assemble before the altar.'
          ]
        },
        procedures: {
          vi: [
            'Gia chủ (hoặc trưởng tộc) chỉnh đốn y phục, thắp 3 nén hương thơm cắm vào bát hương.',
            'Vái 3 vái và đọc bài văn khấn ngày giỗ với giọng trang nghiêm, thành kính.',
            'Sau khi gia chủ khấn xong, lần lượt con cháu trong gia đình vào thắp hương vái lạy.',
            'Chờ cho tuần hương cháy được 2/3 thì gia chủ rót thêm rượu, lễ tạ và hóa vàng (nếu có, đốt ít mang tính biểu trưng).',
            'Hạ mâm cỗ xuống để gia đình cùng thụ lộc.'
          ],
          en: [
            'Family head dresses respectfully, lights 3 incense sticks, and bows reverently.',
            'Recites the formal anniversary invocation clearly with deep sincerity.',
            'Descendants approach in order of seniority to bow and offer incense.',
            'When incense burns through two-thirds, wine is refreshed, concluding with gratitude.',
            'Offerings are lowered to the dining table for the family communion meal.'
          ]
        },
        speechVows: {
          vi: 'Văn khấn chính giỗ: "Nam mô A Di Đà Phật! Con kính lạy chín phương Trời, mười phương Chư Phật. Con kính lạy Hoàng thiên Hậu thổ chư vị Tôn thần. Con kính lạy ngài Bản xứ Thần linh Thổ địa. Con kính lạy tổ tiên nội ngoại họ... Hôm nay ngày... tháng... năm... nhân ngày chính giỗ của... Tín chủ chúng con thành tâm sắm sửa lễ vật, hương hoa cơm canh, kính dâng trước linh tọa. Cúi xin chư vị giáng lâm trước án, chứng giám lòng thành, phù hộ độ trì cho toàn gia an khang thịnh vượng, vạn sự tốt lành."',
          en: 'Main Anniversary Invocation: "Reverence to Heaven, Earth, and all Benevolent Deities. Reverence to the venerable ancestors of the lineage. Today, on the solemn anniversary of our beloved..., our family devoutly presents fragrant incense, flowers, and traditional feasts before the altar. We pray you grace our home, witness our filial hearts, and bestow peace, health, and harmony upon our family."'
        },
        regionalNotes: {
          bac: {
            vi: 'Miền Bắc đọc văn khấn cổ truyền đầy đủ danh tính các đời tổ tiên, con cháu quỳ lạy trang nghiêm.',
            en: 'Northern invocations recite comprehensive generational names with formal bows.'
          },
          trung: {
            vi: 'Miền Trung thắp hương trầm xứ Quảng thơm nức, khấn vái mộc mạc và chân thành.',
            en: 'Central ceremonies burn aromatic Quang Nam agarwood, offering heartfelt prayers.'
          },
          nam: {
            vi: 'Miền Nam sau khi cúng xong thường mời bà con chòm xóm cùng ngồi chung vui, kể lại công trạng của ông bà.',
            en: 'Southern gatherings invite neighbors to partake in the banquet, recounting grandfatherly virtues.'
          }
        },
        taboosCivilAdvice: {
          vi: [
            'Tránh để thú cưng chạy nhảy làm đổ vỡ đồ lễ trên bàn thờ.',
            'Không đốt cả xấp vàng mã lớn gây ô nhiễm khói bụi và lãng phí tiền bạc.',
            'Giữ thái độ trang nhã, không to tiếng cãi vã trong lúc làm lễ.'
          ],
          en: [
            'Prevent pets from disturbing altar offerings.',
            'Avoid massive joss paper burning to protect clean air and avoid waste.',
            'Preserve decorum, avoiding quarreling or shouting during sacred rites.'
          ]
        }
      },
      {
        stepNumber: 3,
        title: {
          vi: 'Thụ Lộc & Gắn Kết Tình Thân Dòng Họ',
          en: 'Communion Meal & Kinship Reunion (Thu Loc)'
        },
        timeframe: {
          vi: 'Trưa ngày chính giỗ',
          en: 'Noon of the anniversary day'
        },
        significance: {
          vi: 'Con cháu cùng nhau thưởng thức những món ăn truyền thống, chia sẻ chuyện làm ăn, động viên nhau học hành và duy trì mối dây huyết thống bền chặt.',
          en: 'Descendants partake of the blessed meal together, fostering mutual support, honoring lineage memory, and strengthening family unity.'
        },
        preparations: {
          vi: [
            'Dọn bàn ăn tươm tất, sạch sẽ.',
            'Chuẩn bị phần lộc (hoa quả, bánh trái) để chia cho các cháu nhỏ hoặc gửi cho người thân vắng mặt.'
          ],
          en: [
            'Set hospitable dining tables.',
            'Package portions of blessed fruit and cakes for children and absent relatives.'
          ]
        },
        procedures: {
          vi: [
            'Mời người lớn tuổi nhất trong họ nâng chén khai tiệc và gửi lời chúc phúc đến con cháu.',
            'Con cháu thăm hỏi sức khỏe các bậc cao niên.',
            'Trao đổi về việc đóng góp quỹ khuyến học, việc sửa sang mộ phần của dòng họ trong năm.',
            'Dọn dẹp nhà cửa gọn gàng, chia lộc trước khi chia tay.'
          ],
          en: [
            'Clan elder opens the banquet with blessings for the younger generations.',
            'Offspring inquire after elders’ health and well-being.',
            'Discuss clan scholarship funds and collective cemetery maintenance.',
            'Tidy the residence and share sweet gifts before departure.'
          ]
        },
        speechVows: {
          vi: 'Lời chúc của bậc cao niên: "Hôm nay ngày giỗ của ông bà, thấy con cháu về đông đủ ngoan ngoãn là niềm hạnh phúc lớn nhất của gia đình. Mong các con các cháu luôn biết đùm bọc, giúp đỡ nhau và sống xứng đáng với truyền thống của dòng họ."',
          en: 'Elder Blessing: "Seeing our children return home in unity and warmth is the greatest joy of our lineage. May you always protect one another, live uprightly, and bring honor to our family name."'
        },
        regionalNotes: {
          bac: {
            vi: 'Miền Bắc giữ nếp ngồi chiếu trên chiếu dưới theo thứ bậc trong nhà từ đường.',
            en: 'Northern ancestral halls traditionally arrange seating by genealogical rank.'
          },
          trung: {
            vi: 'Miền Trung con cháu luôn dành những miếng ngon nhất kính dâng ông bà cha mẹ.',
            en: 'Central youth always serve choice delicacies to parents and elders first.'
          },
          nam: {
            vi: 'Miền Nam ngồi quây quần rôm rả, không câu nệ khoảng cách, tiếng cười rộn rã gắn kết.',
            en: 'Southern tables are informal and exuberant, filled with laughter and camaraderie.'
          }
        },
        taboosCivilAdvice: {
          vi: [
            'Đã uống rượu bia thì không lái xe khi ra về.',
            'Tránh mang những bất đồng tranh chấp tài sản ra bàn cãi trong ngày giỗ làm mất đi sự thiêng liêng.',
            'Khuyến khích ăn uống tiết kiệm, tránh lãng phí thực phẩm.'
          ],
          en: [
            'Never drink and drive; designate safe transport.',
            'Do not bring inheritance or property disputes into the memorial day.',
            'Encourage food waste reduction and mindful moderation.'
          ]
        }
      }
    ],
    civilPrinciples: {
      vi: [
        'Tâm thành là gốc: "Một nén tâm hương hơn mâm cao cỗ đầy" — lòng biết ơn chân thật quý hơn sự phô trương mâm cỗ linh đình.',
        'Gắn kết gia đình: Ngày giỗ là cơ hội để các thế hệ sum họp, hàn gắn những khúc mắc và giáo dục đạo hiếu cho con cháu.',
        'Bảo vệ môi trường: Không đốt nhiều vàng mã, giữ sạch sẽ khu vực thắp hương và phòng cháy an toàn.',
        'Hài hòa tôn giáo: Dù gia đình theo tín ngưỡng nào, lòng tưởng nhớ cha mẹ tổ tiên đều là giá trị thiêng liêng chung của con người.'
      ],
      en: [
        'Sincerity first: A single incense stick offered with pure love outweighs extravagant feasts.',
        'Family unity: Death anniversaries provide sacred space to reconcile differences and teach filial duty.',
        'Environmental care: Minimize paper ash, keep altars fire-safe and air clean.',
        'Interfaith respect: Ancestral memory transcends doctrinal divides, uniting all humanity in filial gratitude.'
      ]
    }
  }
};
