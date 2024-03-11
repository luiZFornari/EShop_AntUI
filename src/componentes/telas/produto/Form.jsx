import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import CampoSelect from "../../comuns/CampoSelect";
import ProdutoContext from "./ProdutoContext";

function Form() {
  const {
    objeto,
    handleChange,
    acaoCadastrar,
    listaCategorias,
    alerta,
    abreDialogo,
    setAbreDialogo,
    handleChangeSelectCat,
    handleChangeSelectAtivo,
  } = useContext(ProdutoContext);

  console.log(listaCategorias);

  const options = listaCategorias.map((categoria) => ({
    value: categoria.codigo,
    label: categoria.nome,
  }));

  return (
    <>
      <Dialogo
        id="modalEdicao"
        titulo="Produto"
        open={abreDialogo}
        abreDialogo={setAbreDialogo}
        acaoCadastrar={acaoCadastrar}
        idform="formulario"
      >
        <Alerta alerta={alerta} />
        <CampoEntrada
          id="txtCodigo"
          label="Codigo"
          tipo="number"
          name="codigo"
          value={objeto.codigo}
          onChange={handleChange}
          requerido={false}
          readonly={true}
        />
        <CampoEntrada
          id="txtNome"
          label="Nome"
          tipo="text"
          name="nome"
          value={objeto.nome}
          onChange={handleChange}
          requerido={true}
          readonly={false}
          maxlength={50}
          msgvalido="Nome OK"
          msginvalido="Informe o nome"
        />
        <CampoEntrada
          value={objeto.descricao}
          id="txtDescricao"
          name="descricao"
          label="Descricao"
          tipo="text"
          onChange={handleChange}
          msgvalido="OK certo"
          msginvalido="Informe a descricao"
          requerido={true}
          readonly={false}
          maxCaracteres={40}
        />
        <CampoEntrada
          value={objeto.quantidade_estoque}
          id="txtEstoque"
          name="quantidade_estoque"
          label="Estoque"
          tipo="number"
          onChange={handleChange}
          msgvalido="OK certo"
          msginvalido="Informe a quantidade em estoque"
          requerido={true}
          readonly={false}
          maxCaracteres={5}
        />
        <CampoSelect
          id="selectCategoria"
          label="Categoria"
          idLabel="labelCategoria"
          name="categoria"
          value={objeto.categoria}
          onChange={handleChangeSelectCat}
          requerido={true}
          msgvalido="Nota OK"
          msginvalido="Informe a categoria"
          fieldName={{ label: "nome", value: "codigo" }}
          options={options}
        />
        <CampoEntrada
          value={objeto.valor}
          id="idValor"
          name="valor"
          label="Valor"
          tipo="number"
          onChange={handleChange}
          msgvalido="OK certo"
          msginvalido="Informe o valor"
          requerido={true}
          readonly={false}
          maxCaracteres={12}
        />
        <CampoSelect
          value={objeto.ativo}
          id="txtAtivo"
          idLabel="labelAtivo"
          name="ativo"
          label="Ativo"
          onChange={handleChangeSelectAtivo}
          msgvalido="OK certo"
          msginvalido="Informe se está ativo"
          requerido={true}
          options={[
            { value: true, label: "Sim" },
            { value: false, label: "Nao" },
          ]}
        />

        <CampoEntrada
          value={objeto.data_cadastro}
          id="txtDataCadastro"
          name="data"
          label="Data de Cadastro"
          tipo="date"
          onChange={handleChange}
          msgvalido="OK certo"
          msginvalido="Informe a data de cadastro"
          requerido={true}
          readonly={false}
          maxCaracteres={12}
        />
      </Dialogo>
    </>
  );
}

export default Form;
