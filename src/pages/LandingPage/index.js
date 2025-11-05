import React from "react";
import content from "./content";
import Login from "../../components/login/Login";
import { Grid, Image } from "semantic-ui-react";

const LandingPage = () => {
  return (
    <Grid className="landing-page-container">
      <Grid.Row columns={2} centered>
        <Grid.Column>
          <Image
            src={`${process.env.PUBLIC_URL}/img/peach.png`}
            alt="Logo"
            style={{
              padding: "200px",
              marginLeft: "100px",
              height: "auto",
              width: "80%",
            }}
          />
        </Grid.Column>
        <Grid.Column
          style={{
            padding: "200px 450px 200px 150px",
          }}
        >
          <Login />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default LandingPage;
