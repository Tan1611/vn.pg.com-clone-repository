import React from "react";
import "./Section1.css";

function Section1() {
  return (
    <div className="RenewebS1-container">
      <video
        className="RenewebS1-video"
        src="//videos.ctfassets.net/ywowj8d94i8y/3ALv8867OhLEP27gvxe1Eh/0a2f8e082d39acb6e71fc01bd331f82a/4.11.22_Innovation_Evergreen_Video_v3.mp4"
        autoPlay
        loop
        muted
      />
      <div className="RenewebS1-videoOverlay"></div>

      <div className="RenewebS1-overlay" />
      <img
        className="RenewebS1-logo"
        src="https://images.ctfassets.net/ywowj8d94i8y/2yhJRApjOzqg1hQkoJfm9P/77d84bc477ba9f991eee4c4fcef27a95/Innovation_Orange.svg"
        alt=""
      />
      <span className="RenewebS1-title">Đổi mới.</span>
      <span className="RenewebS1-subtitle">
        Tại P&G, đổi mới là điều chúng tôi am tường nhất. Chúng tôi yêu thích
        việc tìm ra giải pháp cho những vấn đề thường ngày mà người tiêu dùng
        gặp phải. Với trái tim nhiệt huyết của một công ty khởi nghiệp và nguồn
        lực của một tập đoàn toàn cầu, chúng tôi luôn tìm cách để đổi mới từng
        khía cạnh trong hoạt động kinh doanh của mình. Trong quá trình đổi mới,
        chúng tôi tìm cảm hứng ở con người cũng như những nhu cầu, giá trị, ước
        muốn và niềm đam mê của họ.
      </span>
    </div>
  );
}

export default Section1;
