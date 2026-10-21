export default function TwoPathsSpread() {
  return (
    <section className="py-16 lg:py-24 border-b border-stone-200 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-900 font-semibold block mb-2">
            Đối Thoại Hình Ảnh & Thực Tiễn
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            Hai con đường: Nét đẹp di sản và tro tàn của sự hoang mang
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
            Nhìn sâu vào hai hình ảnh thực tế để cảm nhận sự đối lập giữa lòng thành kính nuôi dưỡng tâm hồn
            và sự mê muội làm hao tổn nguồn lực xã hội.
          </p>
        </div>

        {/* 2-Column Photojournalism Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Sacred Ancestral Heritage */}
          <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src="/src/assets/images/ancestral_altar_truly_1792495542073.jpg"
                  alt="Không gian bàn thờ gia tiên truyền thống Việt Nam trang nghiêm và ấm cúng"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-white text-xs px-3 py-1 rounded font-medium">
                  Tín Ngưỡng Đích Thực
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs uppercase tracking-wider text-amber-900 font-medium">
                  Đạo Hiếu & Sự Tĩnh Lặng Tâm Hồn
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Một nén tâm hương, trọn vẹn ân tình cội nguồn
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Trước bàn thờ tổ tiên, con người tìm về cội rễ huyết thống. Ngọn đèn dầu ấm áp, nén nhang thơm
                  và mâm ngũ quả thanh khiết không mang tính đổi chác hay sợ hãi; đó là giây phút con cháu tự soi chiếu
                  lương tâm, hứa với người đi trước sẽ sống tử tế và yêu thương người xung quanh.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Đặc trưng: Thanh thản, hướng thiện, tiết kiệm</span>
              <span className="font-medium text-emerald-800">Nuôi dưỡng đạo đức</span>
            </div>
          </div>

          {/* Card 2: Wasteful & Distorted Superstition */}
          <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src="/src/assets/images/superstition_caution_paper_1792495542371.jpg"
                  alt="Hiện trường khói bụi và tro tàn đốt vàng mã tràn lan trên đường phố"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-rose-900/90 backdrop-blur-xs text-white text-xs px-3 py-1 rounded font-medium">
                  Biến Tướng & Hệ Lụy
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs uppercase tracking-wider text-rose-800 font-medium">
                  Thao Túng & Lãng Phí Nguồn Lực
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Tro tàn của nỗi sợ và cơn cuồng tín thương mại
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Khi lòng tin bị dẫn dắt bởi nỗi sợ hãi hoặc lòng tham làm giàu chớp nhoáng, con người sẵn sàng đốt hàng
                  triệu đồng tiền thật để đổi lấy khói bụi độc hại, đưa hàng chục triệu cho thầy bói để "cắt duyên âm",
                  hoặc chen lấn giẫm đạp cướp lộc. Kết quả chỉ là tiền mất tật mang và sự bất an dâng cao.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Hậu quả: Ô nhiễm, hỏa hoạn, kiệt quệ tài chính</span>
              <span className="font-medium text-rose-800">Cần kiên quyết bài trừ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
