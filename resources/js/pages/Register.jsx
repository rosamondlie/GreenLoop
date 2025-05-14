import React, { useState } from "react";
import "../../css/Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        address: ""
    });

    const [errors, setErrors] = useState({})

    async function handleRegister(e) {
        e.preventDefault();
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        const data = await res.json();
        
        if(data.errors){
            setErrors(data.errors)
        }else{
            // localStorage.setItem('token', data.token);
            navigate("/login");
            console.log(data);
        }
            
        
    }

    return(
        <div className="container-reg">
            <div className="header-welcome">
                <img src="images/register.png" alt="RegisterImage" className="register-image"/>
            </div>
            <div className="square-reg">
                <div className="sqr1-reg">
                    <h2>Create New Account</h2>
                </div>
                <div className="sqr2-reg">
                        <form onSubmit={handleRegister} className="form-container-reg">
                            <div className="username-input">
                                <input type="username" id="username" placeholder="Username" value={formData.username} onChange={(e) => setFormData({...formData, username:e.target.value})} required />
                                {errors.username && <p className="error">{errors.username[0]}</p>}
                            </div>

                            <div className="email-input">
                                <input type="email" id="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})} required />
                            </div>

                            <div className="password-input">
                                <input type="password" id="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})} required />
                            </div>

                            <div className="confirmpass-input">
                                <input type="password" id="confirm-password" placeholder="Confirm Password" value={formData.password_confirmation} onChange={(e) => setFormData({...formData, password_confirmation:e.target.value})} required />
                            </div>

                            <div className="address">
                                <input type="address" id="address" placeholder="Address" value={formData.address} onChange={(e) => setFormData({...formData, address:e.target.value})} required />
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
    );
};

export default Register;