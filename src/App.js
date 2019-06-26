import React, { Component } from 'react';
import './App.css';
import Ideas from './Ideas';
import FilterForm from './FilterForm';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        { id: 1, title: 'title', description: 'description' },
        { id: 2, title: 'title', description: 'description' },
        { id: 3, title: 'title', description: 'description' }
      ]
    }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  removeIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter(idea => {
      return idea.id !== id;
    });
    this.setState({ ideas: filteredIdeas });
  }

  render() {
    return (
      <main className='App'>
        <aside>
          <h1>IdeaBox</h1>
          <FilterForm />
        </aside>
        <section className="add-idea-section">
          <Form addIdea={this.addIdea}/>
        </section>
          <Ideas ideas={this.state.ideas} removeIdea={this.removeIdea}/>
      </main>
    )
  }
}

export default App;