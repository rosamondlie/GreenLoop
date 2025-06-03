// resources/js/pages/CourierHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AppContext.jsx'; // Ensure path is correct
import '../../css/home.css'; // Reusing home.css for common styles

const CourierHome = ({ user }) => {
    const { logoutUser } = useAuth();

    return (
        <div className="home-container"> {/* Using same base class as UserHome */}
            <header className="header">
                <div className="logo">
                    <img src="/images/logo.png" alt="GreenLoop" />
                    <div className="logo-text">
                        {/* Courier specific title or same as user */}
                        <h3>GreenLoop</h3>
                        <p className="tagline">Courier Dashboard</p> 
                    </div>
                </div>
            </header>
            
            <div className="user-info">
                <div className="user-greeting">
                    <p>Hi! {user?.username || 'Courier'}</p>
                </div>
                <div className="icon-gr">
                    <button className="icon-button" title="Notifications">
                        <img src="/images/notif.png" alt="Notifications" />
                    </button>
                    {user && (
                        <button onClick={logoutUser} className="icon-button" title="Logout">
                            <img src="/images/profile.png" alt="Profile/Logout" />
                        </button>
                    )}
                </div>
            </div>

            {/* Main Action for Courier - "View Pickup Schedule" */}
            {/* This replaces the user's "Pickup Schedule" + "User Address XXXX" sections */}
            <section className="pickup-status" style={{ marginTop: '20px', padding: '0 16px' }}>
                <Link to="/activity" style={{ textDecoration: 'none' }}>
                    <div className="status-card" style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        padding: '16px', /* Adjusted padding */
                        cursor: 'pointer',
                        backgroundColor: '#4CAF50', /* Green like screenshot button */
                        color: 'white',
                        fontSize: '18px', /* Larger text */
                        fontWeight: 'bold'
                    }}>
                        <img 
                            src="/images/pickup_truck_icon.png" // You'll need this icon
                            alt="Pickup Truck" 
                            style={{ marginRight: '10px', width: '28px', height: '28px' }} 
                        />
                        View Pickup Schedule
                    </div>
                </Link>
            </section>
            
            {/* Courier's Address Display (Optional, but matches user screenshot structure) */}
            <section style={{ 
                margin: '20px 16px', 
                padding: '15px', 
                backgroundColor: '#f9f9f9', /* Light background */
                borderRadius: '8px', 
                /* boxShadow: 'var(--shadow-sm)', // Optional shadow like User Address box */
                border: '1px solid #eee' /* Lighter border if no shadow */
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img 
                        src="/images/address_icon_green.png" // You'll need this icon
                        alt="Address" 
                        style={{ width: '24px', height: '24px', marginRight: '10px' }}
                    />
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
                        Your Address: <span style={{ fontWeight: '500', color: 'var(--text-primary)' }}>{user?.address || 'Not set'}</span>
                    </p>
                </div>
            </section>


            {/* News Update Section - Included as it's in the user screenshot layout */}
            <section className="news-update">
                <h3>News</h3> {/* Simplified title from screenshot */}
                {/* <p className="news-subtitle">Latest updates relevant to couriers or general</p> */}
                <div className="news-grid">
                    <div className="news-item">
                        <div>
                            <img src="/images/news_placeholder_1.jpg" alt="News 1" />
                            <h4>Pandawara Group Cleans Up Trash in the Citarum River</h4>
                            {/* <p>29th January 2025 - Quick summary...</p> */}
                        </div>
                        <button className="btn btn-primary read-more-btn" style={{width: 'auto', alignSelf: 'flex-start'}}>Read more</button>
                    </div>
                    <div className="news-item">
                        <div>
                            <img src="/images/news_placeholder_2.jpg" alt="News 2" />
                            <h4>New plan for bins and recycling to be considered</h4>
                            {/* <p>18th May 2025 - Insights into upcoming...</p> */}
                        </div>
                        <button className="btn btn-primary read-more-btn" style={{width: 'auto', alignSelf: 'flex-start'}}>Read more</button>
                    </div>
                </div>
            </section>

            {/* Points Card, User's Pickup CTA, Privilege, and Voucher sections are OMITTED here */}

            <div style={{ flexGrow: 1 }}></div> {/* Pushes nav to bottom */}

            <nav className="bottom-nav">
                <Link to="/activity" className="nav-btn active"> {/* Activity might be the default active for courier */}
                    <span className="nav-icon"><img src="/images/list.png" alt="Activity" /></span>
                    <span className="nav-label">Activity</span>
                </Link>
                <Link to="/" className="nav-btn">
                     <span className="nav-icon"><img src="/images/home.png" alt="Home" /></span>
                    <span className="nav-label">Home</span>
                </Link>
                {/* Example: Courier might have a profile link instead of redeem */}
                <Link to="/profile" className="nav-btn"> {/* Placeholder for a potential Profile page */}
                     <span className="nav-icon"><img src="/images/profile_icon_nav.png" alt="Profile" /></span> {/* Needs new icon */}
                    <span className="nav-label">Profile</span>
                </Link>
            </nav>
        </div>
    );
};

export default CourierHome;