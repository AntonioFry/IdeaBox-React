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
      <div className="add-button-container">
        <form className="add-quality-form">
          <input
            placeholder="Create a quality"
            className='add-quality-input'
            type='text'
            value={this.state.quality}
            />
          <button className="add-quality-button">&#65291;</button>
        </form>
      </div>
    )
  }
}

export default QualityContainer;