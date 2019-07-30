<<<<<<< HEAD
import React, { useContext } from "react";
import { UserContext } from "../../Contexts/userContext";
import { NavLink } from "react-router-dom";

export const NavBar = props => {
  const { user, setUser } = useContext(UserContext);
  console.log("user", user);

  const logout = () => {
    console.log("logout props", props.routeProps);
    props.routeProps.history.push("/");
    localStorage.clear();
    setUser(null);
  };
=======
import React, {useContext} from "react"
import {GreetingContext} from "../../Contexts/greetingContext"
import { NavLink } from "react-router-dom"

export const NavBar = (props) => {
  const { greeting, setGreeting } = useContext(GreetingContext)
  console.log("greeting", greeting)

  const logout = () => {
    console.log("logout props", props.routeProps)
    props.routeProps.history.push("/")
    localStorage.clear()
    setGreeting("Hi!")
  }
>>>>>>> 8a687d2af1491d7eb5f285d66a4bfc4dae082937

  if (localStorage.getItem("token")) {
    return (
      <nav>
        <h3>
          {greeting}
        </h3>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/">Guest View</NavLink>
        <NavLink to="/portfolioView">Portfolio View</NavLink>
        <NavLink to="/weddingForm">Add Wedding</NavLink>
        <button onClick={logout}>Logout</button>
      </nav>
    );
  } else {
    return (
      <nav>
        <h3>
          {greeting} 
        </h3>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/">Guest View</NavLink>
      </nav>
    );
  }
};
