import React, {useState, useEffect} from "react";
import "../../css/Voucher.css";
import { voucherData } from "../components/VoucherDetail.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

const Voucher = () => {

    const [openPopup, setOpenPopup] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [userPoints, setUserPoints] = useState(0); //masalah di useState(0)
    const navigate = useNavigate();

    useEffect(() => {
    const fetchUserPoints = async () => {
        try {
            const token = localStorage.getItem('token'); 
                if (!token) {
                    console.error("User not authenticated. Token not found.");
                    return;
                }

            const response = await axios.get("/api/user/points", {
                headers:{
                     "Accept": "application/json",
                     "Authorization": `Bearer ${token}`
                },
                // withCredentials: true,
            });

            console.log("Fetched points: ", response.data);
            if (response.data && typeof response.data.points !== 'undefined') {
                setUserPoints(response.data.points);
            } else {
                console.error("Points field is missing in the API response or response.data is undefined", response.data);
            }

        } catch (err) {
            console.error("Failed to fetch user points:", err);
            if (err.response) {
                console.error("Error response data:", err.response.data);
                console.error("Error response status:", err.response.status);
            } 
        }
    };
        fetchUserPoints();
}, []);


    const handleRedeem = async () => {
        const required = voucherData[selectedBrand]?.pointsRequired || 0;

        if(userPoints >= required){
            // setOpenPopup(false);
            // navigate(`/voucher/${selectedBrand}`);
            try{
                const token = localStorage.getItem('token');
                if (!token) {
                    alert("Authentication error. Please login again.");
                    return;
                }

                // Panggil API untuk redeem voucher
                const response = await axios.post('/api/voucher/redeem', {
                    voucher_key: selectedBrand,
                    pointsRequired: required // use the correct variable
                }, {
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (response.data.success) {
                    setUserPoints(userPoints - required); // also fix here
                    setOpenPopup(false);
                    navigate(`/voucher/${selectedBrand}`);
                }

            } catch (error) {
                console.error("Error redeeming voucher:", error);
                alert("An error occurred while redeeming the voucher.");
            }
        } else {
            alert("Points are not enough");
        }
    };

     const handleView = (brand) => {
        setSelectedBrand(brand);
        setOpenPopup(true);
    };

    const data = selectedBrand ? voucherData[selectedBrand] : {};

    return(
        <div className="v-container">
        <div className="back-button">
            <Link to="/"><img src="images/left-arrow.png" alt="back" /></Link>
        </div>
            <div className="bg-card"></div>
            <div className="p-card">
                <div className="p-text">
                    <p className="p-title">Available Point</p>
                    <h1 className="p-value">{userPoints}</h1>
                </div>
                <div className="card-img">
                    <img src="images/voucher-card-image.jpg" alt="voucher-card-image" className="cd-image"/>
                </div>
            </div>
            <div className="v-square">
                <p className="LO-cat">Limited Offer</p>
                <div className="limited-offer">
                    <div className="LO-card">
                        <img src="images/gula.png" alt="gulaku" className="image-gula"/>
                        <p className="points">50 Points</p>
                        <p className="desc">Gulaku Gula Pasir Premium 1kg</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("gulaku")}>View</button>
                        </div>
                    </div>

                    <div className="LO-card">
                        <img src="images/beras.png" alt="beras" className="image-beras"/>
                        <p className="points">75 Points</p>
                        <p className="desc">Sania Beras Premium 2.5kg</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("sania")}>View</button>
                        </div>
                    </div>

                    <div className="LO-card">
                        <img src="images/sunlight.jpg" alt="sunlight" className="image-sunlight"/>
                        <p className="points">40 Points</p>
                        <p className="desc">Sunlight Jeruk Nipis 800 ml</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("sunlight")}>View</button>
                        </div>
                    </div>

                    <div className="LO-card">
                        <img src="images/bango.png" alt="bango" className="image-bango"/>
                        <p className="points">30 Points</p>
                        <p className="desc">Bango Kecap Manis 520 ml</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("bango")}>View</button>
                        </div>
                    </div>
                </div>

                <p className="GR-cat">Groceries</p>
                <div className="groceries">
                    <div className="GR-card">
                        <img src="images/indomie.jpg" alt="indomie" className="image-indomie"/>
                        <p className="points">15 Points</p>
                        <p className="desc">Indomie Goreng 85gr</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("indomie")}>View</button>
                        </div>
                    </div>

                    <div className="GR-card">
                        <img src="images/MilkLife.png" alt="susu" className="image-susu"/>
                        <p className="points">55 Points</p>
                        <p className="desc">Milk Life Susu UHT 1L</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("milklife")}>View</button>
                        </div>
                    </div>

                    <div className="GR-card">
                        <img src="images/TropicanaMinyak.png" alt="minyak" className="image-minyak"/>
                        <p className="points">120 Points</p>
                        <p className="desc">Tropicana Slim Minyak 946 ml</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("tropicanaslim")}>View</button>
                        </div>
                    </div>

                    <div className="GR-card">
                        <img src="images/bango.png" alt="bango" className="image-bango"/>
                        <p className="points">30 Points</p>
                        <p className="desc">Bango Kecap Manis 520 ml</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("bango")}>View</button>
                        </div>
                    </div>
                </div>

                <p className="R-cat">Restaurant</p>
                <div className="restaurant">
                    <div className="R-card">
                        <img src="images/kfc.jpg" alt="logoKFC" className="image-logoKFC"/>
                        <p className="points">135 Points</p>
                        <p className="desc"> Get 25% off KFC now!</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("kfc")}>View</button>
                        </div>
                    </div>

                    <div className="R-card">
                        <img src="images/vap.jpg" alt="logoVap" className="image-logoVap"/>
                        <p className="points">175 Points</p>
                        <p className="desc">Get 50% off Vapiano now!</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("vapiano")}>View</button>
                        </div>
                    </div>

                    <div className="R-card">
                        <img src="images/mcd.jpg" alt="logoMCD" className="image-logoMCD"/>
                        <p className="points">120 Points</p>
                        <p className="desc">Get 35% off McDonalds now!</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("mcd")}>View</button>
                        </div>
                    </div>

                    <div className="R-card">
                        <img src="images/kopken.jpg" alt="logoKopken" className="image-logoKopken"/>
                        <p className="points">80 Points</p>
                        <p className="desc">Get 1 free Kopi Kenangan Coffee</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("kopken")}>View</button>
                        </div>
                    </div>
                </div>
            </div>
            
            {
                openPopup && selectedBrand && (
                    <div className="popup">
                        <div onClick={() => setOpenPopup(false)}className="overlay"></div>
                        <div className="popup-wrapper">
                            <div className={`popup-card ${(selectedBrand === 'mcd' || selectedBrand === 'kopken' || selectedBrand === 'vapiano') ? 'popup-card-edit' : ''}`}>
                                <button onClick={() => setOpenPopup(false)} className="close-btn"><img src="images/close.png" alt="close" /></button>
                                <ul className="dot-list">
                                    <li className="p-list1">{data.list1}</li>
                                    <li className="p-list2">{data.list2}</li>
                                    <li className="p-list3">{data.list3}</li>
                                    <li className="p-list4">Points Required: {data.pointsRequired}</li>
                                </ul>
                                <button className="redeem" onClick={handleRedeem}>Redeem</button>
                            </div>
                        </div>
                    </div>
                )
               
            }

        </div>
    );
};

export default Voucher;