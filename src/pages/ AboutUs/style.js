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
  @media (max-width: 1100px) {
    padding-left: 10%;
    height: 500px;
  }
  @media (max-width: 600px) {
    padding-left: 10%;
    height: 300px;
  }
`;

const Text = styled.p`
  color: #ffffff;
  width: 60%;
  font-size: 28px;

  padding-bottom: 15px;

  @media (max-width: 1100px) {
    font-size: 22px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }

  animation: fadeInAnimation ease 2s;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: auto;
  height: 100%;
  position: absolute;
  right: 0;

  animation: fadeInAnimation ease 2s;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export { Container, Img, Text };
