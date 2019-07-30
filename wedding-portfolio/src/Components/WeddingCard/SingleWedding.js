import React from "react";

function SingleWedding(props) {

    const {couple_name, planner, user_location, wedding_theme, vendors} = props

    return (
        <div>
            <img src="#" atl="Wedding photo"/>
            <h3>Couple: {couple_name}</h3>
            <p>Planner: {planner}</p>
            <p>Location: {user_location}</p>
            <p>Theme: {wedding_theme}</p>
            <p>Vendors: {vendors}</p>
        </div>
    )
};

export default SingleWedding;