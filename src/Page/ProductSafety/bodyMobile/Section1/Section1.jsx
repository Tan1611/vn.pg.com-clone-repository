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
          src="https://images.ctfassets.net/ywowj8d94i8y/5MNCQNM0uAE7suKGkIFPyC/155d9853585f84675b758ac89d59fee0/1.5.23_Product_Safety_Image.jpg?fm=webp"
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
          src="https://images.ctfassets.net/ywowj8d94i8y/1SI038m6YWUZEWTWfQE8ok/5b214d2a62ff727b717c7cbafb8e67d7/Brands_Purple.svg"
          alt=""
        />
        <span
          style={{
            fontSize: "2.5rem",
            lineHeight: "1.3",
            fontWeight: "700",
            display: "flex",
            textAlign: "center",
            margin: "auto",
            width: "50vw",
            color: "#ffff",
            fontFamily: "Montserrat, Arial, sans-serif",
          }}
        >
          An toàn sản phẩm
        </span>
        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.3",
            fontWeight: "700",
            display: "flex",
            textAlign: "center",
            margin: "auto",
            width: "90vw",
            color: "#ffff",
            fontFamily: "Montserrat, Arial, sans-serif",
          }}
        >
          Chúng tôi luôn tự đặt cho mình tiêu chuẩn cao nhất
        </p>
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
          Trong hơn 185 năm, sự an toàn của bạn và sự an toàn của thế giới quanh
          bạn là tôn chỉ của những gì chúng tôi làm. Đó là lý do tại sao chúng
          tôi cần một đội ngũ hơn 500 nhà khoa học và chuyên gia với một quy
          trình an toàn và nghiêm ngặt để phân tích mọi thành phần trước khi xem
          xét đưa vào một trong những sản phẩm của chúng tôi.
        </p>
      </div>
    </div>
  );
}

export default Section1;
