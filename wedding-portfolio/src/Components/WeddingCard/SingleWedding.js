import React from "react";

function SingleWedding(props) {

    const {title, planner, location, theme, vendors} = props

    return (
        <div>
            <img src="#" atl="Wedding photo"/>
            <h3>Couple: {title}</h3>
            <p>Planner: {planner}</p>
            <p>Location: {location}</p>
            <p>Theme: {theme}</p>
            <p>Vendors: {vendors}</p>
        </div>
    )
};

export default SingleWedding;