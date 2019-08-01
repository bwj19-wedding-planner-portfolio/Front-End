import React, { useEffect, useState } from "react";
import WeddingCard from "../WeddingCard/weddingCard";
import axios from "axios";
import { Card, Input, Icon } from "semantic-ui-react";
import { Margin } from "./styling"; 

function GuestView() {
  const [guestView, setGuestView] = useState([]);


  const [categories, setCategories] = useState({
    wedding_theme: "",
  });

  useEffect(() => {
    axios
      .get("https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/all")
      .then(event => {
        console.log("this is a list", event);
        setGuestView(event.data);
      })                             
      .catch(error => {
        console.log("ERROR", error);
      });
  }, []);

  const changeHandler = event => {
    setCategories({
      ...categories,
      [event.target.name]: event.target.value
    });
    console.log("CATEGORIES VALUE", categories);
  };

  const changeSubmit = event => {
    event.preventDefault();
  };

  /** FILTER ALL THE DATA IN ONE INPUT (Wedding planner) */
  const filterTheme = guestView.filter(guest => 
    guest.wedding_theme
    .toLowerCase()
    .includes(categories.wedding_theme.toLowerCase())
); 


  return (
      <Margin> 
      {/* searuch bar */}
      <div>
        <form onSubmit={changeSubmit}>
          <label> Wedding Theme </label>
          <Input 
            className="InputExampleFocus"
            icon={<Icon name='search' inverted circular link />}
            type="text"
            name="wedding_theme"
            onChange={changeHandler}>
            </Input>
        </form>
      </div>
      <Margin> </Margin>
      {/* Website main content */}
      <article>
        <Card.Group className="cardGroup" doubling centered itemsPerRow={3}>
          {filterTheme.map(view => {
            return <WeddingCard key={view.id} watch={view} />;
          })}
        </Card.Group>
      </article>
    </Margin>
  );
}

export default GuestView;
