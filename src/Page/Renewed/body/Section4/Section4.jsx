import React from "react";
import "./style.css";
import { Col, Row } from "antd";
function Section4() {
  return (
    <div style={{ background: "rgb(242, 247, 255)" }}>
      <Row>
        <Col span={12} className="RenewedS4-Col1">
          <h2 className="RenewedS4-title">
            Con người là trung tâm của tất cả những gì chúng tôi làm
          </h2>
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/1m9sNz8ZiPaakmHc56Fgtq/b6812bb95e87e19bbd1f6e51aeb60c16/quote.svg"
            alt=""
          />
          <p className="RenewedS4-content">
            Chúng tôi yêu thích việc tìm ra giải pháp cho những vấn đề thường
            ngày mà người tiêu dùng gặp phải ở hiện tại và trong tương lai. Quá
            trình này bắt đầu bằng việc kết hợp hiểu biết sâu sắc về người tiêu
            dùng để tạo ra những sản phẩm vượt trội, không thể chối từ bằng khoa
            học và công nghệ tiên tiến nhất, có tác động đến cuộc sống hàng ngày
            của họ. Nhờ vậy, chúng tôi tạo ra giá trị cho mọi người.
          </p>
          <p className="RenewedS4-content2">Victor Aguilar</p>
          <p className="RenewedS4-content3">
            Giám đốc Nghiên cứu, Phát triển và Sáng tạo của P&G
          </p>
        </Col>
        <Col span={12} className="RenewedS4-Col2">
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/11FC56TtuGrwxi728ataBi/595c9f99aa3098d15a81cb7c9a656857/Group.svg"
            alt=""
            className="RenewedS4-image"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Section4;
