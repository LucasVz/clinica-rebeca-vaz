import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Menu() {
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
                <NavDropdown.Item href="#action/3.1">
                  Serviço 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Serviço 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Serviço 3
                </NavDropdown.Item>
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
