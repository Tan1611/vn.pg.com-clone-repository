import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div
        style={{
          display: "gird",
          margin: "auto",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src="https://images.ctfassets.net/ywowj8d94i8y/2kOlRVd5O4Scg60AMsOs4S/ab42241f9c8bb7f36e7fa6db1a70c5ce/gender-equality-inclusive-environment-inside-p-and-g-illustration.svg"
          alt=""
        />
      </div>

      <br />
      <h2 className="genderEquality-title">
        Môi trường hòa nhập bên trong P&G
      </h2>

      <p className="genderEquality-content">
        Chúng tôi cam kết tạo ra một nền văn hóa nơi mọi người đều được đối xử
        bình đẳng và có thể đóng góp tối đa. Đó là lý do tại sao đạt được tỷ lệ
        cân bằng giới tính 50/50 trong tất cả các bộ phận của công ty chúng tôi
        là ưu tiên hàng đầu.
      </p>
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <div
            style={{ width: "70vw" }}
            className="initiativeGenderEqualityS5"
            key={index}
          >
            <div className="slide-item">
              <img
                src={slide.imgSrc}
                alt={slide.title}
                className="imageGenderEqualityS5"
              />
              <h3 className="titleGenderEqualityS5">{slide.title}</h3>
              <p className="descriptionGenderEqualityS5">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Section5;
