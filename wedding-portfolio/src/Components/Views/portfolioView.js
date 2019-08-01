import React, { useEffect, useState } from "react"; 
import WeddingCard from "../WeddingCard/weddingCard.js"; 
import { axiosWithAuth } from "../../Utilities/axiosWithAuth.js";




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
         <div> 
           { portFolioView.map(watch => {
               return <WeddingCard key={watch.id} watch={ watch } setPortFolioView={setPortFolioView} portFolioView={portFolioView} /> 
           })} 
         </div>
    </article>
</section>
    ); 
}

export default PortfolioView; 