import React from "react";
import ReactDOM from "react-dom/client";
import Home from "@/pages/Home";  // Cleaner absolute path
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Remove this duplicate declaration
// const Home = () => <h1>Home Page</h1>;

const About = () => <h1>About Page</h1>;

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(() => {
        console.log("Service Worker Registered");
    }).catch(error => {
        console.error("Service Worker Registration Failed:", error);
    });
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
