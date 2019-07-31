import React, { useEffect, useState } from "react";

import WeddingCard from '../WeddingCard/weddingCard';
import axios from "axios"; 

function GuestView() {

    const [guestView, setGuestView] = useState([])

    const [categories, setCategories] = useState({
        planner: "",
        theme: "", 
        location: "", 
    })

useEffect(() => {
    axios
    .get("https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/all")
    .then(event => {
        console.log("this is a list", event)
        setGuestView(event.data)
        })
        .catch(error => {
          console.log("ERROR", error)  
        })
}, [])

    const changeHandler = event => {
        setCategories({
            ...categories, [event.target.name]: event.target.value 
        })
    }


    return (
        <section>
            {/* drop down elements */}
            <div> 
               <form>
                   <label> Wedding Planner </label>
                    <input type="text" placeholder=" enter wedding planner" name="planner" onChange={ changeHandler } /> 
                    
                    <label> Wedding Theme </label>  
                    <input type="text" placeholder="enter preferred theme" name="theme" onChange={ changeHandler } />  

                    <label> Wedding Location </label>     
                    <input type="text" placeholder="enter wedding location" name="location" onChange={ changeHandler } /> 
                    <button> seurch </button> 
                </form> 
            </div>
                {/* Website main content */}
                <article> 
                    <div>
                    { guestView.map(view => {
                    return <WeddingCard key={view.id} view={ view } />
                    })}
                    </div> 
                </article>
        </section>
    ); 
}

export default GuestView;
