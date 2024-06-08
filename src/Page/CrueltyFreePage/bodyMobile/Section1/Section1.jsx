import React from "react";
import "./style.css";

function Section1() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "140vh",
        paddingTop: "110px",
        maskImage:
          "radial-gradient(110% 12% at 50% 102%, transparent 50%, #fff 51%)",
      }}
    >
      <div class="zoom-container">
        <img
          src="https://images.ctfassets.net/ywowj8d94i8y/5jT9PhCGH6Jrrlf3j0Gc5l/24937e4b16580e26ace5ad6740704833/Hero_Cruelty_Free.jpg?fm=webp"
          alt=""
          style={{
            display: "block",
          }}
        />
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(1, 33, 105, .07), rgba(1, 32, 101, .4) 60%, #012169)",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
          }}
        ></div>
      </div>
      <div
        style={{
          background: "#012169",
          height: "87vh",
          width: "100vw",
          position: "absolute",
          bottom: "0px",
          zIndex: "2",
        }}
      >
        <img
          style={{ margin: "30px auto", display: "flex" }}
          src="https://images.ctfassets.net/ywowj8d94i8y/20MCzMBjp1I9UwBMb80sgq/1045a01cb95bd2787ed51b7c7167b3f4/Animal_Orange.svg"
          alt=""
        />
        <span
          style={{
            fontSize: "2.5rem",
            lineHeight: "1.3",
            fontWeight: "700",
            display: "flex",
            textAlign: "center",
            color: "#ffff",
            fontFamily: "Montserrat, Arial, sans-serif",
          }}
        >
          Cam kết của chúng tôi đối với chiến dịch #BeCrueltyFree.
        </span>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            fontWeight: "500",
            display: "flex",
            textAlign: "center",
            color: "#ffff",
            fontFamily: "Montserrat, Arial, sans-serif",
            paddingBottom: "100px",
          }}
        >
          Chúng tôi đang kêu gọi chấm dứt tất cả các thử nghiệm sản phẩm mỹ phẩm
          trên động vật trên toàn cầu và chúng tôi tự hào được hợp tác với Chiến
          dịch #BeCrueltyFree của Tổ chức Nhân đạo Quốc tế nhằm thúc đẩy tầm
          nhìn đó.
        </p>
      </div>
    </div>
  );
}

export default Section1;
