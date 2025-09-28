import styled from "@emotion/styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Curriculum from "./components/Curriculum";
import Lecture from "./components/Lecture";
import Quiz from "./components/Quiz";

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const GlobalStyle = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle>
        <AppContainer>
          <Curriculum />
          <Routes>
            <Route path="/" element={<Lecture />} />
            <Route path="/lesson/:id" element={<Lecture />} />
            <Route path="/quiz/:id" element={<Quiz />} />
          </Routes>
        </AppContainer>
      </GlobalStyle>
    </Router>
  );
}

export default App;
