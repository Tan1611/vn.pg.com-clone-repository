// src/HeaderInvestors.js
import React, { useState } from "react";
import "./Header.css";
import { Drawer, Input, Menu } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
function HeaderInvestors() {
  const [isVisible, setIsVisible] = useState(false); // State để kiểm soát trạng thái hiển thị của input

  const handleIconClick = () => {
    setIsVisible(!isVisible); // Đảo ngược trạng thái hiển thị của input khi click vào icon
  };
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const items = [
    {
      key: "sub4",
      label: (
        <span style={{ fontSize: "14px", fontWeight: 700, color: "#003da5" }}>
          Các nhãn hiệu của chúng tôi
        </span>
      ),

      children: [
        {
          key: "9",
          label: (
            <span
              style={{ fontSize: "14px", fontWeight: 700, color: "#003da5" }}
            >
              Các nhãn hiệu
            </span>
          ),
        },
        {
          key: "10",
          label: (
            <span
              style={{ fontSize: "14px", fontWeight: 700, color: "#003da5" }}
            >
              Đổi mới
            </span>
          ),
        },
        {
          key: "11",
          label: (
            <span
              style={{ fontSize: "14px", fontWeight: 700, color: "#003da5" }}
            >
              An toàn sản phẩm
            </span>
          ),
        },
        {
          key: "12",
          label: (
            <span
              style={{ fontSize: "14px", fontWeight: 700, color: "#003da5" }}
            >
              Thành phần
            </span>
          ),
        },
        {
          key: "13",
          label: (
            <span
              style={{ fontSize: "14px", fontWeight: 700, color: "#003da5" }}
            >
              #BECRUELTYFREE
            </span>
          ),
        },
      ],
    },
  ];
  return (
    <div>
      <header className="HederInvestors-header">
        <nav className="HederInvestors-navbar">
          <ul className="HederInvestors-nav-list">
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li className="HederInvestors-dropdown-item">
              <a href="#">
                About P&G <i className="gg-chevron-down"></i>
              </a>
              <ul className="HederInvestors-dropdown">
                <li>
                  <a href="#">Submenu 1</a>
                </li>
                <li>
                  <a href="#">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li className="HederInvestors-dropdown-item">
              <a href="#">
                ESG <i className="gg-chevron-down"></i>
              </a>
              <ul className="HederInvestors-dropdown">
                <li>
                  <a href="#">Submenu 1</a>
                </li>
                <li>
                  <a href="#">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Presentations & Events</a>
            </li>
            <li>
              <img
                src="https://s1.q4cdn.com/695946674/files/images/irw/P_G_Logo_RGB.svg"
                alt=""
                width={70}
                style={{ zIndex: "99", paddingTop: "10px" }}
              />
            </li>
            <li className="HederInvestors-dropdown-item">
              <a href="#">
                Stock Information <i className="gg-chevron-down"></i>
              </a>
              <ul className="HederInvestors-dropdown">
                <li>
                  <a href="#">Submenu 1</a>
                </li>
                <li>
                  <a href="#">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li className="HederInvestors-dropdown-item">
              <a href="#">
                Financial Reporting <i className="gg-chevron-down"></i>
              </a>
              <ul className="HederInvestors-dropdown">
                <li>
                  <a href="#">Submenu 1</a>
                </li>
                <li>
                  <a href="#">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li className="HederInvestors-dropdown-item">
              <a href="#">
                Shareholder Resources <i className="gg-chevron-down"></i>
              </a>
              <ul className="HederInvestors-dropdown">
                <li>
                  <a href="#">Submenu 1</a>
                </li>
                <li>
                  <a href="#">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li className="HederInvestors-search-icon"></li>
          </ul>
          <div>
            <i
              class="gg-search HederInvestors-search-icons"
              onClick={handleIconClick}
            ></i>
            <Input
              className="HeaderInvestors-inputSearch"
              style={{ display: isVisible ? "flex" : "none" }}
              placeholder="Enter your username"
              prefix={
                <i
                  class="gg-search"
                  style={{
                    color: "rgba(0,0,0,.25)",
                  }}
                />
              }
              suffix={
                <i
                  class="gg-close"
                  onClick={handleIconClick}
                  style={{
                    color: "rgba(0,0,0,.45)",
                  }}
                />
              }
            />
          </div>
        </nav>
      </header>
      <div className="HederInvestors-headerMb">
        <img
          src="https://s1.q4cdn.com/695946674/files/images/irw/P_G_Logo_RGB.svg"
          alt=""
          width={50}
          style={{
            zIndex: "99",
            paddingTop: "5px",
            margin: "auto",
            display: "block",
          }}
        />
        <div class="SideMenu">
          <div class="HederInvestors-search-iconMb" onClick={toggleSearch}>
            <i class="gg-search"></i>
          </div>
          <div class="HederInvestors-menu-iconMb" onClick={showDrawer}>
            <i class="gg-menu"></i>
          </div>
        </div>
      </div>

      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        width={"80%"}
        key="left"
      >
        <div class="HederInvestors-close-iconMb" onClick={onClose}>
          <i class="gg-close" />
        </div>
        <p style={{ fontSize: "0.75rem", fontWeight: "700", color: "#003da5" }}>
          Investor Relations
        </p>
        <Menu
          style={{
            width: 270,
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
        <Menu
          style={{
            width: 270,
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />{" "}
        <Menu
          style={{
            width: 270,
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />{" "}
        <Menu
          style={{
            width: 270,
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
        <Menu
          style={{
            width: 270,
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />{" "}
        <Menu
          style={{
            width: 270,
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Drawer>
      {isSearchVisible && (
        <div id="search-container" className="search-containerHeaderMb">
          <input
            type="text"
            id="search-input"
            className="search-inputHeaderMb"
            placeholder="Search..."
          />
        </div>
      )}
    </div>
  );
}

export default HeaderInvestors;
