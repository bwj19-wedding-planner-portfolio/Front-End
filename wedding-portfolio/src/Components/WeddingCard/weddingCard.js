import React from "react";
import { Card, Image } from 'semantic-ui-react'

function WeddingCard(props) {

    const {photo, couple_name, planner, user_location, wedding_theme} = props

    const isLoggedIn = "true or false?"

    // add NavLink to more info button, which will make specific wedding object active and route to the single wedding component>

    //const [weddingToEdit, setWeddingToEdit] = useState({}) ---> add to where global state lives or the portfolio view?
    function grabWedding(wedding) { 
        props.setWeddingToEdit(wedding)
        //Put NavLink Here to wedding form
    }

    // add function to the delete button to add an onClick alert that asks if they wanted to delete the wedding, if yes, then remove the wedding from database

    return (
             <Card>
                <Image src={photo} wrapped ui={false} atl="Wedding photo" />
                <Card.Content>
                    <Card.Header>{couple_name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Planner: {planner}</span>
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
                    {isLoggedIn 
                        ? <button onClick={() => grabWedding(props)}>
                            Edit
                        </button> 
                        : <button>More Info</button>
                    }
                    {isLoggedIn && <button>Delete</button>}
                </Card.Content>
            </Card>            
    )
};

export default WeddingCard;