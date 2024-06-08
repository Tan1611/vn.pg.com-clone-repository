import React from "react";
import { DownOutlined } from "@ant-design/icons";
import "./style.css";

function Section2() {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h1 className="genderEqualityS2-title">Bình đẳng giới.</h1>
      <h1 className="genderEqualityS2-title2">#WeSeeEqual</h1>
      <p className="genderEqualityS2-content">
        Chúng tôi mong muốn xây dựng một thế giới tốt đẹp hơn cho mọi người, dù
        họ có thuộc P&G hay không. Một thế giới không còn định kiến giới tính,
        nơi mọi cá nhân đều có tiếng nói và được nhìn nhận một cách công bằng.
        Một thế giới nơi mọi người đều quan niệm tất cả bình đẳng. Khi chúng ta
        làm được điều này, kinh tế sẽ phát triển, các cộng đồng sẽ lớn mạnh hơn,
        doanh nghiệp tăng trưởng và thế giới sẽ là trở nên tốt đẹp hơn cho tất
        cả mọi người.
        <br />
        <br />
        Tại P&G, chúng tôi tập trung vào ba lĩnh vực mà mình có thể tạo ra ảnh
        hưởng lớn nhất. Thứ nhất, chúng tôi tận dụng tiếng nói mạnh mẽ của mình
        trong lĩnh vực quảng cáo và truyền thông để giải quyết vấn đề thiên kiến
        giới. Thông qua những chương trình của doanh nghiệp và các thương hiệu
        cùng với hoạt động vận động chính sách, chúng tôi cũng gỡ bỏ rào cản
        ngăn các bé gái tiếp cận giáo dục và phụ nữ tiếp cận các cơ hội kinh tế.
        Đồng thời, chúng tôi tạo ra một môi trường hòa nhập và bình đẳng giới
        tính ngay trong P&G, cũng như vận động bình đẳng giới và bình đẳng nhiều
        yếu tố tại chỗ làm việc ở mọi nơi. Chỉ có như vậy, mọi người mới có thể
        đóng góp toàn bộ khả năng của mình. Trong mỗi lĩnh vực này, chúng tôi
        đều hợp tác với các tổ chức hoạt động mạnh mẽ và có chung cam kết với
        P&G để cùng kết hợp nguồn lực, con người, kỹ năng và tạo ra một tác động
        lớn lao hơn.
      </p>
      <h2 className="genderEqualityS2-title3">
        Chúng tôi tập trung vào ba lĩnh vực mà chúng tôi có thể tạo ra sự khác
        biệt đặc trưng. Nhấn vào đây để đến từng phần và tìm hiểu thêm.
      </h2>
      <div className="containerS2">
        <div className="itemS2">
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/6edV5MWfy8sOKEIGQE82YO/11c064fbdfbb20a8c8cd721b4322211b/advertising-icon.svg"
            alt=""
            width={102}
            height={80}
          />
          <p>Quảng cáo & truyền thông</p>
          <DownOutlined />
        </div>
        <div className="itemS2">
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/5k4sWM6HaEIemQGUASaYS2/80a1408f1de035b04a37bfdc1e96c297/education-icon.svg"
            alt=""
            width={105}
            height={80}
          />
          <p>Cơ hội giáo dục & kinh tế</p>
          <DownOutlined />
        </div>
        <div className="itemS2">
          <img
            src="https://images.ctfassets.net/ywowj8d94i8y/1R1xb45fNuykuWYEooOiQw/9f362ba908877376526da40ea3c1c840/inclusive-icon.svg"
            alt=""
            width={89}
            height={80}
          />
          <p>Môi trường hòa nhập bên trong P&G</p>
          <DownOutlined />
        </div>
      </div>
    </div>
  );
}

export default Section2;
