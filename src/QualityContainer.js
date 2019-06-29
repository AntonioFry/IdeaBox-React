import React, { Component } from 'react';
import './QualityContainer.css';

class QualityContainer extends Component {
  constructor() {
    super();
    this.state = {
      quality: ''
    }
  }

  render() {
    return (
      <div className="quality-container">
        <form className="add-quality-form">
          <input 
            className='add-quality-input'
            type='text'
            value={this.state.quality}
          />
          <button className="add-quality-button">&#65291;</button>
        </form>
        <button className="quality-button">Swill</button>
        <button className="quality-button">Plausible</button>
        <button className="quality-button">Genius</button>
      </div>
    )
  }
}

export default QualityContainer;