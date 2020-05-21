import React from "react";
import './Card.css'

const Card = (props) => {
    
    return (
        <section className="res-card" >
            <h1>{props.name}</h1>
            <p>{props.date}</p>
            <p>{[props.time]}</p>
            <p>{props.number}</p>
        </section>


    )
}


export default Card