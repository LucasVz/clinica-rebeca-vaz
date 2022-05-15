import { Container, Contato, Social } from "./style";
import instagram from "../../assets/instagram.png";

export default function Footer() {
  return (
    <>
      <Container>
        <Contato>
          <h1>Contatos</h1>
          <p>email:Rebecavazfisio@gmail.com</p>
          <p>Numero:(86)99954-7775</p>
        </Contato>
        <Social>
          <h1>Social</h1>
          <a href="globo.com" target="_blank">
            <img src={instagram} alt="Instagram" />
          </a>
        </Social>
      </Container>
    </>
  );
}
