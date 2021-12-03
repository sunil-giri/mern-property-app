import React from 'react'
import "./card.scss"

function Card(props) {
  return (
    <div className="card">
      <img src={props.value.images[0]} alt="something"/>
      <p>{props.value.name}</p>
      <p>{props.value.price}</p>
    </div>
  )
}

export default Card
