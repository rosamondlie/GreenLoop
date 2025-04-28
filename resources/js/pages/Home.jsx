import React from "react";
import { useNavigate } from 'react-router-dom';
import "../../css/home.css"; // Corrected path

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <header className="header">
                <div className="logo">
                    <img src="/logo.png" alt="GreenLoop" />
                    <p>Small choices shape a cleaner future.</p>
                </div>
                <div className="user-info">
                    <p>Hi! Rayya Al Ghazali</p>
                    <button className="icon-button">🔔</button>
                    <button className="icon-button">👤</button>
                </div>
            </header>

            <section className="pickup-status">
                <button className="pickup-button">No Scheduled Pick Up Today! 🗑️</button>
            </section>

            <section className="points-card">
                <h3>Poin <i>balance</i></h3>
                <p><strong>103</strong> poin(s)</p>
                <p className="expiry">expired date 13/07/2026</p>
                <div className="points-actions">
                    <button className="history-btn">🔄 History</button>
                    <button className="redeem-btn">🎁 Redeem</button>
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

            <nav className="bottom-nav">
                <button>🏠 Home</button>
                <button onClick={() => navigate('/activity')}>📊 Activity</button>
                <button>🎁 Redeem</button>
            </nav>
        </div>
    );
};

export default Home;
