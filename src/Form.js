import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    }
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  submitIdea = (event) => {
    event.preventDefault();
    const newIdea = { id: Date.now(), ...this.state };
    this.props.addIdea(newIdea);
    this.resetInputs();
  }
  
  resetInputs = () => {
    this.setState({ title: '', description: '' })
  }

  render() {
    return (
      <section className="add-idea-section">
        <form className='form'>
          <label for="description">Title</label>
          <input
            type='text'
            placeholder='title'
            name='title'
            value={this.state.title}
            onChange={event => this.handleChange(event)}
          />
          <label for="description">Description</label>
          <input
            type='text'
            placeholder='description'
            name='description'
            value={this.state.description}
            onChange={event => this.handleChange(event)}
          />
          <button onClick={event => this.submitIdea(event)}>Add Idea</button>
        </form>
      </section>
    )
  }
}

export default Form;