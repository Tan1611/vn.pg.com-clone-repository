import React from "react";
import "./style.css";
import { Col, Row } from "antd";
function Section1() {
  return (
    <div>
      <h1 className="ContactUsS1-title">Liên hệ với chúng tôi.</h1>
      <Row className="button-section">
        <Col span={4.5}></Col>
        <Col span={5} className="ContactUsS1-col">
          <p className="ContactUsS1-titleBtn">Nhãn hiệu & Sản phẩm</p>
          <button class="ContactUsS1-btnSeeMore">
            <span class="ContactUsS1-btn-transition"></span>
            <span class="ContactUsS1-btn-label">
              <p>Đến trang </p>
              <i class="gg-arrow-top-right"></i>
            </span>
          </button>
        </Col>
        <Col span={5} className="ContactUsS1-col">
          <p className="ContactUsS1-titleBtn">Nhà đầu tư</p>
          <p></p>
          <button class="ContactUsS1-btnSeeMore">
            <span class="ContactUsS1-btn-transition"></span>
            <span class="ContactUsS1-btn-label">
              <p>Đến trang </p>
              <i class="gg-arrow-top-right"></i>
            </span>
          </button>
        </Col>
        <Col span={5} className="ContactUsS1-col">
          <p className="ContactUsS1-titleBtn">Cơ hội việc làm ở P & G</p>
          <button class="ContactUsS1-btnSeeMore">
            <span class="ContactUsS1-btn-transition"></span>
            <span class="ContactUsS1-btn-label">
              <p>Đến trang </p>
              <i class="gg-arrow-top-right"></i>
            </span>
          </button>
        </Col>
        <Col span={4.5}></Col>
      </Row>
    </div>
  );
}

export default Section1;
