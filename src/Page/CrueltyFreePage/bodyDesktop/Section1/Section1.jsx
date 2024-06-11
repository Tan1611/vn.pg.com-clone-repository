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
        src="https://images.ctfassets.net/ywowj8d94i8y/5jT9PhCGH6Jrrlf3j0Gc5l/24937e4b16580e26ace5ad6740704833/Hero_Cruelty_Free.jpg?fm=webp"
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
        src="https://images.ctfassets.net/ywowj8d94i8y/20MCzMBjp1I9UwBMb80sgq/1045a01cb95bd2787ed51b7c7167b3f4/Animal_Orange.svg"
        alt=""
      />
      <span
        style={{
          fontSize: "6rem",
          lineHeight: "1.1",
          fontWeight: "700",
          width: "80vw",
          position: "absolute",
          top: "12vw",
          left: "5vw",
          color: "#ffff",
          fontFamily: "Montserrat, Arial, sans-serif",
        }}
      >
        Cam kết của chúng tôi đối với chiến dịch #BeCrueltyFree.
      </span>
      <span
        style={{
          fontSize: "1rem",
          lineHeight: "1.6",
          fontWeight: "600",
          width: "30vw",
          position: "absolute",
          bottom: "5vw",
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
