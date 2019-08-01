import React, {useState, useContext} from "react";
import { Form, Button } from 'semantic-ui-react'
import { axiosWithAuth } from "../../Utilities/axiosWithAuth"
import { ActiveCardContext } from '../../Contexts/activeCardContext'




function WeddingForm() {
    const [ isLoading, setIsLoading ] = useState(false)

    const { activeCard, setActiveCard} = useContext(ActiveCardContext)

    const [newWedding, setNewWedding] = useState(activeCard || { 
        couple_name: "",
        wedding_theme: "",
        wedding_date: "",
        photo: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MzAvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzExMTA1NzIxNTkuanBn",
        location: "",
        planner: "",
        vendors: "",
    })
    console.log("activeCard", activeCard)
    // console.log(activeCard.watch.couple_name)

    

    function handleChange(event) {
        const updateWedding = {...newWedding, [event.target.name]: event.target.value};
        console.log("update wedding", updateWedding)
        setNewWedding(updateWedding);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true)
        console.log("handle submit loading",isLoading)

        if (activeCard) {
            console.log(activeCard)
            // /WIP is there/what is the active card?///
            setNewWedding(...activeCard)
            axiosWithAuth()
                    //A PUT request to this endpoint where ":id" is replaced by the post ID, will allow the logged in user to edit their post
                .put(`https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/${newWedding.id}`, newWedding)
                .then(response => 
                    console.log("active card response", response),
                    setIsLoading(false),
                    console.log("isLoading in call", isLoading)
                    )
                .catch(error => console.log("Error", error))
        } else {
            console.log(isLoading)
            axiosWithAuth()
                .post("https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts", newWedding)
                .then(response => 
                    console.log("making Post call", isLoading),
                    setIsLoading(false)
                    )
                .catch(error => console.log("Error", error))
        } 
        setNewWedding({         
            couple_name: "",
            wedding_theme: "",
            wedding_date: "",
            photo: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MzAvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzExMTA1NzIxNTkuanBn",
            location: "",
            planner: "",
            vendors: ""
        });
        setActiveCard(null)
        setNewWedding({ couple_name: "", wedding_theme: "", wedding_date: "", photo: "", location: "", planner: "", vendors: "" });  

    }


    function formHeader() {
        if (activeCard) {
            return(
                <div className="formHeader">
                    <h2> Edit Your Wedding Post </h2>
                    <p>Make changes to your wedding on the this form and click submit.</p>
                </div>
            )
        } else {
            return(
                <div className="formHeader">
                    <h2> Create a New Wedding Post </h2>
                    <p>Fill in this form to create a new wedding on your portfolio. 
                        Use the link of a photo hosted elsewhere in the 'photo' field.</p>
                </div>
            )
        }
    }

    function loading() {
        console.log("inside loading state render function")
        console.log("isLoading", isLoading)
        if (isLoading) {
            return (
                <div className="formHeader">
                    <h2>
                        Adding your Post 
                    </h2>
                </div>
            )
        }
    }


    return (
        <div className="weddingForm">
            {formHeader()}
            {loading()}
            <Form onSubmit={(event) => handleSubmit(event)}>
                <Form.Field>
                    <label>Couple's Names</label>
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
                <Button type='submit' floated='right' color="#FA80AF">Submit</Button>
            </Form>
        </div>
    )
};

export default WeddingForm;