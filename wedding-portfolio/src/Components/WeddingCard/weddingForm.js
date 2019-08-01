import React, {useState, useEffect, useContext} from "react";
import { Form, Button } from 'semantic-ui-react'
import { axiosWithAuth } from "../../Utilities/axiosWithAuth"
import { ActiveCardContext } from '../../Contexts/activeCardContext'
import { id } from "postcss-selector-parser";




function WeddingForm() {
    const [newWedding, setNewWedding] = useState({ 
        couple_name: "",
        wedding_theme: "",
        wedding_date: "",
        photo: "",
        location: "",
        planner: "",
        vendors: ""
    })
    const { activeCard, setActiveCard} = useContext(ActiveCardContext)



    function handleChange(event) {
        const updateWedding = {...newWedding, [event.target.name]: event.target.value};
        console.log("update wedding", updateWedding)
        setNewWedding(updateWedding);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (activeCard) {
            console.log("activeCard", activeCard)
            // setNewWedding(...activeCard)
            axiosWithAuth()
                    //A PUT request to this endpoint where ":id" is replaced by the post ID, will allow the logged in user to edit their post
                .put(`https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/${activeCard.id}`)
                .then(response => console.log(response))
                .catch(error => console.log("Error", error))
        } else {
            //on submit will "post" the new wedding onto the weddings database
            // https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts
            console.log("newWedding", newWedding)

            axiosWithAuth()
                .post("https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts", newWedding)
                .then(response => console.log(response))
                .catch(error => console.log("Error", error))
        } 
        setNewWedding({ couple_name: "", wedding_theme: "", wedding_date: "", photo: "", location: "", planner: "", vendors: "" });  
    }

    // useEffect(() => {
    //     setNewWedding(props.weddingToEdit)
    // },[props.weddingToEdit])

    return (
        <div>
            <Form onSubmit={(event) => handleSubmit(event)}>
                <legend>Wedding Form</legend>
                <Form.Field>
                    <label>Couple Names</label>
                    <input 
                        placeholder='Couple Names' 
                        type="text"
                        name="couple_name"
                        value={newWedding.couple_name}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Wedding Date</label>
                    <input 
                        placeholder='Couple Names' 
                        type="text"
                        name="wedding_date"
                        value={newWedding.wedding_date}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Location</label>
                    <input 
                        placeholder='Location' 
                        type="text"
                        name="location"
                        value={newWedding.location}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Theme</label>
                    <input
                        placeholder='Theme'
                        type="text"
                        name="wedding_theme"
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
                <Form.Field>
                    <label>Photo</label>
                    <input
                        placeholder='Photo'
                        type="text"
                        name="photo"
                        value={newWedding.photo}
                        onChange={handleChange}

                    />
                </Form.Field>
                <Form.Field>
                    <label>Planner</label>
                    <input
                        placeholder='Planner'
                        type="text"
                        name="planner"
                        value={newWedding.planner}
                        onChange={handleChange}

                    />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
};

export default WeddingForm;