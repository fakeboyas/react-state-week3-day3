import React, { Component } from "react";
import CardInfo from "../../components/Cards/CardInfo/CardInfo";

import Course from "../../components/Cards/Courses/Course";

export default class LandingPages extends Component {
    state = {
        nama: "Muhamad Sidiq Ilyas",
        status: "BOOTCAMP STUDENT",
        avatar: "https://i.ibb.co/zZxhB2G/jumbotron.jpg",

        learn: "Coding membuat saya belajar.",
        learn2: "Kalau ada masalah harus diselesaikan.",
    };

    render() {
        return (
            <div>
                <CardInfo
                    nama={this.state.nama}
                    status={this.state.status}
                    avatar={this.state.avatar}
                    learn={this.state.learn}
                    learn2={this.state.learn2}
                />
                <Course />
            </div>
        );
    }
}
