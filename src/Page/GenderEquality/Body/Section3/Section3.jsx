import React from "react";
import { PlayCircleFilled } from "@ant-design/icons";
import "./style.css";
import { Col, Row } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Section3() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ background: "#f2f7ff", paddingBottom: "50px" }}>
      <img
        src="https://images.ctfassets.net/ywowj8d94i8y/14MHXnorc8mySQiSUeWIoq/18834b16cc9fba541b029541e69ed873/gender-equality-advertising-and-media.svg"
        alt=""
        style={{ paddingTop: "50px", margin: "auto", display: "block" }}
      />
      <p className="genderEqualityS3-title">Quảng cáo và truyền thông</p>
      <p className="genderEqualityS3-content">
        Nghiên cứu #SeeHer của Hiệp hội Quốc gia dành cho Nhà quảng cáo
        (Association of National Advertisers) cho thấy 40% phụ nữ cảm thấy họ bị
        mô tả không chính xác qua các dạng định kiến, vật thể hóa hay đơn giản
        hóa tính cách. Là một trong những nhà quảng cáo lớn nhất trên thế giới,
        chúng tôi tận dụng tiếng nói mạnh mẽ của mình để góp phần phá vỡ định
        kiến và thúc đẩy thay đổi.
      </p>

      <Row
        style={{ display: "flex", justifyContent: "center", gap: "20px" }}
        className="genderEqualityS3"
      >
        <Col span={12} className="containerContent">
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/6N7qmSgVEIYaCkKuaCyYyo/c309c59dd866c3c7df3eee649e1eaec9/share-the-load.jpg?fm=webp"
            alt="Product Safety Video Thumbnail"
            className="imageYTB"
          />

          <div className="iconPlay">
            <PlayCircleFilled className="genderEqualityS3-icon" />
          </div>
          <div>
            <p style={{ color: "#003da5", fontWeight: "600" }}>
              Ariel #Chiasẻgánhnặng
            </p>
            <p className="genderEqualityS3-content2">
              Ở Ấn Độ, 70 % trẻ em tin rằng một người phụ nữ có trách nhiệm về
              việc giặt giũ, một niềm tin bắt nguồn từ văn hóa của họ. Chất tẩy
              rửa hàng đầu của chúng tôi đã bắt đầu thay đổi xu hướng giới tính
              đó và khiến hơn 2 triệu người đàn ông ký đơn thỉnh nguyện để giúp
              đỡ việc nhà.
            </p>
          </div>
        </Col>
        <Col span={12} className="containerContent">
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/71bKJgNJUAOs0WgcyeCcwg/eefee7268acfd3dcc7d03fcbf9d924f8/make-it-fair.jpg?fm=webp"
            alt="Product Safety Video Thumbnail"
            className="imageYTB"
          />
          <div className="iconPlay">
            <PlayCircleFilled className="genderEqualityS3-icon" />
          </div>
          <div>
            <p style={{ color: "#003da5", fontWeight: "600" }}>
              Ariel #Chiasẻgánhnặng
            </p>
            <p className="genderEqualityS3-content2">
              Ở Ấn Độ, 70 % trẻ em tin rằng một người phụ nữ có trách nhiệm về
              việc giặt giũ, một niềm tin bắt nguồn từ văn hóa của họ. Chất tẩy
              rửa hàng đầu của chúng tôi đã bắt đầu thay đổi xu hướng giới tính
              đó và khiến hơn 2 triệu người đàn ông ký đơn thỉnh nguyện để giúp
              đỡ việc nhà.
            </p>
          </div>
        </Col>
      </Row>
      <Slider {...settings}></Slider>
      <Row
        style={{ display: "flex", justifyContent: "center", gap: "20px" }}
        className="genderEqualityS3-Mb"
      >
        <Col span={12} className="containerContent">
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/6N7qmSgVEIYaCkKuaCyYyo/c309c59dd866c3c7df3eee649e1eaec9/share-the-load.jpg?fm=webp"
            alt="Product Safety Video Thumbnail"
            className="imageYTB"
          />

          <div className="iconPlay">
            <PlayCircleFilled className="genderEqualityS3-icon" />
          </div>
          <div>
            <p style={{ color: "#003da5", fontWeight: "600" }}>
              Ariel #Chiasẻgánhnặng
            </p>
            <p className="genderEqualityS3-content2">
              Ở Ấn Độ, 70 % trẻ em tin rằng một người phụ nữ có trách nhiệm về
              việc giặt giũ, một niềm tin bắt nguồn từ văn hóa của họ. Chất tẩy
              rửa hàng đầu của chúng tôi đã bắt đầu thay đổi xu hướng giới tính
              đó và khiến hơn 2 triệu người đàn ông ký đơn thỉnh nguyện để giúp
              đỡ việc nhà.
            </p>
          </div>
        </Col>
        <Col span={12} className="containerContent">
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/71bKJgNJUAOs0WgcyeCcwg/eefee7268acfd3dcc7d03fcbf9d924f8/make-it-fair.jpg?fm=webp"
            alt="Product Safety Video Thumbnail"
            className="imageYTB"
          />
          <div className="iconPlay">
            <PlayCircleFilled className="genderEqualityS3-icon" />
          </div>
          <div>
            <p style={{ color: "#003da5", fontWeight: "600" }}>
              Ariel #Chiasẻgánhnặng
            </p>
            <p className="genderEqualityS3-content2">
              Ở Ấn Độ, 70 % trẻ em tin rằng một người phụ nữ có trách nhiệm về
              việc giặt giũ, một niềm tin bắt nguồn từ văn hóa của họ. Chất tẩy
              rửa hàng đầu của chúng tôi đã bắt đầu thay đổi xu hướng giới tính
              đó và khiến hơn 2 triệu người đàn ông ký đơn thỉnh nguyện để giúp
              đỡ việc nhà.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Section3;
