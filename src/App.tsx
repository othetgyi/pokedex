import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Grid } from "./ui/components/Grid";
import { DetailsPage } from "./ui/components/DetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Grid />} />
      <Route path="/details/:name" element={<DetailsPage />} />
    </Routes>
  );
};

export default App;
