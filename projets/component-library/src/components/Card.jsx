import React from "react";
import "./Card.css";
import cardIcon from '../assets/icons/cardIcon.svg'

export default function Card({ children }) {
    return (
        <div className="card">
            <img className="card-icon" src={cardIcon} alt="" /> 
            <div className="card-content">
               {children}  
            </div>
        </div>
    )
}

function CardTitle({ children }) {
    return (
        <h2 className="card-title">{children}</h2>
    )

}
function CardText({ children }) {
    return (
        <p className="card-text">{children}</p>
    )
}

 Card.Title = CardTitle;
Card.Text = CardText;
