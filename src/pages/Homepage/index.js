import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Container, Img, Text, ContainerContact } from "./style";
import picture from "../../assets/rebeca.png";
import { Button } from "react-bootstrap";

export default function Homepage() {
  return (
    <>
      <Menu></Menu>
      <Container>
        <ContainerContact>
          <Text>Clinica estetica de armonização corporal</Text>
          <Button
            target="blank"
            href="https://api.whatsapp.com/send?phone=5586999348656&text=agendando%20consulta"
            variant="success"
          >
            Fale conosco
          </Button>{" "}
        </ContainerContact>
        <Img src={picture} alt="foto da rebeca" />
      </Container>
      <Footer></Footer>
    </>
  );
}
