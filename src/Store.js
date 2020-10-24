import React from "react";
import Fire from "./Fire";
import News from "./News";

const Store = () => {

    function Logout(){
        Fire.auth().signOut();
    }

    return (
        <div class="header">
           <button class="menu">Menu</button>
           <button class="home">Home</button>
           <button class="service">Service</button>
           <button class="contact">ContactUs</button>
           <br/>
           
           
       
    <div class="backimg"> 
   
        <p id="fontCss">Welcome to Sujeet world :) Keep Smilling</p>
        <News />
        <button type="submit" onClick={Logout} class="btn" >Logout</button>
    </div>
    </div>
    )
}

export default Store;



