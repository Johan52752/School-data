import React from 'react'
import { Link } from 'react-router-dom'
import './categories-card.scss'

const CardComponent = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <Link to={props.link} className="card-link">Ver publicaciones</Link>
                </div>
            </div>
        </>
    )
}

export default CardComponent