import React, { useState } from 'react';
import "../../css/courierActivity.css";

export default function CourierActivity(){
    
    const [activeTab, setActiveTab] = useState('Ongoing');
    const [showPopup, setShowPopup] = useState(false);
    const handleConfirm = () => {
        setShowPopup(false);
        // Add logic here (update to history)
        setActiveTab('History');
    };


   return(
        <div className="container" id={activeTab}>
        
        {/* Tabs */}
        <div className="tabs">
            {['Ongoing', 'History'].map(tab => (
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
                            Ongoing Pick Up
                            </div>
                            <div className="scheduled-desc">
                            Estimated to arrive at 19.17
                            </div>
                        </div>
                    </div>

                    {/* Done Pickup Btn & Pop Up Confirmation */}

                    <div className='ongoing-done'>
                        <button onClick={() => setShowPopup(true)}className='pickup-btn'>Pick Up Done</button>
                    </div>

                    {showPopup && (
                        <div className="popup-overlay">
                            <div className="popup-box">
                                <p>Are you sure you want to mark this as done?</p>
                                <button className='yes' onClick={handleConfirm}>Yes</button>
                                <button className='no' onClick={() => setShowPopup(false)}>Cancel</button>
                            </div>
                        </div>
                    )}

                    
                </div>
            )}
            </div>

        <div className="content">
            {activeTab === 'History' && (
            <div className="scheduled-content">
                <div className="scheduled-card">
                    <img src="/images/activity-img/courierArrived.png" alt="" />
                    <div className="act-card-content">
                        <div className="scheduled-text-no">
                        No History Yet...
                        </div>
                    </div>
                </div>
                <div className="scheduled-card">
                    <img src="/images/activity-img/courierArrived.png" alt="" />
                    <div className="act-card-content">
                        <div className="scheduled-text">
                        5 Mar 2025, 19:30
                        </div>
                        <div className="scheduled-desc">
                        Picked up successfully
                        </div>
                    </div>
                </div>
                
                <div className="scheduled-card">
                        <img src="/images/activity-img/courierArrived.png" alt="" />
                        <div className="act-card-content">
                            <div className="scheduled-text">
                            27 Feb 2025, 15:21
                            </div>
                            <div className="scheduled-desc">
                            Picked up successfully
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



