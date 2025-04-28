import React, { useState } from 'react';
import '../../css/ActivityPage.css';

export default function Activity() {
  const [activeTab, setActiveTab] = useState('Scheduled');

  return (
    <div className="container">
      
      {/* Tabs */}
      <div className="tabs">
        {['Ongoing', 'Scheduled', 'History'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="content">
        {activeTab === 'Ongoing' && (
          <div className="scheduled-content">
            <div className="scheduled-card">
              <div className="calendar-icon">
                📅
              </div>
              <div className="scheduled-text">
                No history pick up yet...
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="content">
        {activeTab === 'Scheduled' && (
          <div className="scheduled-content">
            <div className="scheduled-card">
              <div className="calendar-icon">
                📅
              </div>
              <div className="scheduled-text">
                No scheduled pick up yet...
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="content">
        {activeTab === 'History' && (
          <div className="scheduled-content">
            <div className="scheduled-card">
              <div className="calendar-icon">
                📅
              </div>
              <div className="scheduled-text">
                No history pick up yet...
              </div>
            </div>
          </div>
        )}
      </div>


      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="nav-button">
          📊
          <span className="nav-text">Activity</span>
        </button>
        <button className="nav-button">
          🏠
          <span className="nav-text">Home</span>
        </button>
        <button className="nav-button">
          🎁
          <span className="nav-text">Redeem</span>
        </button>
      </div>
    </div>
  );

  
}
