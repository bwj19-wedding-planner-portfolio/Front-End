import React, {useState, useEffect} from "react";



function WeddingForm() {
    const [newWedding, setNewWedding] = useState({ couple_name: "", user_location: "", wedding_theme: "", vendors: "" })
    

    function handleChange(event) {
        // console.log(event.target.name);
        // console.log(event.target.value);
        const updateWedding = {...newWedding, [event.target.name]: event.target.value};
        setNewWedding(updateWedding);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (weddingToEdit) {
            //on submit with "put" the edited object onto the weddings database
        } else {
            //on submit will "post" the new wedding onto the weddings database
        } 
        setNewWedding({ couple_name: "", user_location: "", wedding_theme: "", vendors: "" });  
    }

    useEffect(() => {
        setNewWedding(props.weddingToEdit)
    },[props.weddingToEdit])

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <legend>Wedding Form</legend>
                <label>
                    Couple:
                    <input
                        type="text"
                        name="couple"
                        value={newWedding.couple}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={newWedding.user_location}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Theme:
                    <input
                        type="text"
                        name="theme"
                        value={newWedding.wedding_theme}
                        onChange={handleChange}

                    />
                    </label>
                <label>
                    Vendors:
                    <input
                        type="text"
                        name="vendors"
                        value={newWedding.vendors}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default WeddingForm;