import React, { useState } from 'react';
import '../../css/pickup.css';

export default function PickupPage() {
  const [selectedWeight, setSelectedWeight] = useState(null);

  const handleWeightClick = (weight) => {
    setSelectedWeight(weight);
  };

  return (
    <div className="container pickup-page">
      <div className="pickup-header">
        <img src="/images/pickupbanner.png" alt="Header" className="pickup-bg" />
        <div className="pickup-address-box">
          <div className="pickup-address-text">
            <p className="pickup-location-title">Pick-up at:</p>
            <p className="pickup-location-detail">
              <span className="pickup-location-icon"><img src="images/loc.png" alt="" /></span>
              Jl. Raya Kb. Jeruk No.27, RT.1/RW.9, ...
            </p>
            <p className="pickup-location-desc">beside betamart</p>
          </div>
          <div className="pickup-chevron">›</div>
        </div>
      </div>

 
      <div className="pickup-section">
        <h3>What does your trash include?</h3>
        <div className="pickup-checkbox">
          <label><input type="checkbox" /> <span className="green-text">
            Paper & Cardboard</span><br /><span className="pickup-example">
              ex: cereal box, newspaper, office paper, cardboard, etc</span></label>
          <label><input type="checkbox" /> <span className="green-text">
            Plastic</span><br /><span className="pickup-example">
              ex: plastic bottles, containers, shampoo bottles, etc</span></label>
          <label><input type="checkbox" /> <span className="green-text">
            Metal</span><br /><span className="pickup-example">
              ex: soda cans, metal lid from jars, aerosol cans, etc</span></label>
          <label><input type="checkbox" /> <span className="green-text">
            Glass</span><br /><span className="pickup-example">
              ex: wine bottles, pickle jars, condiment bottles, etc</span></label>
        </div>
      </div>


      <div className="pickup-section">
        <h3>How heavy is it?</h3>
        <div className="pickup-weight-options">
          <button className={`pickup-weight-btn ${selectedWeight === 'Small' ? 'selected' : ''}`} onClick={() => handleWeightClick('Small')}>
            <span>Small</span><span>Max: 5kg</span>
          </button>
          <button className={`pickup-weight-btn ${selectedWeight === 'Medium' ? 'selected' : ''}`} onClick={() => handleWeightClick('Medium')}>
            <span>Medium</span><span>Max: 10kg</span>
          </button>
          <button className={`pickup-weight-btn ${selectedWeight === 'Large' ? 'selected' : ''}`} onClick={() => handleWeightClick('Large')}>
            <span>Large</span><span>Max: 15kg</span>
          </button>
        </div>
      </div>

      <div className="pickup-banner">
        <img src="/images/pickup2.png" alt="Recycle Guide" />
        <div className="pickup-banner-text">
          <strong>Sort Smart, Recycle Right!</strong>
          <p>Earn points by recycling the right way!<br />See our <u>trash guide</u> before scheduling a pickup.</p>
        </div>
      </div>


      <div className="pickup-button-wrapper">
        <button className="pickup-schedule-btn">Schedule a pick-up →</button>
      </div>
    </div>
  );
}