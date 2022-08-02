import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Grid } from "./ui/components/Grid";
import { DetailsPage } from "./ui/components/DetailsPage";
import { Homepage } from "./ui/components/Homepage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/grid" element={<Grid />} />
      <Route path="/details/:name" element={<DetailsPage />} />
    </Routes>
  );
};

export default App;
