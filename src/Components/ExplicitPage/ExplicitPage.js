import React, { useState } from 'react';
import { ExplicitAffirmation } from '../ExplicitAffirmation/ExplicitAffirmation';
import { encourageExplicit } from '../../Assets/affirmations/encourageexplicit';
import { happyExplicit } from '../../Assets/affirmations/happyexplicit';
import { sadExplicit } from '../../Assets/affirmations/sadexplicit';
import { Header } from '../Header/Header';
import "./ExplicitPage.css"

export const ExplicitPage = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedAffirmation, setSelectedAffirmation] = useState('');

  const handleAffirmationButtonClick = () => {
    let affirmationArray = [];

    switch (selectedMood) {
      case 'sad':
        affirmationArray = sadExplicit;
        break;
      case 'discouraged':
        affirmationArray = encourageExplicit;
        break;
      case 'happy':
        affirmationArray = happyExplicit;
        break;
    }

    if (affirmationArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * affirmationArray.length);
      setSelectedAffirmation(affirmationArray[randomIndex]);
    }
  };

  const handleMoodChange = (event) => {
    setSelectedMood(event.target.value);
  };

  return (
    <div className="exp-page">
      <Header />
      <div className="exp-background">
      <h1 className="exp-header">How are you feeling today?</h1>
      <div className="exp-wrapper">
      <select className="exp-select" value={selectedMood} onChange={handleMoodChange}>
        <option value="">Select Mood</option>
        <option value="sad">Sad</option>
        <option value="discouraged">Discouraged</option>
        <option value="happy">Happy</option>
      </select>
      <button className="exp-button" onClick={handleAffirmationButtonClick}>Get Affirmation</button>
      <div className="exp-aff-wrapper">
      <ExplicitAffirmation affirmation={selectedAffirmation} />
      </div>
      </div>
      </div>
    </div>
  );
};