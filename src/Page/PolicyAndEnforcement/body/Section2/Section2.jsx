import { Col, Row } from "antd";
import React from "react";
import "./style.css";
function Section2() {
  const items = [
    "Đạo đức & Trách nhiệm doanh nghiệp (Tiếng Anh)",
    "Chính sách nhân viên",
    "Nhân quyền",
    "Không phân biệt đối xử",
    "Tài liệu không xung đột",
    "Chất lượng môi trường",
    "Mục đích, giá trị & nguyên tắc",
    "An toàn & tuân thủ sản phẩm",
    "Truyền thông xã hội",
    "Phát biểu",
    "Kỳ vọng tìm nguồn cung ứng có trách nhiệm đối với các đối tác kinh doanh bên ngoài",
    "Nguyên tắc kinh doanh toàn cầu (WBCM)",
  ];
  return (
    <div className="containerSection2">
      {items.map((item, index) => (
        <div key={index} className="itemSection2">
          <span>{item}</span>
          <span className="arrowSection2">→</span>
        </div>
      ))}
    </div>
  );
}

export default Section2;
