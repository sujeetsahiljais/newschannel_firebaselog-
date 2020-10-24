import React from 'react';
import Images from './Images';
import Sdata from './Sdata';

function Card(props){
    //console.log(props);
    return(
      <>
      <div className="cards">
      <div className="card">
       <Images imgsrc={props.imgsrc}/>
        <div className="card_info">
          <span className="card__category">{props.sname}</span>
          <h3 className="card__title">{props.title}</h3>
          <a href={props.link} 
          target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
  
      </div>
  
    </div>
    </>
  
    )
  }
  export default Card;