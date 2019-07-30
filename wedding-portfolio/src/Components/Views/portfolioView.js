import React, { useEffect, useState } from "react"; 
import WeddingCard from "../WeddingCard/weddingCard.js"; 
import { axiosWithAuth } from "../../Utilities/axiosWithAuth.js"; 


function PortfolioView() {

const [portFolioView, setPortFolioView] = useState([])

useEffect(() => {
    axiosWithAuth
    .get("https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts")
    .then(look => {
         console.log("this is a list", look)
        setPortFolioView(look.data)
        })
        .catch(error => {
        console.log("ERROR", error)  
            })
    }, [])

    return(
<section> 
       {/* Webstie main content */}
    <article> 
         <div> 
            <WeddingCard /> 
         </div>
    </article>
</section>
    ); 
}

export default PortfolioView; 