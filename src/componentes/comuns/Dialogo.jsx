import React, { useState } from "react";
import { Button, Form, Modal, Space } from "antd";
function Dialogo(props) {
  const handleCancel = () => {
    props.abreDialogo(false);
  };

  return (
    <>
      <Modal
        title={props.titulo}
        open={props.open}
        id={props.id}
        onCancel={handleCancel}
        footer={[
          <Button key="cancelar" onClick={() => props.abreDialogo(false)}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" onClick={props.acaoCadastrar}>
            Enviar
          </Button>,
        ]}
      >
        {props.children}
      </Modal>
    </>
  );
}
export default Dialogo;
