import React, { useState } from 'react';
import '../../css/ActivityPage.css';

export default function Activity() {
  const [activeTab, setActiveTab] = useState('Scheduled');

  return (
    <div className="container" id={activeTab}>
      
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
                  <img src="/images/activity-img/ongoing.png" alt="" />
                  <div className="act-card-content">
                      <div className="scheduled-text-no">
                      No Ongoing Activity...
                      </div>
                  </div>
              </div>

              <div className="scheduled-card">
                  <img src="/images/activity-img/ongoing.png" alt="" />
                  <div className="act-card-content">
                      <div className="scheduled-text">
                      Courier is on the way...
                      </div>
                      <div className="scheduled-desc">
                      Estimated to arrive at 13:39
                      </div>
                  </div>
              </div>
              </div>

            
          )}
        </div>

      <div className="content">
        {activeTab === 'Scheduled' && (
          <div className="scheduled-content">
            <div className="scheduled-card">
              <img src="/images/activity-img/calender.png" alt="" />
              <div className="act-card-content">
              <div className="scheduled-text">
                Scheduled Pick Up                
              </div>
              <div className="scheduled-desc">
              on Wednesday, 5 March 2025 at 19:00 - 21:00
              </div>
              </div>
              
            </div>
          </div>
        )}
      </div>

      <div className="content">
        {activeTab === 'History' && (
          <div className="scheduled-content">
            <div className="scheduled-card">
              <img src="/images/activity-img/checkmark.png" alt="" />
              <div className="act-card-content">
                <div className="scheduled-text">
                  5 Mar 2025, 19:30
                </div>
                <div className="scheduled-desc">
                  Trash sent successfully
                </div>
              </div>
            </div>
            
            <div className="scheduled-card">
              <div className="checkmark">
              <img src="/images/activity-img/checkmark.png" alt="" />
              </div>
              <div className="act-card-content">
                <div className="scheduled-text">
                  27 Feb 2025, 15:21
                </div>
                <div className="scheduled-desc">
                  Trash sent successfully
                </div>
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