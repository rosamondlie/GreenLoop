import React, { useState } from "react";
import "../../css/Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../Context/AppContext.jsx';

const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = useAuth(); // <-- USE CONTEXT
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    async function handleLogin(e) {
        e.preventDefault();
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.errors) {
            setErrors(data.errors);
        } else if (data.user && data.token) { // Check for user and token
            loginUser(data.user, data.token); // <-- SET USER IN CONTEXT
            navigate("/home");
            console.log(data);
        } else {
            // Handle other unexpected responses
            setErrors({ form: data.message || "Login failed. Please try again."});
        }
    }
    // ... (rest of your Login component's JSX)
    return (
        <div className="container">
            <div className="header2">
                <img src="/images/Login_pict.png" alt="LoginImage" className="login-image"/>
            </div>
            <div className="square">
                <div className="sqr1">
                    <h2>Welcome Back!</h2>
                </div>
                <div className="sqr2">
                    <div className="form-group">
                        <form onSubmit={handleLogin} className="form-container">
                            {errors.form && <p className="error" style={{textAlign: 'center', color: 'red'}}>{errors.form}</p>}
                            <div className="email-input">
                                <input type="email" id="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})} required />
                                {errors.email && <p className="error" style={{textAlign: 'center', color: 'red'}}>{errors.email[0]}</p>}
                            </div>
                            <div className="password-input">
                                <input type="password" id="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})} required />
                                {errors.password && <p className="error" style={{textAlign: 'center', color: 'red'}}>{errors.password[0]}</p>}
                            </div>
                            <div className="login-button">
                                <button type="submit">Sign In</button>
                            </div>
                            <div className="direct-link">
                                {/* <div className="forgot-password">
                                    <p>Forgot password?<span className="link"> Click Here!</span></p>
                                </div> */}
                                <div className="Sign-up">
                                    <p>Don't have an account?<span className="sign-up" onClick={() => navigate('/register')} style={{cursor: 'pointer'}}> Sign Up</span></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;