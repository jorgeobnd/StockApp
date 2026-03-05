import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { AuthContextProvider, MyRoutes, Light, Dark } from "./index";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(null);

function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = themeuse === "light" ? Light : Dark;

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <Container>
              <section className="ContentSidebar"></section>
              <section className="ContentMenuBar"></section>
              <section className="ContentRoutes"></section>
              <MyRoutes />
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.bgtotal};
`;

export default App;
