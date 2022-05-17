import { Container, Contato, Social } from "./style";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/whatsapp.png";

export default function Footer() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.714443450256!2d-41.77526798620207!3d-2.898394340324245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ec2fe0d196cc9f%3A0x617bd21a8c86df1c!2sCl%C3%ADnica%20Rebeca%20Vaz!5e0!3m2!1spt-BR!2sbr!4v1652665695979!5m2!1spt-BR!2sbr"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Container>
        <Contato>
          <h1>Contatos</h1>
          <p>email:Rebecavazfisio@gmail.com</p>
          <p>Numero:(86)99954-7775</p>
        </Contato>
        <Social>
          <a href="globo.com" target="_blank">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="globo.com" target="_blank">
            <img src={facebook} alt="Instagram" />
          </a>
          <a href="globo.com" target="_blank">
            <img src={whatsapp} alt="Instagram" />
          </a>
        </Social>
      </Container>
    </>
  );
}
