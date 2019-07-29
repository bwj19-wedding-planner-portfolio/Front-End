import React from "react";
import "./App.css";
import { longStackSupport } from "q";
import { Login } from "./Components/LoginForms/login";
import { Register } from "./Components/LoginForms/register";

function App() {
  return (
    <div className="App">
      <h1> LOGIN </h1>
      <Login />
      <br />
      <h1> REGISTRATION </h1>
      <Register />
    </div>
  );
}

export default App;

// STATE (contexts to pass?):
// 		weddings
// 		user

// NAVBAR
// simple log in or Log out
// if Logged in has links to
//   add
//   log out
//   guest view
//   portfolio view
// IF Logged OUT
//logIn button

// 	No Auth Routes:
// 		“/Login” {Login}
// 		“/Register” {Register}
// 		“/Guest” {Guest}
// 	With Auth Private Routes:
// 		“/Portfolio”{Portfolio}
// 		“/weddingForm”{weddingForm}

// 	Logout:
// 		logout=(event) => {
// 		this.props.history.push(‘/guest’)
// 		localStorage.clear()
// 		}
// 	checkLogin:
// 		if user truths state => render Component otherwise send to “/login”

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
