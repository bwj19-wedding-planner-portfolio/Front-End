import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setCredentials({ [event.target.name]: event.target.value });
  };

  const sendCreds = e => {
    e.preventDefault();
    axios
      .post(
        "https://bw19-wedding-planner-portfolio.herokuapp.com/api/auth/login",
        credentials
      )
      .then(res => {
        // setIsLoading(true);
        // console.log("function", setLoggedIn);
        // setLoggedIn(true);
        // console.log("loggedIn State", loggedIn);
        this.props.history.push("/");
      })
      .catch(err => {
        // setIsLoading(false);
        // setError(err);
      });
  };

  return (
    <div className="Login">
      <form onSubmit={sendCreds}>
        <label>Username</label>
        <input name="username" type="text" onChange={handleChange} />

        <label>Password</label>
        <input name="password" type="password" onChange={handleChange} />
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
