import React, { useEffect, useState } from "react"; 
import WeddingCard from "../WeddingCard/weddingCard.js"; 
import { axiosWithAuth } from "../../Utilities/axiosWithAuth.js";
import { Card } from "semantic-ui-react";



// GET posts by logged in user through AxiosWithAuth//

function PortfolioView() {

const [portFolioView, setPortFolioView] = useState([])

useEffect(() => {
    axiosWithAuth()
    .get("https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts")
    .then(look => {
         console.log("this is a list", look)
        setPortFolioView(look.data.posts)
        })
        .catch(error => {
        console.log("ERROR", error)  
            })
    }, [])

    return(
<section> 
       {/* Webstie main content */}
    <article> 
        <Card.Group centered itemsPerRow={4}>
           { portFolioView.map(watch => {
               return <WeddingCard key={watch.id} watch={ watch } setPortFolioView={setPortFolioView} portFolioView={portFolioView} /> 
           })} 
        </Card.Group>
    </article>
</section>
    ); 
}

export default PortfolioView; 