import React from "react";
import "./style.css";
import { Col, Row } from "antd";
import { PlayCircleFilled } from "@ant-design/icons";

const slideData = [
  {
    imgSrc:
      "https://images.ctfassets.net/ywowj8d94i8y/6NipTkptWIt0lXuIfXJ4aw/0c20b75d03fa336a57b11d4b196ed2f5/Busting_Workplace_Myths.jpg?fm=webp",
    title: "Những nam giới ủng hộ",
    description:
      "Chúng tôi hợp tác với Catalyst để cung cấp chương trình MARC™ (Đàn ông ủng hộ sự thay đổi thực sự), giúp gắn kết trái tim và tâm trí của nam giới với tư cách là đối tác toàn diện trong việc đạt được bình đẳng giới.",
  },
  {
    imgSrc:
      "https://images.ctfassets.net/ywowj8d94i8y/6NipTkptWIt0lXuIfXJ4aw/0c20b75d03fa336a57b11d4b196ed2f5/Busting_Workplace_Myths.jpg?fm=webp",
    title: "Phụ nữ lãnh đạo trong sản xuất",
    description:
      "Trong một khu vực có nền văn hóa truyền thống do nam giới thống trị, nhà máy ở Bangkok của chúng tôi tự hào đã đạt được tỷ lệ 70% phụ nữ trong đội ngũ lãnh đạo, 50% trong số đó là các bà mẹ đang làm việc.",
  },
  {
    imgSrc:
      "https://images.ctfassets.net/ywowj8d94i8y/6NipTkptWIt0lXuIfXJ4aw/0c20b75d03fa336a57b11d4b196ed2f5/Busting_Workplace_Myths.jpg?fm=webp",
    title: "Các nữ lãnh đạo tương lai",
    description:
      "Là một Tổ chức đối tác của Mạng lưới Nhà điều hành cấp cao thúc đẩy sự đa dạng (LEAD), chúng tôi phối hợp cùng các tập đoàn khác để chủ động thu hút, giữ chân và thúc đẩy phụ nữ phát triển trong ngành bán lẻ và hàng tiêu dùng.",
  },
  {
    imgSrc:
      "https://images.ctfassets.net/ywowj8d94i8y/6NipTkptWIt0lXuIfXJ4aw/0c20b75d03fa336a57b11d4b196ed2f5/Busting_Workplace_Myths.jpg?fm=webp",
    title: "Phá bỏ những quan niệm sai lầm ở nơi làm việc",
    description:
      "Kể từ Diễn đàn kinh tế thế giới năm 2018, triển lãm “quan niệm sai lầm và thực tế” của P&G đã làm sáng tỏ những quan niệm sai lầm ngăn cản phụ nữ được đại diện và thăng tiến công bằng ở nơi làm việc.",
  },
];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <i
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#003da5",
        position: "absolute",
        top: "50%",
        right: "2vw",
        width: "50px",
        zIndex: "3  ",
      }}
      onClick={onClick}
      class="gg-arrow-long-right"
    ></i>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <i
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#003da5",
        position: "absolute",
        top: "50%",
        left: "2vw",
        width: "50px",
        zIndex: "3  ",
      }}
      onClick={onClick}
      class="gg-arrow-long-left"
    ></i>
  );
}

