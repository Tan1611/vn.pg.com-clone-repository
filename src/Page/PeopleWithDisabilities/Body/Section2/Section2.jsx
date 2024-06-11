import React from "react";
import { DownOutlined } from "@ant-design/icons";
import "./style.css";

function Section2() {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h1 className="PeopleWithDisabilitiesS2-title">NGƯỜI KHUYẾT TẬT</h1>

      <p className="PeopleWithDisabilitiesS2-content">
        Chúng tôi cam kết tạo ra một thế giới hòa nhập hơn dành cho mọi người cả
        trong và ngoài công ty, trong đó bao gồm những người mang khiếm khuyết
        lâu dài về thể chất lẫn tâm thần. Chúng tôi nhận thức được trách nhiệm
        của mình trong việc thúc đẩy sự thay đổi dành cho nhân viên, với các
        thương hiệu của công ty, thông qua đối tác và trong các cộng đồng nơi
        chúng tôi hoạt động. Chúng tôi nhận ra cơ hội phát triển kinh doanh khi
        giúp mọi người dễ tiếp cận với công ty và các sản phẩm của chúng tôi.
        Chúng tôi đang đạt được tiến bộ mỗi ngày và hiểu rằng còn nhiều việc
        phải làm để công ty, thương hiệu và dịch vụ của mình phù hợp hơn nữa với
        người khuyết tật.
      </p>
      <h2 className="PeopleWithDisabilitiesS2-title3">
        Nhấp vào từng mục để tìm hiểu thêm.
      </h2>
      <div className="containerS2">
        <div className="itemS2">
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/707DFi6gMgwY8HLXDSbl9T/0af25a3d8345980c82db18b4613a43a6/Putting_people_first.png?fm=webp"
            alt=""
            width={102}
            height={80}
          />
          <p>Nhân viên</p>
          <DownOutlined />
        </div>
        <div className="itemS2">
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/74bV5UefRBTmr1HzVTimjz/7b3a658330b2743f9d482fcc111fcdfa/Innovative_products.png?fm=webp"
            alt=""
            width={105}
            height={80}
          />
          <p>Thương hiệu</p>
          <DownOutlined />
        </div>
        <div className="itemS2">
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/OrZGP3MnWbf5ALSg1LxXu/63907bd86ce8829c5329cb9073337d7f/society-icon.svg"
            alt=""
            width={89}
            height={80}
          />
          <p>Đối tác & cộng đồng</p>
          <DownOutlined />
        </div>
      </div>
    </div>
  );
}

export default Section2;
