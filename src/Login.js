import React, { useState } from "react";
import Fire from "./Fire";
//import Fire from "./Fire";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

// Log the user

        Fire.auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {})
        .catch(error => {
            console.log(error);
        });
       
    }

    function Register(event){
        event.preventDefault();
        Fire.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {})
        .catch(error => {
            console.log(error);
        });

    }

    return (
        
         <div class="borderCss">
             <form onSubmit= {handleSubmit}>
       
            <div >
                <label>UserId</label>
                <br/>
                <input 
                onChange= {handleEmailChange}
                type="email"
                name="email"
                className="form-group"
                placeholder="Email Address"
                />
                <br />
                <label>UserPassword</label>
                <br/>
                <input 
                onChange= {handlePasswordChange}
                type="password"
                name="password"
                className="form-group"
                placeholder="password"
                />
            </div>
            <button type="submit" className="btn-btn-primary">SignIn</button>
            <button onClick={Register} type= "button" className="btn-btn-danger">SignUp</button>
        </form>
        </div>
       
    );
};


export default Login;