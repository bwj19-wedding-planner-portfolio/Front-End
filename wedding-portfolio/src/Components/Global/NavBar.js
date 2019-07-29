import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/guestView">Guest View</Link>
      <Link to="/portfolioView">Portfolio View</Link>
      <Link to="/weddingForm">Add Wedding</Link>
    </nav>
  )
}


///conditional rendering (if "loggedIn" render "portfolio View" and "add wedding")