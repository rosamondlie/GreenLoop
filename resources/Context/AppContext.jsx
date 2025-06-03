import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext(null);

export const useAuth = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoadingUser, setIsLoadingUser] = useState(true); // To check if user data is being loaded

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await fetch('/api/user', {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/json',
                        },
                    });
                    if (response.ok) {
                        const userData = await response.json();
                        setCurrentUser(userData);
                    } else {
                        // Token might be invalid or expired
                        localStorage.removeItem('token');
                        setCurrentUser(null);
                    }
                } catch (error) {
                    console.error("Failed to fetch user:", error);
                    localStorage.removeItem('token');
                    setCurrentUser(null);
                }
            }
            setIsLoadingUser(false);
        };

        fetchUser();
    }, []);

    const loginUser = (userData, token) => {
        localStorage.setItem('token', token);
        setCurrentUser(userData);
    };

    const logoutUser = () => {
        // Call API to invalidate token on server if your backend supports it
        // For now, just remove from client
        localStorage.removeItem('token');
        setCurrentUser(null);
        // Optionally, navigate to login page:
        // window.location.href = '/login'; // Simple redirect
    };


    const value = {
        currentUser,
        isLoadingUser,
        loginUser, // Function to set user after login
        logoutUser, // Function to clear user on logout
        setCurrentUser // Allow direct setting if needed
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;