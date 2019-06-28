import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      quality: 'swill',
      starred: false
    }
  }
  render() {
    const { id, title, removeIdea, description } = this.props;
    
    return (
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => removeIdea(id)}>Trash this bitch</button>
      </div>
    )
  }
}

export default Card;