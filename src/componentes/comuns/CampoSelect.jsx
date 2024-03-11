import { Flex, Select } from "antd";

function CampoSelect(props) {
  return (
    <Flex vertical>
      <label htmlFor={props.id}>{props.label}</label>
      <Select
        name={props.name}
        value={props.value}
        key={props.id}
        label={props.label}
        required={props.requerido}
        onChange={props.onChange}
        options={props.options}
        status={!props.value && "error"}
      />
      {!props.value || (props.value === "" && props.requerido === true)
        ? props.msginvalido
        : " OK"}
    </Flex>
  );
}

export default CampoSelect;
