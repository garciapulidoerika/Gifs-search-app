import React from 'react'
import '../styles/GifCard.css'

export const GifsCard = (props) => {
    return (
        <div className="card">
            <img src={props.url} alt={props.title}></img>
        </div>
    )
}
