import React from "react";
import content from "./content";
import Login from "../../components/login/Login";
import { Grid, Image } from "semantic-ui-react";

const LandingPage = () => {
  return (
    <Grid
      className="landing-page-container"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "200px",
      }}
    >
      <Image
        src={`${process.env.PUBLIC_URL}/img/peach.png`}
        alt="Logo"
        style={{ padding: "120px", height: "auto", width: "50%" }}
      />
      <Login />
    </Grid>
  );
};

export default LandingPage;
