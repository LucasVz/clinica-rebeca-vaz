import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function Adminservices() {
  //const navigate = useNavigate();
  const token = useAuth();
  const [load, setLoad] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    text: "",
  });
  const [services, setServices] = useState([]);
  useEffect(() => {
    async function loadPage() {
      if (!token.auth) return;
      const { data: servicesData } = await api.getServices(token);
      setServices(servicesData.service);
      setLoad(load + 1);
    }
    loadPage();
  }, [token, load]);

  if (!token.auth) return;
  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function deleteService(id) {
    if (!token.auth) return;
    await api.deleteService(id, token);
  }

  async function handleSubmit(e) {
    if (!token.auth) return;
    console.log(token.auth);
    e.preventDefault();
    const service = { ...formData };
    try {
      await api.sendService(service, token);
      console.log("serviço cadastrado");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="title"
            value={formData.title}
            type="text"
            placeholder="titulo"
            required
          />

          <Form.Control
            onChange={(e) => handleChange(e)}
            name="text"
            value={formData.text}
            type="text"
            placeholder="texto"
            required
          />
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Control
              onChange={(e) => handleChange(e)}
              type="file"
              size="sm"
              name="image"
              value={formData.image}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      {services.map((service) => (
        <ContainerService key={service.id}>
          <Service>{service.title}</Service>
          <Button onClick={() => deleteService(service.id)}> deletar</Button>
        </ContainerService>
      ))}
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

const Service = styled.div`
  background-color: gray;
`;

const ContainerService = styled.form`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
`;
