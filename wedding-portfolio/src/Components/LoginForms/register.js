import React, { useState, useContext } from "react";
import axios from "axios";
import { GreetingContext } from "../../Contexts/greetingContext"

export const Register = (props) => {
  const { setGreeting } = useContext(GreetingContext);

  const [userID, setUserID] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    location: "",
  });

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
        setGreeting(res.data.username);
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

        <label>Email</label>
        <input name="email" type="email" onChange={handleChange} />

        <label>Location</label>
        <input name="location" type="text" onChange={handleChange} />

        <button type="submit" />
      </form>
    </div>
  );
};

//  user: {
//   userId: “”,
//    firstName: "",
//    lastName: "",
//    username: "",
//    password: "",
//    weddings: [
//      {
//        weddingId: "",
//        plannerId: “”,
//        date: “”,
//        image: "",
//        description: "",
//        vendors: "",
//        theme: "",
//        location: ""
//      }
//    ]
//  }
