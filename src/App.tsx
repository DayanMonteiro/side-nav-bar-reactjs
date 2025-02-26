import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <h1>Bem-vindo ao Manager</h1>
        <p>Selecione uma opção no menu lateral.</p>
      </Content>
    </Container>
  );
};

export default App;
