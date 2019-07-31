import React, { useState, useContext } from "react";
import axios from "axios";
import { GreetingContext } from "../../Contexts/greetingContext"

export const Login = (props) => {
  const { setGreeting } = useContext(GreetingContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
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
        console.log("response", res)
        localStorage.setItem('token', res.data.token);
        setGreeting(res.data.username);
        props.history.push("/portfolioView");
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
