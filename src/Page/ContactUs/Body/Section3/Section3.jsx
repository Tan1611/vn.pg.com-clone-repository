import React from "react";
import "./style.css";
import GoogleMapReact from "google-map-react";
function Section3() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 10.781371278756973,
      lng: 106.70051941376319,
    },
    zoom: 11,
  };

  return (
    <div>
      <h1 className="ContactS3-title">Địa điểm trên toàn thế giới</h1>
      <div class="styled-select">
        <select name="country" id="country">
          <option value="vietnam">Vietnam</option>
          <option value="china">China</option>
          <option value="malaysia">Malaysia</option>
          <option value="usa">USA</option>
        </select>
      </div>
      <p className="ContactS3-content">
        11/F, MPlaza, 39 Le Duan Blvd. District 1, Ho Chi Minh City Vietnam
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://vn.pg.com/assets/icons/icon-phone.svg"
          alt=""
          width={24}
        />
        <p
          style={{
            fontSize: "16px",
            fontWeight: "700",
            color: "#003da5",
            textDecoration: "underline",
          }}
        >
          +84-3521-4555
        </p>
      </div>
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={10.781371278756973}
            lng={106.70051941376319}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Section3;
