import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function Adminservices() {
  //const navigate = useNavigate();
  const { token } = useAuth;
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    image: "",
  });

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const service = { ...formData };
    try {
      await api.sendService(service);
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
