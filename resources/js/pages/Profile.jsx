import React, { useEffect, useState, useRef } from "react";
import {Link, useNavigate} from 'react-router-dom';
import "../../css/profile.css";

export default function Profile() {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    
    async function getUser() {
        const token = localStorage.getItem('token');
        const res = await fetch('/api/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await res.json();
        if (res.ok) {
            setUser(data);
        }
    }
    
    useEffect(() => {
        getUser();
    }, []);


    async function handleLogout (e) {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const res = await fetch("/api/logout", {
            method: 'POST',
            headers:{
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json()
        console.log(data);

        if(res.ok){
            setUser(null)
            localStorage.removeItem('token');
            navigate('/login');
        }
    };


    if (!user) return <div>Loading...</div>;

    return(
        <div className="p-container">
            <div className='p-atas'>
                <div className="back-div">
                    <img src="images/profile/back-icon.png" alt="back-icon" />
                    <a href="/home">Back</a>
                </div>
                <h2>PROFILE</h2>

                <div className="prof-pic">
                    <img className='profile-pic' src={
                        user?.profile_picture instanceof File
                            ? URL.createObjectURL(user.profile_picture)
                            : user?.profile_picture
                            ? `/storage/${user.profile_picture}`
                            : "images/profile/pp-dummy.png"
                    } alt="" />
                </div>
                <div className='edit-button-div'>
                    <img src="images/profile/edit-icon.png" alt="back-icon" />
                    <a onClick={() => navigate('/edit-profile')}>Edit</a>
                </div>
            </div>
            
            <div className="profile-data">
                <div className="profile-data-field">
                    <img src="images/profile/uname-icon.png" alt="" />
                    <p className="profile-text">{user.username}</p>
                </div>
                <div className="profile-data-field">
                    <img src="images/profile/bdate-icon.png" alt="" />
                    <p className="profile-text">{user.birth_date}</p>
                </div>
                <div className="profile-data-field">
                    <img src="images/profile/mail-icon.png" alt="" />
                    <p className="profile-text">{user.email}</p>
                </div>
                <div className="profile-data-field">
                    <img src="images/profile/loc-icon.png" alt="" />
                    <p className="profile-text">{user.address}</p>
                </div>
            </div>
            <div className='logout-btn'>
                <button onClick={handleLogout}>LOGOUT</button>
            </div>
        </div>
    );
};