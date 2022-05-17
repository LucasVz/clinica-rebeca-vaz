import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Container, Img, Text } from "../Homepage/style";
import picture from "../../assets/rebeca.png";

export default function AboutUs() {
  return (
    <>
      <Menu></Menu>
      <Container>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
          dignissimos, earum est tenetur quis, aliquam, ipsa corrupti dolore
          explicabo modi velit omnis maxime eum sunt quibusdam nihil obcaecati!
          Incidunt, dolorem!
        </Text>
        <Img src={picture} alt="foto da rebeca" />
      </Container>
      <Footer></Footer>
    </>
  );
}
