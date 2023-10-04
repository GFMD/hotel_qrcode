import React from "react";
import ErrorPage from "../Page/ErrorPage";

export default function UserInfo(){
    var isQRRequest = true;
    var keyDict = 0;
    var url = window.location.pathname;
    
    try {
        var reservation = JSON.parse(decodeURIComponent(`${url.substring(14, url.length)}`));
        var idReservation = reservation.reservationNumber;
        var idClient = reservation.idClient;
        var fullName = reservation.firstName+" "+reservation.lastName;

        if(idReservation === null || idClient === null || fullName === null){
            isQRRequest = false;
        }
    } 
    
    catch (error) {
        isQRRequest = false;
    }
    
    return(
        <div>
            {isQRRequest ?
                (
                    <div style={{display : "flex", justifyContent : "center"}}>
                        <div style={{textAlign : "left", padding : "20px"}}>
                            <h1>Numéro de Réservation {idReservation}</h1>
                            <p>Id client : {idClient}</p>
                            <p>Nom client : {fullName}</p>
                            <label>Chambre(s) Réservée(s):</label>
                            <ul>
                                {
                                    reservation.listRoomDate.map((value) =>
                                        <li key={keyDict++}>Chambre {value.idRoom} pour le {value.date}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                ):
                (
                    <ErrorPage />
                )
            }
        </div>
    );
}