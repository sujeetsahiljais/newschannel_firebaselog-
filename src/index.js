
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fire from './Fire';
import Store from './Store';
import Login from './Login';
import  './index.css';

// import "./loginFire.css";
 
class App extends Component{

  constructor(props){
    super(props);

    this.state ={
      user: {}
    }
  }
  authListener(){
    Fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }

  componentDidMount(){
    this.authListener()
  }
  render(){

  return (
    <div>
     {this.state.user ? (<Store />): (<Login />)}
    </div>
  )
}
}
const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement);

//list of top 6 news channel
 /*
import React from 'react';
import ReactDom from 'react-dom';
import './news.css';
import Appnews from "./Appnews";

ReactDom.render( 
 <Appnews />,
  document.getElementById("root")

);
*/

