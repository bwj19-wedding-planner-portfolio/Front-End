import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
// import SingleWedding from "./singleWedding.js"


function WeddingCard(props) {
    console.log(props)

    const [weddingToEdit, setWeddingToEdit] = useState(null)

    const {photo, couple_name, firstName, user_location, wedding_theme} = props

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
            ) }
        // } else {
        //     return (
                
        //         // <Link to="/singleWedding">More Info</Link>
               
        //     // <Route path="/singleWedding" render={props => <SingleWedding {...props} wedding={wedding} /> } />
        //     )
        // }
    }

    // add NavLink to more info button, which will make specific wedding object active and route to the single wedding component>

    //const [weddingToEdit, setWeddingToEdit] = useState({}) ---> add to where global state lives or the portfolio view?
    function grabWedding(wedding) { 
        setWeddingToEdit(wedding);
        console.log(wedding);
        // history.push("/weddingForm")
        
    }

    // add function to the delete button to add an onClick alert that asks if they wanted to delete the wedding, if yes, then remove the wedding from database
    function deleteWedding(wedding) {
        console.log(wedding);
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
                    {/* <Card.Description>
                        Matthew is a musician living in Nashville.
                    </Card.Description> */}
                </Card.Content>
                <Card.Content extra>
                    {/*condition ? true : false. or condition && element*/}
                    {isLoggedIn()}

                    {/* {isLoggedIn 
                        ? <Button onClick={() => grabWedding(props)}>
                            Edit
                        </Button> 
                        : <Link>More Info</Link>
                    } */}

                    {/* {isLoggedIn && <Button onClick={() => deleteWedding(props)}>
                        Delete
                    </Button>
                    } */}
                </Card.Content>
            </Card>            
    )
};

export default WeddingCard;