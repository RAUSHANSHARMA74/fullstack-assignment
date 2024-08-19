import React from 'react'
import "./Card.css"

export default function Card({ id, title, description }) {
    return (
        <div className="cards_detail" key={id}>
            <h1>{title}</h1>
            <hr />
            <p>{description}</p>
        </div>
    )
}
