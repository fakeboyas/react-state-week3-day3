import React from "react";
import "./CardInfo.css";

function CardInfo(props) {
    return (
        <>
            <div className="card card-info flex-row flex-wrap d-flex justify-content-center">
                <div className="card-header border-0 ">
                    <img
                        src={props.avatar}
                        className="img-thumblnail"
                        alt="..."
                    />
                </div>
                <div className="card-block px-2">
                    <br />
                    <h4 className="card-title">{props.nama}</h4>
                    <p className="card-text">{props.learn}</p>
                    <p className="card-text">{props.learn2}</p>
                </div>
            </div>
        </>
    );
}

export default CardInfo;
