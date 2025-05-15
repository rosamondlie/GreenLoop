import React from "react";
import ReactDOM from "react-dom/client";
import Home from "@/pages/Home";  // Cleaner absolute path
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Activity from "./pages/Activity";
import Pickup from "@/pages/Pickup"; // Adjust path if necessary
import Login from "./pages/Login";
import Voucher from "./pages/Voucher";  

// Remove this duplicate declaration
// const Home = () => <h1>Home Page</h1>;

// Remove this duplicate declaration
// 
const About = () => <h1>About Page</h1>;

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/activity">Activity</Link> | 
                <Link to="/login">Login</Link> | 
                <Link to="/register">Register</Link> | 
                <Link to="/pickup">Pickup</Link> |
                <Link to="/voucher"> Voucher</Link>
            </nav>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/pickup" element={<Pickup />} />
                <Route path="/voucher" element={<Voucher />} />
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
