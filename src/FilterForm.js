import React, { Component } from 'react';
import './FilterForm.css';

class FilterForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.submitFilter(event.target.value);
  }

  submitFilter = (event) => {
    const { ideas, filterSearch } = this.props;
    const filteredIdeas = ideas.filter(idea => {
      return idea.title.toUpperCase().includes(event.toUpperCase());
    });
    filterSearch(filteredIdeas);
  }

  render() {
    return (
      <form className="filter-form">
        <label for="filter-search" className="filter-label">Search</label>
        <input
        className="filter-search"
        type="text"
        name="value"
        value={this.state.value}
        placeholder="seacrh for idea"
        onChange={event => this.handleChange(event)}
        />
      </form>
    )
  }
}

export default FilterForm;