import React from 'react';
import Card from './Card';
import './Ideas.css';

const Ideas = (props) => {
  const cards = props.ideas.map(idea => {
    return (<Card
    key={idea.id}
    quality={idea.quality}
    id={idea.id}
    title={idea.title}
    description={idea.description}
    removeIdea={props.removeIdea}
    />)
  });

  return (
    <section className='ideas'>
      {cards}
    </section>
  )
}

export default Ideas;