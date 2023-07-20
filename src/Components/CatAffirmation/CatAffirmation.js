import React from 'react';
import "./CatAffirmation.css"

export const CatAffirmation = ({ affirmation }) => {
  return (
    <div className="cat-aff">
      <h2 className="cat-header">Cat Affirmations</h2>
      <div>
      <p className='cat-words'>{affirmation}</p>
      </div>
    </div>
  );
};