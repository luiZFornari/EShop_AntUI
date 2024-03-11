import { useContext } from "react";
import { formatoMoeda } from "../../comuns/Uteis";
import AvaliacaoContext from "./AvaliacaoContext";
import { Card, Collapse, Divider, Flex, Typography } from "antd";
const { Text, Title } = Typography;

function ItensProduto() {
  const { produto } = useContext(AvaliacaoContext);

  const items = [
    {
      key: "1",
      label: "Descrição",
      children: <Text>{produto.descricao}</Text>,
    },
  ];

  return (
    <>
      <div style={{ padding: "1%" }}>
        <Card
          title={<Title level={4}>{produto.nome}</Title>}
          style={{ marginBottom: "1%" }}
        >
          <Flex vertical>
            <Flex horizontal justify="space-around" align="center">
              <Title level={5}>Estoque: {produto.quantidade_estoque}</Title>
              <Title level={5}>Cadastro: {produto.data_cadastro}</Title>
            </Flex>
            <Flex align="center" justify="center">
              <Title level={5}>
                {produto.ativo ? "Disponivel" : "Indisponivel"}
              </Title>
            </Flex>
            <Divider />
            <Flex align="center" justify="center">
              <Title level={3}>{formatoMoeda(produto.valor)}</Title>
            </Flex>
          </Flex>
        </Card>
        <Collapse items={items} />
      </div>
    </>
  );
}

export default ItensProduto;
