import React, { useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import "../../css/editProfile.css";

export default function EditProfile() {
  const [user, setUser] = useState({
    username: '',
    birth_date: '',
    email: '',
    address: '',
    profile_picture: ''
  });

  const navigate = useNavigate();
  const fileInputRef = useRef(null);
    
  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data);
      }
    };

    getUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleFileChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      profile_picture: e.target.files[0]
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const token = localStorage.getItem('token');
    formData.append('username', user.username);
    formData.append('birth_date', user.birth_date);
    formData.append('email', user.email);
    formData.append('address', user.address);
    if (user.profile_picture instanceof File) {
      formData.append('profile_picture', user.profile_picture);
    }

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      formData.append('_method', 'PUT');
      await axios.post('/api/edit-profile', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      alert('Profile updated successfully!');
      navigate('/profile');
    } catch (err) {
      if (err.response?.data?.errors) {
        console.error("Validation Errors:", err.response.data.errors);
        alert(JSON.stringify(err.response.data.errors));
      } else {
        console.error(err);
        alert('Failed to update profile.');
      }
    }
  };

  return (
    <div className="ep-container">
      <div className='p-atas'>
        <div className="back-div-ep">
          <div>
            <img src="images/profile/back-icon.png" alt="back-icon" />
            <a onClick={() => navigate('/profile')}>Back</a>
          </div>
        </div>
        <h2>Edit Profile</h2>

        <div className="prof-pic-ep">
          <img className='profile-pic' src={
            user?.profile_picture instanceof File
            ? URL.createObjectURL(user.profile_picture)
            : user?.profile_picture
            ? `/storage/${user.profile_picture}`
            : "images/profile/pp-dummy.png"
          } alt="" />

          <img className="edit-pencil-btn"
            onClick={() => fileInputRef.current.click()} src="images/profile/pencil-edit.png" alt="" />
        </div>
              <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleFileChange}
            />
      </div>

      <form onSubmit={handleSave} encType="multipart/form-data" className="edit-profile-form">
        <div className='input-editp'>
          <label className="label-editp">Full Name</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Enter full name"
          />
        </div>

        <div className='input-editp'>
          <label className="label-editp">Birth Date</label>
          <input
            type="date"
            name="birth_date"
            value={user.birth_date}
            onChange={handleChange}
          />
        </div>

        <div className='input-editp'>
          <label className="label-editp">Email Address</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className='input-editp'>
          <label className="label-editp">Home Address</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <button className='ep-submit-btn' type="submit">SAVE</button>


      </form>
    </div>
  );
}



