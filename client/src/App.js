import React from "react";
import { ThemeProvider } from "styled-components";
import { MainBody,Container } from "./styles/Global.styled";
import {theme} from './utils/Theme';
//import components
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <MainBody>
      <Navbar />
      <Container>
      <Showcase />
      <MySkills />
      <MyProjects />
      <Footer />
      </Container>
      </MainBody>
      </ThemeProvider>
    </div>
  );
}

export default App;
