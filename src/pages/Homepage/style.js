import styled from "styled-components";
import background from "../../assets/fundo3.png";

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 66px;
  position: relative;
  padding-left: 20px;
  background-size: cover;
  background-image: url(${background});
  height: 600px;
  padding-left: 20%;
  @media (max-width: 600px) {
    padding-left: 10%;
    height: 300px;
  }
`;

const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    align-items: flex-start;
  }
  width: 60%;
`;

const Text = styled.p`
  color: #ffffff;

  font-size: 32px;
  padding-bottom: 15px;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: auto;
  height: 100%;
  position: absolute;
  right: 0;
`;

export { Container, Img, Text, ContainerContact };
