import React, { useState } from "react";
import "./style.css";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

const data = [
  {
    year: "1837-1955",
    events: [
      {
        year: "1837",
        description: "William Procter & James Gamble thành lập P&G",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/1MaGz05wNjXTxqDn2uvwDD/a7a79cfe99ee3c9c6f0660cce589c473/Crest_toothpaste.png?fm=webp",
      },
      {
        year: "1879",
        description: "Phát triển xà phòng Ivory",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/3W4DqEL452SWs8psgb9nlK/0b3fd0299ead4bcc6bb6eb72bf182254/Portrait_of_Neil_McElroy.png?fm=webp",
      },
      {
        year: "1890",
        description:
          "P&G mở phòng thí nghiệm nghiên cứu và phát triển đầu tiên",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/5XFywuiXdifRsLPBtvZUZj/772a32fb7f53f75450448e539ae89035/Old_Tide_logo_image.png?fm=webp",
      },
      {
        year: "1904",
        description:
          "King C. Gillette đăng ký bằng sáng chế cho dao cạo râu an toàn",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/5b4c1GPtvO9XxPWL2KbZQ3/427ddab2280790e29ebeac40c16982f9/Historic_image_of_P_G_performing_first_consumer_research.png?fm=webp",
      },
      {
        year: "1837",
        description: "William Procter & James Gamble thành lập P&G",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/1MaGz05wNjXTxqDn2uvwDD/a7a79cfe99ee3c9c6f0660cce589c473/Crest_toothpaste.png?fm=webp",
      },
      {
        year: "1879",
        description: "Phát triển xà phòng Ivory",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/3W4DqEL452SWs8psgb9nlK/0b3fd0299ead4bcc6bb6eb72bf182254/Portrait_of_Neil_McElroy.png?fm=webp",
      },
      {
        year: "1890",
        description:
          "P&G mở phòng thí nghiệm nghiên cứu và phát triển đầu tiên",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/5XFywuiXdifRsLPBtvZUZj/772a32fb7f53f75450448e539ae89035/Old_Tide_logo_image.png?fm=webp",
      },
    ],
  },
  {
    year: "1956-1975",
    events: [
      {
        year: "1837",
        description: "William Procter & James Gamble thành lập P&G",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/1MaGz05wNjXTxqDn2uvwDD/a7a79cfe99ee3c9c6f0660cce589c473/Crest_toothpaste.png?fm=webp",
      },
      {
        year: "1879",
        description: "Phát triển xà phòng Ivory",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/3W4DqEL452SWs8psgb9nlK/0b3fd0299ead4bcc6bb6eb72bf182254/Portrait_of_Neil_McElroy.png?fm=webp",
      },
      {
        year: "1890",
        description:
          "P&G mở phòng thí nghiệm nghiên cứu và phát triển đầu tiên",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/5XFywuiXdifRsLPBtvZUZj/772a32fb7f53f75450448e539ae89035/Old_Tide_logo_image.png?fm=webp",
      },
      {
        year: "1837",
        description: "William Procter & James Gamble thành lập P&G",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/1MaGz05wNjXTxqDn2uvwDD/a7a79cfe99ee3c9c6f0660cce589c473/Crest_toothpaste.png?fm=webp",
      },
      {
        year: "1879",
        description: "Phát triển xà phòng Ivory",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/3W4DqEL452SWs8psgb9nlK/0b3fd0299ead4bcc6bb6eb72bf182254/Portrait_of_Neil_McElroy.png?fm=webp",
      },
      {
        year: "1890",
        description:
          "P&G mở phòng thí nghiệm nghiên cứu và phát triển đầu tiên",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/5XFywuiXdifRsLPBtvZUZj/772a32fb7f53f75450448e539ae89035/Old_Tide_logo_image.png?fm=webp",
      },
      {
        year: "1837",
        description: "William Procter & James Gamble thành lập P&G",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/1MaGz05wNjXTxqDn2uvwDD/a7a79cfe99ee3c9c6f0660cce589c473/Crest_toothpaste.png?fm=webp",
      },
      {
        year: "1879",
        description: "Phát triển xà phòng Ivory",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/3W4DqEL452SWs8psgb9nlK/0b3fd0299ead4bcc6bb6eb72bf182254/Portrait_of_Neil_McElroy.png?fm=webp",
      },
      {
        year: "1890",
        description:
          "P&G mở phòng thí nghiệm nghiên cứu và phát triển đầu tiên",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/5XFywuiXdifRsLPBtvZUZj/772a32fb7f53f75450448e539ae89035/Old_Tide_logo_image.png?fm=webp",
      },
    ],
  },
  {
    year: "1976-2000",
    events: [
      {
        year: "1837",
        description: "William Procter & James Gamble thành lập P&G",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/1MaGz05wNjXTxqDn2uvwDD/a7a79cfe99ee3c9c6f0660cce589c473/Crest_toothpaste.png?fm=webp",
      },
      {
        year: "1879",
        description: "Phát triển xà phòng Ivory",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/3W4DqEL452SWs8psgb9nlK/0b3fd0299ead4bcc6bb6eb72bf182254/Portrait_of_Neil_McElroy.png?fm=webp",
      },
      {
        year: "1890",
        description:
          "P&G mở phòng thí nghiệm nghiên cứu và phát triển đầu tiên",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/5XFywuiXdifRsLPBtvZUZj/772a32fb7f53f75450448e539ae89035/Old_Tide_logo_image.png?fm=webp",
      },
      {
        year: "1837",
        description: "William Procter & James Gamble thành lập P&G",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/1MaGz05wNjXTxqDn2uvwDD/a7a79cfe99ee3c9c6f0660cce589c473/Crest_toothpaste.png?fm=webp",
      },
      {
        year: "1879",
        description: "Phát triển xà phòng Ivory",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/3W4DqEL452SWs8psgb9nlK/0b3fd0299ead4bcc6bb6eb72bf182254/Portrait_of_Neil_McElroy.png?fm=webp",
      },
      {
        year: "1890",
        description:
          "P&G mở phòng thí nghiệm nghiên cứu và phát triển đầu tiên",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/5XFywuiXdifRsLPBtvZUZj/772a32fb7f53f75450448e539ae89035/Old_Tide_logo_image.png?fm=webp",
      },
      {
        year: "1837",
        description: "William Procter & James Gamble thành lập P&G",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/1MaGz05wNjXTxqDn2uvwDD/a7a79cfe99ee3c9c6f0660cce589c473/Crest_toothpaste.png?fm=webp",
      },
      {
        year: "1879",
        description: "Phát triển xà phòng Ivory",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/3W4DqEL452SWs8psgb9nlK/0b3fd0299ead4bcc6bb6eb72bf182254/Portrait_of_Neil_McElroy.png?fm=webp",
      },
      {
        year: "1890",
        description:
          "P&G mở phòng thí nghiệm nghiên cứu và phát triển đầu tiên",
        image:
          "https://images.ctfassets.net/ywowj8d94i8y/5XFywuiXdifRsLPBtvZUZj/772a32fb7f53f75450448e539ae89035/Old_Tide_logo_image.png?fm=webp",
      },
    ],
  },
];

