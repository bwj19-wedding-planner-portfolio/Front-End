import React, { useEffect, useState } from "react";

import WeddingCard from "../WeddingCard/weddingCard";
import axios from "axios";
import { Item } from "semantic-ui-react";

function GuestView() {
  const [guestView, setGuestView] = useState([]);

  const [categories, setCategories] = useState({
    description: "",
    wedding_theme: "",
    location: ""
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
  const filterPlanner = guestView.filter(guest =>
    guest.description
      .toLowerCase()
      .includes(categories.description.toLowerCase())
  );

  console.log("FILTERED", filterPlanner);

  return (
    <section>
      {/* drop down elements */}
      <div>
        <form onSubmit={changeSubmit}>
          <label> Wedding Planner </label>
          <input
            type="text"
            placeholder=" enter wedding planner"
            name="description"
            onChange={changeHandler}
          />

          <label> Wedding Theme </label>
          <input
            type="text"
            placeholder="enter preferred theme"
            name="wedding_theme"
            onChange={changeHandler}
          />

          <label> Wedding Location </label>
          <input
            type="text"
            placeholder="enter wedding location"
            name="location"
            onChange={changeHandler}
          />
          <button type="submit"> Search </button>
        </form>
      </div>
      {/* Website main content */}
      <article>
        <div>
          {guestView.map(view => {
            return <WeddingCard key={view.id} view={view} />;
          })}
        </div>
      </article>
    </section>
  );
}

export default GuestView;
