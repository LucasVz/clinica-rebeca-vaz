import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Container, Img } from "./style";
import picture from "../../assets/rebeca.png";
import { Button } from "react-bootstrap";

export default function Homepage() {
  return (
    <>
      <Menu></Menu>
      <Container>
        <div>
          <p>Clinica estetica de armonização corporal</p>
          <Button variant="success">Fale conosco</Button>{" "}
        </div>
        <Img src={picture} alt="foto da rebeca" />
      </Container>
      <Footer></Footer>
    </>
  );
}
