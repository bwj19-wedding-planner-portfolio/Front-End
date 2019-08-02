import React, { useEffect, useState } from "react"; 
import WeddingCard from "../WeddingCard/weddingCard.js"; 
import { axiosWithAuth } from "../../Utilities/axiosWithAuth.js";
import { Card } from "semantic-ui-react";
import { Margin } from "./styling"; 


// GET posts by logged in user through AxiosWithAuth//

function PortfolioView() {

const [portFolioView, setPortFolioView] = useState([])

useEffect(() => {
    axiosWithAuth()
    .get("https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts")
    .then(look => {
        setPortFolioView(look.data.posts)
        })
        .catch(error => {
        console.log("ERROR", error)  
            })
    }, [])
if(!portFolioView || portFolioView.length === 0) {
    return (
        <section> 
               {/* Webstie main content */}
            <article> 
                 <div> 
                    <h3 style={{color: "#FA80AF"}}>
                        Add Your First Post To Get Started!
                    </h3>
                 </div>
            </article>
        </section>
    )
} else {
    return(
        <Margin> 
<section> 
       {/* Webstie main content */}
       <Margin> </Margin>
    <article> 
        <Card.Group className='cardGroup' doubling centered itemsPerRow={3}>
           { portFolioView.map(watch => {
               return <WeddingCard key={watch.id} watch={ watch } setPortFolioView={setPortFolioView} portFolioView={portFolioView} /> 
           })} 
        </Card.Group>
    </article>
</section>
    </Margin>
    ); 
}
}


export default PortfolioView; 