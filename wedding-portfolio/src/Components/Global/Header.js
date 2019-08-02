import React from "react";
import logo from "../Assets/logo.svg";
import "../Global/Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        <div className="logo-text">
          <h1 className="logo-name">PlanFul</h1>
          <p className="tagline">Planning Made Easy</p>
        </div>
      </div>
    </header>
  );
};
