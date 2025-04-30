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
              <img src="/images/calender.png" alt="" />
              </div>
              <div className="scheduled-text">
                Scheduled Pick Up
                <h5>on Wednesday, 5 March 2025 at 19:00 - 21:00</h5>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="content">
        {activeTab === 'History' && (
          <div className="scheduled-content">
            <div className="scheduled-card">
              <div className="checkmark">
              <img src="/images/checkmark.png" alt="" />
              </div>
              <div className="scheduled-text">
                5 Mar 2025, 19:30
                <h5>Trash sent successfully</h5>
              </div>
            </div>
            
            <div className="scheduled-card">
              <div className="checkmark">
              <img src="/images/checkmark.png" alt="" />
              </div>
              <div className="scheduled-text">
                27 Feb 2025, 15:21
                <h5>Trash sent successfully</h5>
              </div>
            </div>
          </div>
        )}
      </div>


      <nav className="bottom-nav">
                <button className="nav-btn active">
                    <span className="nav-icon"><img src="images/list.png" alt="" /></span>
                    <span className="nav-label">Activity</span>
                </button>
                <button className="nav-btn">
                    <span className="nav-icon"><img src="images/home.png" alt="" /></span>
                    <span className="nav-label">Home</span>
                </button>
                <button className="nav-btn">
                    <span className="nav-icon"><img src="images/redeem.png" alt="" /></span>
                    <span className="nav-label">Redeem</span>
                </button>
            </nav>
    </div>
  );

  
}
