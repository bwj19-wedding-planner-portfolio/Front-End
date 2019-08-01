import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { RouteContext } from '../../Contexts/routeContext'
import { Menu, Button, Segment } from 'semantic-ui-react'

export const NavBar = props => {
  const routeProps = useContext(RouteContext)

  const logout = () => {
    console.log("logout props", props.routeProps);
    routeProps.routeProps.history.push("/");
    localStorage.clear();
  };

  const portfolioAccess = () => {
    if (localStorage.getItem("token")) {
      return (
        <>
          <Menu.Item 
            header as={NavLink} 
            exact to="/portfolioView" 
            activeClassName="active"
            >
            Portfolio
          </Menu.Item>

          <Menu.Item 
            header as={NavLink} 
            exact to="/weddingForm" 
            activeClassName="active"
            >
            Add Wedding
          </Menu.Item>

          <Button size='tiny' onClick={logout}>Logout</Button>
        </>
      )
    } else {
      return (
        <Menu.Item 
        header as={NavLink} 
        exact to="/" 
        activeClassName="active"
        >
        GuestView
      </Menu.Item>
      )
    }
  }

  return (
    <div>
    <Segment attached>
      <Menu>
        <Menu.Item 
          header as={NavLink} 
          exact to="/login" 
          activeClassName="active"
          >
          Login
        </Menu.Item>
        <Menu.Item 
          header as={NavLink} 
          exact to="/register" 
          activeClassName="active"
          >
          Sign Up
        </Menu.Item>
        {portfolioAccess()}


      </Menu>
    </Segment>
  </div>
  )
}
