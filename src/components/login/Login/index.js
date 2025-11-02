import React from "react";
import InputField from "../../common/InputField";

const SignUp = () => {
  return (
    <form className="sign-up-container">
      <h2>Log in or sign up</h2>
      <h5>Please enter your details to proceed.</h5>
      <div
        style={{
          marginBottom: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <InputField
          label="Email"
          type="email"
          name="email"
          style={{
            borderBottom: "1px solid black",
            marginBottom: "10px",
            paddingBottom: "10px",
          }}
        />
        <label>Email</label>
      </div>
      <div
        style={{
          marginBottom: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <InputField
          label="Password"
          type="password"
          name="password"
          style={{
            borderBottom: "1px solid black",
            marginBottom: "10px",
            paddingBottom: "10px",
          }}
        />
        <label>Password</label>
      </div>
      <button
        type="submit"
        className="submit-button"
        style={{
          border: "1px solid black",
          borderRadius: "15px",
          padding: "15px",
          cursor: "not-allowed",
        }}
        disabled
      >
        Log in
      </button>
      <h5>Coming soon...</h5>
    </form>
  );
};

export default SignUp;
