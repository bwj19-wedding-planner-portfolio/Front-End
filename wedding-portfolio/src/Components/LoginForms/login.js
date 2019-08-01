import React, { useState, useContext } from "react";
import axios from "axios";
import { GreetingContext } from "../../Contexts/greetingContext"

export const Login = (props) => {

  const [ isLoading, setIsLoading ] = useState(false)
  const [ isError, setIsError ] = useState(false)
  // const { setGreeting } = useContext(GreetingContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const sendCreds = e => {
    e.preventDefault();
    setIsLoading(true)
    axios
      .post(
        "https://bw19-wedding-planner-portfolio.herokuapp.com/api/auth/login",
        credentials
      )
      .then(res => {
        // setIsLoading(true);
        // console.log("function", setLoggedIn);
        // setLoggedIn(true);
        // console.log("loggedIn State", loggedIn);
        console.log("response", res)
        setIsLoading(false)
        localStorage.setItem('token', res.data.token);
        // setGreeting(res.data.message);
        props.history.push("/portfolioView");
      })
      .catch(err => {
        setIsError(true)
        setIsLoading(false);
      });
      setIsError(false)
  };

  function loading() {
    console.log("inside loading state render function")
    console.log("isLoading", isLoading)
    if (isLoading) {
        return (
            <div className="formHeader">
                <h2>
                    Logging In
                </h2>
            </div>
        )
    }
}
function error() {
  console.log("inside error state render function")
  console.log("iserror", isError)
  if (isError) {
      return (
          <div className="formHeader">
              <h2>
                  Sign up to be able to Log in
              </h2>
          </div>
      )
  }
}

  return (
    <div className="Login">
      {loading()}
      {error()}
      <form onSubmit={sendCreds}>
        <label>Username</label>
        <input name="username" type="text" onChange={handleChange} />

        <label>Password</label>
        <input name="password" type="password" onChange={handleChange} />
        <button type="submit" />
      </form>
    </div>
  );
};

//  user: {
//   userId: “”,
//    firstName: "",
//    lastName: "",
//    username: "",
//    password: "",
//    weddings: [
//      {
//        weddingId: "",
//        plannerId: “”,
//        date: “”,
//        image: "",
//        description: "",
//        vendors: "",
//        theme: "",
//        location: ""
//      }
//    ]
//  }
