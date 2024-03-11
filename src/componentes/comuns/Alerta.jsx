import { Alert } from "antd";
import { useState, useEffect } from "react";

const Alerta = ({ alerta }) => {
  const [exibir, setExibir] = useState(false);

  useEffect(() => {
    setExibir(true);
    setTimeout(() => {
      setExibir(false);
    }, 4000);
  }, [alerta]);

  return (
    <>
      {alerta.message.length > 0 && exibir && (
        <Alert
          banner
          message={alerta.message}
          type={alerta.status === "error" ? "error" : "success"}
        />
      )}
    </>
  );
};

export default Alerta;
