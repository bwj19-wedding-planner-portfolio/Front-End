import React from "react"; 
import WeddingCard from "../WeddingCard/weddingCard.js"; 

function PortfolioView() {

    return(
<section> 
        {/*  Top section of the page  */}
      <div> 
          <h1> Wedding Planner Portfolio </h1>
      </div>
      <div>
          <button> Couples </button>
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

       {/* Middle section of the webstie  */}
    <article> 
         <div> 
            <WeddingCard /> 
         </div>
    </article>
</section>
    ); 
}

export default PortfolioView; 