import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { AuthContextProvider, MyRoutes, Light, Dark, Sidebar } from "./index";
import { createContext, useState } from "react";
import { Device } from "./styles/breackpoints";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(null);

function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = themeuse === "light" ? Light : Dark;
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <Container className={sideBarOpen ? "active" : ""}>
              <section className="ContentSidebar">
                <Sidebar state={sideBarOpen} setState={() => setSideBarOpen(!sideBarOpen)} />
              </section>
              <section className="ContentMenuBar">MenuBar</section>
              <section className="ContentRoutes">Routes</section>
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
  .ContentSidebar {
    display: none;
  }
  .ContentMenuBar {
    display: block;
    position: absolute;
    left: 20px;
  }
  .ContentRoutes {
    display: none;
  }

  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active {
      grid-template-columns: 220px 1fr;
    }
    .ContentSidebar {
      display: initial;
    }
    .ContentMenuBar {
      display: none;
    }
  }
  .ContentRoutes {
    grid-column: 1;
    width: 100%;
    @media ${Device.tablet} {
      grid-column: 2;
    }
  }
`;

export default App;
