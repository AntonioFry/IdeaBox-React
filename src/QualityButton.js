import React from 'react';
import './QualityButton.css';

const QualityButton = (props) => {
  const { quality } = props;
  return (
    <button className="quality-button" name={quality}>{quality}</button>
  )
}

export default QualityButton;