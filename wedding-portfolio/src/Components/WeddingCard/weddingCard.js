import React from "react";

function WeddingCard(props) {
    const {title, planner, location, theme} = props

    return (
        <div>
            <img src="#" atl="Wedding photo"/>
            <h3>{title}</h3>
            <p>Planner: {planner}</p>
            <p>Location: {location}</p>
            <p>Theme: {theme}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
};

export default WeddingCard;