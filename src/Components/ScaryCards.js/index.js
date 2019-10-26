import React from "react";
import "./style.css";

export default function ScaryCard(props) {
    return (
        // < img className="card" alt="images" src={props.src} />
        <div className="card" style={{ backgroundImage: `url(${props.src})` }}>
        </div>
    )
}