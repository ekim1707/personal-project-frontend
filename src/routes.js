import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { resources } from "./environment/resources";
import Home from "./pages/Home";

const ApplicationRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={resources.paths.basePath} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ApplicationRouter;
