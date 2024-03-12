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
    },
    {
      key: "3",
      label: (
        <NavLink rel="noopener noreferrer" exact to="sobre">
          Sobre
        </NavLink>
      ),
    },
    {
      key: "4",
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
                  items={items}
                  theme="dark"
                  breakpointWidth="xs"
                />
              </Flex>
            )}
            {windowSize.width < 500 && (
              <Flex horizontal justify="space-between">
                <div style={{ width: "180px" }}>
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
      </div>
      <Outlet />
    </>
  );
};

export default MenuPrivado;
