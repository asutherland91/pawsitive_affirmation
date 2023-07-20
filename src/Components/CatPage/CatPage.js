import React, { useState } from 'react';
import { CatAffirmation } from '../CatAffirmation/CatAffirmation';
import { encourageCat } from '../../Assets/affirmations/encouragecat';
import { happyCat } from '../../Assets/affirmations/happycat';
import { sadCat } from '../../Assets/affirmations/sadcat';
import { Header } from '../Header/Header';
import "./CatPage.css"

export const CatPage = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedAffirmation, setSelectedAffirmation] = useState('');

  const handleAffirmationButtonClick = () => {
    let affirmationArray = [];

    switch (selectedMood) {
      case 'sad':
        affirmationArray = sadCat;
        break;
      case 'discouraged':
        affirmationArray = encourageCat;
        break;
      case 'happy':
        affirmationArray = happyCat;
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
    <div className="cat-page">
      <Header />
      <div className="cat-background">
      <h1 className="cat-header">How are you feeling today?</h1>
      <div className="cat-wrapper">
      <select className="cat-select" value={selectedMood} onChange={handleMoodChange}>
        <option value="">Select Mood</option>
        <option value="sad">Sad</option>
        <option value="discouraged">Discouraged</option>
        <option value="happy">Happy</option>
      </select>
      <button className="cat-button" onClick={handleAffirmationButtonClick}>Get Cat Affirmation</button>
      <div className="cat-aff-wrapper">
      <CatAffirmation affirmation={selectedAffirmation} />
      </div>
      </div>
      </div>
    </div>
  );
};