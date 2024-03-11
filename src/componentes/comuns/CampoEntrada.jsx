import React from "react";
import { Input } from "antd";

function CampoEntrada({
  id,
  label,
  tipo,
  name,
  value,
  onChange,
  requerido,
  readonly,
  maxlength,
  msginvalido,
  placeholder,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input
        type={tipo}
        key={id}
        name={name}
        value={value}
        onChange={onChange}
        required={requerido}
        maxLength={maxlength}
        status={!value && "error"}
      />
      {value === "" || (!value && requerido === true) ? msginvalido : " OK"}
    </div>
  );
}

export default CampoEntrada;
