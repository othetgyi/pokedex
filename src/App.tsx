import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "./components/Grid";
import { DetailsPage } from "./components/DetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/details/:name" element={<DetailsPage />} />
        <Route path="/" element={<Grid />} />
      </Routes>
    </Router>
  );
};

export default App;
