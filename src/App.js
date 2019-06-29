import React, { Component } from 'react';
import './App.css';
import Ideas from './Ideas';
import FilterForm from './FilterForm';
import Form from './Form';
import QualityForm from './QualityContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        { id: 1, title: 'heyo', description: 'buddy'},
        { id: 2, title: 'apples', description: 'friut'},
        { id: 3, title: 'title', description: 'description'}
      ],
      filteredIdeas: [],
    }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  renderIdeas = () => {
    if (!!this.state.filteredIdeas.length) {
      return this.state.filteredIdeas;
    } else {
      return this.state.ideas;
    }
  }

  removeIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter(idea => {
      return idea.id !== id;
    });
    this.setState({ ideas: filteredIdeas, filteredIdeas: filteredIdeas });
  }

  filterSearch = (search) => {
    this.setState({ filteredIdeas: search });
  }

  render() {
    return (
      <div className="App">
        <aside>
          <h1>IdeaBox</h1>
          <FilterForm filterSearch={this.filterSearch} ideas={this.state.ideas}/>
          <QualityForm />
        </aside>
        <main className='App'>
          <Form addIdea={this.addIdea}/>
          <Ideas ideas={this.renderIdeas()} removeIdea={this.removeIdea}/>
        </main>
      </div>
    )
  }
}

export default App;