function Section5() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Hiển thị 4 mục
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "50px 0", background: "#f2f7ff" }}>
      <h2 className="PeopleWithDisabilitiesS5-title">Cộng đồng và Đối tác</h2>

      <p className="PeopleWithDisabilities-content">
        Chúng tôi xây dựng những mối quan hệ hợp tác để mở rộng cơ hội cũng như
        tạo khả năng tiếp cận và hòa nhập, giúp có thêm nhiều người có thể phát
        triển trong những cộng đồng mà chúng tôi đang sinh sống và làm việc tại
        đó.
      </p>
      <p className="PeopleWithDisabilities-content">
        Để thể hiện cam kết không ngừng nghỉ của mình trong việc giúp người
        khuyết tật hòa nhập, chúng tôi đã tham gia The Valuable 500, một phong
        trào toàn cầu nhằm đưa vấn đề khuyết tật vào chương trình nghị sự của
        các nhà lãnh đạo doanh nghiệp. Là thành viên của The Valuable 500, chúng
        tôi sẽ tiếp tục:
      </p>
      <ul
        className="PeopleWithDisabilities-content"
        style={{ textAlign: "left", marginTop: "20px" }}
      >
        <li>
          đưa ra các chính sách và phương thức về cơ hội tiếp cận/điều chỉnh
          thích nghi tại nơi làm việc trên toàn cầu để đáp ứng nhu cầu của nhân
          viên với những khả năng đa dạng;
        </li>
        <li>
          mở rộng đội ngũ nhân sự bằng cách tuyển dụng, thuê và giữ chân những
          người có các khả năng đa dạng;
        </li>
        <li>
          hợp tác với các nhà lãnh đạo doanh nghiệp và tập đoàn để chủ động tạo
          ra các sản phẩm và dịch vụ dễ tiếp cận nhằm đáp ứng nhu cầu của người
          tiêu dùng khuyết tật.
        </li>
      </ul>
      <Row
        className="PeopleWithDisabilitiesS4-Item2"
        style={{ marginLeft: "5vw" }}
      >
        <Col span={12}>
          <h1 className="PeopleWithDisabilitiesS4-Item1-title">Be My Eyes</h1>
          <p className="PeopleWithDisabilitiesS4-Item1-content">
            Kết hợp với các đối tác từ thiện và phát sóng trong sự kiện cứu trợ
            người chịu ảnh hưởng của dịch COVID-19 mang tên Một thế giới: Cùng ở
            nhà (One World: Together At Home) của Global Citizen và Saving Our
            Selves của BET, chúng tôi hợp tác cùng Be My Eyes, một nền tảng đặc
            biệt giúp kết nối các tình nguyện viên với cộng đồng người khiếm thị
            và suy giảm thị lực để hỗ trợ họ trong cuộc sống hàng ngày. Các nhân
            viên của P&G đã tận tâm mô tả âm thanh trực tiếp cho các cá nhân.
            Nhờ vậy, người khiếm thị và suy giảm thị lực có thể theo dõi và
            thưởng thức những chương trình giải trí trên ứng dụng Be My Eyes.
            Các tình nguyện viên của P&G đã trực điện thoại và sẵn sàng mô tả
            mọi thứ người dùng muốn biết về sự kiện. Họ đọc thứ tự biểu diễn, hỗ
            trợ người dùng truy cập chương trình phát sóng và trả lời câu hỏi về
            những điều đang diễn ra trong chương trình.
          </p>
          <button class="PeopleWithDisabilitiesS5-btnSeeMore">
            <span class="PeopleWithDisabilitiesS5-btn-transition"></span>
            <span class="PeopleWithDisabilitiesS5-btn-label">
              <p>Đọc thêm </p>
              <i class="gg-arrow-top-right"></i>
            </span>
          </button>
        </Col>
        <Col span={12}>
          <div className="PeopleWithDisabilitiesS4-imageWrapper">
            <img
              src="https://images.ctfassets.net/ywowj8d94i8y/4OQbCv8g8hNQkmDOcDpBYQ/1061329343073ddfb4a922df8e07814f/Blind_user_-_Home_Screen_3.jpg.png?fm=webp"
              alt=""
              className="PeopleWithDisabilitiesS4-itemImage"
              style={{ transition: "none", transform: "none" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="PeopleWithDisabilitiesS4-Item1">
        <Col span={12}>
          <div className="PeopleWithDisabilitiesS4-imageWrapper">
            <img
              src="https://images.ctfassets.net/ywowj8d94i8y/vdG52gB6gOKz0qI4jrfz1/1a8904b9513e70477cdf6b0c61e72e0b/P_G_Logo_RGB.svg"
              alt=""
              className="PeopleWithDisabilitiesS4-itemImage"
            />
            <div className="PeopleWithDisabilitiesS4-overlay">
              <PlayCircleFilled className="PeopleWithDisabilitiesS4-playButton" />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <h1 className="PeopleWithDisabilitiesS4-Item1-title">
            Nhận ra tầm nhìn để vươn tay giúp đỡ
          </h1>
          <div className="PeopleWithDisabilitiesS4-Item1-content">
            Cam kết của chúng tôi đối với cộng đồng người khiếm thị và suy giảm
            thị lực ở Cincinnati đã kéo dài hơn 117 năm qua. Chúng tôi hợp tác
            với Trung tâm Clovernook cùng các đồng nghiệp và bạn bè tại BLV để
            vận chuyển sản phẩm tới các cộng đồng gặp khó khăn trong dịch
            COVID-19.
          </div>
          <button class="PeopleWithDisabilitiesS5-btnSeeMore">
            <span class="PeopleWithDisabilitiesS5-btn-transition"></span>
            <span class="PeopleWithDisabilitiesS5-btn-label">
              <p>Đọc thêm </p>
              <i class="gg-arrow-top-right"></i>
            </span>
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default Section5;
