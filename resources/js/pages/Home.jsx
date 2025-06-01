import React from "react";
import "../../css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <div className="logo">
                    <img src="images/logo.png" alt="GreenLoop" />
                    <div className="logo-text">
                        <h3>GreenLoop</h3>
                        <p className="tagline">Small choices shape a cleaner future</p>
                    </div>
                </div>
            </header>
            
                <div className="user-info">
                    <div className="user-greeting">
                        <p>Hi! Rayya Al Ghazali</p></div>
                    <button className="icon-button1"><img src="images/notif.png" alt="Notifications" /></button>
                    <button className="icon-button2"><img src="images/user.png" alt="Profile" /></button> 
                </div>

            <section className="pickup-status">
                <div className="status-card">
                    <p>No Scheduled Pick Up Today! <img src="images/trash.png" alt="trash-img" /></p>
                </div>
            </section>

            <section className="points-card">
                <img src="/images/coin.png" alt="coins" />
                <h3 className="points-title">Poin balance</h3>
                <div className="points-display">
                    <span className="points-number">103</span>
                    <span className="points-unit">poin(s)</span>
                </div>
                <p className="expiry-date">expired date 13/07/2026</p>
                <div className="points-actions">
                </div>
            </section>

            <section className="pickup-cta">
            <img src="/images/gambargojek.png" alt="" />
            <div className="cta-right">
                <p className="cta-text">Let us take care of your waste — schedule a pickup today!</p>
                <button className="book-now">Book now</button>
            </div>
            </section>


            <section className="news-update">
                <h3>News Update</h3>
                <p className="news-subtitle">What's Happening in Waste Management Today?</p>

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
                <button className="nav-btn">
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
};

export default Home;