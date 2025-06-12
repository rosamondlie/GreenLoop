// resources/js/pages/Pickup.jsx
import React, { useState, useEffect } from 'react';
import '../../css/pickup.css'; // Ensure this CSS file is styled appropriately
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AppContext.jsx'; // Assuming path is correct

// Helper to format date to YYYY-MM-DD
const formatDate = (date) => {
    return date.toISOString().split('T')[0];
};

// Define available time slots (start times as HH:MM:SS)
const TIME_SLOTS = ['09:00:00', '10:30:00', '12:00:00', '13:30:00', '15:30:00']; // Ends 17:00
const SLOT_DURATION_MINUTES = 90; // 1.5 hours

export default function PickupPage() {
    const navigate = useNavigate();
    const { currentUser } = useAuth(); // Get current user for checks

    const [categories, setCategories] = useState({
        paper: false,
        plastic: false,
        metal: false,
        glass: false,
    });
    const [selectedWeight, setSelectedWeight] = useState(null);
    
    // State for selected date and selected full slot time string
    const [selectedDate, setSelectedDate] = useState(formatDate(new Date())); // Default to today
    const [selectedSlot, setSelectedSlot] = useState(''); // Stores "YYYY-MM-DD HH:MM:SS"

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [userAddress, setUserAddress] = useState('Loading address...');
    const [isAddressLoading, setIsAddressLoading] = useState(true);

    useEffect(() => {
        async function fetchUserData() {
          setIsAddressLoading(true);
          const token = localStorage.getItem('token');
          if (!token) {
            setUserAddress('Could not load address - not logged in.');
            setIsAddressLoading(false);
            return;
          }
          try {
            const res = await fetch('/api/user', {
              headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/json' }
            });
            if (!res.ok) throw new Error('Failed to fetch user data');
            const userData = await res.json();
            setUserAddress(userData?.address || 'Address not found.');
          } catch (error) {
            console.error("Error fetching user data:", error);
            setUserAddress('Could not load address.');
          } finally {
            setIsAddressLoading(false);
          }
        }
        fetchUserData();
      }, []);

    const handleCategoryChange = (e) => {
        const { name, checked } = e.target;
        setCategories(prev => ({ ...prev, [name]: checked }));
    };

    const handleWeightClick = (weight) => {
        setSelectedWeight(weight);
    };

    const getSelectedCategories = () => {
        return Object.entries(categories)
            .filter(([key, val]) => val)
            .map(([key]) => key);
    };

    // Generate displayable slots for the selected date
    const getDisplaySlotsForDate = (dateStr) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize today to midnight
        const chosenDate = new Date(dateStr + 'T00:00:00'); // Ensure chosenDate is parsed as local

        if (chosenDate < today) return []; // No slots for past dates

        const now = new Date(); // Current time
        
        return TIME_SLOTS.map(slotTime => {
            const [hours, minutes, seconds] = slotTime.split(':');
            const slotDateTime = new Date(chosenDate);
            slotDateTime.setHours(parseInt(hours), parseInt(minutes), parseInt(seconds));
            
            // Disable slot if its start time is in the past for today
            const isPast = (chosenDate.toDateString() === today.toDateString() && slotDateTime < now);
            
            // Disable if slot start time is past 17:00
            const slotEndHour = parseInt(hours) + Math.floor(SLOT_DURATION_MINUTES / 60);
            const slotEndMinute = parseInt(minutes) + (SLOT_DURATION_MINUTES % 60);
            if (slotEndHour > 17 || (slotEndHour === 17 && slotEndMinute > 0)) {
                return null; // Slot extends beyond 17:00
            }

            return {
                value: `${dateStr} ${slotTime}`, // YYYY-MM-DD HH:MM:SS
                label: `${hours}:${minutes}`,
                disabled: isPast
            };
        }).filter(slot => slot !== null); // Remove null (invalid) slots
    };

    const availableDisplaySlots = getDisplaySlotsForDate(selectedDate);

    async function handleSchedule(e) {
        e.preventDefault();
        setErrors({});

        if (!currentUser || currentUser.role === 'courier') {
            setErrors({ form: 'Only registered users can schedule pickups.' });
            return;
        }

        const selectedCategoriesArray = getSelectedCategories();
        if (selectedCategoriesArray.length === 0) {
            setErrors({ categories: 'Please select at least one trash category.' });
            return;
        }
        if (!selectedWeight) {
            setErrors({ weight: 'Please select the weight.' });
            return;
        }
        if (!selectedSlot) { // Check if a slot is selected
            setErrors({ pickup_time: 'Please select a pickup time slot.' });
            return;
        }

        setLoading(true);

        try {
            const token = localStorage.getItem('token');
            // ... (token check if needed, though AppContext might handle redirects)

            const res = await fetch('/api/pickups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    category: selectedCategoriesArray.join(', '),
                    weight: selectedWeight,
                    pickup_time: selectedSlot, // Send the full datetime string of the slot start
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                if (res.status === 422 && data.message) { // Handle "Schedule full" or validation errors
                    setErrors({ form: data.message, ...data.errors });
                } else if (data.errors) {
                    setErrors(data.errors);
                } else {
                    setErrors({ form: data.message || 'Failed to schedule pickup.' });
                }
            } else {
                alert('Pickup scheduled successfully!');
                navigate('/');
            }
        } catch (err) {
            console.error("Scheduling error:", err);
            setErrors({ form: 'Server error or network issue. Please try again later.' });
        } finally {
            setLoading(false);
        }
    }

    // Generate date options (e.g., today and next 6 days)
    const dateOptions = [];
    const todayForOptions = new Date();
    for (let i = 0; i < 7; i++) {
        const date = new Date(todayForOptions);
        date.setDate(todayForOptions.getDate() + i);
        dateOptions.push({
            value: formatDate(date),
            label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) // e.g., "Mon, May 31"
        });
    }


    return (
        <div className="container pickup-page">
            <div className="pickup-header">
                <img src="/images/pickupbanner.png" alt="Header" className="pickup-bg" />
                <div className="pickup-address-box">
                    <div className="pickup-address-text">
                        <p className="pickup-location-title">Pick-up at:</p>
                        {isAddressLoading ? (
                            <p className="pickup-location-detail">Loading address...</p>
                        ) : (
                            <p className="pickup-location-detail">
                                <span className="pickup-location-icon"><img src="/images/loc.png" alt="Location icon" /></span>
                                {userAddress}
                            </p>
                        )}
                    </div>
                    {/* <div className="pickup-chevron"></div> */}
                </div>
            </div>

            {/* Display general form errors */}
            {errors.form && <p className="error-text form-error" style={{textAlign: 'center', color: 'red', margin: '10px 16px'}}>{errors.form}</p>}

            <form onSubmit={handleSchedule} style={{padding: "0 16px"}} className='form-pickup'> {/* Added padding to form */}
                <div className="pickup-section"> {/* Date Selection */}
                    <h3>Select Pickup Date</h3>
                    <select 
                        value={selectedDate} 
                        onChange={(e) => {
                            setSelectedDate(e.target.value);
                            setSelectedSlot(''); // Reset selected slot when date changes
                        }}
                        className="pickup-date-input" /* Re-use or create new style for select */
                        style={{width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px'}}
                    >
                        {dateOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>

                <div className="pickup-section"> {/* Time Slot Selection */}
                    <h3>Select Time Slot</h3>
                    {availableDisplaySlots.length > 0 ? (
                        <div className="time-slot-options" style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                            {availableDisplaySlots.map(slot => (
                                <button
                                    key={slot.value}
                                    type="button"
                                    disabled={slot.disabled}
                                    className={`pickup-weight-btn ${selectedSlot === slot.value ? 'selected' : ''} ${slot.disabled ? 'disabled' : ''}`}
                                    onClick={() => !slot.disabled && setSelectedSlot(slot.value)}
                                    style={{flexBasis: 'calc(50% - 5px)', opacity: slot.disabled ? 0.5 : 1, cursor: slot.disabled ? 'not-allowed' : 'pointer'}}
                                >
                                    {slot.label} 
                                    {SLOT_DURATION_MINUTES === 90 && ` - ${new Date(slot.value.replace(' ', 'T') + 'Z').getUTCHours() + 1}:${(new Date(slot.value.replace(' ', 'T') + 'Z').getUTCMinutes() + 30) % 60 === 0 ? '00' : '30'}`}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p>No available slots for the selected date.</p>
                    )}
                    {errors.pickup_time && <p className="error-text">{errors.pickup_time}</p>}
                </div>
            
                <div className="pickup-section"> {/* Categories */}
                    <h3>What does your trash include?</h3>
                    <div className="pickup-checkbox">
                        {['paper', 'plastic', 'metal', 'glass'].map((type) => (
                            <label key={type} htmlFor={`checkbox-${type}`}>
                                <input id={`checkbox-${type}`} type="checkbox" name={type} checked={categories[type]} onChange={handleCategoryChange} />
                                {' '} <span className="green-text">{type.charAt(0).toUpperCase() + type.slice(1)}</span><br />
                                <span className="pickup-example">ex: examples of {type} waste</span>
                            </label>
                        ))}
                    </div>
                    {errors.categories && <p className="error-text">{errors.categories}</p>}
                </div>

                <div className="pickup-section"> {/* Weight */}
                    <h3>How heavy is it?</h3>
                    <div className="pickup-weight-options">
                        {[5, 10, 15].map((weight, i) => (
                            <button key={weight} type="button" className={`pickup-weight-btn ${selectedWeight === weight ? 'selected' : ''}`} onClick={() => handleWeightClick(weight)}>
                                <span>{['Small', 'Medium', 'Large'][i]}</span><span>Max: {weight}kg</span>
                            </button>
                        ))}
                    </div>
                    {errors.weight && <p className="error-text">{errors.weight}</p>}
                </div>

                <div className="pickup-banner">
                    <img src="/images/pickup2.png" alt="Recycle Guide" />
                    <div className="pickup-banner-text">
                        <strong>Sort Smart, Recycle Right!</strong>
                        <p>Earn points by recycling the right way!<br />See our <u>trash guide</u> before scheduling a pickup.</p>
                    </div>
                </div>

                <div className="pickup-button-wrapper">
                    <button type="submit" className="pickup-schedule-btn" disabled={loading || isAddressLoading}>
                        {loading ? 'Scheduling...' : 'Schedule a pick-up →'}
                    </button>
                </div>
            </form>
        </div>
    );
}