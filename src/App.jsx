import "./App.css";
import {AuthContextProvider} from "./index";

function App() {
  return <>
  <AuthContextProvider>
    <h1>Hello World</h1>
  </AuthContextProvider>
  </>;
}

export default App;
