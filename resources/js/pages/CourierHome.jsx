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
                    <img src="/images/logo.png" alt="greenloop" />
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
                    <Link to="/activity">
                        <button className="icon-button"><img src="/images/notif.png" alt="Notifications" onClick={() => navigate('/activity')} /></button>
                    </Link>
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
                        
                        View Pickup Schedule
                    </div>
                </Link>
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

                    {/* <div className="navbar"></div> */}
                </div>
            </section>

            {/* Points Card, User's Pickup CTA, Privilege, and Voucher sections are OMITTED here */}

            <div style={{ flexGrow: 1 }}></div> {/* Pushes nav to bottom */}

            <nav className="bottom-nav">
                <Link to="/activity" className="nav-btn active"> {/* Activity might be the default active for courier */}
                    <span className="nav-icon"><img src="/images/list.png" alt="Activity" /></span>
                    <span className="nav-label">Activity</span>
                </Link>
                <Link to="/home" className="nav-btn">
                     <span className="nav-icon"><img src="/images/home.png" alt="Home" /></span>
                    <span className="nav-label">Home</span>
                </Link>
                {/* Example: Courier might have a profile link instead of redeem */}
                {/* <Link to="/profile" className="nav-btn"> Placeholder for a potential Profile page */}
                     {/* <span className="nav-icon"><img src="/images/profile_icon_nav.png" alt="Profile" /></span> Needs new icon */}
                    {/* <span className="nav-label">Profile</span>
                </Link> */}
            </nav>
        </div>
    );
};

export default CourierHome;