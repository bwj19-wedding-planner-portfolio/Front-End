import React, { useContext } from "react";
import { Link, } from "react-router-dom";

import { Card, Image, Button } from "semantic-ui-react";
import { ActiveCardContext } from '../../Contexts/activeCardContext';
import { RouteContext } from '../../Contexts/routeContext';
import { axiosWithAuth } from "../../Utilities/axiosWithAuth";


function WeddingCard(props) {


    const routeProps = useContext(RouteContext)

    const { setActiveCard } = useContext(ActiveCardContext)

    const {id, photo, couple_name, planner, location, wedding_theme} = props.watch
    

    function isLoggedIn() {
        if (localStorage.getItem('token')) {
            return(
            <Card.Content extra style={{backgroundColor: "#DCB5F9"}}>
                <div>
                    <Button onClick={() => grabWedding(props.watch)}>
                        Edit
                    </Button> 
                    <Button onClick={() => deleteWedding(props.watch)}>
                        Delete
                    </Button>
                </div>
            </Card.Content>
            )
        } else {
            return ( 
                
                <Card.Content extra style={{backgroundColor: "#97D1FD"}}>
                    <div>
                        <Link to={`/singleWedding/${id}`}> 
                            More Info 
                        </Link>
                    </div>
                </Card.Content>
            
            )
        }
    }


    // adds function to the edit button
    function grabWedding(wedding) { 
        setActiveCard(wedding);
        console.log(wedding);
        routeProps.routeProps.history.push("/weddingForm")
    }
    // console.log(activeCard);



    // adds function to the delete button 
    function deleteWedding(wedding) {
        console.log(wedding);
        axiosWithAuth()
            .delete(`https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/${id}`)
            .then(res => {
                props.setPortFolioView(props.portFolioView.filter((post) => {
                    return post.id !== id
                }))
            })
            .catch(err => {
                console.log("error", err)
            })
    }

    const plannerColor = "#DCB5F9"
    const guestColor = "#97D1FD"
    

    return (
             <Card raised >
                <Image src={photo} wrapped ui={false} atl="Wedding photo" />
                <Card.Content>
                    <Card.Header className="coupleName">{couple_name}</Card.Header>
                    <Card.Meta>
                        <span className="date">Planner: {planner}</span>
                    </Card.Meta>
                    <Card.Description>Theme: {wedding_theme}</Card.Description>
                    <Card.Description>Location: {location}</Card.Description>
                 
                </Card.Content>
                    {isLoggedIn()}
            </Card>            
    )
};

export default WeddingCard;