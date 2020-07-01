import React, { useState } from "react";
import CardCourse from "../CardCourse/CardCourse";
import "./Courses.css";

function Profile() {
    const [courseContent] = useState([
        {
            title: "HTML Foundation",
            video: "https://www.youtube.com/embed/ca2Ni3HW2h0",
            description: "Learn HTML Fundamental for building website",
        },
        {
            title: "CSS Fundamental",
            video: "https://www.youtube.com/embed/ycp8XQp9xKs",
            description: "Learn CSS Fundamental For Design Website",
        },
    ]);

    let cards = courseContent.map((card, index) => (
        <CardCourse
            key={index}
            title={card.title}
            video={card.video}
            description={card.description}
        />
    ));

    return (
        <>
            <h2>My Course</h2>
            <div className="course">{cards}</div>
        </>
    );
}

export default Profile;
