import React,{ useState } from 'react';
import './Card.css';
function Card({image, id, isFinished,isVisible, onCardClick}){
   // const [fisnished, setFinished] = React.useState(false);
    return(<li onClick={()=>{onCardClick(id)}} className={`card ${isFinished && 'card-finished'} ${isVisible && 'card-show'}`} ><img width="204" height="144" src={image} alt="" /></li>)
}
export default Card;