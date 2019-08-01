import React, { useState } from "react";
import axios from "axios";
import { Loader, Form } from "semantic-ui-react";
import "../LoginForms/register.scss";

export const Register = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [userID, setUserID] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    location: ""
  });

  const handleChange = event => {
    setUserID({ ...userID, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        "https://bw19-wedding-planner-portfolio.herokuapp.com/api/auth/register",
        userID
      )
      .then(res => {
        console.log("RESPONSE", res);
        setIsLoading(false);
        localStorage.setItem("token", res.data.token);
        props.history.push("/portfolioView");
      })
      .catch(err => {
        setIsError(true);
        console.log("Server Error", err);
      });
    setIsError(false);
    setIsLoading(false);
  };

  console.log("This is the userId", userID);

  function loading() {
    if (isLoading) {
      return (
        <div>
          <h1>Creating Account</h1>
        </div>
      );
    }
  }

  function error() {
    if (isError) {
      return (
        <div>
          <h1>An error has occured, please try again!</h1>
        </div>
      );
    }
  }

  return (
    <div className="register">
      {loading()}
      {error()}
      <h2>Join PlanFull</h2>
      <p>
        A wedding planner platform and community of co-creators shaking up the
        industry—together.
      </p>
      <Form onSubmit={handleSubmit} className="formStyle">
        <Form.Group>
          <Form.Input
            label="First Name"
            name="firstName"
            type="text"
            onChange={handleChange}
            width={12}
          />
          <Form.Input
            label="Last Name"
            name="lastName"
            type="text"
            onChange={handleChange}
            width={12}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="User Name"
            name="username"
            type="text"
            onChange={handleChange}
            width={12}
          />
          <Form.Input
            label="Location"
            name="location"
            type="text"
            onChange={handleChange}
            width={12}
          />
        </Form.Group>
        <Form.Field>
          <Form.Input
            label="Email"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <Form.Input
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </Form.Field>

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

// <div className="Login">
// {loading()}
// {error()}
// <form onSubmit={handleSubmit}>
//   <label>First Name</label>
//   <input name="firstName" type="text" onChange={handleChange} />

//   <label>Last Name</label>
//   <input name="lastName" type="text" onChange={handleChange} />

//   <label>User Name</label>
//   <input name="username" type="text" onChange={handleChange} />

//   <label>Password</label>
//   <input name="password" type="password" onChange={handleChange} />

//   <label>Email</label>
//   <input name="email" type="email" onChange={handleChange} />

//   <label>Location</label>
//   <input name="location" type="text" onChange={handleChange} />

//   <button type="submit" />
// </form>
// </div>
