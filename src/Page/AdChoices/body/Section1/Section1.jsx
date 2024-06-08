import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Section1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3s)
  };

  return (
    <div style={{ background: "rgba(246,246,246,1", paddingBottom: "50px" }}>
      <img
        className="AdChoicesS1-image"
        src="https://images.ctfassets.net/e41z9dqsyc70/POT5BdVgLsebfvgNBqMsL/4269817a75637571086bed1b70021bbf/Header.png?fm=avif&q=75"
        alt=""
      />
      <div>
        <img
          className="AdChoicesS1-iconTitle"
          src="https://images.ctfassets.net/e41z9dqsyc70/6fQlfPAwTHQCGvQhUr8jhX/a629d05a67bc1583d3cafd70c8477daf/MicrosoftTeams-image__7_.png?fm=avif&q=75"
          alt=""
        />
        <h1 className="AdChoicesS1-Title">
          ALL BRANDS, ONE POLICY TO PROTECT YOU.
        </h1>
      </div>
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="AdChoicesS1-Slide">
          <img
            src="https://images.ctfassets.net/e41z9dqsyc70/1qrhbK43y0ZD4I3HYBpqpV/226b8e662818d540bdc8f71a4ebb520f/Approach_icon__image_.png?fm=avif&q=75"
            alt="Slide 1"
            width={60}
            style={{ display: "block", margin: "auto" }}
          />
          <h2>Content you'll like.</h2>
          <p>
            We use data to help customize your experience with more products and
            offers relevant to you.
          </p>
        </div>
        {/* Slide 2 */}
        <div className="AdChoicesS1-Slide">
          <img
            src="https://images.ctfassets.net/e41z9dqsyc70/3kcalqiZYEKPfsLqhl5UzU/ac6dcaf430ca92d653a2f826a2bb7330/slice.png?fm=avif&q=75"
            alt="Slide 2"
            width={60}
            style={{ display: "block", margin: "auto" }}
          />
          <h2>Personalized for you.</h2>
          <p>
            Our services are tailored to your preferences, making sure you see
            what's most relevant.
          </p>
        </div>
        {/* Slide 3 */}
        <div className="AdChoicesS1-Slide">
          <img
            src="https://images.ctfassets.net/e41z9dqsyc70/5fdxE1leRqLtFnK3VOiRML/69e411d0f50e16d99589dfb59cecd046/icon-slice.png?fm=avif&q=75"
            alt="Slide 3"
            width={60}
            style={{ display: "block", margin: "auto" }}
          />
          <h2>Relevant and Timely.</h2>
          <p>
            We ensure you don't see the same messages repeatedly, offering a
            fresh experience each time.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Section1;
