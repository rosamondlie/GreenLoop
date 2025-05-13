import React from "react";
import "../../css/home.css"; 

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
                    <button className="icon-button"><img src="images/notif.png" alt="Notifications" /></button>
                    <button className="icon-button"><img src="images/profile.png" alt="Profile" /></button> 
                </div>

            <section className="pickup-status">
                <div className="status-card">
                    <p>No Scheduled Pick Up Today! <img src="images/trash.png" alt="" /></p>
                </div>
            </section>

            <section className="points-card">
                <h3 className="points-title">Poin balance</h3>
                <div className="points-display">
                    <span className="points-number">103</span>
                    <span className="points-unit">poin(s)</span>
                </div>
                <p className="expiry-date">expired date 13/07/2026</p>
                <div className="points-actions">
                    <button className="history-btn">History</button>
                    <span className="divider">|</span>
                    <button className="redeem-btn">Redeem</button>
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
                <div className="news-grid">
                    <div className="news-item">
                        <div className="news-placeholder">☐ News</div>
                    </div>
                    <div className="news-item">
                        <div className="news-placeholder">☐ News</div>
                    </div>
                </div>
            </section>

            <section className="priviledge-container">
                <h2 className="tulisan-priv">Privilege</h2>
                <div className="privilege-header">
                    <p>Redeem now. Enjoy the treats-!</p>
                    <a href="#">See all</a>
                </div>
            </section>

            <section className="voucher-container">
                <div className="voucher-list">
                    <div className="kopi-kenangan">
                        <img src="/images/kopi-kenangan.jpg" alt="" />
                        <p>Kopi Kenangan</p>
                        <p2>Free Coffee</p2>
                    </div>

                    <div className="KFC">
                        <img src="/images/KFC.png" alt="" />
                        <p>KFC</p>
                        <p2>25% OFF</p2>
                    </div>

                    <div className="McDonalds">
                        <img src="/images/McDonalds.png" alt="" />
                        <p>McDonalds</p>
                        <p2>25% OFF</p2>
                    </div>

                    <div className="Vapiano">
                        <img src="/images/Vapiano.jpg" alt="" />
                        <p>Vapiano</p>
                        <p2>50% OFF</p2>
                    </div>
                </div>
            </section>

            <section className="voucher-container2">
                <div className="voucher-list2">
                    <div className="MilkLife">
                        <img src="/images/MilkLife.png" alt="" />
                        <p>Milk Life Susu UHT 1L</p>
                        <div className="pts">20 points</div>
                    </div>

                    <div className="tropicana-minyak">
                        <img src="/images/TropicanaMinyak.png" alt="" />
                        <p>Tropicana Slim Minyak Goreng 946 ml</p>
                        <div className="pts">100 points</div>
                    </div>

                    <div className="bango">
                        <img src="/images/bango.png" alt="" />
                        <p>Bango Kecap Manis 520 ml</p>
                        <div className="pts">50 points</div>
                    </div>

                    <div className="gula-pasir">
                        <img src="/images/gula.png" alt="" />
                        <p>Gulaku Gula Pasir Premium 1kg</p>
                        <div className="pts">80 points</div>
                    </div>

                    <div className="sania-beras">
                        <img src="/images/beras.png" alt="" />
                        <p>Sania Beras Premium 2.5kg</p> 
                        <div className="pts">120 points</div>
                    </div>
                </div>
            </section>

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
};

export default Home;