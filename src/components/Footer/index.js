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
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
      <Container>
        <Contato>
          <h1>Contatos</h1>
          <p>email:rebecavazfisio@gmail.com</p>
          <p>Numero:(86)99954-7775</p>
        </Contato>
        <Social>
          <a href="https://www.instagram.com/clinicarebecavaz/" target="blank">
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.facebook.com/Cl%C3%ADnica-Rebeca-Vaz-101129372575058/"
            target="blank"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5586999348656"
            target="blank"
          >
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </Social>
      </Container>
    </>
  );
}
