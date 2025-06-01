import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../../css/components/Widget.css";

const Widget = (props) => {
    const [isUsed, setIsUsed] = useState(false);
    const navigate = useNavigate();

    const handleUseClick = () => {
        setIsUsed(true);
    };

    const handleCancle = () => {
        navigate("/Voucher");
    }

    return(
        <div className="w-container">
            <div className="card-wrapper">
                <div className="w-card">
                    <div className="cancle-btn">
                        <button onClick={handleCancle}><img src="/images/close.png" alt="close-button" /></button>
                    </div>
                    <div className="w-header">
                        <img src={props.logo} className="brand-logo"/>
                    </div>

                    <div className="w-body">
                        <p className="v-desc">{props.description}</p>
                        <ul className="dot-list">
                            <li className="desc-list1">{props.list1}</li>
                            <li className="desc-list2">{props.list2}</li>
                            <li className="desc-list3">{props.list3}</li>
                        </ul>
                        <hr className="dashed-line"/>
                    </div>

                    <div className="w-footer">
                        <img src="/images/barcode.png" alt="barcode" />
                        <p className="valid-date">Valid until {props.validdate}</p>
                    </div>

                    <div className="circle1"></div>
                    <div className="circle2"></div>
                </div>
            </div>
        </div>
    );
};

export default Widget;