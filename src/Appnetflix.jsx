import React from 'react';
import Hindinews from "./Hindinews";
import Englishnews from './Englishnews';

const favnewschannel= "Englishnews";

//const FavN =() => {
//if (favnewschannel ==="Hindinews"){
 //  return  <Hindinews/>;
//}else{
   // return <Englishnews />    
//}
//};

const Appnetflix = () =>( 
  <>
  <h1 className="heading_style">LIST OF TOP 6 NEWS WEBSITE IN 2020</h1>
 
  {favnewschannel === "Hindinews"? <Hindinews/> : <Englishnews/>}
  {/*<FavN/> */}
</>

);

export default Appnetflix;