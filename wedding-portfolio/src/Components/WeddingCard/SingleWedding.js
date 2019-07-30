import React from "react";
import { Card, Image } from "semantic-ui-react";

function SingleWedding(props) {
  const {
    photo,
    couple_name,
    planner,
    user_location,
    wedding_theme,
    vendors
  } = props;

  return (
    <div>
      <Card>
        <Image src={photo} wrapped ui={false} atl="Wedding photo" />
        <Card.Content>
          <Card.Header>Couple: {couple_name}</Card.Header>
          <Card.Meta>
            <span className="date">Planner: {planner}</span>
          </Card.Meta>
          <Card.Description>Location: {user_location}</Card.Description>
          <Card.Description>Theme: {wedding_theme}</Card.Description>
          <Card.Description>Vendors: {vendors}</Card.Description>
        </Card.Content>
        <Card.Content extra />
      </Card>
    </div>
  );
}

export default SingleWedding;
