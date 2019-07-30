//Dependancies//
import React, { useState } from "react";
import { Route } from "react-router-dom";

//Styling//
import "./App.css";

//Components//
import GuestView from "./Components/Views/guestView";
import PortfolioView from "./Components/Views/portfolioView.js";
import { Register } from "./Components/LoginForms/register";
import { Login } from "./Components/LoginForms/login";
import { NavBar } from "./Components/Global/NavBar";
import { Header } from "./Components/Global/Header";
// import WeddingForm from "./Components/WeddingCard/weddingForm";
import SingleWedding from "./Components/WeddingCard/SingleWedding";

//Utilities//
import { GreetingContext } from "./Contexts/greetingContext";
import { WeddingsArrayContext } from "./Contexts/weddingContext";
import { PrivateRoute } from "./Utilities/PrivateRoute";

function App(props) {
  console.log("app props", props)

  const [greeting, setGreeting] = useState(null)
  const [weddingsArray, setWeddingsArray] = useState("Sneaky Wedding Array")
  
  return (
    <GreetingContext.Provider value={{greeting, setGreeting}}>
      <WeddingsArrayContext.Provider value={{weddingsArray, setWeddingsArray}}>
      <div className="App">  

        <div> 
          <Header />
          <NavBar routeProps={props}/>
        </div> 

        <Route exact path="/" component={GuestView} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>


        {/* Private Routes */}
        <PrivateRoute exact path="/portfolioView" component={PortfolioView}/>
        {/* <Route exact path="/weddingForm" component={WeddingForm} /> */}
        <PrivateRoute exact path="/singleWedding" component={SingleWedding} />

      </div>
      </WeddingsArrayContext.Provider>
    </GreetingContext.Provider>

  )
}

export default App;

// STATE (contexts to pass?):
// 		weddings
// 		user
//    loggedIn

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
