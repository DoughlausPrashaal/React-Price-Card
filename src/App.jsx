import React, { useState, useEffect } from 'react'; 
import './App.css'

const plansData = {
  "Essential": {
    "Description": "Monthly games, online multiplayer and more",
    "Price": 499,
    "Monthly Games": true,
    "Online Multiplayer": true,
    "Exclusive Discounts": true,
    "Exclusive Content": true,
    "Cloud Storage": true,
    "Share Play": true,
    "Game Catalogue": false,
    "Ubisoft Plus Classics": false,
    "Classics Catalogue": false,
    "Game Trials": false
  },
  "Extra": {
    "Description": "Discover hundreds of games",
    "Price": 749,
    "Monthly Games": true,
    "Online Multiplayer": true,
    "Exclusive Discounts": true,
    "Exclusive Content": true,
    "Cloud Storage": true,
    "Share Play": true,
    "Game Catalogue": true,
    "Ubisoft Plus Classics": true,
    "Classics Catalogue": false,
    "Game Trials": false
  },
  "Deluxe": {
    "Description": "Experience all the benefits",
    "Price": 849,
    "Monthly Games": true,
    "Online Multiplayer": true,
    "Exclusive Discounts": true,
    "Exclusive Content": true,
    "Cloud Storage": true,
    "Share Play": true,
    "Game Catalogue": true,
    "Ubisoft Plus Classics": true,
    "Classics Catalogue": true,
    "Game Trials": true
  }
};

function App() {
  return (
    <div className="container">
      {Object.keys(plansData).map(plan => (
        <div key={plan} className="card">
          <h2>{plan}</h2>
          <p>{plansData[plan].Description}</p>
          <p>Price: Rs {plansData[plan].Price}</p>
          <ul>
            {Object.keys(plansData[plan]).map(feature => (
              feature !== "Description" && feature !== "Price" && (
                <li key={feature}>
                  {plansData[plan][feature] ? <span className="tick">&#10004;</span> : <span className="cross">&#10006;</span>} {feature}
                </li>
              )
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App
