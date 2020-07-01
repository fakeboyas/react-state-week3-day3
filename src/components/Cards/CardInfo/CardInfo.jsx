import React from "react";
import "./CardInfo.css";

function CardInfo(props) {
    return (
        <div className="container">
            <div className="card-info">
                <div className="card-header">
                    <img
                        src={props.avatar}
                        className="img-thumblnail"
                        alt="..."
                    />
                </div>
                <div className="card-block px-2">
                    <br />
                    <h4 className="card-title">{props.nama}</h4>
                    <span className="card-text">{props.learn}</span>
                    <br />
                    <span className="card-text">{props.learn2}</span>
                </div>
            </div>
        </div>
    );
}

export default CardInfo;
