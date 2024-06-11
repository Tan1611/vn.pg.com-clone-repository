import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Section4() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const initiatives = [
    {
      title: "Giới thiệu thêm nhiều phụ nữ và bé gái đến với ngành STEM",
      description:
        "P&G luôn dành sự quan tâm đặc biệt cho ngành STEM vì chúng tôi cần đến đội ngũ nhân lực STEM lành nghề, như kỹ sư, nhà khoa học, chuyên gia công nghệ thông tin, nhà cải cách, để thúc đẩy quá trình đổi mới nhờ vào công nghệ, từ đó tăng thêm sức mạnh cho các thương hiệu của mình và phát triển việc kinh doanh. Chúng tôi đang nỗ lực để mọi bé gái, dù có xuất thân thế nào, đều được trải nghiệm STEM đúng nghĩa.",
      image:
        "https://images.ctfassets.net/ywowj8d94i8y/4SAEn6XjQiTR4YjKpa4dPc/45850c2aba0eaae22581e5fb66751a26/Getting_More_Women___Girls_into_STEM.png?fm=webp",
      seemore: "xem thêm",
    },
    {
      title: "Always Cho các cô gái đến trường",
      description:
        "Ở một số quốc gia, một kỳ kinh nguyệt có thể khiến các cô gái phải nghỉ học hoặc bỏ học hoàn toàn. Năm 2006, Always bắt đầu cung cấp cho các cô gái châu Phi sự giáo dục về tuổi dậy thì và băng vệ sinh. Kể từ đó, 78% trường học cho thấy sự cải thiện trong tỷ lệ đi học.",
      image:
        "https://images.ctfassets.net/ywowj8d94i8y/6dBQeeVoFaySCkWaSUaqsQ/e94bf81a3185aa82a3bbae4fbdbbaaec/pg-female-education.jpg?fm=webp",
    },
    {
      title: "Cơ hội giáo dục cho trẻ em kém may mắn",
      description:
        "P&G Ấn Độ đã cung cấp cho các cô gái quyền tiếp cận giáo dục thông qua chương trình Shiksha của mình, tăng khả năng đọc và viết từ 20% lên 70%.",
      image:
        "https://images.ctfassets.net/ywowj8d94i8y/1yvkcCHrZOmy0QGMUaguys/2d5782a5040737f8ecd5b99f46737da9/photo-gender-equality-education-access.jpg?fm=webp",
    },
    {
      title: "Kết nối các nhà lãnh đạo nữ với các doanh nhân địa phương",
      description:
        "Hợp tác với WEConnect International, các nhà lãnh đạo của chúng tôi kết nối với các nữ doanh nhân địa phương trên toàn thế giới — chia sẻ chiến thuật của họ để phát triển các chiến lược và kỹ năng kinh doanh.",
      image:
        "https://images.ctfassets.net/ywowj8d94i8y/2Iis9wfnW8IWocwKgIqEC6/ec07b4be715b680cf6200c0a61a36fdf/pg-female-work-equality.jpg?fm=webp",
    },
  ];

  return (
    <div style={{ padding: "50px 0px" }}>
      <img
        src="https://images.ctfassets.net/ywowj8d94i8y/1I7Qo6oKw0Mgymi8MsYuI2/43dff6a9cb29b634465889f3446bdcca/gender-equality-education-and-economic-opportunities-illustration.svg"
        alt=""
        style={{ display: "block", margin: "auto" }}
      />
      <p className="genderEqualityS4-title">Cơ hội giáo dục & kinh tế </p>
      <p className="genderEqualityS4-content">
        Mọi cô gái đều xứng đáng được tiếp cận với giáo dục. Và là một người phụ
        nữ, cô ấy xứng đáng được sống với tiềm năng tối đa của mình. Bình đẳng
        kinh tế chỉ có thể làm cho thế giới của chúng ta mạnh mẽ hơn. Thông qua
        các chương trình tác động đến công ty và thương hiệu của chúng tôi,
        chúng tôi giúp thực hiện bình đẳng giới.
      </p>
      <div className="containerGenderEqualityS4">
        {initiatives.map((initiative, index) => (
          <div key={index} className="initiativeGenderEqualityS4">
            <img
              src={initiative.image}
              alt={initiative.title}
              className="imageGenderEqualityS4"
            />
            <h3 className="titleGenderEqualityS4">{initiative.title}</h3>
            <p className="descriptionGenderEqualityS4">
              {initiative.description}
            </p>
            {initiative.seemore && (
              <p className="seeMoreGenderEqualityS4">{initiative.seemore}</p>
            )}
          </div>
        ))}
      </div>
      <div className="containerGenderEqualityS4-Mb">
        <Slider {...settings}>
          {initiatives.map((initiative, index) => (
            <div key={index} className="initiativeGenderEqualityS4">
              <img
                src={initiative.image}
                alt={initiative.title}
                className="imageGenderEqualityS4"
                style={{ display: "block", margin: "auto" }}
              />
              <h3 className="titleGenderEqualityS4">{initiative.title}</h3>
              <p className="descriptionGenderEqualityS4">
                {initiative.description}
              </p>
              {initiative.seemore && (
                <p className="seeMoreGenderEqualityS4">{initiative.seemore}</p>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Section4;
