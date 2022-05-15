import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background-color: #fbfbfb;

  padding: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
  }
`;

const Contato = styled.div`
  margin-bottom: 20px;
`;

const Social = styled.div`
  img {
    width: 40px;
    height: auto;
  }
`;

export { Container, Contato, Social };
