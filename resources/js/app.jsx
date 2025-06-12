// resources/js/app.jsx
import ReactDOM from "react-dom/client";
import Home from "@/pages/Home"; // This '@/' implies an alias, likely to 'resources/js/'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Activity from "./pages/Activity";
import Pickup from "@/pages/Pickup";
import Login from "@/pages/Login";
import Register from "./pages/Register";
import Voucher from "./pages/Voucher";
import Profile from "@/pages/Profile";
import EditProfile from "@/pages/EditProfile";
import Widget from "./components/Widget";
import VoucherDetail from "./components/VoucherDetail.jsx";
import { AppProvider } from "../Context/AppContext.jsx"; // <-- **THIS IS THE CORRECTED LINE**

const App = () => {
    return (
        <AppProvider>
            <Router>
                {/* <nav>
                    <Link to="/">Home</Link> |
                    <Link to="/activity">Activity</Link> |
                    <Link to="/login">Login</Link> |
                    <Link to="/register">Register</Link> |
                    <Link to="/pickup">Pickup</Link> |
                    <Link to="/voucher">Voucher</Link> |
                    <Link to="/profile">Profile</Link> |
                    <Link to="/edit-profile">Edit Profile</Link>
                </nav> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/activity" element={<Activity />} />
                    <Route path="/pickup" element={<Pickup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/voucher" element={<Voucher />} />
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/edit-profile" element={<EditProfile />}/>
                    <Route path="/voucher/:brand" element={<VoucherDetail />}/>
                </Routes>
            </Router>
        </AppProvider>
    );
};

// ... rest of your app.jsx
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(() => {
        console.log("Service Worker Registered");
    }).catch(error => {
        console.error("Service Worker Registration Failed:", error);
    });
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);