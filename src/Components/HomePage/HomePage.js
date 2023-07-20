import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from '../Header/Header';
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <Header />
      <h1 className="home-page-subtitle">Pawsititve Affirmations</h1>
      <h3 className="home-page-subtitle">Empowering Your Inner Cat Spirit</h3>
      <div className="home-container">
      <h4>What do you need today?</h4>
        <div className="home-button-container">
        <NavLink to="/cat-affirmations">
          <button className="home-button">Cat Affirmations</button>
        </NavLink>
        <NavLink to="/not-cat-affirmations">
          <button className="home-button">Affirmations</button>
        </NavLink>
      </div>
      </div>
    </div>
  );
};