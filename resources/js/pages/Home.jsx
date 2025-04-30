import React from "react";
import "../../css/home.css"; // Corrected path

const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <div className="logo">
                    <img src="images/logo.png" alt="GreenLoop" />
                    <h3>GreenLoop</h3>
                    <p>Small choices shape a cleaner future.</p>
                </div>
            </header>

            <div className="user-info">
                    <p>Hi! Rayya Al Ghazali</p>
                    <button className="icon-button"><img src="images/notif.png" alt="" /></button>
                    <button className="icon-button"><img src="images/profile.png" alt="" /></button>
                </div>

            <section className="pickup-status">
                <p>No Scheduled Pick Up Today!</p>
            </section>

            <section className="points-card">
                <h3>Poin <i>balance</i></h3>
                <p><strong>103</strong> poin(s)</p>
                <p className="expiry">expired date 13/07/2026</p>
                <div className="points-actions">
                    <button className="history-btn"> History</button>
                    <button className="redeem-btn"> Redeem</button>
                </div>
            </section>

            <section className="pickup-cta">
                <p>Let us take care of your waste — schedule a pickup today!</p>
                <button className="book-now">🚛 Book now</button>
            </section>

            <section className="news-update">
                <h3>News Update</h3>
                <p>What's Happening in Waste Management Today?</p>
                <div className="news-container">
                    <img src="/news1.jpg" alt="News" className="news-img"/>
                    <img src="/news2.jpg" alt="News" className="news-img"/>
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
