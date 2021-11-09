import { ThemeProvider } from "styled-components";
import {Container} from "./components/styles/Container.styled";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    header: 'brown', 
    body: 'white',
  },
}

function App() {
  return (
    <ThemeProvider theme= {theme}>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Container >
          <ProductPage />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
