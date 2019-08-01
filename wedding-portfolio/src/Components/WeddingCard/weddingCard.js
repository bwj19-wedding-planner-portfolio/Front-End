import React, { useState, useContext, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
import { PrivateRoute } from "../../Utilities/PrivateRoute";
import { ActiveCardContext } from '../../Contexts/activeCardContext';
import { RouteContext } from '../../Contexts/routeContext';
import { axiosWithAuth } from "../../Utilities/axiosWithAuth";
import SingleWedding from "./SingleWedding.js"

import WeddingForm from "./weddingForm.js"

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
                    <Link to={`/singleWedding/${id}`}> 
                        More Info 
                    </Link>
                </div>
            )
        }
    }


    // adds function to the edit button
    function grabWedding(wedding) { 
        setActiveCard(wedding);
        console.log(wedding);
        routeProps.routeProps.history.push("/weddingForm")
    }


    // adds function to the delete button 
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
             <Card raised color="pink">
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