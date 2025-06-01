import React from "react";
import "../../../css/courier/C_Home.css";

const C_Home = () => {
    return(
        <div className="c-container">
            <div className="c-header">
                <div className="c-logo">
                    <img src="images/logo.png" alt="logo" />
                    <div className="app-name">
                        <h2>GreenLoop</h2>
                        <p className="brand-tagline">Small choices shape a cleaner future</p>
                    </div>
                </div>  
            </div>

            <div className="c-body">
                <div className="courier-info">
                    <p className="greeting-text">Hi! Joko Hartono</p>
                    <div className="icon">
                        <button className="icon-bttn1"><img src="images/notif.png" alt="notification" /></button>
                        <button className="icon-bttn2"><img src="images/user.png" alt="account" /></button>
                    </div>
                </div>

                <div className="pickup-sts">
                    <div className="pickup-head">
                        <p className="status">Pickup Scheduel</p>
                        <img src="images/motorbike.png" alt="motorbike_icon" />
                    </div>
                    <div className="pickup-board">
                        <div className="pickup-image">
                            <img src="images/package.png" alt="package-img" />
                        </div>
                        <div className="pickup-desc">
                            <p className="pickup-address">User Address</p>
                            <p className="pickup-id">xxxx</p>
                        </div>
                    </div>
                </div>

                <p className="news-title">News</p>

                <div className="news">
                    <div className="news-card">
                        <img src="/images/pandawara-group.jpg" alt="news-img" />
                        <div className="news-body">
                            <p className="news-date">29th January 2025</p>
                            <h2 className="news-headline">Pandawara Group Cleans Up Trash in the Citarum River</h2>
                            <div className="view-link">
                            <a href="https://www.liputan6.com/lifestyle/read/5899442/pandawara-group-bersihkan-sampah-di-sungai-citarum-selama-7-hari-habiskan-dana-rp106-juta" className="link-button">Read more</a>
                            </div>
                        </div>
                    </div>

                    <div className="news-card">
                        <img src="/images/waste-management.jpg" alt="news-img" />
                        <div className="news-body">
                            <p className="news-date">18th May 2025</p>
                            <h2 className="news-headline">New plan for bins and recycling to be considered</h2>
                            <div className="view-link">
                                <a href="https://www.bbc.com/news/articles/clyg1lxmv2eo" className="link-button">Read more</a>
                            </div>
                        </div>
                    </div>

                    <div className="news-card">
                        <img src="/images/plastic.png" alt="news-img" />
                        <div className="news-body">
                            <p className="news-date">3rd July 2025</p>
                            <h2 className="news-headline">10 Ways to Reduce Plastic Pollution</h2>
                            <div className="view-link">
                            <a href="https://www.nrdc.org/stories/10-ways-reduce-plastic-pollution" className="link-button">Read more</a>
                            </div>
                        </div>
                    </div>

                    <nav className="bottom-nav">
                        <button className="nav-btn">
                            <span className="nav-icon"><img src="images/list.png" alt="" /></span>
                            <span className="nav-label">Activity</span>
                        </button>
                        <button className="nav-btn">
                            <span className="nav-icon"><img src="images/home.png" alt="" /></span>
                            <span className="nav-label">Home</span>
                        </button>
                    </nav>

                </div>
            </div>
        </div>
    );
};

export default C_Home;