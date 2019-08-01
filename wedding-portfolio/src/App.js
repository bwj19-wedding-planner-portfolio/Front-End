//Dependencies//
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
import WeddingForm from "./Components/WeddingCard/weddingForm";
import SingleWedding from "./Components/WeddingCard/SingleWedding";

//Utilities//
import { PrivateRoute } from "./Utilities/PrivateRoute";

//Contexts//
import { RouteContext } from "./Contexts/routeContext";
import { ActiveCardContext } from "./Contexts/activeCardContext";

function App(props) {
  //App level Contexts//
  const routeProps = props
  const [activeCard, setActiveCard] = useState(null)
  
  return (
    // <GreetingContext.Provider value={{greeting, setGreeting}}>
      <ActiveCardContext.Provider value={{activeCard, setActiveCard}}>
        <RouteContext.Provider value={{routeProps}}>

          <div className="App">  

            <div> 
              <Header />
              <NavBar />
            </div> 

            <Route exact path="/" component={GuestView} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/singleWedding/:id" component={SingleWedding} /> 

            {/* Private Routes */}
            <PrivateRoute exact path="/portfolioView" component={PortfolioView}/>
            <PrivateRoute exact path="/weddingForm" component={WeddingForm} />
            
            
          </div>
        </RouteContext.Provider>
      </ActiveCardContext.Provider>

  )
}

export default App;

