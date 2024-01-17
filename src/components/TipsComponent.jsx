import React from "react";
import { Col, Row } from "antd";
import {
  FaRegTimesCircle,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Item = ({ icon, title, color, children }) => {
  return (
    <div className="border rounded shadow-sm min-h-28 mx-1 mt-1 bg-sky-100">
      <div className={color}>
        <div className="ml-4 mt-3 flex">
          <div className="text-5xl">{icon}</div>
          <div className="text-4xl ml-3">{title}</div>
        </div>
      </div>
      <div className="ml-4 my-3">
        <p>{children}</p>
      </div>
    </div>
  );
};

export const TipsComponent = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <Row>
        <Col span={12}>
          <div className="font-bold text-4xl px-4">
            Những lời khuyên trước và sau khi hiến máu
          </div>
          <div>
            <Item
              icon={<FaCheckCircle />}
              title={"Nên:"}
              color={"text-cyan-700"}
            >
              <ul>
                <li>
                  - Ăn nhẹ và uống nhiều nước (300-500ml) trước khi hiến máu.
                </li>
                <li>
                  - Đè chặt miếng bông gòn cầm máu nơi kim chích 10 phút, giữ
                  băng keo cá nhân trong 4-6 giờ.
                </li>
                <li>- Nằm và ngồi nghỉ tại chỗ 10 phút sau khi hiến máu.</li>
                <li>
                  - Nằm nghỉ đầu thấp, kê chân cao nếu thấy chóng mặt, mệt, buồn
                  nôn.
                </li>
                <li>
                  - Chườm lạnh (túi chườm chuyên dụng hoặc cho đá vào khăn)
                  chườm vết chích nếu bị sưng, bầm tím.
                </li>
              </ul>
            </Item>
          </div>
        </Col>
        <Col span={12}>
          <Item
            icon={<FaRegTimesCircle />}
            title={"Không nên:"}
            color={"text-rose-900"}
          >
            <ul>
              <li>- Uống sữa, rượu bia trước khi hiến máu.</li>
              <li>
                - Lái xe đi xa, khuân vác, làm việc nặng hoặc luyện tập thể thao
                gắng sức trong ngày lấy máu.
              </li>
            </ul>
          </Item>
          <Item
            icon={<FaExclamationCircle />}
            title={"Lưu ý:"}
            color={"text-amber-700"}
          >
            <ul>
              <li>- Nếu phát hiện chảy máu tại chỗ chích:</li>
              <li>Giơ tay cao.</li>
              <li>Lấy tay kia ấn nhẹ vào miếng bông hoặc băng dính.</li>
              <li>Liên hệ nhân viên y tế để được hỗ trợ khi cần thiết.</li>
            </ul>
          </Item>
        </Col>
      </Row>
    </div>
  );
};
