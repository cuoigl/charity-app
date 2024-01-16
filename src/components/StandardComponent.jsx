import React from "react";
import { Col, Row } from "antd";
import {
  FaRegAddressCard,
  FaVirus,
  FaWeight,
  FaHeartbeat,
  FaCalendar,
} from "react-icons/fa";
import { BiInjection } from "react-icons/bi";
import { GrIndicator } from "react-icons/gr";
import { GiHealing } from "react-icons/gi";
import { LuTestTube2 } from "react-icons/lu";

const Item = ({ icon, children }) => {
  return (
    <div className="border rounded shadow-sm min-h-28 mx-1 mt-1 bg-sky-200">
      <div className="text-5xl ml-4 mt-2">{icon}</div>
      <div className="ml-4">
        <p>{children}</p>
      </div>
    </div>
  );
};

export const StandardComponent = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <Row>
        <Col span={8}>
          <div
            className="border rounded shadow-sm mx-1 mt-1 bg-sky-200"
            style={{ minHeight: "225px" }}
          >
            <div className="text-5xl ml-4 mt-2">
              <FaRegAddressCard />
            </div>
            <div className="ml-4">
              <h1>Tiêu chuẩn tham gia hiến máu</h1>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <div>
              <Item icon={<FaRegAddressCard />}>
                Mang theo chứng minh nhân dân/hộ chiếu
              </Item>
            </div>
            <div>
              <Item icon={<BiInjection />}>
                Không nghiện ma túy, rượu bia và các chất kích thích
              </Item>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div
            className="border rounded shadow-sm mx-1 mt-1 bg-sky-200"
            style={{ minHeight: "225px" }}
          >
            <div className="text-5xl ml-4 mt-2">
              <FaVirus />
            </div>
            <div className="ml-4">
              <p>
                Không mắc hoặc không có các hành vi nguy cơ lây nhiễm HIV, không
                nhiễm viêm gan B, viêm gan C, và các virus lây qua đường truyền
                máu
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <Item icon={<FaWeight />}>Cân nặng: Nam ≥ 45 kg Nữ ≥ 45 kg</Item>
        </Col>
        <Col span={8}>
          <Item icon={<FaHeartbeat />}>
            Không mắc các bệnh mãn tính hoặc cấp tính về tim mạch, huyết áp, hô
            hấp, dạ dày…
          </Item>
        </Col>
        <Col span={8}>
          <Item icon={<GrIndicator />}>
            Chỉ số huyết sắc tố (Hb) ≥120g/l (≥125g/l nếu hiến từ 350ml trở
            lên).
          </Item>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <Item icon={<GiHealing />}>
            Người khỏe mạnh trong độ tuổi từ đủ 18 đến 60 tuổi
          </Item>
        </Col>
        <Col span={8}>
          <Item icon={<FaCalendar />}>
            Thời gian tối thiểu giữa 2 lần hiến máu là 12 tuần đối với cả Nam và
            Nữ
          </Item>
        </Col>
        <Col span={8}>
          <Item icon={<LuTestTube2 />}>
            Kết quả test nhanh âm tính với kháng nguyên bề mặt của siêu vi B
          </Item>
        </Col>
      </Row>
    </div>
  );
};
