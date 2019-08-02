# Front-End-Wedding-Planner-Portfolio

# Description

This React App allows a Wedding Planner to showcase their work to their perspective clients. The wedding planner end user can Sign Up for their own portfolio and use a template to post information about the weddings they have planned.  While logged in, the wedding planner can create new posts, edit exsisting posts, and delete posts from their portfolio. A secondary feature of this app allows clients to browse all weddings that have been planned by all Wedding Planners who currently have an account.  The client end user can filter the posts by theme.

# Getting Started

To use the App as a client end user follow the link and use the search feature to filter through the listed weddings by theme. To see more details about a wedding, click the more info link directly under the specific post you wish to see.

To use the App as a wedding planner end user follow the link, click "Sign Up" on the navigation menu, and fill out the form to create a portfolio. This will redirect you to the portfolio view. You will find it empty until a post is created.  

To create a new post click the "Add Wedding" button on the navigation menu and fill out form.  Submitting this form will redirect you to the portfolio view where you will now see your newly created wedding. Now that you have a wedding in the portfolio you can either edit the post or delete it by clicking the respective button directly under the post you wish to manage. 

To edit a post click the "Edit" button on the navigation menu. Doing this will redirect you to the edit form with the post's information pre-populated in the form fields.  Make the necessary changes and click the submit button.  This will update your post and redirect you to the portfolio view where you will find your updated post.  

To delete a post, click the delete button and it will reload the portfolio view with the delete post removed.

# Prerequisites

Start development by creating a react app using:
create-react-app app-name

All of the below dependencies can be installed using:
yarn install

# Installation
This project was created using yarn and designed for react client side. Other dependencies include:

"dependencies": {
    "axios": "^0.19.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-router-dom": "^5.0.1",
    "react-scripts": "3.0.1",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^0.87.3",
    "yup": "^0.27.0"
  }


# Examples of Tables

Register looks like this:
    "firstName": "Jeff",
    "lastName": "Oliver",
    "username": "jefftest",
    "password": "test",
    "email": "test@test.com",
    "location": "test"

Posts look like this:
     couple_name: "Sumiko & Ryosuke's Wedding",
     wedding_theme: "Modern",
     wedding_date: "2018-07-23",
     photo: "https://images.unsplash.com/photo-1522333323-32663f141b57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&           auto=format&fit=crop&w=675&q=80",
     location: "Boston, MA",
     description: "Candace Lindsale", ---> This is the Wedding Planner's name
     vendors: "test",
     user_id: 2, --> this is the id of the Wedding Planner
     firstName: "Jeff" --> The first name will be linked to whoever is logged in

# Endpoint Usage

POST - Register a new user and provide a Web Token
*** Requires a firstName, lastName, username, and password

https://bw19-wedding-planner-portfolio.herokuapp.com/api/auth/register

POST - Login a registered user. Also provides Web Token. 
*** Requires username and password

https://bw19-wedding-planner-portfolio.herokuapp.com/api/auth/login

GET - Returns all posts/portfolios 
*** Requires no login

https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/all

GET - Returns the post with the specific ID. (Replace ":id" with the id you want to look for) 
*** Will only return if associated with logged in user

https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/:id

POST - Allows the logged in user to add a post or portfolio 
*** Requires a couple_name

https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts

PUT - Where ":id" is replaced by the post ID, will allow the logged in user to edit their post

https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/:id

DELETE - Where ":id" is replaced by the post ID, will allow the logged in user to DELETE their post

https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/:id


# Support
There is currently no active support for this app

# Authors and acknowledgment

UI Engineers: 
Marketing Website 1 - Kyle Guerrero (https://github.com/AceMouty)
https://fervent-yalow-1663cf.netlify.com/

Marketing Website 2 - Min Huang (https://github.com/huangm96)
https://stoic-goldstine-846998.netlify.com

Front End Engineers: 
Dennis Mercado(https://github.com/denmercs), 
Noah Franco(https://github.com/noahfranco), 
Desiree Morris(https://github.com/desiquinn)

Advanced Front End Engineer: Laura Daugherty(https://github.com/laura-daugherty)
Backend Engineer: Chris Carter(https://github.com/ChrisJCarter91)

Full Repo:
https://github.com/bwj19-wedding-planner-portfolio

#Project status
This project was completed for a Lambda School build week July 2019. There may be updates to the application periodically.

