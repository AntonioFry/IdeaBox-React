import React, { Component } from 'react';
import './FilterForm.css';

class FilterForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <form>
        <label>Search</label>
        <input
        type="text"
        placeholder="seacrh for idea"
        />
      </form>
    )
  }
}

export default FilterForm;