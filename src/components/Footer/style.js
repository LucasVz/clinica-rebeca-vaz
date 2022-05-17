import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background-color: #fbfbfb;

  padding: 30px;

  h1 {
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    h1 {
      text-align: center;
    }
  }
`;

const Text = styled.p`
  color: #ffffff;
`;

const Contato = styled.div`
  margin-bottom: 20px;
  p {
    font-size: 16px;
    line-height: 22px;
  }
  h1 {
    font-size: 20px;
    font-weight: 800;
  }
`;

const Social = styled.div`
  img {
    width: 40px;
    height: auto;
    margin: 0 10px;
  }
`;

export { Container, Contato, Social, Text };
