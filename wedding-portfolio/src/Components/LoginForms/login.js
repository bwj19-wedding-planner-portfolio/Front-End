import React, { useState } from "react";
import axios from "axios";
import { Loader, Form } from "semantic-ui-react";
import "../LoginForms/login.scss";

export const Login = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const sendCreds = e => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        "https://bw19-wedding-planner-portfolio.herokuapp.com/api/auth/login",
        credentials
      )
      .then(res => {
        console.log("response", res);
        setIsLoading(false);
        localStorage.setItem("token", res.data.token);
        props.history.push("/portfolioView");
      })
      .catch(err => {
        setIsError(true);
        setIsLoading(false);
      });
    setIsError(false);
  };

  function loading() {
    console.log("inside loading state render function");
    console.log("isLoading", isLoading);
    if (isLoading) {
      return (
        <div className="alertMessage">
          <Loader active inline="centered" className="loader" />
          <p className="loader">Now Loading</p>
        </div>
      );
    }
  }
  function error() {
    console.log("inside error state render function");
    console.log("iserror", isError);
    if (isError) {
      return (
        <div className="messageContainer">
          <h3>You must register before you can do that!</h3>

          <p>Sign up to be part of our awesome list of wedding planners!</p>
        </div>
      );
    }
  }

  return (
    <div className="login">
      <h2 className="formHeader">
        Welcome Back
      </h2>
      <p>
        Login to see your portfolio
      </p>
      <p>
        Don't have an account? Click sign up to join our amazing community
      </p>
      <Form onSubmit={sendCreds} className="formStyle">
        <Form.Field>
          <label>Username</label>
          <input
            className="inputStyle"
            name="username"
            type="text"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            className="inputStyle"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </Form.Field>
        <button type="submit">Submit</button>
      </Form>

      {loading()}
      {error()}
    </div>
  );
};
