import { useContext, useMemo } from "react";
import Alerta from "../../comuns/Alerta";
import ProdutoContext from "./ProdutoContext";
import { Button, Space, Table, Tag } from "antd";
import { formatoMoeda } from "../../comuns/Uteis";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Tabela() {
  const { alerta, listaObjetos, remover, editarObjeto, novoObjeto } =
    useContext(ProdutoContext);

  const columns = [
    {
      title: "Editar",
      key: "editar",
      dataIndex: "codigo",
      render: (codigo) => {
        return (
          <>
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
          </>
        );
      },
    },
    {
      title: "Codigo",
      dataIndex: "codigo",
      key: "codigo",
      responsive: ["md"],
    },
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Descricao",
      dataIndex: "descricao",
      key: "descricao",
      responsive: ["md"],
    },
    {
      title: "Valor",
      key: "valor",
      dataIndex: "valor",
      render: (valor) => {
        return <text>{formatoMoeda(valor)}</text>;
      },
      responsive: ["md"],
    },
    {
      title: "Quantidade",
      key: "quantidade_estoque",
      dataIndex: "quantidade_estoque",
      responsive: ["md"],
    },
    {
      title: "Ativo",
      key: "ativo",
      dataIndex: "ativo",
      render: (ativo) => {
        return <text>{ativo ? "Sim" : "Nao"}</text>;
      },
    },
    {
      title: "Cadastro",
      key: "data_cadastro",
      dataIndex: "data_cadastro",
      responsive: ["md"],
    },
    {
      title: "Categoria",
      key: "categoria_nome",
      dataIndex: "categoria_nome",
      responsive: ["md"],
    },
  ];

  return (
    <div>
      <Alerta alerta={alerta} />
      <Button
        onClick={() => novoObjeto()}
        aria-label="Novo Produto"
        style={{ width: "100%", margin: "5px" }}
        size="large"
      >
        Novo Produto
      </Button>
      <Table columns={columns} dataSource={listaObjetos} />
    </div>
  );
}

export default Tabela;
