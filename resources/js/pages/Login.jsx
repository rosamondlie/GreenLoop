import React from "react";
import "../../css/Login.css";

const Login = () => {


    return(
        <div className="container">
            <div className="header">
                <img src="images/Login_pict.png" alt="LoginImage" className="login-image"/>
            </div>
            <div className="square">
                <div className="sqr1">
                    <h2>Welcome Back!</h2>
                </div>
                <div className="sqr2">
                    <div className="form-group">
                        <form className="form-container">
                            <div className="email-input">
                                <input type="email" id="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="password-input">
                                <input type="password" id="password" name="password" placeholder="Password" required />
                            </div>
                            <div className="login-button">
                                <button type="submit">Sign In</button>
                            </div>
                            <div className="direct-link">
                                <div className="forgot-password">
                                    <p>Forgot password?<span className="link"> Click Here!</span></p>
                                </div>
                                <div className="Sign-up">
                                    <p>Don't have an account?<span className="sign-up"> Sign Up</span></p>
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