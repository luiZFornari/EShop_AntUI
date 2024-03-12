import { useContext } from "react";
import HomeContext from "./HomeContext";
import { formatoMoeda } from "../../comuns/Uteis";
import { NavLink } from "react-router-dom";
import { Card, Col, Divider, Flex, Row, Space, Typography } from "antd";
const { Text } = Typography;

const CardProd = () => {
  const { listaObjetos } = useContext(HomeContext);

  return (
    <>
      {listaObjetos.length === 0 && (
        <Row justify="center">
          <Text>Nenhum objeto encontrado</Text>
        </Row>
      )}
      <Row gutter={[16, 16]} justify="center" style={{ margin: "15px" }}>
        {listaObjetos.map((objeto) => (
          <>
            {objeto.ativo && (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} key={objeto.codigo}>
                <NavLink exact to={`produto/${objeto.codigo}`}>
                  <Card
                    title={objeto.nome}
                    hoverable
                    style={{ height: "100%" }}
                  >
                    <Flex
                      justify="space-between"
                      vertical
                      style={{ height: "100%" }}
                    >
                      <Text type="secondary">{objeto.categoria_nome}</Text>
                      <Space />
                      <Text type="secondary">
                        Estoque: {objeto.quantidade_estoque}
                      </Text>
                      <Divider />
                      <Text strong>{formatoMoeda(objeto.valor)}</Text>
                    </Flex>
                  </Card>
                </NavLink>
              </Col>
            )}
          </>
        ))}
      </Row>
    </>
  );
};

export default CardProd;
