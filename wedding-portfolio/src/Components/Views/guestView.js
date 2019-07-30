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
                    <button> Wedding Planner </button>   
                </div>
                <div> 
                    <button> Wedding Theme </button>     
                </div>
                <div> 
                    <button> Wedding Location </button>     
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
