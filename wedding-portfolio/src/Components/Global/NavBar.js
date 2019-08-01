import React, { useContext } from "react";
// import { GreetingContext } from "../../Contexts/greetingContext";
import { NavLink } from "react-router-dom";
import { RouteContext } from '../../Contexts/routeContext'
import { Menu, Button, Header, Segment } from 'semantic-ui-react'

export const NavBar = props => {
  const routeProps = useContext(RouteContext)
  // const { greeting, setGreeting } = useContext(GreetingContext);

  // console.log("greeting", greeting);

  const logout = () => {
    console.log("logout props", props.routeProps);
    routeProps.routeProps.history.push("/");
    localStorage.clear();
    // setGreeting("Hi There!");
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

  // const greetingMessage = () => {
  //   if (localStorage.getItem("token")) {
  //     return (
  //       <>
  //         Nice to see you {greeting}!
  //       </>
  //     )
  //   } else {
  //     return (
  //       <>
  //         {greeting}
  //       </>
  //     )
  //   }
  // }

  return (
    <div>
    {/* <Header as='h2' attached='top'>
      {greetingMessage()}
    </Header> */}
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
