import React from 'react';
import "./ExplicitAffirmation.css"

export const ExplicitAffirmation = ({ affirmation }) => {
  return (
    <div className="exp-aff">
      <h2 className="exp-header">Affirmations</h2>
      <div>
      <p className='exp-words'>{affirmation}</p>
      </div>
    </div>
  );
};