import React from "react";
import "../../css/Voucher.css";

const Voucher = () => {

    return(
        <div className="v-container">
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
                <div className="limited-offer">
                    <div className="card">
                        <img src="images/gula.png" alt="gulaku" className="image-gula"/>
                        <p className="gula-desc">Gulaku Gula Pasir Premium 1kg</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/beras.png" alt="beras" className="image-beras"/>
                        <p className="beras-desc">Sania Beras Premium 2.5kg</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/bango.png" alt="bango" className="image-bango"/>
                        <p className="bango-desc">Bango Kecap Manis 520 ml</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Voucher;