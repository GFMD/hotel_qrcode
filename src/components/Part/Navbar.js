import React from "react";

export default function Navbar() {
    return (
        <div style={{background : "rgb(20, 60, 100)", padding: "15px"}}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent : "center" }}>
                <img width="80px" alt="GFMD Logo" src="./img/gfmd.png" />
                <h1 style={{color : "white"}}>GFMD</h1>
            </div>
        </div>
    );
}