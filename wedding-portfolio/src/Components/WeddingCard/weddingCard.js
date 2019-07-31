import React, { useState, useContext } from "react";
import { Link, Route } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
import { PrivateRoute } from "../../Utilities/PrivateRoute";
import { ActiveCardContext } from '../../Contexts/activeCardContext'
import { RouteContext } from '../../Contexts/routeContext'
import { axiosWithAuth } from "../../Utilities/axiosWithAuth";

import SingleWedding from "./SingleWedding.js"


function WeddingCard(props) {
    console.log("wedding card props", props)

    const routeProps = useContext(RouteContext)

    const { activeCard, setActiveCard} = useContext(ActiveCardContext)

    const {id, photo, couple_name, firstName, user_location, wedding_theme} = props.watch
    

    function isLoggedIn() {
        if (localStorage.getItem('token')) {
            return(
                <div>
                <Button onClick={() => grabWedding(props)}>
                    Edit
                </Button> 
                <Button onClick={() => deleteWedding(props)}>
                    Delete
                </Button>
                </div>
            )
        } else {
            return ( 
                <div>

                {console.log(props)}
                <Link to="/singleWedding">More Info</Link>
                <Route 
                    path="/singleWedding" 
                    component={SingleWedding
                    // render={props => <SingleWedding props={props.view}
                    }
                />
                </div>
            )
        }
    }


    //const [weddingToEdit, setWeddingToEdit] = useState({}) ---> add to where global state lives or the portfolio view?
    function grabWedding(wedding) { 
        setActiveCard(wedding);
        console.log(wedding);
        routeProps.routeProps.history.push("/weddingForm")
    }

    // add function to the delete button 
    function deleteWedding(wedding) {
        console.log(wedding);
        axiosWithAuth()
            .delete(`https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/${id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log("error", err)
            })
    }

    return (
             <Card>
                <Image src={photo} wrapped ui={false} atl="Wedding photo" />
                <Card.Content>
                    <Card.Header>{couple_name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Planner: {firstName}</span>
                    </Card.Meta>
                    <Card.Meta>
                        <span className='date'>Location: {user_location}</span>
                    </Card.Meta>
                    <Card.Meta>
                        <span className='date'>Theme: {wedding_theme}</span>
                    </Card.Meta>
                 
                </Card.Content>
                <Card.Content extra>
                    {isLoggedIn()}
                </Card.Content>
            </Card>            
    )
};

export default WeddingCard;