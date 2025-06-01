import ReactDOM from "react-dom/client";
import Home from "@/pages/Home"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Activity from "./pages/Activity";
import Pickup from "@/pages/Pickup"; 
import Login from "@/pages/Login";
import Voucher from "./pages/Voucher";
import Courier from "./pages/courier/C_Home";
import Widget from "./components/Widget";
import VoucherDetail from "./components/voucherDetail";

function About() {
    return <h1>About Page</h1>;
}

const App = () => { 
    return (
        <Router>

            <nav>
                <Link to="/">Home</Link> |
                <Link to="/activity">Activity</Link> | 
                <Link to="/login">Login</Link> | 
                <Link to="/register">Register</Link> | 
                <Link to="/pickup">Pickup</Link> |
                <Link to="/voucher">voucher</Link> |
                <Link to="/courier">Courier</Link>|
           
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/pickup" element={<Pickup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/voucher" element={<Voucher />}/>

                <Route path="/courier" element={<Courier />}/>
            
                <Route path="/voucher/:brand" element={<VoucherDetail />} />
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
