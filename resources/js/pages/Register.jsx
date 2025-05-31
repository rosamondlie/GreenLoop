import React from "react";
import "../../css/Register.css";

const Register = () => {

    return(
        <div className="container">
            <div className="header-welcome">
                <img src="images/register.png" alt="RegisterImage" className="register-image"/>
            </div>
            <div className="square">
                <div className="sqr1">
                    <h2>Create New Account</h2>
                </div>
                <div className="sqr2">
                    <div className="form-group">
                        <form className="form-container">
                            <div className="username-input">
                                <input type="username" id="username" name="username" placeholder="Username" required />
                            </div>

                            <div className="email-input">
                                <input type="email" id="email" name="email" placeholder="Email" required />
                            </div>

                            <div className="password-input">
                                <input type="password" id="password" name="password" placeholder="Password" required />
                            </div>

                            <div className="confirmpass-input">
                                <input type="confirm-password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
                            </div>

                            <div className="address">
                                <input type="address" id="address" name="address" placeholder="Address" required />
                            </div>

                            <div className="register-button">
                                <button type="submit">Register</button>
                            </div>

                            <div className="direct-link">
                                <div className="Sign-in">
                                    <p>Already have an account?<span className="sign-in"> Sign In</span></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;