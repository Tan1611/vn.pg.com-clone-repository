import React from "react";
import "./style.css";
import { Col, Row } from "antd";
function Section2() {
  return (
    <div>
      <div className="InvestorS2-app">
        <div className="InvestorS2-card">
          <h2 className="InvestorS2-card-title">Financial Releases</h2>
          <div className="InvestorS2-release">
            <h3>May 28, 2024</h3>
            <p>
              P&G to Webcast Presentation From the Deutsche Bank dbAccess Global
              Consumer Conference, June 4
            </p>
            <div style={{ display: "flex" }}>
              <a href="#">Release Details</a>
              <i class="gg-arrow-right"></i>
            </div>
          </div>
          <div className="InvestorS2-release">
            <h3>May 7, 2024</h3>
            <p>
              P&G to Webcast Presentation at the Goldman Sachs Global Staples
              Forum, May 14
            </p>
            <div style={{ display: "flex" }}>
              <a href="#">Release Details</a>
              <i class="gg-arrow-right"></i>
            </div>
          </div>
          <div className="InvestorS2-release">
            <h3>April 19, 2024</h3>
            <p>P&G Announces Fiscal Year 2024 Third Quarter Results</p>
            <div style={{ display: "flex" }}>
              <a href="#">Release Details</a>
              <i class="gg-arrow-right"></i>
            </div>
          </div>
          <div className="InvestorS2-release">
            <h3>April 9, 2024</h3>
            <p>P&G Declares Dividend Increase</p>
            <div style={{ display: "flex" }}>
              <a href="#">Release Details</a>
              <i class="gg-arrow-right"></i>
            </div>
          </div>
          <div className="InvestorS2-release">
            <h3>March 22, 2024</h3>
            <p>
              P&G to Webcast Discussion of Third Quarter 23/24 Earnings Results
              on April 19
            </p>
            <div style={{ display: "flex" }}>
              <a href="#">Release Details</a>
              <i class="gg-arrow-right"></i>
            </div>
          </div>
          <button class="InvestorS2-card-btnSeeMore">
            <span class="InvestorS2-card-btn-transition"></span>
            <span class="InvestorS2-card-btn-label">
              <p>VIEW ALL REPORTS </p>
            </span>
          </button>
        </div>
        <div>
          <div className="InvestorS2-card2">
            <h2>Upcoming Presentations & Events</h2>
            <div className="InvestorS2-event">
              <h3>June 4, 2024</h3>
              <p>
                The Procter & Gamble Company at Deutsche Bank dbAccess Global
                Consumer Conference
              </p>
              <div style={{ display: "flex" }}>
                <a href="#">Event Details</a>
                <i class="gg-arrow-right"></i>
              </div>
            </div>
            <div className="InvestorS2-event">
              <h3>July 30, 2024 (Anticipated)</h3>
              <p>Q4 2024 The Procter & Gamble Earnings Conference Call</p>
              <div style={{ display: "flex" }}>
                <a href="#">Event Details</a>
                <i class="gg-arrow-right"></i>
              </div>
            </div>
            <button class="InvestorS2-card-btnSeeMore">
              <span class="InvestorS2-card-btn-transition"></span>
              <span class="InvestorS2-card-btn-label">
                <p>VIEW ALL REPORTS </p>
              </span>
            </button>
          </div>
          <div className="InvestorS2-card2" style={{ marginTop: "12px" }}>
            <h2>Latest Presentations & Events</h2>
            <div className="InvestorS2-event">
              <h3>May 14, 2024</h3>
              <p>
                The Procter & Gamble Company at Goldman Sachs Global Staples
                Forum
              </p>
              <div style={{ display: "flex" }}>
                <a href="#">Event Details</a>
                <i class="gg-arrow-right"></i>
              </div>
            </div>
            <div className="InvestorS2-event">
              <h3>April 19, 2024</h3>
              <p>Q3 2024 The Procter & Gamble Earnings Conference Call</p>
              <div style={{ display: "flex" }}>
                <a href="#">Event Details</a>
                <i class="gg-arrow-right"></i>
              </div>
            </div>
            <button class="InvestorS2-card-btnSeeMore">
              <span class="InvestorS2-card-btn-transition"></span>
              <span class="InvestorS2-card-btn-label">
                <p>VIEW ALL REPORTS </p>
              </span>
            </button>
          </div>
        </div>
        <div>
          <div className="InvestorS2-card InvestorS2-esg-card">
            <h1 className="InvestorS2-card3-title">
              Environmental, Social & Governance
            </h1>
            <button class="InvestorS2-card3-btnSeeMore">
              <span class="InvestorS2-card3-btn-transition"></span>
              <span class="InvestorS2-card3-btn-label">
                <p>CLICK HERE </p>
              </span>
            </button>
          </div>
          <div className="InvestorS2-card2 " style={{ marginTop: "12px" }}>
            <h2 className="InvestorS2-card3-title">
              2023 Annual Report & Proxy Statement
            </h2>
            <Row>
              <Col span={8}>
                <img
                  src="https://s1.q4cdn.com/695946674/files/doc_financials/2023/ar/AR23-pginvestor-thumbnail-310x372_2x.png"
                  alt=""
                  width={110}
                  height={132}
                />
              </Col>
              <Col span={16} className="InvestorS2-card3-Col2">
                <div className="Investors-card3-text">
                  <p>2023 Annual Report (Interactive)</p>
                  <i className="gg-arrow-right"></i>
                </div>
                <div className="Investors-card3-text">
                  <p>2023 Annual Report (PDF)</p>
                  <i className="gg-arrow-right"></i>
                </div>
                <div className="Investors-card3-text">
                  <p>2023 Proxy Statement</p>
                  <i className="gg-arrow-right"></i>
                </div>
                <div className="Investors-card3-text">
                  <p>2023 Form 10-K</p>
                  <i className="gg-arrow-right"></i>
                </div>
                <div className="Investors-card3-text">
                  <p>2023 Financials</p>
                  <i className="gg-arrow-right"></i>
                </div>
                <div className="Investors-card3-text">
                  <p>Historic Materials</p>
                  <i className="gg-arrow-right"></i>
                </div>
              </Col>
            </Row>
            <button class="InvestorS2-card-btnSeeMore">
              <span class="InvestorS2-card-btn-transition"></span>
              <span class="InvestorS2-card-btn-label">
                <p>VIEW ALL REPORTS </p>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
