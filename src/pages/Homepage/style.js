import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 76px;

  padding-left: 20px;
  background-color: purple;
  height: 300px;

  p {
    margin-bottom: 15px;
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: auto;
  height: 100%;
`;

export { Container, Img };
