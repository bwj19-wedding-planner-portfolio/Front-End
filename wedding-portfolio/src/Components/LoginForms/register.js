import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";

export const Register = props => {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isError, setIsError ] = useState(false)

  const [userID, setUserID] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    location: ""
  });

  // VALIDATION SCHEMA
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  });
  // END OF VALIDATION

  const handleChange = event => {
    setUserID({ ...userID, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true)
    axios
      .post(
        "https://bw19-wedding-planner-portfolio.herokuapp.com/api/auth/register",
        userID
      )
      .then(res => {
        // setIsLoading(true);
        // console.log("function", setLoggedIn);
        // setLoggedIn(true);
        // console.log("loggedIn State", loggedIn);
        console.log("RESPONSE", res);
        setIsLoading(false)
        localStorage.setItem("token", res.data.token);
        // setGreeting(res.data.username);
        props.history.push("/portfolioView");
      })
      .catch(err => {
        setIsError(true)
        // setIsLoading(false);
        // setError(err);
        console.log("Server Error", err);
      });
      setIsError(false)
      setIsLoading(false)
  };

  console.log("This is the userId", userID);

  function loading() {
    if (isLoading) {
      return (
        <div>
          <h1>
            Creating Account
          </h1>
        </div>
      )
    }
  }

  function error() {
    if (isError) {
      return (
        <div>
          <h1>
            An error has occured, please try again!
          </h1>
        </div>
      )
    }
  }


  return (
    <div className="Login">
      {loading()}
      {error()}
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input name="firstName" type="text" onChange={handleChange} />

        <label>Last Name</label>
        <input name="lastName" type="text" onChange={handleChange} />

        <label>User Name</label>
        <input name="username" type="text" onChange={handleChange} />

        <label>Password</label>
        <input name="password" type="password" onChange={handleChange} />

        <label>Email</label>
        <input name="email" type="email" onChange={handleChange} />

        <label>Location</label>
        <input name="location" type="text" onChange={handleChange} />

        <button type="submit" />
      </form>
    </div>
  );
};
