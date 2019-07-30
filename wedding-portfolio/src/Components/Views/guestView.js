import React, { useEffect, useState } from "react";
import WeddingCard from '../WeddingCard/weddingCard';
import axios from "axios"; 

function GuestView() {

    const [guestView, setGuestView] = useState([])

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

    return (
        <section>
            {/* drop down elements */}
            <div> 
               <form>
                   <label> Wedding Planner </label>
                    <input type="text" placeholder=" enter wedding planner" naem="name" /> 
                    
                    <label> Wedding Theme </label>  
                    <input type="text" placeholder="enter preferred theme " />  

                    <label> Wedding Location </label>     
                    <input type="text" placeholder="enter wedding location" /> 
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
