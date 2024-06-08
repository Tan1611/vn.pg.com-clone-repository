import { Col, Row } from "antd";
import React from "react";
import "./style.css";
import { PlayCircleFilled } from "@ant-design/icons";
function Section3() {
  return (
    <div style={{ background: "#f2f7ff" }}>
      <p
        style={{
          padding: "100px 0px",
          fontSize: "16px",
          fontWeight: "500",
          marginLeft: "5vw",
        }}
      >
        Xem để tìm hiểu thêm về cách các nhà khoa học của chúng tôi tạo ra các
        sản phẩm an toàn cho bạn.
      </p>
      <div class="containerContent">
        <img
          src="https://images.ctfassets.net/ywowj8d94i8y/6EZnUNs3Icy4mEqSWUeMcK/523cc152b5e37f051f38ecd5a9f74cff/product-safety-video-thumbnail.jpg?fm=webp"
          alt=""
          class="imageYTB"
        />
        <div class="iconPlay">
          <PlayCircleFilled style={{ fontSize: "100px" }} />
        </div>
      </div>
      <Row style={{ marginBottom: "50px", marginTop: "200px" }}>
        <Col span={14}>
          <p
            style={{
              width: "50vw",
              lineHeight: "1.1",
              color: "#003da5",
              fontSize: "30px",
              fontWeight: "700",
              fontFamily: "Montserrat, Arial, sans-serif",
              margin: "5vw 5vw 0vw 5vw",
            }}
          >
            Thành phần
          </p>
          <p
            style={{
              fontSize: "16px",
              marginLeft: "5vw",
              width: "40vw",
              lineHeight: "1.6",
              fontStyle: "revert",
              fontFamily: "Montserrat, Arial, sans-serif",
            }}
          >
            An toàn sản phẩm tiêu dùng bắt đầu với các nguyên liệu. Chúng tôi
            hiểu rằng bạn có thể có câu hỏi và mối quan tâm về những nguyên liệu
            cụ thể. Tại đây, bạn sẽ tìm thấy nhiều chi tiết hơn về các câu hỏi
            phổ biến mà chúng tôi nhận được liên quan đến các thành phần sản
            phẩm mà chúng tôi chọn và chúng tôi chủ động không sử dụng.
          </p>
          <button class="btnProductSafety" style={{ justifyContent: "start" }}>
            <span class="btn-transition"></span>
            <span class="btn-label">
              <p>Xem nguyên liệu của chúng tôi </p>
              <i class="gg-arrow-top-right"></i>
            </span>
          </button>
        </Col>
        <Col
          span={10}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/19PMsqHTqOtQJmZxhwygma/59c93ee6a49d2101e03b4267f89cdce9/1.11.23_Ingredients_Page_Key_Image_Option_4.png?fm=webp"
            alt="Troy Seidle"
            style={{ borderRadius: "50%", width: "35vw" }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Section3;
