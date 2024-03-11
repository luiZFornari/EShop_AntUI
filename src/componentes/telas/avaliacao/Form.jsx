import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import AvaliacaoContext from "./AvaliacaoContext";
import CampoSelect from "../../comuns/CampoSelect";

function Form() {
  const {
    objeto,
    handleChange,
    acaoCadastrarAvaliacao,
    alerta,
    abreDialogo,
    setAbreDialogo,
    handleChangeSelect,
  } = useContext(AvaliacaoContext);

  const notas = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];

  return (
    <>
      <Dialogo
        id="modalEdicao"
        titulo="Avalição"
        open={abreDialogo}
        abreDialogo={setAbreDialogo}
        acaoCadastrar={acaoCadastrarAvaliacao}
        idform="formulario"
        maxWidth="sm"
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
          id="txtAutor"
          label="Autor"
          tipo="text"
          name="autor"
          value={objeto.autor}
          onChange={handleChange}
          requerido={true}
          readonly={false}
          maxlength={50}
          msgvalido="Autor OK"
          msginvalido="Informe o autor"
        />
        <CampoEntrada
          value={objeto.email}
          id="txtEmail"
          name="email"
          label="Email"
          tipo="text"
          onChange={handleChange}
          msgvalido="OK certo"
          msginvalido="Informe o email"
          requerido={true}
          readonly={false}
          maxCaracteres={40}
        />
        <CampoEntrada
          id="txtTexto"
          label="Texto"
          tipo="text"
          name="texto"
          value={objeto.texto}
          onChange={handleChange}
          requerido={true}
          readonly={false}
          maxlength={250}
          msgvalido="Texto OK"
          msginvalido="Informe o texto"
        />
        <CampoSelect
          id="selectNota"
          label="Nota"
          idLabel="txtNota"
          name="nota"
          value={objeto.nota}
          onChange={handleChangeSelect}
          requerido={true}
          options={notas}
          msgvalido="Nota OK"
          msginvalido="Informe a nota"
          optionValue="code"
          optionLabel="name"
        />
        <CampoEntrada
          value={objeto.data}
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
