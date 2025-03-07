import React from "react";
import Myhome from "./components/Myhome";
import Section from "./components/Section";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./components/Button";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Myhome />} />
        <Route path="/section" element={<Section />} />
        <Route path="/button" element={<Button />} />
      </Routes>
    </Router>
  );
};

export default App;