import React, {useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";
import axios from "axios";

function SingleWedding(props) {
  const [moreInfo, setMoreInfo] = useState({})

    useEffect(() => {
        axios
          .get("https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/all")
          .then(response => {
            console.log("singlewedding get", response.data);
            setMoreInfo(response.data);
          })
          .catch(error => {
            console.log("Error", error);
          });
      }, []);

  const {
    photo,
    couple_name,
    planner,
    user_location,
    wedding_theme,
    vendors
  } = props;

  console.log("single wedding props", props)

  return (
    <div>
      singlewedding
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
