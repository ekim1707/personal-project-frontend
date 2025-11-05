import React from "react";
import InputField from "../../components/common/InputField";
import {
  Form,
  FormField,
  Header,
  Button,
  Grid,
  Image,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <Grid
      className="sign-up-page-container"
      style={{
        height: "100vh",
      }}
    >
      <Grid.Row
        columns={2}
        centered
        style={{
          padding: "250px",
          display: "flex",
          height: "100%",
          alignItems: "flex-start",
        }}
      >
        <Grid.Column style={{ paddingLeft: "100px" }}>
          <Header as="h2" textAlign="left">
            Sign Up
          </Header>
          <Header as="h5" textAlign="left">
            Welcome! Sign up to create your account.
          </Header>
          <Image
            src={`${process.env.PUBLIC_URL}/img/peachtree.png`}
            alt="Logo"
            style={{ height: "auto", width: "60%" }}
          />
        </Grid.Column>
        <Grid.Column style={{ padding: "0px 100px" }}>
          <Form className="sign-up-container">
            <FormField>
              <label>First Name</label>
              <InputField label="First Name" type="text" name="first_name" />
            </FormField>
            <FormField>
              <label>Last Name</label>
              <InputField label="Last Name" type="text" name="last_name" />
            </FormField>
            <FormField>
              <label>Email</label>
              <InputField label="Email" type="email" name="email" />
            </FormField>
            <FormField>
              <label>Password</label>
              <InputField label="Password" type="password" name="password" />
            </FormField>
            <FormField>
              <label>Confirm Password</label>
              <InputField
                label="Confirm Password"
                type="password"
                name="confirm_password"
              />
            </FormField>
            <Button
              type="submit"
              className="submit-button"
              disabled
              style={{ width: "100%" }}
            >
              Create Account
            </Button>
          </Form>
          <p style={{ marginTop: "10px", textAlign: "right" }}>
            Already have an account? <NavLink to="/">Sign In</NavLink>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default SignUp;
