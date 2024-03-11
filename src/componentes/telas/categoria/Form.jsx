import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import CategoriaContext from "./CategoriaContext";
import { Button, Modal } from "antd";

function Form() {
  const {
    objeto,
    handleChange,
    acaoCadastrar,
    alerta,
    abreDialogo,
    setAbreDialogo,
  } = useContext(CategoriaContext);

  return (
    <>
      <Dialogo
        id="modalEdicao"
        titulo="Categoria"
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
      </Dialogo>
    </>
  );
}

export default Form;
