import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Autenticacao from "../../seguranca/Autenticacao";
import { Button, Card, Flex, Form, Input } from "antd";
import Alerta from "../../comuns/Alerta";

function Login() {
  const { pegaAutenticacao, gravaAutenticacao } = Autenticacao;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [autenticado, setAutenticado] = useState(false);

  const acaoLogin = async (e) => {
    try {
      const body = {
        email: email,
        senha: senha,
      };
      await fetch(`${process.env.REACT_APP_ENDERECO_API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.auth === true) {
            setAlerta({ status: "success", message: JSON.stringify(json) });
            setAutenticado(true);
            gravaAutenticacao(json);
          } else {
            setAlerta({ status: "error", message: JSON.stringify(json) });
          }
        });
    } catch (err) {
      console.error(err);
    }

    try {
      const autenticacao = pegaAutenticacao();
      console.log(autenticacao);
      console.log("token: " + autenticacao.token);
      console.log("decoded: " + JSON.stringify(jwt_decode(autenticacao.token)));
    } catch {
      console.error("erro ao pegar usuario");
    }
  };

  useEffect(() => {
    const autenticacao = pegaAutenticacao();
    if (autenticacao != null) {
      console.log("autenticação não é null");
      if (autenticacao.auth === true) {
        setAutenticado(true);
      }
    }
  }, []);

  if (autenticado === true) {
    return <Navigate to="/privado" />;
  }

  return (
    <Flex justify="center" align="center" style={{ height: "400px" }}>
      <Card
        title="LOGIN"
        bordered={false}
        style={{ width: 500 }}
        align="center"
        justify="center"
      >
        <div>
          <Alerta alerta={alerta} />
          <Form
            onFinish={acaoLogin}
            layout="vertical"
            name="basic"
            align="center"
            justify="center"
            labelCol={{
              span: 120,
            }}
            wrapperCol={{
              span: 100,
            }}
            style={{
              maxWidth: 500,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Usuario"
              name="usuario"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              rules={[
                {
                  required: true,
                  message: "Insira um usuario!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              rules={[
                {
                  required: true,
                  message: "Insira a senha!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Logar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </Flex>
  );
}

export default Login;
