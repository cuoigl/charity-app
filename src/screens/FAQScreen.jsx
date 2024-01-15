import React, { useState } from "react";

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

export const FAQScreen = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-6xl">
        <div class="flex flex-col mb-16 sm:text-center">
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-600 sm:text-4xl md:mx-auto">
              <span class="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>
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
          <Item title="4. Máu gồm những thành phần và chức năng gì?">
            <ul>
              Máu là một chất lỏng lưu thông trong các mạch máu của cơ thể, gồm
              nhiều thành phần, mỗi thành phần làm nhiệm vụ khác nhau:
              <li>- Hồng cầu làm nhiệm vụ chính là vận chuyển oxy.</li>
              <li>- Bạch cầu làm nhiệm vụ bảo vệ cơ thể.</li>
              <li>- Tiểu cầu tham gia vào quá trình đông cầm máu.</li>
              <li>
                - Huyết tương: gồm nhiều thành phần khác nhau: kháng thể, các
                yếu tố đông máu, các chất dinh dưỡng...
              </li>
            </ul>
          </Item>
          <Item title="5. Tại sao lại có nhiều người cần phải được truyền máu?">
            <ul>
              Mỗi giờ có hàng trăm người bệnh cần phải được truyền máu vì :
              <li>
                - Bị mất máu do chấn thương, tai nạn, thảm hoạ, xuất huyết tiêu
                hoá...
              </li>
              <li>
                - Do bị các bệnh gây thiếu máu, chảy máu: ung thư máu, suy tuỷ
                xương, máu khó đông...
              </li>
              <li>
                - Các phương pháp điều trị hiện đại cần truyền nhiều máu: phẫu
                thuật tim mạch, ghép tạng...
              </li>
            </ul>
          </Item>
          <Item title="6. Nhu cầu máu điều trị ở nước ta hiện nay?">
            <ul>
              <li>
                - Mỗi năm nước ta cần khoảng 1.800.000 đơn vị máu điều trị.
              </li>
              <li>
                - Máu cần cho điều trị hằng ngày, cho cấp cứu, cho dự phòng các
                thảm họa, tai nạn cần truyền máu với số lượng lớn.
              </li>
              <li>
                - Hiện tại chúng ta đã đáp ứng được khoảng 54% nhu cầu máu cho
                điều trị.
              </li>
            </ul>
          </Item>
          <Item title="7. Tại sao khi tham gia hiến máu lại cần phải có giấy CMND?">
            Mỗi đơn vị máu đều phải có hồ sơ, trong đó có các thông tin về người
            hiến máu. Theo quy định, đây là một thủ tục cần thiết trong quy
            trình hiến máu để đảm bảo tính xác thực thông tin về người hiến máu.
          </Item>
          <Item title="8. Hiến máu nhân đạo có hại đến sức khoẻ không?">
            Hiến máu theo hướng dẫn của thầy thuốc không có hại cho sức khỏe.
            Điều đó đã được chứng minh bằng các cơ sở khoa học và cơ sở thực
            tế:..
            <ul>
              Cơ sở khoa học:
              <li>
                - Máu có nhiều thành phần, mỗi thành phần chỉ có đời sống nhất
                định và luôn luôn được đổi mới hằng ngày. Ví dụ: Hồng cầu sống
                được 120 ngày, huyết tương thường xuyên được thay thế và đổi
                mới. Cơ sở khoa học cho thấy, nếu mỗi lần hiến dưới 1/10 lượng
                máu trong cơ thể thì không có hại đến sức khỏe.
              </li>
              <li>
                - Nhiều công trình nghiên cứu đã chứng minh rằng, sau khi hiến
                máu, các chỉ số máu có thay đổi chút ít nhưng vẫn nằm trong giới
                hạn sinh lý bình thường không hề gây ảnh hưởng đến các hoạt động
                thường ngày của cơ thể.
              </li>
            </ul>
            <ul>
              Cơ sở thực tế:
              <li>
                - Thực tế đã có hàng triệu người hiến máu nhiều lần mà sức khỏe
                vẫn hoàn toàn tốt. Trên thế giới có người hiến máu trên 400 lần.
                Ở Việt Nam, người hiến máu nhiều lần nhất đã hiến gần 100 lần,
                sức khỏe hoàn toàn tốt.
              </li>
              <li>
                - Như vậy, mỗi người nếu thấy sức khoẻ tốt, không có các bệnh
                lây nhiễm qua đường truyền máu, đạt tiêu chuẩn hiến máu thì có
                thể hiến máu từ 3-4 lần trong một năm, vừa không ảnh hưởng xấu
                đến sức khoẻ của bản thân, vừa đảm bảo máu có chất lượng tốt, an
                toàn cho người bệnh.
              </li>
            </ul>
          </Item>
          <Item title="9. Quyền lợi đối với người hiến máu tình nguyện?">
            <ul>
              Quyền lợi và chế độ đối với người hiến máu tình nguyện theo Thông
              tư số 05/2017/TT-BYT Quy định giá tối đa và chi phí phục vụ cho
              việc xác định giá một đơn vị máu toàn phần, chế phẩm máu đạt tiêu
              chuẩn:
              <li>- Được khám và tư vấn sức khỏe miễn phí.</li>
              <li>
                - Được kiểm tra và thông báo kết quả các xét nghiệm máu (hoàn
                toàn bí mật): nhóm máu, HIV, virut viêm gan B, virut viêm gan C,
                giang mai, sốt rét. Trong trường hợp người hiến máu có nhiễm
                hoặc nghi ngờ các mầm bệnh này thì sẽ được Bác sỹ mời đến để tư
                vấn sức khỏe.
              </li>
              <li>- Được bồi dưỡng và chăm sóc theo các quy định hiện hành:</li>
              <li>+ Phục vụ ăn nhẹ tại chỗ: tương đương 30.000 đồng.</li>
              <li>+ Hỗ trợ chi phí đi lại (bằng tiền mặt): 50.000 đồng.</li>
              <li>
                + Lựa chọn nhận quà tặng bằng hiện vật có giá trị như sau:
              </li>
              <li>Một đơn vị máu thể tích 250 ml: 100.000 đồng.</li>
              <li>Một đơn vị máu thể tích 350 ml: 150.000 đồng.</li>
              <li>Một đơn vị máu thể tích 450 ml: 180.000 đồng.</li>
              <li>
                + Được cấp giấy chứng nhận hiến máu tình nguyện của Ban chỉ đạo
                hiến máu nhân đạo Tỉnh, Thành phố. Ngoài giá trị về mặt tôn
                vinh, giấy chứng nhận hiến máu có giá trị bồi hoàn máu, số lượng
                máu được bồi hoàn lại tối đa bằng lượng máu người hiến máu đã
                hiến. Giấy Chứng nhận này có giá trị tại các bệnh viện, các cơ
                sở y tế công lập trên toàn quốc.
              </li>
            </ul>
          </Item>
          <Item title="10. Khi hiến máu có thể bị nhiễm bệnh không?">
            <ul>
              <li>
                - Kim dây lấy máu vô trùng, chỉ sử dụng một lần cho một người,
                vì vậy không thể lây bệnh cho người hiến máu.
              </li>
            </ul>
          </Item>
          <Item title="11. Ngày mai tôi sẽ hiến máu, tôi nên chuẩn bị như thế nào?">
            <ul>
              <li>- Tối nay bạn không nên thức quá khuya (ngủ trước 23:00).</li>
              <li>- Nên ăn và không uống rượu, bia trước khi hiến máu.</li>
              <li>
                - Mang giấy CMND, đủ giấy tờ tùy thân và thẻ hiến máu(nếu có)
                khi đi hiến máu.
              </li>
            </ul>
          </Item>
          <Item title="12. Những trường hợp nào cần phải trì hoãn hiến máu?">
            <ul>
              <li>
                - Những người phải trì hoãn hiến máu trong 12 tháng kể từ thời
                điểm:
              </li>
              <li>+ Phục hồi hoàn toàn sau các can thiệp ngoại khoa.</li>
              <li>
                + Khỏi bệnh sau khi mắc một trong các bệnh sốt rét, giang mai,
                lao, uốn ván, viêm não, viêm màng não.
              </li>
              <li>
                + Kết thúc đợt tiêm vắc xin phòng bệnh dại sau khi bị động vật
                cắn hoặc tiêm, truyền máu, chế phẩm máu và các chế phẩm sinh học
                nguồn gốc từ máu.
              </li>
              <li>+ Sinh con hoặc chấm dứt thai nghén.</li>
              <li>
                - Những người phải trì hoãn hiến máu trong 06 tháng kể từ thời
                điểm:
              </li>
              <li>+ Xăm trổ trên da.</li>
              <li>
                + Bấm dái tai, bấm mũi, bấm rốn hoặc các vị trí khác của cơ thể.
              </li>
              <li>
                + Phơi nhiễm với máu và dịch cơ thể từ người có nguy cơ hoặc đã
                nhiễm các bệnh lây truyền qua đường máu.
              </li>
              <li>
                + Khỏi bệnh sau khi mắc một trong các bệnh thương hàn, nhiễm
                trùng huyết, bị rắn cắn, viêm tắc động mạch, viêm tắc tĩnh mạch,
                viêm tuỷ xương, viêm tụy.
              </li>
              <li>
                - Những người phải trì hoãn hiến máu trong 04 tuần kể từ thời
                điểm:
              </li>
              <li>
                + Khỏi bệnh sau khi mắc một trong các bệnh viêm dạ dày ruột,
                viêm đường tiết niệu, viêm da nhiễm trùng, viêm phế quản, viêm
                phổi, sởi, ho gà, quai bị, sốt xuất huyết, kiết lỵ, rubella, tả,
                quai bị.
              </li>
              <li>
                + Kết thúc đợt tiêm vắc xin phòng rubella, sởi, thương hàn, tả,
                quai bị, thủy đậu, BCG.
              </li>
              <li>
                - Những người phải trì hoãn hiến máu trong 07 ngày kể từ thời
                điểm:
              </li>
              <li>
                + Khỏi bệnh sau khi mắc một trong các bệnh cúm, cảm lạnh, dị ứng
                mũi họng, viêm họng, đau nửa đầu Migraine.
              </li>
              <li>
                + Tiêm các loại vắc xin, trừ các loại đã được quy định tại Điểm
                c Khoản 1 và Điểm b Khoản 3 Điều này.
              </li>
              <li>
                - Một số quy định liên quan đến nghề nghiệp và hoạt động đặc thù
                của người hiến máu: những người làm một số công việc và thực
                hiện các hoạt động đặc thù sau đây chỉ hiến máu trong ngày nghỉ
                hoặc chỉ được thực hiện các công việc, hoạt động này sau khi
                hiến máu tối thiểu 12 giờ:
              </li>
              <li>
                + Người làm việc trên cao hoặc dưới độ sâu: phi công, lái cần
                cẩu, công nhân làm việc trên cao, người leo núi, thợ mỏ, thủy
                thủ, thợ lặn.
              </li>
              <li>
                + Người vận hành các phương tiện giao thông công cộng: lái xe
                buýt, lái tàu hoả, lái tàu thuỷ.
              </li>
              <li>
                + Các trường hợp khác: vận động viên chuyên nghiệp, người vận
                động nặng, tập luyện nặng.
              </li>
            </ul>
          </Item>
          <Item title="13. Tôi có thể hiến máu sau khi tiêm vắc xin Covid-19 không?">
            <ul>
              <li>
                Khi tiêm vắc xin ngừa Covid-19, có thể tham gia hiến máu sau: 7
                NGÀY, đề đảm bảo bạn không bị tác dụng phụ và đảm bảo đủ sức
                khỏe vào ngày hiến máu.
              </li>
            </ul>
          </Item>
          <Item title="14. Tôi bị nhiễm Covid-19. Tôi có thể hiến máu sau khi hồi phục không?">
            <ul>
              <li>
                Khi mắc bệnh Covid-19, có thể tham gia hiến máu sau: 14 ngày kể
                từ thời điểm có kết quả khẳng định "ÂM TÍNH" với virus
                SarS-CoV-2
              </li>
            </ul>
          </Item>
          <Item title="15. Khi phát hiện bất thường, cảm thấy không an toàn với túi máu vừa hiến">
            <ul>
              <li>
                Sau khi tham gia hiến máu, nếu phát hiện có bất cứ điều gì khiến
                bạn cảm thấy không an toàn với túi máu vừa hiến (chợt nhớ ra 1
                hành vi nguy cơ, có sử dụng loại thuốc nào đó mà bạn quên báo
                bác sĩ khi thăm khám, có xét nghiệm "DƯƠNG TÍNH" với SarS-CoV-2
                bằng kỹ thuật test nhanh hoặc Real time RT-PCR,...) vui lòng báo
                lại cho đơn vị tiếp nhận túi máu nơi mà bạn đã tham gia hiến.
              </li>
              <li></li>
            </ul>
          </Item>
          <Item title="16. Cảm thấy không khỏe sau khi hiến máu?">
            <ul>
              <li>
                Sau khi hiến máu, nếu có các triệu chứng chóng mặt, mệt mỏi,
                buồn nôn,... hãy liên hệ ngay cho đơn vị tiếp nhận máu để được
                hỗ trợ về mặt y khoa.
              </li>
            </ul>
          </Item>
          <Item title="17. Có dấu hiệu sưng, phù nơi vết chích?">
            <ul>
              <li>
                Sau khi hiến máu, nếu bạn có các dấu hiệu sưng, phù nơi vết
                chích. Xin đừng quá lo lắng, hãy chườm lạnh ngay vị trí sưng đó
                và theo dõi các dấu hiệu trên, nếu không giảm sau 24 giờ hãy
                liên hệ lại cho đơn vị tiếp nhận máu để được hỗ trợ.
              </li>
            </ul>
          </Item>
        </div>
      </div>
    </div>
  );
};
