import React, {useState, useEffect} from "react";
import { Form, Button } from 'semantic-ui-react'
import { axiosWithAuth } from "../../utilities/axiosWithAuth"



function WeddingForm() {
    const [newWedding, setNewWedding] = useState({ couple_name: "", user_location: "", wedding_theme: "", vendors: "" })
    

    function handleChange(event) {
        const updateWedding = {...newWedding, [event.target.name]: event.target.value};
        setNewWedding(updateWedding);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (weddingToEdit) {
            axiosWithAuth()
                .put()
                .then(response => console.log(respose))
                .catch(error => console.log("Error", error))
        } else {
            //on submit will "post" the new wedding onto the weddings database
            // https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts
            axiosWithAuth()
                .post("https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts", newWedding)
                .then(response => console.log(response))
                .catch(errpr => console.log("Error", error))
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