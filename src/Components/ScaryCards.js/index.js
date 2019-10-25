import React from "react";
import "./style.css";

export default function ScaryCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt="images" src={props.src} />
            </div>
        </div>
    )
}