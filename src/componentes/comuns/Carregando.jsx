import { Flex, Spin } from "antd";

function Carregando(props) {
  const indicatorSize = 80;
  return (
    <>
      {!props.carregando ? (
        props.children
      ) : (
        <Flex
          align="center"
          justify="center"
          style={{ padding: "20px", height: "500px" }}
        >
          <div>
            <Spin size="large" />
          </div>
        </Flex>
      )}
    </>
  );
}

export default Carregando;
