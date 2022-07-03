import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Styles

import { GlobalStyle } from "./App.styles";
import Home from "./components/Home";
import Scroe from "./components/Score";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/end" element={<Scroe />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
