import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";

export const Register = props => {
  const [userID, setUserID] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: ""
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
        localStorage.setItem("token", res.data.token);
        props.history.push("/");
      })
      .catch(err => {
        // setIsLoading(false);
        // setError(err);
        console.log("Server Error", err);
      });
  };

  console.log("This is the userId", userID);

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input name="firstName" type="text" onChange={handleChange} />

        <label>Last Name</label>
        <input name="lastName" type="text" onChange={handleChange} />

        <label>User Name</label>
        <input name="username" type="text" onChange={handleChange} />

        <label>Password</label>
        <input name="password" type="password" onChange={handleChange} />

        <button type="submit" />
      </form>
    </div>
  );
};
