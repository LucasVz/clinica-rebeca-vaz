import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });
  const { auth, signin } = useAuth();

  useEffect(() => {
    if (auth) {
      navigate("/admin-services");
    }
  }, [auth]);

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const user = { ...formData };
    try {
      const { data } = await api.signin(user);
      signin(data.token);
      console.log(data);
      navigate("/admin-services");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              name="user"
              value={formData.user}
              required
              type="text"
              placeholder="insira seu user"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              name="password"
              value={formData.password}
              required
              type="password"
              placeholder="insira sua senha"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 30px;
  form {
    width: 400px;
  }
`;
