import React from "react";
import InputField from "../../common/InputField";
import { Form, FormField, Header, Button, Grid } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <Form className="sign-up-container">
      <Header as="h2">Log in or sign up</Header>
      <Header as="h5">Please enter your details to proceed.</Header>
      <FormField>
        <label>Email</label>
        <InputField label="Email" type="email" name="email" />
      </FormField>
      <FormField>
        <label>Password</label>
        <InputField label="Password" type="password" name="password" />
      </FormField>
      <Button
        type="submit"
        className="submit-button"
        disabled
        style={{ width: "100%" }}
      >
        Log in
      </Button>
      <Button disabled style={{ width: "100%", background: "none" }}>
        Forgot Password?
      </Button>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column textAlign="center">
            <hr />
          </Grid.Column>
          <Grid.Column textAlign="center">or</Grid.Column>
          <Grid.Column textAlign="center">
            <hr />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Button
        style={{
          width: "100%",
          background: "none",
          outline: "1px solid black",
          marginTop: "20px",
        }}
      >
        <NavLink to="/signup" style={{ color: "black" }}>
          Sign up
        </NavLink>
      </Button>
      <Header as="h5" style={{ marginTop: "20px" }}>
        Coming soon...
      </Header>
    </Form>
  );
};

export default SignUp;
