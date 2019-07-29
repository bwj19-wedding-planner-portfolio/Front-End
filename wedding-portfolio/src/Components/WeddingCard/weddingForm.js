import React, {useState} from "react";


function WeddingForm() {
    // This will change because we aren't setting it to state but to Post to the server???
    const [newWedding, setNewWedding] = useState({ couple: "", location: "", theme: "", vendors: "" })
    

    function handleChange(event) {
        console.log(event.target.name);
        console.log(event.target.value);
        const updateWedding = {...newWedding, [event.target.name]: event.target.value};
        setNewWedding(updateWedding);
    }

    function handleSubmit(event) {
        event.preventDefault();

        // this will change because onSubmit we will post to the server???
        console.log(newWedding);
        // Data.push(newWedding)
        // console.log(Data)
        console.log(props)
        props.SETTER(Data)
        setNewMember({ couple: "", location: "", theme: "", vendors: "" });
    }

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
                        value={newWedding.location}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Theme:
                    <input
                        type="text"
                        name="theme"
                        value={newWedding.theme}
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