import React, { Component } from 'react';
import './App.css';
import Ideas from './Ideas';
import FilterForm from './FilterForm';
import Form from './Form';
import QualityForm from './QualityContainer';
import QualityButton from './QualityButton';

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
      qualities: ['Swill', 'Plausible', 'Genius']
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
    const qualityButtons = this.state.qualities.map(quality => {
      return <QualityButton quality={quality} />
    });

    return (
      <div className="App">
        <aside>
          <h1>IdeaBox</h1>
          <FilterForm filterSearch={this.filterSearch} ideas={this.state.ideas}/>
          <div className='quality-container'>
            <QualityForm />
            {qualityButtons}
          </div>
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