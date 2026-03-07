import React from "react";
import styled from "styled-components";

export default function HomeTemplate() {
  return (
    <Container>
      <h1>HomeTemplate</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.font};
`;
