import React, { useEffect, useState } from "react";
import WeddingCard from "../WeddingCard/weddingCard";
import axios from "axios";
import { Item } from "semantic-ui-react";

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
    <section>
      {/* drop down elements */}
      <div>
        <form onSubmit={changeSubmit}>
          <label> Wedding Theme </label>
          <input
            type="text"
            placeholder=" enter wedding theme"
            name="wedding_theme"
            onChange={changeHandler}
          />
        </form>
      </div>
      {/* Website main content */}
      <article>
        <div>
          {filterTheme.map(view => {
            return <WeddingCard key={view.id} watch={view} />;
          })}
        </div>
      </article>
    </section>
  );
}

export default GuestView;
