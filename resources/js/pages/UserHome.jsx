// resources/js/pages/UserHome.jsx
// import React from 'react';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AppContext.jsx'; // Corrected path
import '../../css/home.css'; // Assuming home.css is relevant for this layout
import { useNavigate } from "react-router-dom";

const UserHome = ({ user }) => {
    const { logoutUser } = useAuth();

    return (
        <div className="home-container">
            <header className="header">
                <div className="logo">
                    <img src="/images/logo.png" alt="GreenLoop" />
                    <div className="logo-text">
                        <h3>GreenLoop</h3>
                        <p className="tagline">Small choices shape a cleaner future</p>
                    </div>
                </div>
            </header>
            
            <div className="user-info">
                <div className="user-greeting">
                    <p>Hi! {user?.username || 'Guest'}</p>
                </div>
                <div className="icon-gr">
                        <button className="icon-button">
                            <img src="/images/notif.png" alt="Notifications" onClick={() => navigate('/activity')} />
                        </button>
                    {user && (
                         <button className="icon-button" onClick={() => navigate('/profile')}><img src="images/profile.png" alt="Profile" /></button> 
                    )}
                </div>
            </div>

            <section className="pickup-status">
                <div className="status-card">
                    <p>No Scheduled Pick Up Today! <img src="/images/trash.png" alt="Trash icon" /></p>
                </div>
            </section>

            <section className="points-card">
                <h3 className="points-title">Poin balance</h3>
                <div className="points-display">
                    <span className="points-number">{user.points}</span>
                    <span className="points-unit">poin(s)</span>
                </div>
                <p className="expiry-date">expired date 13/07/2026</p>
                <div className="points-actions">
                    <button className="history-btn">History</button>
                    <span className="divider">|</span>
                    <Link to="/voucher">
                        <button className="redeem-btn">Redeem</button>
                    </Link>
                </div>
            </section>

            <section className="pickup-cta">
                <img src="/images/gambargojek.png" alt="Pickup service illustration" />
                <div className="cta-right">
                    <p className="cta-text">Let us take care of your waste — schedule a pickup today!</p>
                    <Link to="/pickup">
                        <button className="book-now">Book now</button>
                    </Link>
                </div>
            </section>

            <section className="news-update">
                <h3>News Update</h3>
                <p className="news-subtitle">What's Happening in Waste Management Today?</p>
                <div className="news-grid">
                    <div className="news-item">
                        {/* Replace with actual news content or component */}
                        <img src="/images/news_placeholder_1.jpg" alt="News 1" style={{width: '100%', height: 'auto', borderRadius: '8px'}}/>
                        <p style={{marginTop: '5px'}}>Pandawara Group Cleans Up Trash in the Citarum River</p>
                        <button className="read-more-btn" style={{marginTop: '10px'}}>Read more</button>
                    </div>
                    <div className="news-item">
                        <img src="/images/news_placeholder_2.jpg" alt="News 2" style={{width: '100%', height: 'auto', borderRadius: '8px'}}/>
                        <p style={{marginTop: '5px'}}>New plan for bins and recycling to be considered</p>
                        <button className="read-more-btn" style={{marginTop: '10px'}}>Read more</button>
                    </div>
                </div>
            </section>

            <section className="privilege">
                <div className="priv-header">
                    <h2 className="privilege-title">Privilege</h2>
                    <div className="see-all">
                        <Link to="/voucher" className="link">See all</Link>
                    </div>
                </div>
                <div className="privilege-container">
                    <div className="privilege-card">
                        <img src="/images/logoKFC.png" alt="kfc"/>
                        <p className="privilege-desc">Get 25% off</p>
                    </div>

                    <div className="privilege-card">
                        <img src="/images/logoMCD.png" alt="mcd"/>
                        <p className="privilege-desc">Get 25% off</p>
                    </div>

                    <div className="privilege-card">
                        <img src="/images/logoVap.png" alt="kfc"/>
                        <p className="privilege-desc">Get 25% off</p>
                    </div>

                    <div className="privilege-card">
                        <img src="/images/logokopken.png" alt="kfc"/>
                        <p className="privilege-desc">Get 25% off</p>
                    </div>
                </div>
            </section>

            <nav className="bottom-nav">
                <Link to="/activity" className="nav-btn">
                    <span className="nav-icon"><img src="/images/list.png" alt="Activity" /></span>
                    <span className="nav-label">Activity</span>
                </Link>
                <Link to="/" className="nav-btn active">
                     <span className="nav-icon"><img src="/images/home.png" alt="Home" /></span>
                    <span className="nav-label">Home</span>
                </Link>
                <Link to="/voucher" className="nav-btn">
                    <span className="nav-icon"><img src="/images/redeem.png" alt="Redeem" /></span>
                    <span className="nav-label">Redeem</span>
                </Link>
            </nav>
        </div>
    );
};

export default UserHome;