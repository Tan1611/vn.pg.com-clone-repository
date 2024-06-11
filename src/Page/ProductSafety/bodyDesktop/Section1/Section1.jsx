import React from "react";

function Section1() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        maskImage:
          "radial-gradient(110% 12% at 50% 102%, transparent 50%, #fff 51%)",
      }}
    >
      <img
        src="https://images.ctfassets.net/ywowj8d94i8y/5MNCQNM0uAE7suKGkIFPyC/155d9853585f84675b758ac89d59fee0/1.5.23_Product_Safety_Image.jpg?fm=webp"
        alt=""
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(4, 25, 61, .95), rgba(4, 25, 61, .2) 71%)",
        }}
      />
      <img
        style={{ position: "absolute", top: "7vw", left: "5vw" }}
        src="https://images.ctfassets.net/ywowj8d94i8y/1SI038m6YWUZEWTWfQE8ok/5b214d2a62ff727b717c7cbafb8e67d7/Brands_Purple.svg"
        alt=""
      />
      <span
        style={{
          fontSize: "6rem",
          fontWeight: "700",
          width: "30vw",
          position: "absolute",
          top: "12vw",
          left: "5vw",
          color: "#ffff",
          fontFamily: "Montserrat, Arial, sans-serif",
        }}
      >
        An toàn sản phẩm
      </span>
      <span
        style={{
          fontSize: "20px",
          fontWeight: "500",
          width: "30vw",
          position: "absolute",
          top: "28vw",
          left: "5vw",
          color: "#ffff",
          fontFamily: "Montserrat, Arial, sans-serif",
        }}
      >
        Chúng tôi luôn tự đặt cho mình tiêu chuẩn cao nhất
      </span>
      <span
        style={{
          fontSize: "1rem",
          lineHeight: "1.6",
          width: "30vw",
          position: "absolute",
          bottom: "11vw",
          left: "5vw",
          color: "#ffff",
          fontFamily: "Montserrat, Arial, sans-serif",
        }}
      >
        Chúng tôi đang kêu gọi chấm dứt tất cả các thử nghiệm sản phẩm mỹ phẩm
        trên động vật trên toàn cầu và chúng tôi tự hào được hợp tác với Chiến
        dịch #BeCrueltyFree của Tổ chức Nhân đạo Quốc tế nhằm thúc đẩy tầm nhìn
        đó.
      </span>
    </div>
  );
}

export default Section1;
