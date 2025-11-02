import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { resources } from "./environment/resources";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

const ApplicationRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={resources.paths.basePath} element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default ApplicationRouter;
