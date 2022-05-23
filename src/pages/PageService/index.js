import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Container, Img, Text, ContainerContact } from "../Homepage/style";
import picture from "../../assets/rebeca.png";
import { Button } from "react-bootstrap";
import useService from "../../hooks/useService";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function PageService() {
  const { service } = useService();
  const [ServiceById, setServiceById] = useState([]);

  async function loadPage(service) {
    const { data: serviceData } = await api.getServiceById(service);
    setServiceById(serviceData.service);
  }

  useEffect(() => {
    loadPage(service);
  }, []);

  return (
    <>
      <Menu></Menu>
      <Container>
        <ContainerContact>
          <Text>{ServiceById.text}</Text>
        </ContainerContact>
        <Img src={ServiceById.image} alt="foto da rebeca" />
      </Container>
      <Footer></Footer>
    </>
  );
}
