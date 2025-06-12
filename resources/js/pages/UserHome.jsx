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
                        <Link to="/activity">
                            <button className="icon-button"><img src="/images/notif.png" alt="Notifications" onClick={() => navigate('/activity')} /></button>
                        </Link>
                        
                    {user && (
                        <Link to="/profile">
                            <button className="icon-button"><img src="images/profile.png" alt="Profile" /></button>
                        </Link>
                        //  <button className="icon-button" onClick={() => navigate('/Profile')}><img src="images/profile.png" alt="Profile" /></button> 
                    )}
                </div>
            </div>

            <section className="pickup-status">
                <Link to="activity">
                <div className="status-card">
                        <button className="viewPickup-btn">View your pickup activity!</button>
                </div>
                </Link>
            </section>

            <section className="points-card">
                <h3 className="points-title">Poin balance</h3>
                <div className="points-display">
                    <span className="points-number">{user.points}</span>
                    <span className="points-unit">poin(s)</span>
                </div>
                {/* <p className="expiry-date">expired date 13/07/2026</p> */}
                <div className="points-actions">
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

                <div className="news">
                    <div className="news-card">
                        <img src="/images/pandawara.jpg" alt="news-img" />
                        <div className="news-body">
                            <p className="news-date">29th January 2025</p>
                            <h2 className="news-headline">Pandawara Group Cleans Up Trash in the Citarum River</h2>
                            <div className="view-link">
                                <a href="https://www.liputan6.com/lifestyle/read/5899442/pandawara-group-bersihkan-sampah-di-sungai-citarum-selama-7-hari-habiskan-dana-rp106-juta" className="link-button">Read more</a>
                            </div>
                        </div>
                    </div>

                    <div className="news-card">
                        <img src="/images/news2.jpg" alt="news-img" />
                        <div className="news-body">
                            <p className="news-date">18th May 2025</p>
                            <h2 className="news-headline">New plan for bins and recycling to be considered</h2>
                            <div className="view-link">
                                <a href="https://www.bbc.com/news/articles/clyg1lxmv2eo" className="link-button">Read more</a>
                            </div>
                        </div>
                    </div>

                    <div className="news-card">
                        <img src="/images/sampah.jpg" alt="news-img" />
                        <div className="news-body">
                            <p className="news-date">3rd July 2025</p>
                            <h2 className="news-headline">10 Ways to Reduce Plastic Pollution</h2>
                            <div className="view-link">
                                <a href="https://www.nrdc.org/stories/10-ways-reduce-plastic-pollution" className="link-button">Read more</a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar"></div>
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
                        <img src="/images/kfc.jpg" alt="kfc"/>
                        <p className="privilege-desc">Get 25% off</p>
                    </div>

                    <div className="privilege-card">
                        <img src="/images/mcd.jpg" alt="mcd"/>
                        <p className="privilege-desc">Get 25% off</p>
                    </div>

                    <div className="privilege-card">
                        <img src="/images/vap.jpg" alt="kfc"/>
                        <p className="privilege-desc">Get 25% off</p>
                    </div>

                    <div className="privilege-card">
                        <img src="/images/kopken.jpg" alt="kfc"/>
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