import React from "react"; 
import WeddingCard from "../WeddingCard/weddingCard.js"; 
import guestView from "../Views/guestView.js"


// GET posts by logged in user through AxiosWithAuth//

function PortfolioView() {

    return(
<section> 
        {/*  Top section of the page content  */}
      <div> 
          <h1> Wedding Planner Portfolio </h1>
      </div>
      <div>
          <button onClick="guestView"> Couples </button>
      </div>
      <div>
          <button> Wedding Planners </button> 
      </div>
      <div>
          <div>
              <button> Create New </button>
          </div>
          <div>
              <button> Log Out </button>
          </div>
      </div>

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