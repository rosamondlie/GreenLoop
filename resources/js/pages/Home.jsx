// resources/js/pages/Home.jsx
import React from 'react';
import { useAuth } from '../../Context/AppContext.jsx'; // Ensure this path is correct
import UserHome from './UserHome.jsx';     // Importing the UserHome component
import CourierHome from './CourierHome.jsx'; // Importing the new CourierHome component

const Home = () => {
    const { currentUser, isLoadingUser } = useAuth();

    if (isLoadingUser) {
        return <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '18px' }}>Loading user information...</div>;
    }

    if (currentUser?.role === 'courier') {
        return <CourierHome user={currentUser} />; // Courier now sees their dedicated homepage
    } else { 
        // Regular users or guests (UserHome can handle guest view if currentUser is null)
        return <UserHome user={currentUser} />;
    }
};

export default Home;