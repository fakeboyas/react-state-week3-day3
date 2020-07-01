import React from "react";

function CardCourse(props) {
    return (
        <div>
            <div className="card">
                <div className="card-header border-0">
                    <iframe
                        width="180"
                        height="100"
                        src={props.video}
                        frameborder="0"
                        title="video"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
                <div className="card-block px-2">
                    <br />
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default CardCourse;