const Section3 = () => {
  return (
    <div className="RenewedS3-container">
      <h1 className="RenewedS3-title">Những sự kiện đổi mới trong lịch sử</h1>
      {data.map((section, sectionIdx) => (
        <ExpandableSection key={sectionIdx} section={section} />
      ))}
    </div>
  );
};

const ExpandableSection = ({ section }) => {
  const [expanded, setExpanded] = useState(false);
  const [hoveredImage, setHoveredImage] = useState("");

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage("");
  };

  return (
    <div>
      <div className="RenewedS3">
        <div className="RenewedS3-item" onClick={toggleExpand}>
          {section.year}
          {expanded ? (
            <UpOutlined className="RenewedS3-icon" />
          ) : (
            <DownOutlined className="RenewedS3-icon" />
          )}
        </div>
        {expanded && (
          <Row>
            <Col span={12}>
              <div className="timeline-content">
                {section.events.map((event, idx) => (
                  <div
                    key={idx}
                    className="timeline-event"
                    onMouseEnter={() => handleMouseEnter(event.image)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <h4>{event.year}</h4>
                    <p>{event.description}</p>
                  </div>
                ))}
              </div>
            </Col>
            <Col span={12}>
              <img
                src={hoveredImage || section.events[0].image}
                alt="Event related"
                className="RenewedS3-timeline-image"
              />
            </Col>
          </Row>
        )}
      </div>
      <div className="RenewedS3Mb">
        <div className="RenewedS3Mb-item" onClick={toggleExpand}>
          {section.year}
          {expanded ? (
            <UpOutlined className="RenewedS3Mb-icon" />
          ) : (
            <DownOutlined className="RenewedS3Mb-icon" />
          )}
        </div>
        {expanded && (
          <Row>
            <Col span={24}>
              <div className="timelineMb-content">
                {section.events.map((event, idx) => (
                  <div
                    key={idx}
                    className="timelineMb-event"
                    onMouseEnter={() => handleMouseEnter(event.image)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <h4>{event.year}</h4>
                    <p>{event.description}</p>
                    <img
                      src={event.image}
                      alt="Event related"
                      className="RenewedS3Mb-timeline-image"
                    />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default Section3;
