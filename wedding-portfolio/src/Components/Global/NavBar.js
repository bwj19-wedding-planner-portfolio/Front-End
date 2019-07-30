import React, {useContext} from "react"
import {UserContext} from "/Users/lauradaugherty/Wedding Planner/Front-End/wedding-portfolio/src/Contexts/userContext.js"
import { NavLink } from "react-router-dom"

export const NavBar = (props) => {
  const { user, setUser } = useContext(UserContext)
  console.log("user", user)

  const logout = () => {
    console.log("logout props", props.routeProps)
    props.routeProps.history.push("/")
    localStorage.clear()
    setUser(null)
  }

  if (localStorage.getItem('token')) {
    return(
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/">Guest View</NavLink>
        <NavLink to="/portfolioView">Portfolio View</NavLink>
        <NavLink to="/weddingForm">Add Wedding</NavLink>
        <button onClick={logout}>
          Logout
        </button>
      </nav>
    )
  } else {
    return (
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/">Guest View</NavLink>
      </nav>
    )
  }

}
