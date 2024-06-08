import React from "react";
import { PlayCircleFilled } from "@ant-design/icons";
import "./style.css";
import { Col, Row } from "antd";

function Section3() {
  return (
    <div style={{ background: "#f2f7ff", padding: "50px 0px" }}>
      <h1 className="PeopleWithDisabilitiesS3-title">Nhân viên</h1>
      <p className="PeopleWithDisabilities-content">
        Chúng tôi cam kết tôn trọng tính cá nhân và những đóng góp đặc biệt của
        đội ngũ nhân sự, cũng như đảm bảo rằng mỗi nhân viên đều có thể hoàn
        toàn là chính mình tại nơi làm việc. Chúng tôi nỗ lực tạo nên một môi
        trường làm việc hòa nhập cho toàn bộ nhân viên P&G thông qua các chương
        trình tuyển dụng và quản lý nhằm mở rộng đội ngũ nhân sự bằng cách tuyển
        dụng đa dạng và đảm bảo mọi nhân viên đều được sắp xếp phù hợp.
      </p>
      <Row className="PeopleWithDisabilitiesS3-Item1">
        <Col span={12}>
          <div className="PeopleWithDisabilities-imageWrapper">
            <img
              src="https://images.ctfassets.net/ywowj8d94i8y/Yw4ogZEx0Ikem12FrdRNW/f2df83a10b30652ef1c6966143d7821e/ScottVannice_circlecrop__1_.jpg__1_.png?fm=webp"
              alt=""
              className="PeopleWithDisabilities-itemImage"
            />
            <div className="PeopleWithDisabilities-overlay">
              <PlayCircleFilled className="PeopleWithDisabilities-playButton" />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <h1 className="PeopleWithDisabilitiesS3-Item1-title">
            Hòa nhập từ Ngày Đầu Tiên
          </h1>
          <p className="PeopleWithDisabilitiesS3-Item1-content">
            Scott Vannice, người dẫn dắt cộng đồng khiếm thính tại P&G, cũng đã
            hỗ trợ việc hợp tác với Đại học Gallaudet và Viện Công nghệ
            Rochester để tạo ra nguồn cung ứng nhân lực bao gồm cả các ứng viên
            khiếm thính. Qua chương trình này, đã có 2 nhân viên khiếm thính
            được tuyển dụng và 4 thực tập sinh khiếm thính tham gia Kỳ thực tập
            mùa hè 2020. Tìm hiểu thêm về #SigningEcosystem.
          </p>
          <button class="PeopleWithDisabilitiesS3-btnSeeMore">
            <span class="PeopleWithDisabilitiesS3-btn-transition"></span>
            <span class="PeopleWithDisabilitiesS3-btn-label">
              <p>Đọc thêm </p>
              <i class="gg-arrow-top-right"></i>
            </span>
          </button>
        </Col>
      </Row>
      <Row
        className="PeopleWithDisabilitiesS3-Item2"
        style={{ marginLeft: "5vw" }}
      >
        <Col span={12}>
          <h1 className="PeopleWithDisabilitiesS3-Item1-title">
            Cảm giác được hòa nhập
          </h1>
          <p className="PeopleWithDisabilitiesS3-Item2-content">
            Những nhân viên có trải nghiệm cá nhân về đa dạng thần kinh đang
            giúp chúng tôi tuyển dụng những người có các tình trạng đa dạng thần
            kinh như tự kỷ, rối loạn tăng động giảm chú ý (ADHD), chứng khó đọc,
            rối loạn phối hợp vận động. Chúng tôi đã triển khai các chương trình
            tại văn phòng P&G ở Vương quốc Anh, Boston, Costa Rica và Cincinnati
            để tìm hiểu cách thức Công ty có thể tuyển dụng nhóm nhân sự đầy
            nghị lực này cũng như khai thác kỹ năng giải quyết vấn đề độc đáo
            của ứng viên.
          </p>
          <p className="PeopleWithDisabilitiesS3-Item2-content">
            Tìm hiểu câu chuyện cá nhân của nhân viên P&G Danny Lakes về đa dạng
            thần kinh và các biện pháp hòa nhập tại nơi làm việc đã tác động đến
            cuộc đời anh ấy như thế nào.
          </p>
          <button class="PeopleWithDisabilitiesS3-btnSeeMore">
            <span class="PeopleWithDisabilitiesS3-btn-transition"></span>
            <span class="PeopleWithDisabilitiesS3-btn-label">
              <p>Đọc thêm </p>
              <i class="gg-arrow-top-right"></i>
            </span>
          </button>
        </Col>
        <Col span={12}>
          <div className="PeopleWithDisabilities-imageWrapper">
            <img
              src="https://images.ctfassets.net/ywowj8d94i8y/1LCBEjkYBpVmFhLpk5ObGg/4bf6fbe4c71e61b9fa30640e81a015a1/4.JPG__1_.png?fm=webp"
              alt=""
              className="PeopleWithDisabilities-itemImage"
              style={{ transition: "none", transform: "none" }}
            />
          </div>
        </Col>
      </Row>
      <p
        className="PeopleWithDisabilitiesS3-content-text"
        style={{ marginTop: "50px" }}
      >
        Chúng tôi nỗ lực đáp ứng nhu cầu của nhân viên P&G trong mọi khả năng
        bằng cách đưa các yếu tố đảm bảo sự hòa nhập và khả năng tiếp cận cả lý
        tính và kỹ thuật số vào nơi làm việc nhờ nguyên tắc Thiết kế phổ quát.
        Chúng tôi tích hợp phụ đề, tính năng tự động nhận diện giọng nói và
        thuyết minh âm thanh trong nhiều giải pháp phần mềm cũng như thiết lập
        Trung tâm hỗ trợ tiếp cận kỹ thuật số để mọi người đều có thể giao tiếp
        một cách bình đẳng.
      </p>
    </div>
  );
}

export default Section3;
