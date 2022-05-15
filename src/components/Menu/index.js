import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import styled from "styled-components";

export default function Menu() {
  return (
    <>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Img src={logo} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Quem somos</Nav.Link>
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
