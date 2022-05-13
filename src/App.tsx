import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Grid } from "./components/Grid";
import { DetailsPage } from "./components/DetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Grid />} />
      <Route path="/details/:name" element={<DetailsPage />} />
    </Routes>
  );
};

export default App;
