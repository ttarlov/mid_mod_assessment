import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css'

const CardContainer = (props) => {
    let allResCards = props.resCards.map(resCard => {
        return <Card {...resCard} />
    })


    return (
        <section className="card-container">
            {allResCards}
        </section>
    )

}



export default CardContainer