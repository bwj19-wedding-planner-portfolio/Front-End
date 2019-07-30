import React from "react";

function WeddingCard(props) {

    const {couple_name, planner, user_location, wedding_theme} = props

    const isLoggedIn = "true or false?"

    // add NavLink to more info button, which will make specific wedding object active and route to the single wedding component>

    //const [weddingToEdit, setWeddingToEdit] = useState({}) ---> add to where global state lives or the portfolio view?
    function grabWedding(wedding) { 
        props.setWeddingToEdit(wedding)
        //Put NavLink Here to wedding form
    }

    // add function to the delete button to add an onClick alert that asks if they wanted to delete the wedding, if yes, then remove the wedding from database

    return (
        <div>
            <img src="#" atl="Wedding photo"/>
            <h3>Couple: {couple_name}</h3>
            <p>Planner: {planner}</p>
            <p>Location: {user_location}</p>
            <p>Theme: {wedding_theme}</p>
            {/*condition ? true : false. or condition && element*/}
            {isLoggedIn 
                ? <button onClick={() => grabWedding(props)}>
                    Edit
                  </button> 
                : <button>More Info</button>
            }
            {isLoggedIn && <button>Delete</button>}
            
        </div>
    )
};

export default WeddingCard;