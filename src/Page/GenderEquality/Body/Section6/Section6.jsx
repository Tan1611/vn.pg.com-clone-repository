import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Section6() {
  const logos = [
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Champions for Change",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Champions for Change",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Champions for Change",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Champions for Change",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Champions for Change",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Champions for Change",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Champions for Change",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Champions for Change",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Lean In Circle",
    },
    {
      src: "//images.ctfassets.net/oggad6svuzkv/7mkWunhjFYYSkaCuauiCGW/fd0b102403033d5b91997f417d3a0755/lean-in-circle-logo.png",
      alt: "Champions for Change",
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ padding: "100px 0px" }}>
      <h1 className="genderEqualityS6-title">Các đối tác của chúng tôi</h1>
      <p className="genderEqualityS6-content">
        Mỗi ngày, chúng tôi nỗ lực hướng tới một thế giới bình đẳng, nhưng điều
        đó không thể được thực hiện một mình. Để củng cố và gia tăng tác động
        của chúng tôi, chúng tôi hợp tác với các tổ chức có chung cam kết về
        bình đẳng giới.
      </p>
      <ul className="logo-grid">
        {logos.map((logo, index) => (
          <li className="logo-item" key={index}>
            <img src={logo.src} alt={logo.alt} className="logo-image" />
          </li>
        ))}
      </ul>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              className="logo-image"
              style={{ display: "block", margin: "auto", padding: "100px 0px" }}
            />
          </div>
        ))}
      </Slider>
      <h1 className="genderEqualityS6-title">
        Nhưng xin chờ một chút, vẫn còn nữa
      </h1>
      <p className="genderEqualityS6-content">
        Chúng tôi luôn có các chương trình song song. Để biết thông tin về các
        nỗ lực bình đẳng giới của chúng tôi, như khuyến khích sinh viên trên
        toàn thế giới theo đuổi STEM — hoặc để xem danh sách đầy đủ các đối tác
        của chúng tôi, hãy tải xuống BÁO CÁO CÔNG DÂN 2022 của chúng tôi.
      </p>
      <div className="genderEqualityS6-btn">
        <button class="btn_GenderEquality" style={{ justifyContent: "start" }}>
          <span class="btn_GenderEquality-transition"></span>
          <span class="btn_GenderEquality-label">
            <p>BÁO CÁO TRÁCH NHIỆM XÃ HỘI NĂM 2022</p>
          </span>
        </button>
        <button class="btn_GenderEquality" style={{ justifyContent: "start" }}>
          <span class="btn_GenderEquality-transition"></span>
          <span class="btn_GenderEquality-label">
            <p>TRÁCH NHIỆM XÃ HỘI CỦA P&G</p>
            <i class="gg-arrow-top-right"></i>
          </span>
        </button>
        <button class="btn_GenderEquality" style={{ justifyContent: "start" }}>
          <span class="btn_GenderEquality-transition"></span>
          <span class="btn_GenderEquality-label">
            <p>Các Báo cáo Công dân Trước đó </p>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Section6;
