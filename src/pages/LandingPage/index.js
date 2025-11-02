import React from "react";
import content from "./content";
import Login from "../../components/login/Login";

const LandingPage = () => {
  return (
    <div
      className="landing-page-container"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/peach.png`}
        alt="Logo"
        style={{ padding: "120px", height: "auto", width: "40%" }}
      />
      <Login />
    </div>
  );
};

export default LandingPage;
