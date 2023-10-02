import React from "react";
import ErrorPage from "../Page/ErrorPage";

export default function UserInfo(param){
    var isQRRequest = true;
    var keyDict = 0;
    var url = window.location.pathname;

    try {
        var list = url.split(".");
        var dictOfDateAndRoom = [];

        //To fill the Map
        for(var str of list[4].split(",")){
            var temp = str.split("=");

            if(temp.length === 2)
                dictOfDateAndRoom.push({"idChambre":temp[0], "date":temp[1]})
            
            else {
                isQRRequest = false;
                break;
            }
        }
    } catch (error) {
        isQRRequest = false;
    }
    
    return(
        <div>
            {isQRRequest ?
                (
                    <div style={{display : "flex", justifyContent : "center"}}>
                        <div style={{textAlign : "justify", padding : "20px"}}>
                            <h1>Numéro de Réservation {list[1]}</h1>
                            <p>Id client : {list[2]}</p>
                            <p>Nom client : {list[3].replace("_", " ")} </p>
                            <label>Chambre(s) Réservée(s):</label>

                            <ul>
                                {
                                    dictOfDateAndRoom.map((value) =>
                                        <li key={keyDict++}>Chambre {value.idChambre} pour le {value.date}</li>
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