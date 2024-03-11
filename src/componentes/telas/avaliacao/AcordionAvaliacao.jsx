import { useContext } from "react";
import Autenticacao from "../../seguranca/Autenticacao";
import AvaliacaoContext from "./AvaliacaoContext";
import { Button, Card, Collapse, Divider, Flex, Rate, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Alerta from "../../comuns/Alerta";
const { Text } = Typography;

function AcordionAvaliacao(props) {
  const { novoObjeto, listaAvaliacoes, editarObjeto, remover, alerta } =
    useContext(AvaliacaoContext);

  let mediaAvaliacao = 0;
  if (listaAvaliacoes.length > 0) {
    listaAvaliacoes.map((objeto) => (mediaAvaliacao += objeto.nota));
    mediaAvaliacao = mediaAvaliacao / listaAvaliacoes.length;
  }

  const autenticacao = Autenticacao.pegaAutenticacao();

  const items = [
    {
      key: "1",
      label: "Avaliações",
      children: (
        <Flex
          vertical
          gap="10px"
          style={{ paddingLeft: "1%", paddingRight: "1%" }}
        >
          <Alerta alerta={alerta} />
          <Button onClick={() => novoObjeto()}>Nova Avaliação</Button>
          {listaAvaliacoes.map((objeto) => (
            <Card
              title={
                <Flex horizontal justify="space-between" align="center">
                  <Text strong>{objeto.autor}</Text>
                  <Rate disabled defaultValue={objeto.nota} />
                  {autenticacao && (
                    <div style={{ padding: "5px" }}>
                      <Button
                        key="editar"
                        onClick={() => editarObjeto(objeto.codigo)}
                        aria-label="Editar"
                        size="middle"
                        style={{ margin: "5px" }}
                      >
                        <EditOutlined />
                      </Button>
                      <Button
                        key="remover"
                        onClick={() => remover(objeto.codigo)}
                        aria-label="Apagar"
                        severity="danger"
                        size="middle"
                        style={{ margin: "5px" }}
                      >
                        <DeleteOutlined />
                      </Button>
                    </div>
                  )}
                </Flex>
              }
              key={objeto.codigo}
            >
              <Flex vertical align="center">
                <Text>{objeto.texto}</Text>
                <Divider />
                <Text type="secondary">{objeto.data}</Text>
              </Flex>
            </Card>
          ))}
        </Flex>
      ),
    },
  ];

  return (
    <div style={{ padding: "1%" }}>
      <Collapse items={items} />
    </div>
  );
}

export default AcordionAvaliacao;
