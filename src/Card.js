import React from 'react';
import './Card.css';

const Card = ({ id, title, removeIdea, description }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => removeIdea(id)}>Trash this bitch</button>
    </div>
  )
}

export default Card;