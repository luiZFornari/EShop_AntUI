import React, { useEffect, useState, useRef } from "react";
import { Button, Flex, Menu } from "antd";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Layout, { Content, Header } from "antd/es/layout/layout";
import { BarsOutlined } from "@ant-design/icons";

const MenuHorizontal = [
  {
    label: (
      <NavLink exact to="/" rel="noopener noreferrer">
        Home
      </NavLink>
    ),
    key: "Home",
  },
  {
    label: (
      <NavLink exact to="login" rel="noopener noreferrer">
        Login
      </NavLink>
    ),
    key: "login",
  },
  {
    label: (
      <NavLink exact to="sobre" rel="noopener noreferrer">
        Sobre
      </NavLink>
    ),
    key: "sobre",
  },
];

const MenuVertical = [
  {
    label: "Menu",
    key: "SubMenu",
    children: [
      {
        label: (
          <NavLink exact to="/" rel="noopener noreferrer">
            Home
          </NavLink>
        ),
        key: "home",
      },
      {
        label: (
          <NavLink exact to="login" rel="noopener noreferrer">
            Login
          </NavLink>
        ),
        key: "login",
      },
      {
        label: (
          <NavLink exact to="sobre" rel="noopener noreferrer">
            Sobre
          </NavLink>
        ),
        key: "sobre",
      },
    ],
  },
];

const MenuPublico = () => {
  const [current, setCurrent] = useState(null); // Alterado para null para fechar o menu ao iniciar
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const menuRef = useRef();

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Layout className="layout">
        <Header style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          {windowSize.width > 500 && (
            <Flex gap="middle" horizontal>
              <Button
                style={{ color: "white", marginTop: "10px" }}
                type="text"
                size="large"
              >
                EShop
              </Button>
              <Menu
                style={{ fontSize: "15px" }}
                selectedKeys={[current]}
                mode="horizontal"
                items={MenuHorizontal}
                theme="dark"
                breakpointWidth="xs"
              />
            </Flex>
          )}
          {windowSize.width < 500 && (
            <Flex horizontal justify="space-between">
              <div
                ref={menuRef}
                style={{ width: "180px", position: "relative" }}
              >
                <Menu
                  style={{
                    fontSize: "13px",
                    marginTop: "5px",
                    zIndex: 1,
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                  selectedKeys={[current]}
                  mode="inline"
                  items={MenuVertical}
                  theme="dark"
                />
              </div>
              <Button
                style={{ color: "white", marginTop: "10px" }}
                type="text"
                size="large"
              >
                EShop
              </Button>
            </Flex>
          )}
        </Header>
      </Layout>
      <Outlet />
    </div>
  );
};

export default MenuPublico;
