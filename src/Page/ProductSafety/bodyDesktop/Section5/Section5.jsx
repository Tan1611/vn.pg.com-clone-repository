import React from "react";
import "./style.css";
import { Col, Row } from "antd";

function Section5() {
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          color: "#003da5",
          fontSize: "32px",
          fontWeight: "700",
        }}
      >
        P&G hỗ trợ Save Ralph
      </p>
      <p
        style={{
          margin: "auto",
          textAlign: "center",
          fontSize: "16px",
          width: "50vw",
        }}
      >
        P&G hỗ trợ #SaveRalph, chiến dịch kêu gọi loại bỏ thử nghiệm mỹ phẩm
        trên động vật trên toàn cầu của Tổ chức Nhân đạo Quốc tế
      </p>
      <img
        src="https://images.ctfassets.net/ywowj8d94i8y/56ROYQNXM1BFnxD8Dk1pQ4/0da5a5698bcf5047547b7e6f7dba4f4f/RALPH_shot01_01_X1_02991__1_.jpg?fm=webp"
        alt=""
        style={{ margin: "auto", display: "flex", paddingTop: "50px" }}
      />
      <button class="btnSeeMore">
        <span class="btn-transition"></span>
        <span class="btn-label">
          <p>Tìm hiểu thêm </p>
          <i class="gg-arrow-top-right"></i>
        </span>
      </button>
      <h1
        style={{
          color: "#003da5 ",
          fontWeight: "700",
          fontSize: "40px",
          margin: " 70px 5vw",
        }}
      >
        Hãy xem chúng ta đang ở đâu hôm nay
      </h1>
      <Row>
        <Col span={8} style={{ position: "relative", textAlign: "center" }}>
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/F276sADRPX2sjVhDal86c/37c1af740cfbc2ba9da50879bb133a81/cross_link_cruelty_free_science.png?fm=webp"
            alt=""
            width={372}
            style={{ display: "block", margin: "0 auto" }}
          />
          <span
            className="btn-label"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              alignItems: "center",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            <p
              style={{
                color: "#ffff",
                fontSize: "18px",
                fontWeight: "700",
                width: "30vw",
              }}
            >
              Khoa học Bảo vệ Động vật của P&G
            </p>
            <i
              style={{
                color: "#ffff",
                fontSize: "18px",
                fontWeight: "700",
                margin: "auto",
              }}
              className="gg-arrow-right"
            ></i>
          </span>
        </Col>

        <Col span={8} style={{ position: "relative", textAlign: "center" }}>
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/F276sADRPX2sjVhDal86c/37c1af740cfbc2ba9da50879bb133a81/cross_link_cruelty_free_science.png?fm=webp"
            alt=""
            width={372}
            style={{ display: "block", margin: "0 auto" }}
          />
          <span
            className="btn-label"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              alignItems: "center",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            <p
              style={{
                color: "#ffff",
                fontSize: "18px",
                fontWeight: "700",
                width: "30vw",
              }}
            >
              Khoa học Bảo vệ Động vật của P&G
            </p>
            <i
              style={{
                color: "#ffff",
                fontSize: "18px",
                fontWeight: "700",
                margin: "auto",
              }}
              className="gg-arrow-right"
            ></i>
          </span>
        </Col>
        <Col span={8} style={{ position: "relative", textAlign: "center" }}>
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/F276sADRPX2sjVhDal86c/37c1af740cfbc2ba9da50879bb133a81/cross_link_cruelty_free_science.png?fm=webp"
            alt=""
            width={372}
            style={{ display: "block", margin: "0 auto" }}
          />
          <span
            className="btn-label"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              alignItems: "center",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            <p
              style={{
                color: "#ffff",
                fontSize: "18px",
                fontWeight: "700",
                width: "30vw",
              }}
            >
              Khoa học Bảo vệ Động vật của P&G
            </p>
            <i
              style={{
                color: "#ffff",
                fontSize: "18px",
                fontWeight: "700",
                margin: "auto",
              }}
              className="gg-arrow-right"
            ></i>
          </span>
        </Col>
      </Row>
    </div>
  );
}

export default Section5;
