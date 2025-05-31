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
                <p className="tulisan-kat">Limited Offer</p>
                <div className="limited-offer">
                    <div className="LO-card">
                        <img src="images/gula.png" alt="gulaku" className="image-gula"/>
                        <p className="gula-desc">Gulaku Gula Pasir Premium 1kg</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>

                    <div className="LO-card">
                        <img src="images/beras.png" alt="beras" className="image-beras"/>
                        <p className="beras-desc">Sania Beras Premium 2.5kg</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>

                    <div className="LO-card">
                        <img src="images/sunlight.png" alt="sunlight" className="image-sunlight"/>
                        <p className="bango-desc">Sunlight Jeruk Nipis 800 ml</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>

                    <div className="LO-card">
                        <img src="images/bango.png" alt="bango" className="image-bango"/>
                        <p className="bango-desc">Bango Kecap Manis 520 ml</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>
                </div>

                <p className="tulisan-kat">Groceries</p>
                <div className="groceries">
                    <div className="GR-card">
                        <img src="images/indomie.png" alt="indomie" className="image-indomie"/>
                        <p className="indomie-desc">Indomie Goreng 85gr</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>

                    <div className="GR-card">
                        <img src="images/MilkLife.png" alt="susu" className="image-susu"/>
                        <p className="susu-desc">Milk Life Susu UHT 1L</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>

                    <div className="GR-card">
                        <img src="images/TropicanaMinyak.png" alt="minyak" className="image-minyak"/>
                        <p className="minyak-desc">Tropicana Slim Minyak Goreng 946 ml</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>

                    <div className="GR-card">
                        <img src="images/bango.png" alt="bango" className="image-bango"/>
                        <p className="bango-desc">Bango Kecap Manis 520 ml</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>
                </div>

                <p className="tulisan-kat">Restaurant</p>
                <div className="restaurant">
                    <div className="R-card">
                        <img src="images/logoKFC.png" alt="logoKFC" className="image-logoKFC"/>
                        <p className="logoKFC-desc">25% off KFC</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>

                    <div className="R-card">
                        <img src="images/logoVap.png" alt="logoVap" className="image-logoVap"/>
                        <p className="logoVap-desc">50% off Vapiano</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>

                    <div className="R-card">
                        <img src="images/logoMCD.png" alt="logoMCD" className="image-logoMCD"/>
                        <p className="logoMCD-desc">35% off McDonalds</p>
                        <div className="redeem-button">
                            <button  type="redeem">Redeem</button>
                        </div>
                    </div>

                    <div className="R-card">
                        <img src="images/logokopken.png" alt="logoKopken" className="image-logoKopken"/>
                        <p className="logoKopken-desc">1 free Kopi Kenangan Coffee</p>
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