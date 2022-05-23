import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import useService from "../../hooks/useService";

export default function Menu() {
  const token = useAuth();
  const { setService } = useService();

  useEffect(() => {
    async function loadPage() {
      if (!token.auth) return;
      const { data: servicesData } = await api.getServices(token);
      setServices(servicesData.service);
    }
    loadPage();
  }, [token]);

  const [services, setServices] = useState([]);

  function setServiceId(id) {
    setService(id);
  }

  return (
    <>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Img src={logo} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/quem-somos">
                <Nav.Link>Quem somos</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#link">Depoimentos</Nav.Link>
              <NavDropdown title="Serviços" id="basic-nav-dropdown">
                {services.map((service) => (
                  <NavDropdown.Item
                    as={Link}
                    to="servicos"
                    onClick={() => setServiceId(service.id)}
                    key={service.id}
                  >
                    {service.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

const Img = styled.img`
  object-fit: cover;
  width: 100px;
  height: 50px;
`;
