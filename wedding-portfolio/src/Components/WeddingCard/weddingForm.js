import React, {useState, useEffect} from "react";
import { Form, Button } from 'semantic-ui-react'



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
            <Form onSubmit={(event) => handleSubmit(event)}>
                <legend>Wedding Form</legend>
                <Form.Field>
                    <label>Couple Names</label>
                    <input 
                        placeholder='Couple Names' 
                        type="text"
                        name="couple"
                        value={newWedding.couple}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Location</label>
                    <input 
                        placeholder='Location' 
                        type="text"
                        name="location"
                        value={newWedding.user_location}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Theme</label>
                    <input
                        placeholder='Theme'
                        type="text"
                        name="theme"
                        value={newWedding.wedding_theme}
                        onChange={handleChange}

                    />
                </Form.Field>
                <Form.Field>
                    <label>Vendors</label>
                    <input
                        placeholder='Vendors'
                        type="text"
                        name="vendors"
                        value={newWedding.vendors}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
};

export default WeddingForm;