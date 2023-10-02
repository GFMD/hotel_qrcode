import React from "react";
import Navbar from "../Part/Navbar";
import UserInfo from '../Part/UserInfo';

export default function Home(){
    var database = [
        {
            "idChambre" : 1,
            "date" : "13/01/2022"
        }, 
    
        {
            "idChambre" : 2,
            "date" : "13/01/2001"
        },
    ]

    database.push({idChambre : 1, date : "200-12-12"})

    return(
        <div>
            <Navbar />
            <UserInfo fullName="Achraf Groiez" idClient="102" idReservation="2220" chambreAndDate={database} />
        </div>
    );
}