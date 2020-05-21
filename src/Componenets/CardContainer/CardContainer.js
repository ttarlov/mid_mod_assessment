import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css'

const CardContainer = (props) => {
    
    let allResCards = props.resCards.map(card => {
        return <Card {...card} />
    })


    return (
        <section className="card-container">
            {allResCards}
        </section>
    )

}



export default CardContainer