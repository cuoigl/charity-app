import React, { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const NoteComponent = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-6xl">
        <div class="flex flex-col mb-16 sm:text-center">
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-600 sm:text-4xl md:mx-auto">
              Lưu ý quan trọng
            </h2>
          </div>
        </div>
        <div class="space-y-4">
          <Item title="1. Ai có thể tham gia hiến máu?">
            <ul>
              <li>
                - Tất cả mọi người từ 18 - 60 tuổi, thực sự tình nguyện hiến máu
                của mình để cứu chữa người bệnh.
              </li>
              <li>
                - Cân nặng ít nhất là 45kg đối với phụ nữ, nam giới. Lượng máu
                hiến mỗi lần không quá 9ml/kg cân nặng và không quá 500ml mỗi
                lần.
              </li>
              <li>
                - Không bị nhiễm hoặc không có các hành vi lây nhiễm HIV và các
                bệnh lây nhiễm qua đường truyền máu khác.
              </li>
              <li>
                - Thời gian giữa 2 lần hiến máu là 12 tuần đối với cả Nam và Nữ.
              </li>
              <li>- Có giấy tờ tùy thân</li>
            </ul>
          </Item>
          <Item title="2. Ai là người không nên hiến máu">
            <ul>
              <li>
                - Người đã nhiễm hoặc đã thực hiện hành vi có nguy cơ nhiễm HIV,
                viêm gan B, viêm gan C, và các vius lây qua đường truyền máu.
              </li>
              <li>
                - Người có các bệnh mãn tính: tim mạch, huyết áp, hô hấp, dạ
                dày…
              </li>
            </ul>
          </Item>
          <Item title="3. Máu của tôi sẽ được làm những xét nghiệm gì?">
            <ul>
              <li>
                - Tất cả những đơn vị máu thu được sẽ được kiểm tra nhóm máu (hệ
                ABO, hệ Rh), HIV, virus viêm gan B, virus viêm gan C, giang mai,
                sốt rét.
              </li>
              <li>
                - Bạn sẽ được thông báo kết quả, được giữ kín và được tư vấn
                (miễn phí) khi phát hiện ra các bệnh nhiễm trùng nói trên.
              </li>
            </ul>
          </Item>
          <div class="flex flex-col mb-16 sm:text-center">
            <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <Link
                to="/faq"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Xem hiểu thêm <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
