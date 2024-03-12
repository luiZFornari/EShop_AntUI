import React, { useEffect, useState, useRef } from "react";
import { Button, Dropdown, Flex, Menu } from "antd";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Layout, { Content, Header } from "antd/es/layout/layout";

const items = [
  {
    key: "1",
    label: (
      <NavLink rel="noopener noreferrer" exact to="/">
        Home
      </NavLink>
    ),
  },
  {
    key: "2",
    label: (
      <NavLink rel="noopener noreferrer" exact to="login">
        Login
      </NavLink>
    ),
  },
  {
    key: "3",
    label: (
      <NavLink rel="noopener noreferrer" exact to="sobre">
        Sobre
      </NavLink>
    ),
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
                items={items}
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
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <Button type="primary">Menu</Button>
                </Dropdown>
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
