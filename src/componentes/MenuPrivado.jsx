import React, { useEffect, useState } from "react";
import { Button, Dropdown, Flex, Menu, Typography } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import Layout, { Content, Header } from "antd/es/layout/layout";
import { BarsOutlined } from "@ant-design/icons";
import Autenticacao from "./seguranca/Autenticacao";

const MenuPrivado = () => {
  const [autenticado, setAutenticado] = useState(
    Autenticacao.pegaAutenticacao()
  );

  useEffect(() => {
    // Atualiza o estado local quando a autenticação mudar em algum lugar da sua aplicação
    setAutenticado(Autenticacao.pegaAutenticacao());
  }, []);

  const handleLogout = () => {
    Autenticacao.logout();
    setAutenticado(false); // Define autenticado como false após o logout
  };

  const [current, setCurrent] = useState("mail");

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // Adicione um ouvinte de evento de redimensionamento ao montar o componente
    window.addEventListener("resize", handleResize);

    // Remova o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

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
      label: autenticado ? "Usuário: " + autenticado.nome_usuario : "Usuário",
      children: [
        {
          label: autenticado ? (
            <NavLink exact to="/" rel="noopener noreferrer">
              Logout
            </NavLink>
          ) : (
            <NavLink exact to="login" rel="noopener noreferrer">
              Login
            </NavLink>
          ),
          command: autenticado ? handleLogout : undefined,
        },
      ],
      key: "user",
    },
    {
      label: (
        <NavLink exact to="sobre" rel="noopener noreferrer">
          Sobre
        </NavLink>
      ),
      key: "sobre",
    },
    {
      label: "Manutenções",
      children: [
        {
          label: (
            <NavLink to="produtos" rel="noopener noreferrer">
              Produtos
            </NavLink>
          ),
        },
        {
          label: (
            <NavLink to="categorias" rel="noopener noreferrer">
              Categorias
            </NavLink>
          ),
        },
      ],
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
          label: autenticado
            ? "Usuário: " + autenticado.nome_usuario
            : "Usuário",
          children: [
            {
              label: autenticado ? (
                <NavLink exact to="/" rel="noopener noreferrer">
                  Logout
                </NavLink>
              ) : (
                <NavLink exact to="login" rel="noopener noreferrer">
                  Login
                </NavLink>
              ),
              command: autenticado ? handleLogout : undefined,
            },
          ],
          key: "user",
        },
        {
          label: (
            <NavLink exact to="sobre" rel="noopener noreferrer">
              Sobre
            </NavLink>
          ),
          key: "sobre",
        },
        {
          label: "Manutenções",
          children: [
            {
              label: (
                <NavLink to="produtos" rel="noopener noreferrer">
                  Produtos
                </NavLink>
              ),
            },
            {
              label: (
                <NavLink to="categorias" rel="noopener noreferrer">
                  Categorias
                </NavLink>
              ),
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
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
                  onClick={onClick}
                  style={{ fontSize: "15px", width: "100%" }}
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
                <div style={{ width: "180px" }}>
                  <Menu
                    onClick={onClick}
                    style={{
                      fontSize: "15px",
                      marginTop: "5px",
                      position: "relative",
                      zIndex: 1,
                    }}
                    selectedKeys={[current]}
                    mode="inline"
                    items={MenuVertical}
                    theme="dark"
                    breakpointWidth="xs"
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
      </div>
      <Outlet />
    </>
  );
};

export default MenuPrivado;
