// resources/js/pages/Activity.jsx
import React, { useState, useEffect } from 'react';
import '../../css/ActivityPage.css';
import { useAuth } from '../../Context/AppContext.jsx';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate

export default function Activity() {
    const { currentUser, isLoadingUser } = useAuth();
    const navigate = useNavigate(); // For potential redirects

    const [activeTab, setActiveTab] = useState(''); // Will be set in useEffect
    const [pickups, setPickups] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentTabs, setCurrentTabs] = useState([]);

    // Determine tabs and initial active tab based on role
    useEffect(() => {
        if (!isLoadingUser) {
            if (currentUser) {
                const isCourier = currentUser.role === 'courier';
                const tabsForRole = isCourier 
                    ? ['Upcoming', 'Ongoing', 'History'] // Courier tabs
                    : ['Scheduled', 'Ongoing', 'History']; // User tabs
                setCurrentTabs(tabsForRole);
                setActiveTab(isCourier ? 'Upcoming' : 'Scheduled'); // Default active tab
            } else {
                // Not logged in, or user data failed to load
                setCurrentTabs(['Scheduled', 'Ongoing', 'History']); // Default for safety
                setActiveTab('Scheduled');
                // setError("Please log in to view activities."); // Already handled in fetch
            }
        }
    }, [currentUser, isLoadingUser]);

    // Fetch pickups when currentUser is loaded or changes
    useEffect(() => {
        if (!currentUser || isLoadingUser) {
            if(!isLoadingUser && !currentUser) setError("Please log in to view activities.");
            setIsLoading(false); 
            setPickups([]);
            return;
        }

        async function fetchPickups() {
            setIsLoading(true);
            setError(null);
            const token = localStorage.getItem('token');
            if (!token) {
                setError("Authentication required.");
                setIsLoading(false);
                // navigate('/login'); // Optional: redirect if no token
                return;
            }

            try {
                const res = await fetch('/api/pickups', { // Backend now returns role-specific data
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                    },
                });

                if (!res.ok) {
                    const errorData = await res.text();
                    console.error("Failed to fetch pickups:", res.status, errorData);
                    setError(`Failed to fetch pickups: ${res.status}`);
                    setPickups([]);
                    return;
                }
                const responseData = await res.json();
                if (responseData && responseData.data && Array.isArray(responseData.data)) {
                    setPickups(responseData.data);
                } else {
                    console.error("Unexpected data structure from API:", responseData);
                    setError("Received unexpected data format from server.");
                    setPickups([]);
                }
            } catch (err) {
                console.error("Error fetching pickups:", err);
                setError("An error occurred while fetching data.");
                setPickups([]);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPickups();
    }, [currentUser, isLoadingUser]);


    const handlePickUpDone = async (pickupId) => {
        if (!window.confirm("Are you sure you want to mark this pickup as done?")) {
            return;
        }
        const token = localStorage.getItem('token');

        try {
            const res = await fetch(`/api/pickups/${pickupId}/complete`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },
            });
            const data = await res.json();
            if (!res.ok) {
                // setPickups(originalPickups); // Revert optimistic update
                alert(`Error: ${data.message || 'Could not complete pickup.'}`);
            } else {
                // Refresh pickups list to show the change
                setPickups(prev => prev.map(p => p.id === pickupId ? {...p, status: 'completed'} : p));
                alert(data.message || 'Pickup marked as done!');
            }
        } catch (err) {
            // setPickups(originalPickups); // Revert optimistic update
            console.error("Error completing pickup:", err);
            alert("An error occurred. Please try again.");
        }
    };

    const handlePickUpOn = async (pickupId) => {
        
        const token = localStorage.getItem('token');

        try {
            const res = await fetch(`/api/pickups/${pickupId}/start`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },
            });
            const data = await res.json();
            if (!res.ok) {
                // setPickups(originalPickups); // Revert optimistic update
                alert(`Error: ${data.message || 'Could not complete pickup.'}`);
            } else {
                // Refresh pickups list to show the change
                setPickups(prev => prev.map(p => p.id === pickupId ? {...p, status: 'ongoing'} : p));
                alert(data.message || 'Pickup marked as done!');
            }
        } catch (err) {
            // setPickups(originalPickups); // Revert optimistic update
            console.error("Error completing pickup:", err);
            alert("An error occurred. Please try again.");
        }
    };


    const renderPickupCard = (pickup) => {
        let image, text, desc, showDoneButton = false;
        const pickupTime = pickup.pickup_time ? new Date(pickup.pickup_time).toLocaleString() : 'Date N/A';
        const categoryInfo = pickup.category || 'N/A';
        const weightInfo = pickup.weight !== undefined ? `${pickup.weight}kg` : 'N/A';
        const currentPickupStatus = (pickup.status || '').toLowerCase();
        
        const now = new Date();
        const pickupDateTime = new Date(pickup.pickup_time);
        

        // Logic for Courier's "Ongoing" tab (showing 'scheduled' pickups whose time has come)
        if (currentUser?.role === 'courier' && activeTab === 'Ongoing') {
            if (currentPickupStatus === 'scheduled' && pickupDateTime <= now) {
                 // This is a pickup that is due or slightly past due for the courier
                 handlePickUpOn(pickup.id);
                image = "/images/activity-img/ongoing.png"; // Use ongoing image
                text = `Ongoing Pickup (Scheduled: ${pickupTime})`;
                desc = `Collect: ${categoryInfo} (${weightInfo})`;
                showDoneButton = true;
            } else if (currentPickupStatus === 'ongoing') { // If you implement explicit 'ongoing' status
                image = "/images/activity-img/ongoing.png";
                text = `Ongoing Pickup (Started)`;
                desc = `Collect: ${categoryInfo} (${weightInfo})`;
                showDoneButton = true;
            }
        } else { // For User view, or Courier's Upcoming/History
            switch (currentPickupStatus) {
                case 'ongoing':
                    image = "/images/activity-img/ongoing.png";
                    text = "Courier is on the way...";
                    desc = `For: ${categoryInfo} (${weightInfo})`;
                    // User does not see "Pick Up Done" button
                    break;
                case 'scheduled':
                    image = "/images/activity-img/calender.png";
                    text = "Scheduled Pick Up";
                    desc = `On ${pickupTime} for ${categoryInfo} (${weightInfo})`;
                     // If it's a courier looking at "Upcoming", they don't get "Pick Up Done" here yet
                    // unless you want them to mark it done even before it's "ongoing"
                    break;
                case 'completed':
                case 'history':
                    image = "/images/activity-img/checkmark.png";
                    text = `Completed: ${pickupTime}`;
                    desc = `Sent: ${categoryInfo} (${weightInfo})`;
                    break;
                default:
                    image = "/images/activity-img/default.png";
                    text = `Status: ${pickup.status || 'Unknown'}`;
                    desc = `Details: ${categoryInfo} (${weightInfo})`;
                    break;
            }
        }
         // If no specific logic matched for courier's ongoing, and it's not set, render based on status
        if (!text && currentPickupStatus) {
             // Fallback card rendering based on actual status if not handled by courier specific logic
             switch (currentPickupStatus) {
                case 'scheduled': text = "Scheduled Pick Up"; desc = `On ${pickupTime} for ${categoryInfo} (${weightInfo})`; image = "/images/activity-img/calender.png"; break;
                case 'ongoing': text = "Pickup in Progress"; desc = `For: ${categoryInfo} (${weightInfo})`; image = "/images/activity-img/ongoing.png"; break;
                case 'completed': case 'history': text = `Completed: ${pickupTime}`; desc = `Sent: ${categoryInfo} (${weightInfo})`; image = "/images/activity-img/checkmark.png"; break;
                default: text = `Status: ${pickup.status}`; desc = `Details: ${categoryInfo} (${weightInfo})`; image = "/images/activity-img/default.png"; break;
            }
        }


        return (
          <div className="scheduled-card" key={pickup.id}>
            <img src={image || "/images/activity-img/default.png"} alt={pickup.status || "pickup icon"} onError={(e) => { e.target.onerror = null; e.target.src='/images/activity-img/default.png'; }} />
            <div className="act-card-content">
              <div className="scheduled-text">{text}</div>
              <div className="scheduled-desc">{desc}</div>
              {showDoneButton && (
                <button 
                    onClick={() => handlePickUpDone(pickup.id)} 
                    className="btn btn-primary" // Use your general button style
                    style={{marginTop: '10px', width: '100%'}}
                >
                    Pick Up Done
                </button>
              )}
            </div>
          </div>
        );
    };
  
    const filteredPickups = Array.isArray(pickups)
    ? pickups.filter(p => {
        if (!p || typeof p.status !== 'string') return false;
        const pickupStatusLower = p.status.toLowerCase();
        const activeTabLower = activeTab.toLowerCase();
        const now = new Date();
        const pickupDateTime = new Date(p.pickup_time);

        if (currentUser?.role === 'courier') {
            if (activeTabLower === 'upcoming' || activeTabLower === 'scheduled') { // Courier's "Upcoming"
                return pickupStatusLower === 'scheduled' && pickupDateTime > now;
            }
            if (activeTabLower === 'ongoing') {
                // Courier "Ongoing": assigned 'scheduled' pickups whose time has come OR explicit 'ongoing'
                return (pickupStatusLower === 'scheduled' && pickupDateTime <= now) || pickupStatusLower === 'ongoing';
            }
            if (activeTabLower === 'history') {
                return pickupStatusLower === 'completed' || pickupStatusLower === 'history';
            }
        } else { // Regular user
            if (activeTabLower === 'history') {
                return pickupStatusLower === 'completed' || pickupStatusLower === 'history';
            }
            // Users see their items by direct status match
            return pickupStatusLower === activeTabLower;
        }
        return false; // Default case
    })
    : [];

    if (isLoadingUser || (isLoading && pickups.length === 0)) { // Show loading if user is loading OR pickups are loading and none are present
        return <div className="container" style={{padding: '20px', textAlign: 'center'}}><p>Loading...</p></div>;
    }

    if (error) {
        return <div className="container" style={{padding: '20px', textAlign: 'center'}}><p style={{color: 'red'}}>{error}</p></div>;
    }

    if (!currentUser && !isLoadingUser) {
        return (
            <div className="container">
                {/* ... (login prompt JSX) ... */}
            </div>
        );
    }

    return (
        <div className="container" id={activeTab}>
            <div className="tabs">
                {currentTabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="content">
                <div className="scheduled-content">
                  {filteredPickups.length === 0 ? (
                    <div className="scheduled-card">
                      {/* ... (empty state JSX) ... */}
                       <img src={`/images/activity-img/${activeTab.toLowerCase().replace('upcoming','scheduled')}.png`} onError={(e) => { e.target.onerror = null; e.target.src='/images/activity-img/calender.png'; }} alt={`${activeTab} activity placeholder`} />
                        <div className="act-card-content">
                            <div className="scheduled-text-no">
                            No {activeTab} Activity...
                            </div>
                        </div>
                    </div>
                  ) : (
                    filteredPickups.map(p => renderPickupCard(p))
                  )}
                </div>
            </div>
            <nav className="bottom-nav">
                            <Link to="/activity" className="nav-btn">
                                <span className="nav-icon"><img src="/images/list.png" alt="Activity" /></span>
                                <span className="nav-label">Activity</span>
                            </Link>
                            <Link to="/home" className="nav-btn active">
                                 <span className="nav-icon"><img src="/images/home.png" alt="Home" /></span>
                                <span className="nav-label">Home</span>
                            </Link>
                            {/* <Link to="/voucher" className="nav-btn">
                                <span className="nav-icon"><img src="/images/redeem.png" alt="Redeem" /></span>
                                <span className="nav-label">Redeem</span>
                            </Link> */}
                        </nav>
        </div>
    );
}