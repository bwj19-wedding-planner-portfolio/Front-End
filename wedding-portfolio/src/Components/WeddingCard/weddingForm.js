import React from "react";

function WeddingForm() {

    return (
        <div>
            <form>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                />
                <label>Location:</label>
                <input
                    type="text"
                    name="location"
                />
                <label>Theme:</label>
                <input
                    type="text"
                    name="theme"
                />
                <label>Vendors:</label>
                <input
                    type="text"
                    name="vendors"
                />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default WeddingForm;