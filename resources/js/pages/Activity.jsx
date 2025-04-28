import React from "react";
import "../../css/activity.css"; // Corrected path

const Activity = () => {
    return (
        
        <div className="activity-container">
            <header className="headerA">
                <h3>Activity</h3>
                <div className="tabs">
                    <button>Ongoing</button>
                    <button>Scheduled</button>
                    <button>History</button>
                </div>
            </header>

           



            <nav className="bottom-nav">
                <button>🏠 Home</button>
                <button onClick={() => navigate('/activity')}>📊 Activity</button>
                <button>🎁 Redeem</button>
            </nav>
        </div>

        
    );
};

export default Activity;
