import React, {useState} from "react";
import "../../css/Voucher.css";
import { voucherData } from "../components/voucherDetail";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Voucher = () => {

    const [openPopup, setOpenPopup] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const navigate = useNavigate();

    const handleRedeem = () => {
        setOpenPopup(false);
        navigate(`/voucher/${selectedBrand}`);
    };

    const handleView = (brand) => {
        setSelectedBrand(brand);
        setOpenPopup(true);
    };

    const data = selectedBrand ? voucherData[selectedBrand] : {};

    return(
        <div className="v-container">
        <div className="back-button">
            <Link to="/"><img src="images/arrow.png" alt="back" /></Link>
        </div>
            <div className="bg-card"></div>
            <div className="p-card">
                <div className="p-text">
                    <p className="p-title">Available Point</p>
                    <h1 className="p-value">xxx</h1>
                    <p className="p-expired">xx/xx/xxxx</p>
                </div>
                <div className="card-img">
                    <img src="images/food.png" alt="voucher-card-image" className="cd-image"/>
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
                        <img src="images/sunlight.png" alt="sunlight" className="image-sunlight"/>
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
                        <img src="images/indomie.png" alt="indomie" className="image-indomie"/>
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
                        <img src="images/logoKFC.png" alt="logoKFC" className="image-logoKFC"/>
                        <p className="points">135 Points</p>
                        <p className="desc"> Get 25% off KFC now!</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("kfc")}>View</button>
                        </div>
                    </div>

                    <div className="R-card">
                        <img src="images/logoVap.png" alt="logoVap" className="image-logoVap"/>
                        <p className="points">175 Points</p>
                        <p className="desc">Get 50% off Vapiano now!</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("vapiano")}>View</button>
                        </div>
                    </div>

                    <div className="R-card">
                        <img src="images/logoMCD.png" alt="logoMCD" className="image-logoMCD"/>
                        <p className="points">120 Points</p>
                        <p className="desc">Get 35% off McDonalds now!</p>
                        <div className="redeem-button">
                            <button onClick={() => handleView("mcd")}>View</button>
                        </div>
                    </div>

                    <div className="R-card">
                        <img src="images/logokopken.png" alt="logoKopken" className="image-logoKopken"/>
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