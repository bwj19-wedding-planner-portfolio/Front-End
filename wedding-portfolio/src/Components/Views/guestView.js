import React from 'react'
import WeddingCard from '../WeddingCard/weddingCard';

function guestView() {
    return (
        <section>
            {/* Top section of the page content  */}
            <div> 
                <h1> Wedding Planner Portfolio </h1>
            </div>
            <div>
                <button> Couples </button>
            </div>
            <div>
                <button> Wedding Planners </button> 
            </div>
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
                        <WeddingCard /> 
                    </div> 
                </article>
        </section>
    ); 
}

export default guestView; 
