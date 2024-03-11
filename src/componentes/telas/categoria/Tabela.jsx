import { useContext, useMemo } from "react";
import Alerta from "../../comuns/Alerta";
import { Button, Flex, Table } from "antd";
import CategoriaContext from "./CategoriaContext";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Tabela() {
  const { alerta, listaObjetos, remover, editarObjeto, novoObjeto } =
    useContext(CategoriaContext);

  const columns = [
    {
      title: "Editar",
      key: "editar",
      dataIndex: "codigo",
      render: (codigo) => {
        return (
          <Flex horizontal style={{ padding: "1px" }}>
            <Button
              item
              key="editar"
              onClick={() => editarObjeto(codigo)}
              title="Editar"
              aria-label="Editar"
              style={{ margin: "2px" }}
            >
              <EditOutlined />
            </Button>
            <Button
              item
              key="remover"
              onClick={() => remover(codigo)}
              title="Deletar"
              aria-label="Deletar"
              style={{ margin: "2px" }}
            >
              <DeleteOutlined />
            </Button>
          </Flex>
        );
      },
    },
    {
      title: "Codigo",
      dataIndex: "codigo",
      key: "codigo",
    },
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
  ];

  return (
    <div>
      <Alerta alerta={alerta} />
      <Button
        onClick={() => novoObjeto()}
        aria-label="Nova Categoria"
        style={{ width: "100%", margin: "5px" }}
        size="large"
      >
        Nova Categoria
      </Button>
      <Table columns={columns} dataSource={listaObjetos} />
    </div>
  );
}

export default Tabela;
