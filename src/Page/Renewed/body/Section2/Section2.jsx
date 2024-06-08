// src/Section2.js
import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Section2() {
  const slides = [
    {
      title: "Connect + Develop",
      description:
        "Các trung tâm kiến thức đặc biệt với các chuyên gia hàng đầu phát hiện ra các công nghệ mới và những khả năng tiên tiến, dựa trên nhu cầu của người tiêu dùng ở hiện tại và trong tương lai. Từ đó, những hiểu biết mới mẻ được những chuyên gia đa lĩnh vực diễn giải, được xác thực bằng các sự thật về con người dựa trên khoa học nhận thức và nhân loại học. Cuối cùng, những hiểu biết ấy được các nhà khoa học, nhà thiết kế và kỹ sư của chúng tôi khai thác để cải biến hiện trạng theo khía cạnh xây dựng.",
      image:
        "https://images.ctfassets.net/ywowj8d94i8y/2l7MovIxFC9SfJKMjCrUCX/2349839fdb8aa275dec60f88eb0379cd/Connect___Develop.jpg?fm=webp",
    },
    {
      title: "P&G Ventures",
      description:
        "Trước tiên, chúng tôi xác định những vấn đề lớn mà hiện người tiêu dùng gặp phải nhưng chưa được giải quyết...",
      image:
        "https://images.ctfassets.net/ywowj8d94i8y/2l7MovIxFC9SfJKMjCrUCX/2349839fdb8aa275dec60f88eb0379cd/Connect___Develop.jpg?fm=webp",
    },
    {
      title: "P&G Ventures",
      description:
        "Trước tiên, chúng tôi xác định những vấn đề lớn mà hiện người tiêu dùng gặp phải nhưng chưa được giải quyết...",
      image:
        "https://images.ctfassets.net/ywowj8d94i8y/2l7MovIxFC9SfJKMjCrUCX/2349839fdb8aa275dec60f88eb0379cd/Connect___Develop.jpg?fm=webp",
    },
    {
      title: "P&G Ventures",
      description:
        "Trước tiên, chúng tôi xác định những vấn đề lớn mà hiện người tiêu dùng gặp phải nhưng chưa được giải quyết...",
      image:
        "https://images.ctfassets.net/ywowj8d94i8y/2l7MovIxFC9SfJKMjCrUCX/2349839fdb8aa275dec60f88eb0379cd/Connect___Develop.jpg?fm=webp",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="RenewedS2-title">Đổi mới theo cách của chúng tôi</h1>
      <p className="RenewedS2-content">
        Điều gì sẽ xảy ra khi bạn đưa tinh thần khởi nghiệp vào một tập đoàn
        toàn cầu? Điều này sẽ mở ra vô vàn cách để đổi mới từng khía cạnh của
        hoạt động kinh doanh.
      </p>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="RenewedS2-slide" style={{ margin: "auto" }}>
              <img src={slide.image} alt={slide.title} className="RenewedS2-imageSlide"/>
              <div className="RenewedS2-slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
            <div className="RenewedS2-slide2" style={{ margin: "auto" }}>
              <p className="RenewedS2-view-more">Xem thêm</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Section2;
