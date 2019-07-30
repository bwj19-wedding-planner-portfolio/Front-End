import React, { useContext } from "react";
import { GreetingContext } from "../../Contexts/greetingContext";
import { NavLink } from "react-router-dom";

export const NavBar = props => {
  const { greeting, setGreeting } = useContext(GreetingContext);
  console.log("greeting", greeting);

  const logout = () => {
    console.log("logout props", props.routeProps);
    props.routeProps.history.push("/");
    localStorage.clear();
    setGreeting("Hi!");
  };

  if (localStorage.getItem("token")) {
    return (
      <nav>
        <h3>{greeting}</h3>
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
        <h3>{greeting}</h3>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/">Guest View</NavLink>
      </nav>
    );
  }
};
